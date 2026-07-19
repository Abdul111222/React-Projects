import React from 'react'
import { Link } from 'react-router'

const CenterButtons = () => {
  return (
    <div className='flex justify-center'>
                <div className='flex shadow-md  bg-blue-400 md:h-15 items-center  my-5 rounded-md  fixed'>
                    <ul className='md:text-2xl flex md:flex-row gap-5.5 md:px-10'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
  )
}

export default CenterButtons
