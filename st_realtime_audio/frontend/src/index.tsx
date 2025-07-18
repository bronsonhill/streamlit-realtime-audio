import React from 'react';
import { createRoot } from 'react-dom/client';
import { withStreamlitConnection } from 'streamlit-component-lib';
import RealtimeAudio from './RealtimeAudio';

// Wrap the component with Streamlit connection (using type assertion to bypass TypeScript error)
const StreamlitComponent = withStreamlitConnection(RealtimeAudio as any);

// For development, mount the component to the DOM
if (typeof window !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<StreamlitComponent />);
  }
}

// Export for production
export default StreamlitComponent;