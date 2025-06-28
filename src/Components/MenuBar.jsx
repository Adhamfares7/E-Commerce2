import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBar() {
  return (
    <div>
          <div className="bg-red-600 z-50 absolute right-0 rounded-2xl ">
          <ul className=" pr-32 pl-3 py-2 capitalize">
              <li className=" cursor-pointer"> <Link to="/">Home</Link> </li>
              <li className=" cursor-pointer mt-2"> <Link to="products">Product</Link> </li>
              <li className=" cursor-pointer mt-2"> <Link to="categories">Category</Link> </li>
              <li className=" cursor-pointer mt-2"> <Link to="cart">Cart</Link> </li>
            </ul>
          </div> 
    </div>
  )
}
