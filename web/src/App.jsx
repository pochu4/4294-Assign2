import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AllItems from './pages/AllItems';
import Item from './pages/Item';




function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/items" />} />
        <Route path="/items" element={<AllItems />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
