import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/50 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md text-white">
            <div className=" h-[4em] md:max-w-7xl md:mx-auto flex items-center gap-12  justify-end  md:justify-between ">
                {/* Mobile Button */}
                
                <h1 className="font-['Cinzel'] text-3xl sm:text-2xl md:text-2xl lg:text-6xl xl:text-4xl 2xl:text-4xl font-bold  animated-text">
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
                    <li className='story-link rounded p-2 text-gray-300  hover:text-white'><a href="/">Gallery</a></li>
                    <li className='story-link rounded p-2 text-gray-300  hover:text-white'><a href="/">Artist</a></li >
                    <li className='story-link rounded p-2 text-gray-300  hover:text-white'><a href="/">Journal</a></li >
                    <li className='story-link rounded p-2 text-gray-300  hover:text-white'><a href="/">Visit</a></li>
                </ul>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className=" items-center md:hidden flex flex-col p-2.5 pr-2.5">
                    <li><a href="/">❍ Gallery</a></li>
                    <li><a href="/">❍ Artist</a></li>
                    <li><a href="/">❍ Journal</a></li>
                    <li><a href="/">❍ Visit</a></li>
                </ul>
            )}
        </nav>
    );
}



export default Navbar
