import React, { useContext } from 'react'
import style from "./ProductItem.module.css"
import { cartContext } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function ProductItem({ product }) {

  const { addToCart } = useContext(cartContext)

  async function addProdcut(id) {

    let { data } = await addToCart(id)
    toast.success(data?.message,
      {
        position: "top-right",
      });
  }



  return (

    <div className='w-1/2 md:w-1/3 lg:w-1/6 p-3 inner product relative' >


      <Link to={`productdetails/${product._id}`}

        className=''
        key={product.id}>


        <img src={product.imageCover} alt="" />
        <p className='mt-2 text-green-500'>{product.category.name}</p>
        <h6 className='font-bold my-3'>
          {product.title.split(' ').slice(0, 2).join(' ')}</h6>

        <div className='row justify-between'>
          <p>{product.price}</p>
          <div className='text-slate-400'>
            <i className='fa-solid fa-star text-yellow-400'></i>
            <span>{product.ratingsAverage}</span>
          </div>
        </div>



      </Link>

      <button onClick={() => { addProdcut(product.id) }}
        className='bg-green-400 rounded px-2 btn   text-white absolute top-4' >+</button>


    </div>




  )
}
