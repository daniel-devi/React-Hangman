// Import necessary modules from React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import the main App component
import App from './App.tsx'

// Create a root for the React application and render the App
createRoot(document.getElementById('root')!).render(
  // Wrap the App in StrictMode for additional checks and warnings
  <StrictMode>
    <App />
  </StrictMode>,
)
