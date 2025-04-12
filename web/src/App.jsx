import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AllPokemon from './pages/AllPokemon';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';




function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pokemons" element={<AllPokemon />} />
        <Route path="/pokemons/:id" element={<Pokemon />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
