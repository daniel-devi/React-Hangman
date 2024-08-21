// Import the list of words from a JSON file
import words from "../components/wordList.json";
// Import necessary hooks from React

/**
 * Selects a random word from the words array.
 * @returns {string} A randomly selected word.
 */
export default function getWord() {
  // Generate a random index within the range of the words array length
  const randomIndex = Math.floor(Math.random() * words.length);

  // Return the word at the randomly generated index
  return words[randomIndex];
}

// Capitalise Letters
export const ToUpperCase = ({ word }: { word: string }) => {
  return word.toUpperCase();
};