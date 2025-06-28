import React, { useContext } from 'react'
import Slider from "react-slick";
import mens from "../Img/mens.jpg";
import women from "../Img/women.jpg";
import electronics from "../Img/electronics.jpg";
import jewelery from "../Img/jewelery.jpg";

export default function SliderCategories() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
    
  return (
    <>
           <Slider className="  w-[70%] mx-auto pt-10 capitalize " {...settings}>
        <div className="relative rounded-2xl w-full h-52 ">
          <h2 className=" font-bold text-white text-3xl md:text-5xl  flex justify-center h-52 items-center">
            men's clothing
          </h2>
          <img
            className=" blur-xs top-0 left-0 w-full h-full -z-10 absolute"
            src={mens}
            alt=""
          />
        </div>
        <div className=" relative rounded-2xl w-full h-52 ">
          <h2 className=" font-bold  text-3xl md:text-5xl  flex justify-center h-52 items-center">
            jewelery
          </h2>
          <img
            className=" blur-xs top-0 left-0 w-full h-full -z-10 absolute"
            src={jewelery}
            alt=""
          />
        </div>
        <div className=" relative rounded-2xl w-full h-52 ">
          <h2 className=" font-bold text-white text-3xl md:text-5xl  flex justify-center h-52 items-center">
            electronics
          </h2>
          <img
            className=" blur-xs top-0 left-0 w-full h-full -z-10 absolute"
            src={electronics}
            alt=""
          />
        </div>
        <div className=" relative rounded-2xl w-full h-52 ">
          <h2 className=" font-bold  text-3xl md:text-5xl  flex justify-center h-52 items-center">
            women's clothing
          </h2>
          <img
            className=" blur-xs top-0 left-0 w-full h-full -z-10 absolute"
            src={women}
            alt=""
          />
        </div>
      </Slider> 
    </>
  )
}
