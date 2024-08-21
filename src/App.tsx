// Import the ColorModeProvider component from the ColorModeContext file
import { ColorModeProvider } from "./components/ColorModeContext";

// Import the Index component from the Index file
import Index from "./Index";

// Define and export the main App component
export default function App() {
  return (
    // Wrap the entire application with ColorModeProvider to manage color mode
    <ColorModeProvider>
      {/* Render the main Index component */}
      <Index />
    </ColorModeProvider>
  );
}