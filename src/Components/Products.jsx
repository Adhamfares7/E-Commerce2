import React, { useContext, useEffect } from "react";
import { CategoriesContext } from "./../Context/CategoriesContext";
import { IoIosStar } from "react-icons/io";
import axios from "axios";

export default function Products() {
  let { Categories } = useContext(CategoriesContext);


  return (
    <>
      <div className="flex flex-wrap py-20 w-[90%] mx-auto">
        {Categories?.map((item) => (
          <div key={item.id} className=" xl:w-1/5 lg:w-1/4 md:h-1/3 mx-auto group  py-5 px-5 justify-center items-center">
            <img className="w-52 mb-3 hover:scale-110 transition-all duration-300 h-52 object-contain" src={item.image} alt="" />
            <h2 className=" font-light text-red-600 text-sm">{item.category}</h2>
            <h2 className="font-bold">{item.title.split(" ").slice(0, 2).join(" ")} </h2>
            <div className=" flex justify-between">
                <h3 className=" font-bold">{item.price} EGP</h3>
            <h3 className="flex items-center ">{item.rating.rate} <IoIosStar className="ms-1 text-amber-400" /></h3>
            </div>
            <button className="bg-red-600 group-hover:opacity-100 ease-in-out hover:bg-transparent border-2 hover:border-red-600 hover:text-red-600 opacity-0 group-hover:translate-y-0 translate-y-20 transition-all duration-500  w-full text-white   py-2 rounded-xl mt-2 cursor-pointer  ">
                Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
