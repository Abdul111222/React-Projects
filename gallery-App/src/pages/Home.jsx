import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {


  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col text-center '>
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold font-[Black_Ops_One,sans-serif]">Welcome to <span className='animated-text'>M</span><span className='animated-text'>y</span></h1>
        <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-extrabold font-[Black_Ops_One,sans-serif]'>Gallery</h1>
      </div>
      <br />
      <div className='flex flex-col text-center text-gray-300'>
        <p className=' text-2xl font-sans'>A curated collection of moving art — where color drifts, light bends,</p>
        <p className='story-linked text-2xl font-sans'>and every frame invites you to linger.</p>
      </div>
      <br />
      <div className=' flex flex-col md:flex-row items-center gap-4'>
        <button

          className="
    border-3
    h-13
    w-50
    group
    relative
    flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-full
    bg-yellow-200
    px-8
    py-4
    font-bold
    text-black
    transition-all
    duration-300
    hover:scale-105
  "
        >
          {/* Sliding Gradient */}
          <span
            className="
      absolute
      inset-0
      -translate-x-full
      bg-linear-to-r
      from-violet-600
      via-fuchsia-500
      to-indigo-500
      transition-transform
      duration-500
      ease-out
      group-hover:translate-x-0
    "
          ></span>

          {/* Button Content */}
          <span className="relative z-10">
            <NavLink to="/Gallery">Enter the Gallery</NavLink>
          </span>

          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p className='text-gray-300 hover:text-white text-1 story-link'>
          <NavLink to="/Journal">Read the Jouranal</NavLink></p>
      </div>
    </div>
  )
}

export default Home
