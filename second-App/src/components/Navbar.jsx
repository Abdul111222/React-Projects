import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <h1 className="text-2xl font-bold">
                    Second App
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    <li className='rounded p-2 hover:bg-blue-300 hover:text-black'><a href="/">Home</a></li>
                    <li className='rounded p-2 hover:bg-blue-300 hover:text-black'><a href="/">About</a></li >
                    <li className='rounded p-2 hover:bg-blue-300 hover:text-black'><a href="/">Services</a></li >
                    <li className='rounded p-2 hover:bg-blue-300 hover:text-black'><a href="/">Contact</a></li>
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col px-6 pb-4 gap-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            )}
        </nav>
    );
}



export default Navbar
