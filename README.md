# A Hangman Game Using Typescript

A fun and interactive Hangman game built with React (Typescript). Players can guess letters to reveal a hidden word before running out of attempts

## Authors

- [Daniel Agufenwa](https://www.github.com/daniel-devi)

## Demo

[Demo](https://5173-danieldevi-reacthangman-xzf525m9w2i.ws-eu115.gitpod.io/)

## Environment Variables

`This Project Currently has no Environment Variables`

## Tech Stack

**Client:** `React-Typescript`, `CSS`, `Material_UI`, `Material_Icon`

## Features

- Light/dark mode toggle
- ON-Screen Keyboard
- Guess a word
- Points SYSTEM
- Has 6 Attempt and can track it

## Run Locally

Clone the project

```bash
  git clone https://github.com/daniel-devi/React-Hangman
```

Go to the project directory

```bash
  cd React_hangman
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
