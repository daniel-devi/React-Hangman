// Import necessary components from Material-UI
import { Box } from "@mui/material"
import { useTheme } from "@mui/material"

// Define the HEAD component of the hangman
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
)

// Define the BODY component of the hangman
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
)

// Define the RIGHT_ARM component of the hangman
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

// Define the LEFT_ARM component of the hangman
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

// Define the RIGHT_LEG component of the hangman
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

// Define the LEFT_LEG component of the hangman
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

// Array containing all body parts of the hangman
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

// Define the props type for HangmanDrawing component
type HangmanDrawingProps = {
  numberOfGuesses: number
}

// HangmanDrawing component
export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const theme = useTheme()
  return (
    <Box sx={{ position: "relative", color: theme.palette.text.primary }}>
      {/* Render body parts based on the number of guesses */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* Render the vertical part of the gallows */}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      {/* Render the horizontal part of the gallows */}
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      {/* Render the main vertical pole of the gallows */}
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      {/* Render the base of the gallows */}
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </Box>
  )
}