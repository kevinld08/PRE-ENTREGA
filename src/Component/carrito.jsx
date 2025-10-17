function Carrito({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.uniqueId}>
             
              {item.product ? (
                <>
                  {item.product.title} - ${item.product.price}
                  <button
                    style={{
                      marginLeft: '10px',
                      color: 'white',
                      background: 'red',
                      border: 'none',
                      padding: '5px',
                    }}
                    onClick={() => removeFromCart(item.uniqueId)}
                  >
                    Eliminar
                  </button>
                </>
              ) : (
                <p>Producto no disponible</p> 
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
