import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center gap-4'>
      <h1 className="text-4xl font-bold">This is the Home Page..</h1>
      <button className=
      'bg-blue-300 h-15  w-45 rounded-3xl text-black font-bold text-1xl cursor-pointer  hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]'><Link to="weather">Go to Weather App</Link>
      </button>
      <Outlet />
    </div>
  )
}
export default Home
