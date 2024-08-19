import React, { useEffect, useState } from 'react';
import style from "./Products.module.css";
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';


export default function Products() {
  // const [products, setProducts] = useState([]);

  // function getProducts() {
  //   axios.get("https://ecommerce.routemisr.com/api/v1/products")
  //     .then(data => setProducts(data.data.data)) 
  //     .catch(error => console.log(error));
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  function getData() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")


  }


 let {isLoading,data,isError} = useQuery('Products', getData)

 

  return (
    <div className='row'>


      {data?.data?.data.length > 0 ? (




        data?.data?.data.map((product) => (
          
           <ProductItem product={product} />
          
        ))

      ) : (

        <Loader />
      )}
    </div>
  );
}
