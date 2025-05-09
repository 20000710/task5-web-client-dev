import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PokemonProvider } from './context/PokemonContext.tsx'
import { GridViewProvider } from './context/GridViewContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonProvider>
      <GridViewProvider>
        <App />
      </GridViewProvider>
    </PokemonProvider>
</React.StrictMode>
)
