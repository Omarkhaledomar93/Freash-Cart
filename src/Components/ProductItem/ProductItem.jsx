import React from 'react'
import style from "./ProductItem.module.css"

export default function ProductItem({product}) {
  return (
    <>
    
    <div className='inner'>
    <img src={product.imageCover} alt="" />
    <p className='mt-2 text-green-500'>{product.category.name}</p>
    <h6 className='font-bold my-3'>{product.title.split(' ').slice(0, 2).join(' ')}</h6>
 
 
 
 
    <div className='row justify-between'>
    <p>{product.price}</p>
    <div className='text-slate-400'>
      <i className='fa-solid fa-star text-yellow-400'></i>
      <span>{product.ratingsAverage}</span>
    </div>
  </div>
 
 
  </div>

 
  
  </>
  )
}
