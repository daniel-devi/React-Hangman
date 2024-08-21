import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "./ColorModeContext";
import { ToUpperCase } from "../utils/Hooks";

type HeaderProps = {
  playerScore: number;
  attempts: number;
  guessLimit: number;
};

function Header({ playerScore, attempts, guessLimit }: HeaderProps) {
  const theme = useTheme();
  const colorMode = useColorMode();
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        gap: 20,
      }}
    >
      <h1>Hangman</h1>

      <div>Player Score: <b>{playerScore}</b></div>

      <div>
        Attempt: {attempts} / {guessLimit}
      </div>

      <div className="dark-mode-toggle">
        {ToUpperCase({ word: `${theme.palette.mode} mode` })}
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
    </Box>
  );
}

export default Header;
