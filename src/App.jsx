
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Component/header';
import Footer from './Component/footer';
import Nav from './Component/nav';

import Main from './Component/main';
import Productos from './Component/productos';
import Carrito from './Component/carrito';
import Detalles from '../pages/detalles'
import Electronica from '../pages/electronica';

 

function InicioPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newProduct = {
      product,
      uniqueId: `${product.id}-${Date.now()}`,
    };
    setCart(prevCart => [...prevCart, newProduct]);
  };

  const removeFromCart = (uniqueId) => {
    setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <>
      <Main />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Productos addToCart={addToCart} />
        <Carrito cartItems={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Nav />
       <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/electronica" element={<Electronica />} />
        <Route path="/producto/:id" element={<Detalles />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
