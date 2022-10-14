import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
      .then(products => {
          setProducts(products)
      })
  }, [])
  
  return (
      <div>
        <h1>Listado de productos</h1>
        {products.map(product => {
          return (
            <div key={product.id}>
              <img src={product.img} alt={product.name}/>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`detail/${product.id}`}>Ver detalle</Link>
            </div>
          )
        })}
      </div>
    );
  };
  
  export default ItemListContainer;