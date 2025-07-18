import streamlit as st
from st_realtime_audio import realtime_audio_conversation

# Set page configuration
st.set_page_config(
    page_title="OpenAI Real-time Audio Demo",
    page_icon="🎤",
    layout="wide"
)

st.title("🎤 OpenAI Real-time Audio Conversation")
st.markdown("Have a natural voice conversation with OpenAI's GPT using WebRTC!")

# Sidebar for configuration
with st.sidebar:
    st.header("Configuration")
    
    # API Key input
    api_key = st.text_input(
        "OpenAI API Key",
        type="password",
        help="Your OpenAI API key. Get one at https://platform.openai.com/api-keys"
    )
    
    # Voice selection
    voice = st.selectbox(
        "Voice",
        options=["alloy", "echo", "fable", "onyx", "nova", "shimmer"],
        index=0,
        help="Choose the voice for the AI assistant"
    )
    
    # Instructions
    instructions = st.text_area(
        "AI Instructions",
        value="""**Role-Play Scenario: Tau, 59-Year-Old Male Patient**
You are a patient visiting a private physiotherapy clinic for a consultation with a first-year physiotherapy student. You are happy and agreeable to work with the student.

---

### **Objective:**
Guide student practitioners to ask insightful questions to cover the scope of an initial subjective assessment, aiding their skill development in patient history taking and communication skills.

---

### **Caveats/Constraints:**
- Do not ask, “How can I assist you?” as you are the patient.
- Do not reveal too much information; let the student ask questions to uncover your symptoms.
- Provide **one fact at a time** and respond to the student's questions.
- If a question is unclear, insufficient, or irrelevant, respond with:
  - *"I don’t understand" or "Can you please rephrase this?"*
- If asked why you can’t answer, say:
  - *"I can’t answer because this does not seem relevant to our conversation."*
- If medical jargon is used, respond with:
  - *"I don’t understand, can you please rephrase this?"*
- If the student asks **four questions in a row** that cannot be answered:
  - *"Thanks for trying to help me, I might take some time to go away and think about this, let’s pick this up another time"* and END THE INTERVIEW.

**Feedback Prompts:** Observe and take note of the student’s:
- Open-ended questions
- Restatement (paraphrasing remarks briefly and non-judgmentally)
- Reflection (matching tone, emotion, and tentativeness):
  - Examples: *“So you feel...”*, *“It sounds like you...”*, *“For you, it’s like...”*
- Clarification (simple factual statements to clarify information)
- Use of “ums” and “ahs” or loss of train of thought
- Tone: e.g., kind, patient, antagonistic

---

### **Clinical Scenario Information:**

#### **History of Presenting Condition:**
- Gradual onset of **niggling left hip pain** over the past year.
- Pain has progressed to **constant** over the last **3-4 months**.
- First noticed after a long bike ride **12 months ago**.
- Continued activities for 6 months, working through the pain, but now it is worsening and concerning.
- Pain is now present every time you ride. You’ve cut back on:
  - **Previous:** Saturday & Sunday rides (4-5 hours).
  - **Now:** Saturday rides only (1-2 hours).
- Adjusting your bike seat height and bars **has not helped**.

**Main Complaint/Priority:**
- Pain in the **left hip** and **stiffness**.
- Goal: Return to usual activities. You are **motivated** to resolve the issue.

**Thoughts/Feelings About Pain:**
- You feel like an *“old man”*.
- You are anxious about your physical capacity as you age into your 60s and 70s.
- Staying physically active is vital for managing your **diabetes**, which makes this stressful.

---

#### **Relevant Investigations:**
- No scans to date. You are keen to have an **x-ray**.

---

### **Body Chart (WOCSSNOR):**
- **Where:** Left groin, deep in the hip.
- **Other Sites of Pain:** No other pain; no back or knee pain (student should confirm).
- **Constant/Intermittent:** Pain has become constant over the past month.
- **Severity:** Resting pain is **3/10**.
- **Superficial/Deep:** Pain feels **deep** in the hip.
- **Nature:** Catchy and stiff.
- **Other Symptoms:** Stiffness in the hip.
- **Referral:** Occasional referred pain into the **inner thigh** when aggravated.

**Aggravating Factors:**
1. Sitting on a couch or driving >5 minutes → pain increases to **4-5/10** (takes ~5 minutes to ease).
2. Walking on gravel/uneven surfaces → pain **5/10** (relief depends on duration walked).
3. Putting on socks and shoes → **catching pain and stiffness 6/10**.
4. Bike riding **10km** → pain **6-7/10** (forces you to return home early, takes ~2 hours to ease).

**24-Hour Behavior:**
- Stiff and worse in the morning (**4/10**). Improves after a shower.
- Pain worsens by the **end of the day**, depending on activity level.
- Wakes 2-3 nights per week due to pain (takes ~10 minutes to fall back asleep).
- Sleeping with a **pillow between knees** helps relieve hip pain.
- Lying on either side **provokes pain**.

---

### **Past History:**
- Played cricket (spin bowler) from high school until age 30. Had **low back pain** during these years; still flares up occasionally. Sees a chiropractor **2-4 times/year**.
- Left knee arthroscopy in **2018**. Completed rehab; no current issues.

---

### **General Health:**
- **High blood pressure** and **diabetes** (managed via exercise; closely monitored by GP).

---

### **Medications:**
- **Zestril** tablet daily.
- Occasional **Panadol** in the evening to help with sleep.

---

### **Red Flags (When Prompted):**
- No history of unexplained weight loss.
- No unrelenting night pain.
- No history of cancer.

---

### **Social History:**
- Happily retired; lives with your wife.
- Babysits two grandchildren (7-year-old boy and 5-year-old girl) **two days/week**.
- Road cyclist: Used to ride **3 mornings/week**, now struggling to complete **1 ride**.
- Enjoys daily **leisure walks** with your wife.""",
        height=100,
        help="Define how the AI should behave and respond"
    )
    
    # Advanced settings
    with st.expander("Advanced Settings"):
        temperature = st.slider(
            "Temperature",
            min_value=0.0,
            max_value=2.0,
            value=0.8,
            step=0.1,
            help="Controls randomness. Lower = more focused, Higher = more creative"
        )
        
        turn_detection_threshold = st.slider(
            "Voice Activity Threshold",
            min_value=0.0,
            max_value=1.0,
            value=0.5,
            step=0.1,
            help="Sensitivity for detecting when you start speaking"
        )
        
        auto_start = st.checkbox(
            "Auto-start conversation",
            value=False,
            help="Automatically start the conversation when the page loads"
        )

# Main content area
col1, col2 = st.columns([2, 1])

with col1:
    st.header("Conversation")
    
    if not api_key:
        st.warning("Please enter your OpenAI API key in the sidebar to start.")
        st.info("You can get an API key from https://platform.openai.com/api-keys")
    else:
        # Create the real-time audio conversation component
        conversation_result = realtime_audio_conversation(
            api_key=api_key,
            voice=voice,
            instructions=instructions,
            auto_start=auto_start,
            temperature=temperature,
            turn_detection_threshold=turn_detection_threshold,
            key="main_conversation"
        )
        
        # Display any errors
        if conversation_result.get("error"):
            st.error(f"Error: {conversation_result['error']}")
        
        # Display conversation transcript
        if conversation_result.get("transcript"):
            st.subheader("Conversation Transcript")
            
            # Sort transcript by sequence to ensure correct chronological order
            # Use stable sorting to maintain order for messages with same sequence
            sorted_transcript = sorted(
                conversation_result["transcript"], 
                key=lambda x: x.get("sequence", x.get("timestamp", 0))
            )
            
            # Debug: Print the sorted transcript
            st.write("**Debug Info:**")
            for i, message in enumerate(sorted_transcript):
                st.write(f"{i}: {message['type']} (seq={message.get('sequence', 'N/A')}): {message['content'][:50]}...")
            
            st.write("**Actual Display:**")
            for message in sorted_transcript:
                if message["type"] == "user":
                    st.chat_message("user").write(message["content"])
                else:
                    st.chat_message("assistant").write(message["content"])

with col2:
    st.header("Status")
    
    if api_key:
        # Display connection status
        status = conversation_result.get("status", "idle")
        status_colors = {
            "idle": "🔵",
            "connecting": "🟡", 
            "connected": "🟢",
            "recording": "🔴",
            "speaking": "🟣",
            "error": "🔴"
        }
        
        st.metric(
            "Status",
            f"{status_colors.get(status, '⚪')} {status.title()}"
        )
        
        # Display other metrics
        if conversation_result.get("session_id"):
            st.metric("Session ID", conversation_result["session_id"][:8] + "...")
            
        if conversation_result.get("connection_state"):
            st.metric("Connection", conversation_result["connection_state"].title())
            
        # Recording and pause status
        col_rec, col_pause = st.columns(2)
        with col_rec:
            recording_status = "🔴 Recording" if conversation_result.get("is_recording") else "⏹️ Not Recording"
            st.write(recording_status)
            
        with col_pause:
            pause_status = "⏸️ Paused" if conversation_result.get("is_paused") else "▶️ Active"
            st.write(pause_status)
    
    # Help section
    with st.expander("How to Use"):
        st.markdown("""
        **Getting Started:**
        1. Add your OpenAI API key in the sidebar
        2. Click "Start Conversation" 
        3. Allow microphone access when prompted
        4. Start speaking naturally!
        
        **Controls:**
        - **Start/Stop**: Begin or end the conversation
        - **Pause/Resume**: Temporarily pause the conversation
        - **Mute**: Disable your microphone
        
        **Tips:**
        - Speak clearly and at normal volume
        - Wait for the AI to finish before speaking
        - Use the pause button if you need a moment
        """)
    
    with st.expander("Troubleshooting"):
        st.markdown("""
        **Common Issues:**
        
        **No microphone access:**
        - Check browser permissions
        - Ensure HTTPS connection
        - Try refreshing the page
        
        **Connection problems:**
        - Verify API key is correct
        - Check internet connection
        - Try restarting the conversation
        
        **Audio issues:**
        - Check system audio settings
        - Try different browsers (Chrome recommended)
        - Ensure speakers/headphones are working
        """)

# Footer
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>Built with Streamlit and OpenAI's Real-time API using WebRTC</p>
    <p>Requires HTTPS and microphone permissions</p>
</div>
""", unsafe_allow_html=True)