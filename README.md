# Streamlit Real-time Audio

A Streamlit custom component for real-time voice conversations with OpenAI's GPT using WebRTC for low-latency audio streaming.

## Features

- 🎤 **Real-time Audio**: Low-latency audio streaming using WebRTC
- 🤖 **OpenAI Integration**: Direct integration with OpenAI's Real-time API
- 💬 **Live Transcription**: Real-time transcription of both user and AI speech
- ⏸️ **Conversation Control**: Start, pause, resume, and stop conversations
- 🎛️ **Configurable**: Customizable voice, instructions, and AI parameters
- 📝 **Full Transcript**: Complete conversation history with timestamps

## Installation

```bash
pip install streamlit-realtime-audio
```

## Quick Start

```python
import streamlit as st
from st_realtime_audio import realtime_audio_conversation

st.title("AI Voice Assistant")

# Get API key from user
api_key = st.text_input("OpenAI API Key", type="password")

if api_key:
    # Create the real-time audio conversation
    result = realtime_audio_conversation(
        api_key=api_key,
        instructions="You are a helpful AI assistant. Keep responses concise.",
        voice="alloy"
    )
    
    # Display conversation status
    st.write(f"Status: {result['status']}")
    
    # Show any errors
    if result['error']:
        st.error(result['error'])
    
    # Display transcript
    for message in result['transcript']:
        if message['type'] == 'user':
            st.chat_message("user").write(message['content'])
        else:
            st.chat_message("assistant").write(message['content'])
```

## Usage

### Basic Parameters

- **`api_key`** (str, required): OpenAI API key for authentication
- **`voice`** (str, default="alloy"): Voice for TTS. Options: "alloy", "echo", "fable", "onyx", "nova", "shimmer"
- **`instructions`** (str): System instructions for the AI
- **`temperature`** (float, default=0.8): AI response randomness (0.0-2.0)
- **`auto_start`** (bool, default=False): Whether to automatically start the conversation

### Advanced Example

```python
import streamlit as st
from st_realtime_audio import realtime_audio_conversation

st.set_page_config(page_title="Advanced AI Assistant", layout="wide")

col1, col2 = st.columns([3, 1])

with col2:
    st.header("Settings")
    api_key = st.text_input("API Key", type="password")
    voice = st.selectbox("Voice", ["alloy", "echo", "fable", "onyx", "nova", "shimmer"])
    temperature = st.slider("Temperature", 0.0, 2.0, 0.8)
    instructions = st.text_area(
        "Instructions", 
        "You are a helpful AI assistant.",
        height=100
    )

with col1:
    st.header("Conversation")
    
    if api_key:
        conversation = realtime_audio_conversation(
            api_key=api_key,
            voice=voice,
            instructions=instructions,
            temperature=temperature,
            turn_detection_threshold=0.5,
            key="advanced_conversation"
        )
        
        # Handle the conversation result
        if conversation['error']:
            st.error(conversation['error'])
        
        # Display metrics
        col_a, col_b, col_c = st.columns(3)
        with col_a:
            st.metric("Status", conversation['status'])
        with col_b:
            st.metric("Messages", len(conversation['transcript']))
        with col_c:
            recording = "🔴" if conversation['is_recording'] else "⚪"
            st.metric("Recording", recording)
```

## Return Value

The component returns a dictionary with conversation state:

```python
{
    "transcript": [
        {
            "id": "unique_message_id",
            "type": "user" | "assistant", 
            "content": "Message content",
            "timestamp": 1640995200000,
            "status": "completed" | "in_progress"
        }
    ],
    "status": "idle" | "connecting" | "connected" | "recording" | "speaking" | "error",
    "error": "Error message" | None,
    "session_id": "unique_session_id" | None,
    "connection_state": "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed",
    "is_recording": bool,
    "is_paused": bool
}
```

## Requirements

- Python 3.9+
- Streamlit >= 1.28.0
- OpenAI API key
- HTTPS connection (required for WebRTC)
- Microphone access

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- HTTPS required for WebRTC functionality
- Microphone permissions required

## Troubleshooting

### Common Issues

**Microphone Access Denied**
- Ensure you're using HTTPS
- Check browser permissions
- Try refreshing the page

**Connection Failed**
- Verify your OpenAI API key
- Check internet connection
- Ensure firewall isn't blocking WebRTC

**No Audio Playback**
- Check system audio settings
- Try different browsers
- Verify speakers/headphones are working

## Development

For development setup and contributing, see the [GitHub repository](https://github.com/bronsonhill/streamlit-realtime-audio).

## License

MIT License - see LICENSE file for details.