// OpenAI Realtime API Types
export interface OpenAIRealtimeConfig {
  apiKey: string;
  model: string;
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  instructions: string;
  temperature: number;
  turnDetectionThreshold: number;
}

export interface ConversationItem {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: number;
  sequence: number;
  status: 'in_progress' | 'completed';
}

export interface RealtimeAudioState {
  status: 'idle' | 'connecting' | 'connected' | 'recording' | 'speaking' | 'error';
  isRecording: boolean;
  isPaused: boolean;
  isVoicePaused: boolean;
  transcript: ConversationItem[];
  error: string | null;
  sessionId: string | null;
  connectionState: RTCPeerConnectionState;
}

// Component Props
export interface RealtimeAudioProps {
  prompt: string;
  apiKey: string;
  model: string;
  voice: string;
  instructions: string;
  autoStart: boolean;
  temperature: number;
  turnDetectionThreshold: number;
  playbackPaused?: boolean;
  showTranscript?: boolean;
  title?: string;
}

// OpenAI Event Types
export interface OpenAISessionConfig {
  type: 'realtime';
  audio: {
    input: {
      transcription: {
        model: string;
      };
      turn_detection: {
        type: 'server_vad';
        threshold: number;
        prefix_padding_ms: number;
        silence_duration_ms: number;
        create_response: boolean;
        interrupt_response: boolean;
      };
    };
    output: {
      voice: string;
    };
  };
  instructions: string;
  temperature: number;
  output_modalities: Array<'audio' | 'text'>;
}

export interface OpenAIEvent {
  type: string;
  [key: string]: any;
}

export interface SessionUpdateEvent extends OpenAIEvent {
  type: 'session.update';
  session: Partial<OpenAISessionConfig>;
}

export interface ResponseCreateEvent extends OpenAIEvent {
  type: 'response.create';
  response: {
    output_modalities: string[];
    instructions?: string;
  };
}

export interface ConversationItemCreateEvent extends OpenAIEvent {
  type: 'conversation.item.create';
  item: {
    type: 'message';
    role: 'system' | 'user';
    content: Array<{
      type: 'input_text';
      text: string;
    }>;
  };
}

// WebRTC Types
export interface AudioStreamState {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  isAudioEnabled: boolean;
}

export interface WebRTCConnectionState {
  peerConnection: RTCPeerConnection | null;
  dataChannel: RTCDataChannel | null;
  connectionState: RTCPeerConnectionState;
  iceConnectionState: RTCIceConnectionState;
}

// Error Types
export interface AudioError {
  type: 'permission' | 'device' | 'connection' | 'api' | 'unknown';
  message: string;
  details?: any;
}

// Hook Return Types
export interface UseWebRTCReturn {
  connectionState: WebRTCConnectionState;
  startConnection: (config: OpenAIRealtimeConfig) => Promise<void>;
  stopConnection: () => void;
  sendMessage: (message: OpenAIEvent) => void;
  error: AudioError | null;
}

export interface UseAudioReturn {
  audioState: AudioStreamState;
  requestPermission: () => Promise<boolean>;
  startRecording: () => void;
  stopRecording: () => void;
  toggleMute: () => void;
  error: AudioError | null;
}

export interface UseOpenAIRealtimeReturn {
  state: RealtimeAudioState;
  startConversation: () => Promise<void>;
  stopConversation: () => void;
  pauseConversation: () => void;
  resumeConversation: () => void;
  clearTranscript: () => void;
  error: AudioError | null;
}