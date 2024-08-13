import React from 'react'
import style from "./MainSlider.module.css"
import image1 from "../../assets/bakery.jpg"
import image2 from "../../assets/vegetables.webp"
import image3 from "../../assets/fruits.jpeg"
import image4 from "../../assets/veg2.webp"

import Slider from 'react-slick'


export default function MainSlider() {
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  
  }
  
  
  
  
  
  return (
    <div className=' row'>
      
     <div className='w-3/4'>
     <Slider {...settings}>
     <img src={image1} alt="" className='w-full h-[400px]' />
     <img src={image4} alt="" className='w-full h-[400px]' />
     </Slider>
      </div>
     <div className='w-1/4'> 
     <img src={image2} alt="" className='h-[200px]' />
     <img src={image3} alt="" className='h-[200px]'/>
     </div>
    </div>
  )
}
