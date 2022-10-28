import { useState, useEffect } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  console.log(categoryId)
  
  useEffect(() => {

    const asyncFunction = categoryId ? getProductByCategory : getProducts

    asyncFunction(categoryId)
      .then(products => {
          setProducts(products)
      })
  }, [categoryId])
  
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