import React, { useState } from "react";
import Logo from "../Img/Logo.png";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";


export default function NavBar() {

  const [OpenBar, setOpenBar] = useState(false);


  return (
    <>
      <div className="w-full bg-red-600">
        <div className=" px-20 container text-white flex justify-between  items-center">
          <div className=" flex items-center cursor-pointer">
            <h1 className="font-bold text-2xl">Dawsha Store</h1>
            <img src={Logo} className="w-20" alt="" />
          </div>
          <div className="md:block hidden">
            <ul className="flex gap-3  capitalize">
              <li className=" cursor-pointer"> <Link to="/">Home</Link> </li>
              <li className=" cursor-pointer"> <Link to="products">Product</Link> </li>
              <li className=" cursor-pointer"> <Link to="categories">Category</Link> </li>
              <li className=" cursor-pointer"> <Link to="cart">Cart</Link> </li>
            </ul>
          </div>
          <div className="md:flex  hidden">
          <ul className="flex gap-3  capitalize">
              <li className=" cursor-pointer flex items-center"> 
              <FaRegUserCircle className="mx-1" /> <Link to="login">  Login</Link>  </li>
              <li className=" cursor-pointer flex items-center"> <FaRegUserCircle className="mx-1" /> <Link to="register">  Register</Link> </li>
            </ul>
          </div>
          <div className="cursor-pointer relative text-2xl md:hidden block">
          <FaBars onClick={()=> setOpenBar((prev)=>!prev)} />
            {
              OpenBar && <MenuBar/>
            }
            
          </div>
        </div>
      </div>

      {/* <div className=' overflow-x-hidden'>
        <Slider  {...settings}>
        {Categories?.map((item)=>(
            <div key={item.id}>
            <h2 >{item.category}</h2>
            <img className='w-40 h-40 object-contain '  src={item.image} alt="" />
            </div>
        ))}
        </Slider>
    </div> */}

    </>
  );
}
