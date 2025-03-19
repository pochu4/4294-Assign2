import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AllPokemon from './pages/AllPokemon';
import Pokemon from './pages/Pokemon';




function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" />} />
        <Route path="/pokemons" element={<AllPokemon />} />
        <Route path="/pokemons/:id" element={<Pokemon />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
