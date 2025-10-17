import { Link } from 'react-router-dom';

function ProdCarrito({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      <Link to={`/producto/${product.id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
}

export default ProdCarrito;
