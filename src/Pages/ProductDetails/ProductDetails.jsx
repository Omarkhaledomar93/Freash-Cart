import React, { useEffect, useState } from 'react'
import style from "./ProductDetails.module.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'

export default function ProductDetails() {


  let {id} = useParams() 
const [details, setDetails] = useState({})


  function getDetails(){

    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then((data)=> setDetails(data.data.data))
    .catch((error)=> console.log(error))


  }
  
  useEffect(() => {
    getDetails()
  }, [])
  
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  
  }
  

  
  
  return (
    <div>

<Helmet>
            
                <title>{details.title}</title>
                
            </Helmet>
      <div className="container">
      <div className="row items-center mt-10">
        <div className=" w-full md:w-1/3 lg:w-1/4 p-3">
        <Slider {...settings}>

        {details?.images?.map((image)=>(

        <img src={image} alt="" className='h-64 w-full object-contain' />


       ) ) }

        </Slider >
        
        
        </div>
        <div className="  px-10  w-full md:w-1/3 lg:w-3/4 ">
      <div className="inner">


      <h1 className='text-3xl'>{details.title}</h1>
        <small className='text-slate-500'>{details.description}</small>
        <p>{details?.category?.name}</p>
        
        <div className="flex justify-between">
        <p>{details.price} EGP</p>
        <div>
          {details.ratingsAverage}
          <i className='fa-solid fa-star text-yellow-300'></i>
        </div>
 
        </div>
        <button className='bg-green-500 rounded p-2 mt-3 text-white'>
          {" "}
           Add to cart</button>
      </div>

        
        
        
        </div>

      </div>
      </div>
    </div>
  )
}
