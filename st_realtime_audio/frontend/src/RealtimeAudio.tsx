import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  Streamlit,
  withStreamlitConnection,
  ComponentProps
} from 'streamlit-component-lib';
import type { 
  RealtimeAudioProps, 
  RealtimeAudioState, 
  ConversationItem,
  AudioError,
  OpenAIRealtimeConfig
} from './types';
import { 
  createPeerConnection,
  requestMicrophoneAccess,
  establishOpenAIConnection,
  waitForConnection,
  createDataChannel,
  waitForDataChannelOpen,
  createAudioError,
  cleanupConnection
} from './utils/webrtc';
import {
  createSessionUpdateEvent,
  createGreetingEvent,
  createResponseCancelEvent,
  sendEvent,
  parseEvent,
  createEventHandlers
} from './utils/openai-events';

const RealtimeAudio: React.FC<ComponentProps> = ({ args, disabled }) => {
  // Extract props from args
  const {
    prompt = '',
    apiKey = '',
    voice = 'alloy',
    instructions = 'You are a helpful AI assistant.',
    autoStart = false,
    temperature = 0.8,
    turnDetectionThreshold = 0.5,
    showTranscript = false,
    title = 'Real-time Audio Conversation'
  } = args as RealtimeAudioProps;

  // Component state
  const [state, setState] = useState<RealtimeAudioState>({
    status: 'idle',
    isRecording: false,
    isPaused: false,
    transcript: [],
    error: null,
    sessionId: null,
    connectionState: 'new'
  });

  // Add state for tracking active response
  const [hasActiveResponse, setHasActiveResponse] = useState(false);

  // Refs for WebRTC
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteAudioRef = useRef<HTMLAudioElement>(null);

  // Event handlers for OpenAI events
  const eventHandlersRef = useRef(createEventHandlers(
    (transcript: ConversationItem[]) => {
      setState(prev => ({ ...prev, transcript }));
      updateStreamlitValue(prev => ({ ...prev, transcript }));
    },
    (status: string) => {
      setState(prev => ({ ...prev, status: status as any }));
      updateStreamlitValue(prev => ({ ...prev, status }));
    },
    (sessionId: string) => {
      setState(prev => ({ ...prev, sessionId }));
      updateStreamlitValue(prev => ({ ...prev, session_id: sessionId }));
    },
    (error: string) => {
      setState(prev => ({ ...prev, error, status: 'error' }));
      updateStreamlitValue(prev => ({ ...prev, error, status: 'error' }));
    },
    (hasActive: boolean) => {
      setHasActiveResponse(hasActive);
    }
  ));

  // Update Streamlit with current state
  const updateStreamlitValue = useCallback((updater: (prev: any) => any) => {
    setState(prev => {
      const newState = updater(prev);
      Streamlit.setComponentValue({
        transcript: newState.transcript || prev.transcript,
        status: newState.status || prev.status,
        error: newState.error ?? prev.error,
        session_id: newState.sessionId || newState.session_id || prev.sessionId,
        connection_state: newState.connectionState || prev.connectionState,
        is_recording: newState.isRecording ?? prev.isRecording,
        is_paused: newState.isPaused ?? prev.isPaused
      });
      return newState;
    });
  }, []);

  // Set Streamlit frame height and mark component as ready
  useEffect(() => {
    // Adjust height based on whether transcript is shown
    const baseHeight = 220; // Height without transcript
    const transcriptHeight = showTranscript ? 200 : 0; // Height of transcript section
    const totalHeight = baseHeight + transcriptHeight;
    
    Streamlit.setFrameHeight(totalHeight);
    Streamlit.setComponentReady();
  }, [showTranscript]);

  // Handle connection state changes
  const handleConnectionStateChange = useCallback(() => {
    if (peerConnectionRef.current) {
      const connectionState = peerConnectionRef.current.connectionState;
      setState(prev => ({ ...prev, connectionState }));
      updateStreamlitValue(prev => ({ ...prev, connection_state: connectionState }));
    }
  }, [updateStreamlitValue]);

  // Handle remote audio track
  const handleTrack = useCallback((event: RTCTrackEvent) => {
    console.log('Received remote track:', event.track.kind);
    if (event.track.kind === 'audio' && remoteAudioRef.current) {
      remoteAudioRef.current.srcObject = event.streams[0];
    }
  }, []);

  // Handle data channel messages
  const handleDataChannelMessage = useCallback((event: MessageEvent) => {
    const openaiEvent = parseEvent(event.data);
    if (openaiEvent) {
      eventHandlersRef.current.handleEvent(openaiEvent);
    }
  }, []);

  // Start conversation
  const startConversation = useCallback(async () => {
    if (!apiKey) {
      const error = createAudioError(new Error('API key is required'), 'api');
      setState(prev => ({ ...prev, error: error.message, status: 'error' }));
      return;
    }

    try {
      setState(prev => ({ ...prev, status: 'connecting', error: null }));
      updateStreamlitValue(prev => ({ ...prev, status: 'connecting', error: null }));

      // Request microphone access
      console.log('Requesting microphone access...');
      const localStream = await requestMicrophoneAccess();
      localStreamRef.current = localStream;

      // Create peer connection
      console.log('Creating peer connection...');
      const peerConnection = createPeerConnection();
      peerConnectionRef.current = peerConnection;

      // Set up event listeners
      peerConnection.addEventListener('connectionstatechange', handleConnectionStateChange);
      peerConnection.addEventListener('track', handleTrack);

      // Add local audio track
      const audioTrack = localStream.getAudioTracks()[0];
      peerConnection.addTrack(audioTrack, localStream);

      // Create data channel
      console.log('Creating data channel...');
      const dataChannel = createDataChannel(peerConnection);
      dataChannelRef.current = dataChannel;
      dataChannel.addEventListener('message', handleDataChannelMessage);

      // Establish connection with OpenAI
      console.log('Establishing connection with OpenAI...');
      const config: OpenAIRealtimeConfig = {
        apiKey,
        voice: voice as any,
        instructions,
        temperature,
        turnDetectionThreshold
      };

      await establishOpenAIConnection(peerConnection, config);

      // Wait for connection
      console.log('Waiting for connection...');
      await waitForConnection(peerConnection);

      // Wait for data channel to open
      console.log('Waiting for data channel...');
      await waitForDataChannelOpen(dataChannel);

      console.log('Connection established!');

      // Send session configuration
      const sessionUpdate = createSessionUpdateEvent(config);
      sendEvent(dataChannel, sessionUpdate);

      // Send initial greeting if prompt provided
      if (prompt) {
        const greeting = createGreetingEvent(prompt);
        sendEvent(dataChannel, greeting);
      }

      setState(prev => ({ ...prev, status: 'connected' }));
      updateStreamlitValue(prev => ({ ...prev, status: 'connected' }));

    } catch (error) {
      console.error('Failed to start conversation:', error);
      const audioError = createAudioError(error);
      setState(prev => ({ 
        ...prev, 
        error: audioError.message, 
        status: 'error' 
      }));
      updateStreamlitValue(prev => ({ 
        ...prev, 
        error: audioError.message, 
        status: 'error' 
      }));
      
      // Cleanup on error
      cleanup();
    }
  }, [
    apiKey, 
    voice, 
    instructions, 
    temperature, 
    turnDetectionThreshold, 
    prompt,
    handleConnectionStateChange,
    handleTrack,
    handleDataChannelMessage,
    updateStreamlitValue
  ]);

  // Stop conversation
  const stopConversation = useCallback(() => {
    console.log('Stopping conversation...');
    
    // Cancel any ongoing response
    if (dataChannelRef.current && hasActiveResponse) {
      const cancelEvent = createResponseCancelEvent();
      sendEvent(dataChannelRef.current, cancelEvent);
    }

    // Resume audio stream if paused before stopping
    if (localStreamRef.current && state.isPaused) {
      localStreamRef.current.getTracks().forEach(track => {
        track.enabled = true;
      });
    }

    cleanup();
    setState(prev => ({ 
      ...prev, 
      status: 'idle', 
      isRecording: false, 
      isPaused: false,
      connectionState: 'closed'
    }));
    setHasActiveResponse(false);
    updateStreamlitValue(prev => ({ 
      ...prev, 
      status: 'idle', 
      is_recording: false, 
      is_paused: false,
      connection_state: 'closed'
    }));
  }, [updateStreamlitValue, hasActiveResponse, state.isPaused]);

  // Pause conversation
  const pauseConversation = useCallback(() => {
    console.log('Pausing conversation...');
    
    // Cancel any ongoing response
    if (dataChannelRef.current && hasActiveResponse) {
      const cancelEvent = createResponseCancelEvent();
      sendEvent(dataChannelRef.current, cancelEvent);
    }
    
    // Pause local audio stream
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => {
        track.enabled = false;
      });
    }
    
    setState(prev => ({ ...prev, isPaused: true, isRecording: false }));
    updateStreamlitValue(prev => ({ ...prev, is_paused: true, is_recording: false }));
  }, [updateStreamlitValue, hasActiveResponse]);

  // Resume conversation
  const resumeConversation = useCallback(() => {
    console.log('Resuming conversation...');
    
    // Resume local audio stream
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => {
        track.enabled = true;
      });
    }
    
    setState(prev => ({ ...prev, isPaused: false }));
    updateStreamlitValue(prev => ({ ...prev, is_paused: false }));
  }, [updateStreamlitValue]);

  // Clear transcript
  const clearTranscript = useCallback(() => {
    eventHandlersRef.current.clearTranscript();
  }, []);

  // Cleanup resources
  const cleanup = useCallback(() => {
    cleanupConnection(
      peerConnectionRef.current,
      dataChannelRef.current,
      localStreamRef.current
    );
    
    peerConnectionRef.current = null;
    dataChannelRef.current = null;
    localStreamRef.current = null;
    setHasActiveResponse(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  // Auto-start if enabled
  useEffect(() => {
    if (autoStart && apiKey && state.status === 'idle') {
      startConversation();
    }
  }, [autoStart, apiKey, state.status, startConversation]);

  // Render component
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#f0f2f6',
        borderRadius: '8px'
      }}>
        <div>
          <h3 style={{ margin: 0, color: '#262730' }}>{title}</h3>
          <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
            Status: <strong>{state.status}</strong>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {state.status === 'idle' && (
            <button
              onClick={startConversation}
              disabled={disabled || !apiKey}
              style={{
                padding: '12px 20px',
                backgroundColor: '#FF4B4B',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: disabled || !apiKey ? 'not-allowed' : 'pointer',
                opacity: disabled || !apiKey ? 0.5 : 1,
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Start Conversation
            </button>
          )}
          
          {state.status !== 'idle' && state.status !== 'error' && (
            <>
              {!state.isPaused ? (
                <button
                  onClick={pauseConversation}
                  disabled={disabled}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#FFA500',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Pause
                </button>
              ) : (
                <button
                  onClick={resumeConversation}
                  disabled={disabled}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#00D4AA',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Resume
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Error display */}
      {state.error && (
        <div style={{
          padding: '10px',
          backgroundColor: '#FFE6E6',
          border: '1px solid #FF4B4B',
          borderRadius: '4px',
          marginBottom: '20px',
          color: '#D63031'
        }}>
          <strong>Error:</strong> {state.error}
        </div>
      )}

      {/* Connection status indicators */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <div>
          Connection: <span style={{ 
            color: state.connectionState === 'connected' ? '#00D4AA' : '#666' 
          }}>
            {state.connectionState}
          </span>
        </div>
        <div>
          Recording: <span style={{ 
            color: state.isRecording ? '#FF4B4B' : '#666' 
          }}>
            {state.isRecording ? 'Yes' : 'No'}
          </span>
        </div>
        <div>
          Paused: <span style={{ 
            color: state.isPaused ? '#FFA500' : '#666' 
          }}>
            {state.isPaused ? 'Yes' : 'No'}
          </span>
        </div>
      </div>

      {/* Transcript - Only show when showTranscript is true */}
      {showTranscript && (
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          minHeight: '200px',
          maxHeight: '300px',
          overflowY: 'auto',
          backgroundColor: '#fafafa'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <h4 style={{ margin: 0, color: '#262730' }}>Conversation Transcript</h4>
            {state.transcript.length > 0 && (
              <button
                onClick={clearTranscript}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Clear
              </button>
            )}
          </div>
          
          {state.transcript.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>
              No conversation yet. Start a conversation to see the transcript here.
            </p>
          ) : (
            <div>
              {state.transcript
                .sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
                .map((item) => {
                  // Debug logging
                  console.log(`[Display] ${item.type} message: sequence=${item.sequence}, content="${item.content}"`);
                  
                  return (
                    <div
                      key={item.id}
                      style={{
                        marginBottom: '10px',
                        padding: '8px',
                        borderRadius: '4px',
                        backgroundColor: item.type === 'user' ? '#E3F2FD' : '#F3E5F5',
                        borderLeft: `3px solid ${item.type === 'user' ? '#2196F3' : '#9C27B0'}`
                      }}
                    >
                      <div style={{ 
                        fontSize: '12px', 
                        color: '#666', 
                        marginBottom: '4px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span>{item.type === 'user' ? 'You' : 'AI Assistant'}</span>
                        <span>
                          {item.status === 'in_progress' && '⏳ '}
                          {new Date(item.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div style={{ color: '#262730' }}>
                        {item.content || (item.status === 'in_progress' ? 'Speaking...' : '')}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      )}

      {/* Hidden audio element for remote audio playback */}
      <audio
        ref={remoteAudioRef}
        autoPlay
        style={{ display: 'none' }}
      />

      {/* Help text */}
      <div style={{ 
        marginTop: '15px', 
        fontSize: '12px', 
        color: '#666',
        fontStyle: 'italic'
      }}>
        💡 Make sure to allow microphone access when prompted. Speak naturally and wait for the AI to respond.
      </div>
    </div>
  );
};

export default withStreamlitConnection(RealtimeAudio);