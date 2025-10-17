import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detalles() {
  const { id } = useParams();  
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar producto', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ maxWidth: '200px' }} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
    </div>
  );
}

export default Detalles;
