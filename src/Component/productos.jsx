import { useState, useEffect } from 'react';
import ProdCarrito from './ProdCarrito'; 

function Productos({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products", error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProdCarrito key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Productos;
