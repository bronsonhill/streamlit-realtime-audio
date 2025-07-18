import type { OpenAIRealtimeConfig, AudioError } from '../types';

/**
 * Create and configure RTCPeerConnection for OpenAI Realtime API
 */
export function createPeerConnection(): RTCPeerConnection {
  const config: RTCConfiguration = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' }
    ]
  };

  return new RTCPeerConnection(config);
}

/**
 * Request microphone access
 */
export async function requestMicrophoneAccess(): Promise<MediaStream> {
  try {
    const constraints: MediaStreamConstraints = {
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        sampleRate: 24000
      },
      video: false
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    
    if (!stream.getAudioTracks().length) {
      throw new Error('No audio tracks found in stream');
    }

    return stream;
  } catch (error) {
    console.error('Failed to access microphone:', error);
    throw error;
  }
}

/**
 * Establish WebRTC connection with OpenAI
 */
export async function establishOpenAIConnection(
  peerConnection: RTCPeerConnection,
  config: OpenAIRealtimeConfig
): Promise<void> {
  try {
    // Create offer
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Send offer to OpenAI
    const response = await fetch(`https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/sdp'
      },
      body: offer.sdp
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    // Set remote description
    const answerSdp = await response.text();
    const answer: RTCSessionDescriptionInit = {
      type: 'answer',
      sdp: answerSdp
    };

    await peerConnection.setRemoteDescription(answer);
  } catch (error) {
    console.error('Failed to establish OpenAI connection:', error);
    throw error;
  }
}

/**
 * Wait for peer connection to be established
 */
export function waitForConnection(
  peerConnection: RTCPeerConnection,
  timeout: number = 10000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Connection timeout after ${timeout}ms. Current state: ${peerConnection.connectionState}`));
    }, timeout);

    const checkConnection = () => {
      if (peerConnection.connectionState === 'connected') {
        clearTimeout(timeoutId);
        resolve();
      } else if (peerConnection.connectionState === 'failed' || peerConnection.connectionState === 'closed') {
        clearTimeout(timeoutId);
        reject(new Error(`Connection failed. State: ${peerConnection.connectionState}`));
      }
    };

    peerConnection.addEventListener('connectionstatechange', checkConnection);
    
    // Check immediately in case already connected
    checkConnection();
  });
}

/**
 * Create data channel for OpenAI events
 */
export function createDataChannel(peerConnection: RTCPeerConnection): RTCDataChannel {
  const dataChannel = peerConnection.createDataChannel('oai-events', {
    ordered: true
  });

  return dataChannel;
}

/**
 * Wait for data channel to open
 */
export function waitForDataChannelOpen(
  dataChannel: RTCDataChannel,
  timeout: number = 5000
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (dataChannel.readyState === 'open') {
      resolve();
      return;
    }

    const timeoutId = setTimeout(() => {
      reject(new Error(`Data channel timeout after ${timeout}ms. State: ${dataChannel.readyState}`));
    }, timeout);

    const handleOpen = () => {
      clearTimeout(timeoutId);
      dataChannel.removeEventListener('open', handleOpen);
      resolve();
    };

    const handleError = () => {
      clearTimeout(timeoutId);
      dataChannel.removeEventListener('error', handleError);
      reject(new Error('Data channel error'));
    };

    dataChannel.addEventListener('open', handleOpen);
    dataChannel.addEventListener('error', handleError);
  });
}

/**
 * Convert WebRTC errors to AudioError format
 */
export function createAudioError(error: unknown, type: AudioError['type'] = 'unknown'): AudioError {
  if (error instanceof Error) {
    // Check for specific error types
    if (error.name === 'NotAllowedError' || error.message.includes('permission')) {
      return {
        type: 'permission',
        message: 'Microphone permission denied. Please allow microphone access and try again.',
        details: error
      };
    }
    
    if (error.name === 'NotFoundError' || error.message.includes('device')) {
      return {
        type: 'device',
        message: 'No microphone device found. Please check your audio devices.',
        details: error
      };
    }
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      return {
        type: 'connection',
        message: 'Network connection error. Please check your internet connection.',
        details: error
      };
    }
    
    if (error.message.includes('API') || error.message.includes('401') || error.message.includes('403')) {
      return {
        type: 'api',
        message: 'OpenAI API error. Please check your API key and try again.',
        details: error
      };
    }

    return {
      type,
      message: error.message,
      details: error
    };
  }

  return {
    type,
    message: 'An unknown error occurred',
    details: error
  };
}

/**
 * Cleanup WebRTC resources
 */
export function cleanupConnection(
  peerConnection: RTCPeerConnection | null,
  dataChannel: RTCDataChannel | null,
  localStream: MediaStream | null
): void {
  try {
    // Stop local media tracks
    if (localStream) {
      localStream.getTracks().forEach(track => {
        track.stop();
      });
    }

    // Close data channel
    if (dataChannel && dataChannel.readyState === 'open') {
      dataChannel.close();
    }

    // Close peer connection
    if (peerConnection && peerConnection.connectionState !== 'closed') {
      peerConnection.close();
    }
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}