# Pokémon Explorer

A React application that allows users to explore and search through Pokémon using the PokéAPI. Built with React, Vite, and Tailwind CSS.

## Features

- Browse 100 Pokémon with detailed information
- Real-time search functionality
- Display Pokémon stats including height, weight, speed, experience, and attack
- Show Pokémon types and abilities
- Responsive card-based layout
- Loading animation with Pokéball spinner

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PokéAPI** - Pokémon data source

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── Pokemon.jsx      # Main component with API logic and search
├── PokemonCard.jsx  # Individual Pokémon card component
├── App.jsx          # Root component
└── main.jsx         # Entry point
```

## API

This project uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data. No API key required.
