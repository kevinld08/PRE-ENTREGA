import { useState, useEffect } from 'react';
import ProdCarrito from '../src/Component/ProdCarrito'; 
import Carrito from '../src/Component/carrito';

 

function Electronica() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(data => {
        setProducts(data);  
      })
      .catch(err => console.error("Error al cargar electrónicos", err));
  }, []);

  return (
     
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div className="product-list">
        {products.map(product => (
          <ProdCarrito key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Carrito cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
export default Electronica;
