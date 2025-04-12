import React from 'react';

import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import authRequired from './pages/authRequired';

import AllPokemon from './pages/AllPokemon';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const ProtectedAllPokemon = authRequired(AllPokemon);
const ProtectedPokemon = authRequired(Pokemon);


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt-token");
    setIsAuthenticated(false);
    navigate("/sign-in");
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/pokemons");
  }


  useEffect(() => {
    
    const jwtToken = localStorage.getItem("jwt-token");

    if (jwtToken) {

      setIsAuthenticated(true);

    }


  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header handleLogout={handleLogout} isAuthenticated={isAuthenticated}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn handleLogin={handleLogin} />}/>
        <Route path="/pokemons" element={<ProtectedAllPokemon/>} />
        <Route path="/pokemons/:id" element={<ProtectedPokemon />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
