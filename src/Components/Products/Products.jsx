import React, { useEffect, useState } from 'react';
import style from "./Products.module.css";
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';


export default function Products() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
      .then(data => setProducts(data.data.data)) 
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='row'>
      
      
      {products.length  > 0 ? (

      
      
      
      products.map((product) => ( 
        <Link 
        to={`productdetails/${product._id}`}
        
         className='w-1/2 md:w-1/3 lg:w-1/6 p-3' key={product.id}> 
          <ProductItem product={product} />
        </Link>
      ))
       
      ) : (

        <Loader/>
      )}
    </div>
  );
}
