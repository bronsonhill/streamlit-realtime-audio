import os
import streamlit.components.v1 as components
from typing import Optional, Dict, Any

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
_RELEASE = True

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component.
if not _RELEASE:
    _component_func = components.declare_component(
        # Component name
        "realtime_audio",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    # Go up one level to the realtime_audio directory, then into frontend/build
    build_dir = os.path.join(os.path.dirname(parent_dir), "frontend/build")
    _component_func = components.declare_component("realtime_audio", path=build_dir)


def realtime_audio_conversation(
    prompt: str = "",
    api_key: str = "",
    voice: str = "alloy",
    instructions: str = "You are a helpful AI assistant. Respond naturally and conversationally.",
    auto_start: bool = False,
    temperature: float = 0.8,
    turn_detection_threshold: float = 0.5,
    key: Optional[str] = None
) -> Dict[str, Any]:
    """
    Create a new instance of the realtime audio conversation component.

    This component enables real-time voice conversations with OpenAI's Realtime API
    using WebRTC for low-latency audio streaming.

    Parameters
    ----------
    prompt: str
        Initial prompt or context for the conversation. This will be used to 
        set the conversation context.
    
    api_key: str
        OpenAI API key for authentication. Required to establish connection
        with OpenAI's Realtime API.
    
    voice: str, default "alloy"
        Voice to use for text-to-speech. Options: "alloy", "echo", "fable", 
        "onyx", "nova", "shimmer"
    
    instructions: str, default "You are a helpful AI assistant..."
        System instructions that define the AI's personality and behavior.
        
    auto_start: bool, default False
        Whether to automatically start the conversation when the component loads.
        If False, user must click "Start Conversation" button.
        
    temperature: float, default 0.8
        Controls randomness in AI responses. Range 0.0 to 2.0.
        Lower values are more deterministic, higher values more creative.
        
    turn_detection_threshold: float, default 0.5
        Voice activity detection threshold. Range 0.0 to 1.0.
        Lower values are more sensitive to voice activity.
        
    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns
    -------
    dict
        A dictionary containing the conversation state and data:
        {
            "transcript": [
                {
                    "id": "unique_message_id",
                    "type": "user" | "assistant",
                    "content": "Message content",
                    "timestamp": 1640995200000,
                    "sequence": 0,
                    "status": "completed" | "in_progress"
                },
                ...
            ],
            "status": "idle" | "connecting" | "connected" | "recording" | "speaking" | "error",
            "error": "Error message if any" | None,
            "session_id": "unique_session_id" | None,
            "connection_state": "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed",
            "is_recording": bool,
            "is_paused": bool
        }
    """
    
    # Validate inputs
    if not api_key:
        return {
            "transcript": [],
            "status": "error",
            "error": "OpenAI API key is required",
            "session_id": None,
            "connection_state": "new",
            "is_recording": False,
            "is_paused": False
        }
    
    valid_voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"]
    if voice not in valid_voices:
        return {
            "transcript": [],
            "status": "error", 
            "error": f"Invalid voice '{voice}'. Must be one of: {', '.join(valid_voices)}",
            "session_id": None,
            "connection_state": "new",
            "is_recording": False,
            "is_paused": False
        }
    
    if not (0.0 <= temperature <= 2.0):
        return {
            "transcript": [],
            "status": "error",
            "error": "Temperature must be between 0.0 and 2.0",
            "session_id": None,
            "connection_state": "new", 
            "is_recording": False,
            "is_paused": False
        }
        
    if not (0.0 <= turn_detection_threshold <= 1.0):
        return {
            "transcript": [],
            "status": "error",
            "error": "Turn detection threshold must be between 0.0 and 1.0",
            "session_id": None,
            "connection_state": "new",
            "is_recording": False,
            "is_paused": False
        }

    # Call through to our private component function. Arguments we pass here
    # will be sent to the frontend, where they'll be available in an "args"
    # dictionary.
    component_value = _component_func(
        prompt=prompt,
        apiKey=api_key,  # Convert to camelCase for frontend
        voice=voice,
        instructions=instructions,
        autoStart=auto_start,  # Convert to camelCase for frontend
        temperature=temperature,
        turnDetectionThreshold=turn_detection_threshold,  # Convert to camelCase for frontend
        default={
            "transcript": [],
            "status": "idle",
            "error": None,
            "session_id": None,
            "connection_state": "new",
            "is_recording": False,
            "is_paused": False
        }
    )

    # Return the current component state
    return component_value if component_value is not None else {
        "transcript": [],
        "status": "idle",
        "error": None,
        "session_id": None,
        "connection_state": "new",
        "is_recording": False,
        "is_paused": False
    }


# Convenience function for quick testing
def test_conversation(api_key: str, instructions: str = None) -> Dict[str, Any]:
    """
    Quick test function for the realtime audio conversation.
    
    Parameters
    ----------
    api_key: str
        OpenAI API key
    instructions: str, optional
        Custom instructions for the AI
        
    Returns
    -------
    dict
        Component result
    """
    default_instructions = (
        "You are a friendly AI assistant. Keep your responses concise but helpful. "
        "Speak naturally and conversationally as if you're talking to a friend."
    )
    
    return realtime_audio_conversation(
        api_key=api_key,
        instructions=instructions if instructions is not None else default_instructions,
        auto_start=False,
        voice="alloy"
    )