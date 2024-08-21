// Import necessary hooks from React
import { useCallback, useEffect, useState } from "react";
// Import custom components
import { HangmanDrawing } from "./components/hangmanDrawing";
import { HangmanWord } from "./components/hangmanWord";
import { Keyboard } from "./components/keyboard";
import Header from "./components/Header";
// Import Material UI components and Icons
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button } from "@mui/material";
// Import utility function to get a random word
import getWord from "./utils/Hooks";

function Index() {
  // The maximum number of incorrect guesses allowed
  const guessLimit = 6;

  // State for the word to be guessed
  const [wordToGuess, setWordToGuess] = useState(getWord);
  // State for the letters guessed by the player
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // State for the number of attempts made
  const [attempt, setAttempt] = useState(0);
  // State for the player's score
  const [score, setScore] = useState(0);

  // Filter out incorrect guesses
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // Check if the player has lost (6 or more incorrect guesses)
  const isLoser = incorrectLetters.length >= guessLimit;
  // Check if the player has won (all letters in the word have been guessed)
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Callback function to add a guessed letter
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      if (!wordToGuess.includes(letter)) {
        setAttempt((prev) => prev + 1);
      }
    },
    [guessedLetters, isWinner, isLoser, wordToGuess]
  );

  // Effect to handle keypress events for letter guesses
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  // Effect to handle keypress events for game reset
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  // Effect to update score based on game outcome
  useEffect(() => {
    if (isWinner) {
      setScore((prev) => prev + wordToGuess.length + attempt);
    }
    if (isLoser && score >= 2) {
      setScore((prev) => prev - 2);
    }
  }, [isWinner, isLoser, wordToGuess.length, attempt, score]);

  // Function to handle game reset
  const handleReset = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
    setAttempt(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "0 auto",
        maxWidth: "800px",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {/* Display header with player score, guess limit, and attempts */}
      <Header playerScore={score} guessLimit={guessLimit} attempts={attempt} />
      {/* Display win/lose message */}
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
        {(isWinner || isLoser) && (
          <Button startIcon={<RefreshIcon />} onClick={handleReset} />
        )}
      </div>
      {/* Render hangman drawing based on incorrect guesses */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      {/* Render the word to guess */}
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      {/* Render the keyboard */}
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </Box>
  );
}

// Export the Index component as the default export
export default Index;
