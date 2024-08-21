// Import necessary styles and components
import styles from "../styles/Keyboard.module.css";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

// Define an array of all keyboard keys
const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];

// Define the props interface for the Keyboard component
type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

// Define the Keyboard component
export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  // Get the current theme
  const theme = useTheme();

  return (
    // Container for the keyboard buttons
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {/* Map through each key and create a button */}
      {KEYS.map((key) => {
        // Check if the key is active or inactive
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <Button 
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.text.primary,
              "&:hover": {
                bgcolor: theme.palette.background.paper,
              },
            }}
            // Disable the button if it's inactive and the keyboard is disabled
            {...(isInactive && disabled ? { disabled: true } : {})}
            // Handle click event
            onClick={() => addGuessedLetter(key)}
            // Apply CSS classes
            className={`${styles.btn} ${isActive ? styles.active : ""}`}
            // Disable button if it's inactive, active, or the keyboard is disabled
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
}
