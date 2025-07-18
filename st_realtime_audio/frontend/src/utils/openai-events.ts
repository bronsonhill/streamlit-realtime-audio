import type { 
  OpenAIEvent, 
  SessionUpdateEvent, 
  ResponseCreateEvent, 
  OpenAIRealtimeConfig,
  ConversationItem 
} from '../types';
import { v4 as uuidv4 } from 'uuid';

/**
 * Create session update event for OpenAI
 */
export function createSessionUpdateEvent(config: OpenAIRealtimeConfig): SessionUpdateEvent {
  return {
    type: 'session.update',
    session: {
      instructions: config.instructions,
      voice: config.voice,
      input_audio_transcription: {
        model: 'whisper-1'
      },
      turn_detection: {
        type: 'server_vad',
        threshold: config.turnDetectionThreshold,
        prefix_padding_ms: 300,
        silence_duration_ms: 200,
        create_response: true, // Re-enable response creation
        interrupt_response: true
      },
      temperature: config.temperature
    }
  };
}

/**
 * Create initial greeting response event
 */
export function createGreetingEvent(instructions?: string): ResponseCreateEvent {
  return {
    type: 'response.create',
    response: {
      modalities: ['text', 'audio'],
      instructions: instructions || 'Say a brief friendly greeting to start the conversation.'
    }
  };
}

/**
 * Create response cancellation event
 */
export function createResponseCancelEvent(): OpenAIEvent {
  return {
    type: 'response.cancel'
  };
}

/**
 * Send event through data channel
 */
export function sendEvent(dataChannel: RTCDataChannel, event: OpenAIEvent): void {
  if (!dataChannel) {
    console.warn('Data channel is null, cannot send event:', event.type);
    return;
  }
  
  if (dataChannel.readyState === 'open') {
    try {
      const message = JSON.stringify(event);
      console.log('Sending event:', event.type, event);
      dataChannel.send(message);
    } catch (error) {
      console.error('Failed to send event:', event.type, error);
    }
  } else {
    console.warn(`Data channel not open (state: ${dataChannel.readyState}), cannot send event:`, event.type);
  }
}

/**
 * Parse incoming OpenAI event
 */
export function parseEvent(data: string): OpenAIEvent | null {
  try {
    const event = JSON.parse(data) as OpenAIEvent;
    console.log('Received event:', event.type, event);
    return event;
  } catch (error) {
    console.error('Failed to parse event:', error, data);
    return null;
  }
}

// Global monotonically-increasing counter to ensure every message gets a
// unique sequence number that reflects true arrival order. Because this
// counter is module-level it persists across invocations of the event
// handler closures.
let globalSequenceCounter = 0;

/**
 * Helper to get the next sequence number.
 */
function nextSequence(): number {
  return globalSequenceCounter++;
}

/**
 * Handle conversation transcript events
 */
export function handleTranscriptEvent(
  event: OpenAIEvent,
  currentTranscript: ConversationItem[]
): ConversationItem[] {
  const transcript = [...currentTranscript];
  
  // NOTE: We now rely on a module-level counter (`nextSequence`) that strictly
  // increases for every new message, making ordering deterministic and
  // eliminating the need for ad-hoc fractional adjustments.

  switch (event.type) {
    case 'input_audio_buffer.speech_started': {
      // User started speaking – create a placeholder message so that user turn
      // always appears before the assistant response, even if the assistant
      // begins speaking before the transcription is finished.

      // Skip if we already have an in-progress user message for the turn.
      const existingIndex = transcript.findIndex(
        (item) => item.type === 'user' && item.status === 'in_progress'
      );

      if (existingIndex === -1) {
        const placeholderUser: ConversationItem = {
          id: event.item_id || uuidv4(),
          type: 'user',
          content: '',
          timestamp: Date.now(),
          sequence: nextSequence(),
          status: 'in_progress'
        };

        console.log(
          `[Transcript] Placeholder user message created: sequence=${placeholderUser.sequence}`
        );

        transcript.push(placeholderUser);
      }
      break;
    }

    case 'conversation.item.input_audio_transcription.completed': {
      // User speech transcript completed
      // Try to find an existing placeholder created during speech_started
      const existingIndex = transcript.findIndex((item) =>
        item.id === event.item_id || (item.type === 'user' && item.status === 'in_progress')
      );

      if (existingIndex >= 0) {
        transcript[existingIndex] = {
          ...transcript[existingIndex],
          content: event.transcript || transcript[existingIndex].content,
          status: 'completed'
        };

        // Ensure user message appears before assistant messages that might have
        // Sequence numbers are globally ordered, so no further adjustment needed.
        
        console.log(
          `[Transcript] Updated user placeholder: sequence=${transcript[existingIndex].sequence}, content="${event.transcript}"`
        );
      } else {
        // If no placeholder exists (edge-case) create a new completed user message
        const userMessage: ConversationItem = {
          id: event.item_id || uuidv4(),
          type: 'user',
          content: event.transcript || '',
          timestamp: Date.now(),
          sequence: nextSequence(),
          status: 'completed'
        };

        console.log(
          `[Transcript] User message (no placeholder): sequence=${userMessage.sequence}, content="${userMessage.content}"`
        );

        transcript.push(userMessage);
      }
      break;
    }

    case 'response.audio_transcript.delta': {
      // AI speech transcript streaming
      const messageId = event.response_id || uuidv4();
      const existingIndex = transcript.findIndex(item => item.id === messageId);
      
      if (existingIndex >= 0) {
        // Update existing message
        transcript[existingIndex] = {
          ...transcript[existingIndex],
          content: transcript[existingIndex].content + (event.delta || ''),
          status: 'in_progress'
        };
      } else {
        // Create new message - should always come after user input now
        const assistantMessage: ConversationItem = {
          id: messageId,
          type: 'assistant',
          content: event.delta || '',
          timestamp: Date.now(),
          sequence: nextSequence(),
          status: 'in_progress'
        };
        
        console.log(`[Transcript] Assistant message: sequence=${assistantMessage.sequence}, content="${assistantMessage.content}"`);
        
        transcript.push(assistantMessage);
      }
      break;
    }

    case 'response.audio_transcript.done': {
      // AI speech transcript completed
      const messageId = event.response_id || uuidv4();
      const existingIndex = transcript.findIndex(item => item.id === messageId);
      
      if (existingIndex >= 0) {
        transcript[existingIndex] = {
          ...transcript[existingIndex],
          content: event.transcript || transcript[existingIndex].content,
          status: 'completed'
        };
      } else {
        // Create completed message if not found
        const assistantMessage: ConversationItem = {
          id: messageId,
          type: 'assistant',
          content: event.transcript || '',
          timestamp: Date.now(),
          sequence: nextSequence(),
          status: 'completed'
        };
        
        console.log(`[Transcript] Assistant message completed: sequence=${assistantMessage.sequence}, content="${assistantMessage.content}"`);
        
        transcript.push(assistantMessage);
      }
      break;
    }

    default:
      // Return original transcript for unhandled events
      return currentTranscript;
  }

  return transcript;
}

/**
 * Determine session status from events
 */
export function getStatusFromEvent(event: OpenAIEvent): string | null {
  switch (event.type) {
    case 'session.created':
      return 'connected';
    
    case 'input_audio_buffer.speech_started':
      return 'recording';
    
    case 'input_audio_buffer.speech_stopped':
      return 'connected';
    
    case 'response.audio_transcript.delta':
    case 'response.audio.delta':
      return 'speaking';
    
    case 'response.done':
      return 'connected';
    
    case 'error':
      return 'error';
    
    default:
      return null;
  }
}

/**
 * Extract session ID from session.created event
 */
export function extractSessionId(event: OpenAIEvent): string | null {
  if (event.type === 'session.created' && event.session?.id) {
    return event.session.id;
  }
  return null;
}

/**
 * Check if event indicates an error
 */
export function isErrorEvent(event: OpenAIEvent): boolean {
  return event.type === 'error' || 
         (event.error && event.error.type) ||
         event.type.includes('error');
}

/**
 * Check if error is a cancellation error that should be ignored
 */
export function isCancellationError(event: OpenAIEvent): boolean {
  const errorMessage = extractErrorMessage(event);
  return errorMessage.includes('Cancellation failed') || 
         errorMessage.includes('no active response') ||
         errorMessage.includes('cancellation');
}

/**
 * Extract error message from error events
 */
export function extractErrorMessage(event: OpenAIEvent): string {
  if (event.error?.message) {
    return event.error.message;
  }
  
  if (event.message) {
    return event.message;
  }
  
  return `Unknown error: ${event.type}`;
}

/**
 * Create event handlers map for easier event processing
 */
export function createEventHandlers(
  onTranscriptUpdate: (transcript: ConversationItem[]) => void,
  onStatusChange: (status: string) => void,
  onSessionId: (sessionId: string) => void,
  onError: (error: string) => void,
  onActiveResponseChange: (hasActive: boolean) => void
) {
  let currentTranscript: ConversationItem[] = [];
  let hasActiveResponse = false;

  return {
    handleEvent: (event: OpenAIEvent) => {
      console.log(`[Event] Processing event: ${event.type}`, event);

      // Handle errors first
      if (isErrorEvent(event)) {
        const errorMessage = extractErrorMessage(event);
        
        // Ignore cancellation errors as they're expected when no response is active
        if (isCancellationError(event)) {
          console.log('Ignoring cancellation error:', errorMessage);
          return;
        }
        
        onError(errorMessage);
        onStatusChange('error');
        return;
      }

      // Handle session ID
      const sessionId = extractSessionId(event);
      if (sessionId) {
        onSessionId(sessionId);
      }

      // Handle status changes
      const status = getStatusFromEvent(event);
      if (status) {
        onStatusChange(status);
      }

      // Track active response state
      const previousActiveState = hasActiveResponse;
      if (event.type === 'response.audio_transcript.delta' || event.type === 'response.audio.delta') {
        hasActiveResponse = true;
      } else if (event.type === 'response.done' || event.type === 'response.audio_transcript.done') {
        hasActiveResponse = false;
      }
      
      // Notify if active response state changed
      if (previousActiveState !== hasActiveResponse) {
        onActiveResponseChange(hasActiveResponse);
      }

      // Handle transcript updates
      const newTranscript = handleTranscriptEvent(event, currentTranscript);
      if (newTranscript !== currentTranscript) {
        console.log(`[Transcript] Updated transcript:`, newTranscript.map(item => ({
          type: item.type,
          sequence: item.sequence,
          content: item.content.substring(0, 50) + '...'
        })));
        currentTranscript = newTranscript;
        onTranscriptUpdate(newTranscript);
      }
    },
    
    clearTranscript: () => {
      currentTranscript = [];
      onTranscriptUpdate(currentTranscript);
    }
  };
}