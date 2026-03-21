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
- **`voice`** (str, default="alloy"): Voice for TTS. Options: "alloy", "ash", "ballad", "cedar", "coral", "echo", "marin", "sage", "shimmer", "verse"
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
    voice = st.selectbox("Voice", ["alloy", "ash", "ballad", "cedar", "coral", "echo", "marin", "sage", "shimmer", "verse"])
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

To work on the component locally instead of using the published PyPI version:

### Prerequisites

- Python 3.9+
- Node.js 18+
- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/bronsonhill/streamlit-realtime-audio.git
cd streamlit-realtime-audio
```

2. Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows
```

3. Install the package in editable mode (so local changes are picked up immediately):

```bash
pip install -e .
```

### Quick Rebuild

After making changes to the frontend or Python code, run the rebuild script to recompile and reinstall in one step:

```bash
./rebuild.sh
```

### Frontend Development

If you're making changes to the frontend (React/TypeScript), you'll need to rebuild it:

1. Install frontend dependencies:

```bash
cd st_realtime_audio/frontend
npm install
```

2. Rebuild the frontend after making changes:

```bash
npm run build
```

The built files go to `st_realtime_audio/frontend/build/` and are served by Streamlit automatically.

3. For live frontend development with hot-reload, run the dev server instead:

```bash
npm run dev
```

Then set `_RELEASE = False` in `st_realtime_audio/__init__.py` so the component loads from the dev server (`localhost:3001`) instead of the static build.

### Running the Example

```bash
cd <project-root>
source venv/bin/activate
streamlit run st_realtime_audio/example.py
```

### Project Structure

```
streamlit-realtime-audio/
├── st_realtime_audio/
│   ├── __init__.py              # Python component API
│   ├── example.py               # Example Streamlit app
│   └── frontend/
│       ├── src/                  # React/TypeScript source
│       │   ├── index.tsx         # Entry point
│       │   ├── RealtimeAudio.tsx # Main component
│       │   ├── types/            # TypeScript types
│       │   └── utils/            # WebRTC & OpenAI helpers
│       ├── build/                # Production build (committed)
│       ├── vite.config.ts        # Vite build config
│       └── package.json
├── setup.py
└── README.md
```

## License

MIT License - see LICENSE file for details.