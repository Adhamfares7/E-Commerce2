import React from 'react'

export default function Categories() {
  return (
    <div className='py-20'>
        <div className='w-[70%] mx-auto text-center capitalize bg-black my-2 py-10 cursor-pointer rounded-3xl hover:scale-105 transition-all duration-300'>
            <h2 className='text-2xl font-bold text-white'>men's clothing</h2>
        </div>
        <div className='w-[70%] mx-auto text-center capitalize bg-black my-2 py-10 cursor-pointer rounded-3xl hover:scale-105 transition-all duration-300'>
            <h2 className='text-2xl font-bold text-white'>jewelery</h2>
        </div>
        <div className='w-[70%] mx-auto text-center capitalize bg-black my-2 py-10 cursor-pointer rounded-3xl hover:scale-105 transition-all duration-300'>
            <h2 className='text-2xl font-bold text-white'>electronics</h2>
        </div>
        <div className='w-[70%] mx-auto text-center capitalize bg-black my-2 py-10 cursor-pointer rounded-3xl hover:scale-105 transition-all duration-300'>
            <h2 className='text-2xl font-bold text-white'>women's clothing</h2>
        </div>
    </div>
  )
}
