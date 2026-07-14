import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/50 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md text-white">
            <div className=" h-[4em] md:max-w-7xl md:mx-auto flex items-center gap-12  justify-end  md:justify-between ">
                {/* Mobile Button */}
                
                <h1 className=" font-['Cinzel'] text-3xl sm:text-2xl md:text-2xl lg:text-6xl xl:text-4xl 2xl:text-4xl font-bold  animated-text">
                    ◐ MY|GALLERY 
                </h1>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" md:hidden "
                >
                     ☰
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    <li><NavLink className={'stroke-gray-50 story-link rounded p-2 text-gray-300  hover:text-white'} to="/">Home</NavLink></li>
                    <li><NavLink className={'stroke-gray-50 story-link rounded p-2 text-gray-300  hover:text-white'} to="/Gallery">Gallery</NavLink></li >
                    <li><NavLink className={'stroke-gray-50 story-link rounded p-2 text-gray-300  hover:text-white'} to="/Artist">Artist</NavLink></li >
                    <li><NavLink className={'stroke-gray-50 story-link rounded p-2 text-gray-300  hover:text-white'} to="/Journal">Journal</NavLink></li>
                </ul>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className=" items-center md:hidden flex flex-col p-2.5 pr-2.5">
                    <li><NavLink to="/"> ❍ Gallery</NavLink></li>
                    <li><NavLink to="/Gallery"> ❍ Gallery</NavLink></li>
                    <li><NavLink to="/Artist"> ❍ Artist</NavLink></li>
                    <li><NavLink to="/Journal"> ❍ Journal</NavLink></li>
                </ul>
            )}
        </nav>
    );
}



export default Navbar
