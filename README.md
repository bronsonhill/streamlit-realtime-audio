# Streamlit Real-time Audio Component

A Streamlit custom component that enables real-time voice conversations with OpenAI's GPT using WebRTC for low-latency audio streaming.

## Features

- 🎤 **Real-time Audio**: Low-latency audio streaming using WebRTC
- 🤖 **OpenAI Integration**: Direct integration with OpenAI's Real-time API
- 💬 **Live Transcription**: Real-time transcription of both user and AI speech
- ⏸️ **Conversation Control**: Start, pause, resume, and stop conversations
- 🎛️ **Configurable**: Customizable voice, instructions, and AI parameters
- 📝 **Full Transcript**: Complete conversation history with timestamps

## Installation

### Prerequisites

- Python 3.9+
- Node.js and npm (for development)
- OpenAI API key

### From Source

1. Clone or download this component
2. Install Python dependencies:
   ```bash
   cd realtime_audio
   pip install -e .
   ```

3. Install and build frontend dependencies:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

## Usage

### Basic Example

```python
import streamlit as st
from realtime_audio import realtime_audio_conversation

st.title("AI Voice Assistant")

# Get API key from user
api_key = st.text_input("OpenAI API Key", type="password")

if api_key:
    # Create the real-time audio conversation
    result = realtime_audio_conversation(
        api_key=api_key,
        instructions="You are a helpful AI assistant. Keep responses concise.",
        voice="alloy",
        temperature=0.8
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

### Advanced Example

```python
import streamlit as st
from realtime_audio import realtime_audio_conversation

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

## API Reference

### `realtime_audio_conversation()`

Creates a real-time audio conversation component.

#### Parameters

- **`api_key`** (str): OpenAI API key for authentication
- **`voice`** (str, default="alloy"): Voice for TTS. Options: "alloy", "echo", "fable", "onyx", "nova", "shimmer"
- **`instructions`** (str, default="You are a helpful AI assistant..."): System instructions for the AI
- **`prompt`** (str, default=""): Initial prompt to start the conversation
- **`auto_start`** (bool, default=False): Whether to automatically start the conversation
- **`temperature`** (float, default=0.8): AI response randomness (0.0-2.0)
- **`turn_detection_threshold`** (float, default=0.5): Voice activity detection sensitivity (0.0-1.0)
- **`key`** (str, optional): Unique component key

#### Returns

Dictionary with the following structure:

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

## Development

### Setting up Development Environment

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install development dependencies:
   ```bash
   pip install streamlit
   pip install -e .
   ```

3. Set up frontend development:
   ```bash
   cd frontend
   npm install
   npm run start  # Starts development server on port 3001
   ```

4. Run the example:
   ```bash
   streamlit run example.py
   ```

### Project Structure

```
realtime_audio/
├── __init__.py              # Python API
├── example.py               # Usage example
├── setup.py                 # Package setup
├── README.md               # Documentation
└── frontend/
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── index.tsx        # Entry point
        ├── RealtimeAudio.tsx # Main component
        ├── types/           # TypeScript definitions
        └── utils/           # Utility functions
```

## Browser Requirements

- **HTTPS required**: WebRTC requires a secure connection
- **Microphone access**: Component will request microphone permissions
- **Supported browsers**: Chrome, Firefox, Safari, Edge (latest versions)

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

### Debug Mode

Enable debug logging by opening browser developer tools (F12) and checking the console for detailed connection information.

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review browser console for errors
3. Create an issue with detailed error information