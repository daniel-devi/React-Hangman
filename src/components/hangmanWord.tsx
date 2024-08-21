// Define the props for the HangmanWord component
type HangmanWordProps = {
  guessedLetters: string[]; 
  wordToGuess: string; 
  reveal?: boolean; 
};

// Define and export the HangmanWord component
export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false, // Default value is false if not provided
}: HangmanWordProps) {
  return (
    // Container for the word display
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {/* Split the word into individual letters and map over them */}
      {wordToGuess.split("").map((letter, index) => (
        // Wrapper for each letter
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          {/* Individual letter display */}
          <span
            style={{
              // Show letter if guessed or if reveal is true, otherwise hide
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              // If letter is not guessed and reveal is true, show in red, otherwise black
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
