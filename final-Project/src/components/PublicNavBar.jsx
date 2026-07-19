import React, { useState } from 'react'
import LSButton from './LSButton'
import Logo from './Logo'
import CenterButtons from './CenterButtons'
import { Link } from 'react-router'

const PublicNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {/* Desktop Navbar */}
            <div className="max-[720px]:hidden">
                <CenterButtons />
                <div className="flex justify-between items-center px-5 py-3">
                    <Logo />
                    <LSButton />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="flex max-[720px]:flex min-[721px]:hidden justify-between items-center px-5 h-16 shadow-md">
                <Logo />

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="text-3xl"
                >
                    ☰
                </button>
            </div>

            {/* Dark Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-50
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-5 border-b">
                    <Logo />

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/">Home</Link>
                    </li>

                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/about">About</Link>
                    </li>

                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/Services">Services</Link>
                    </li>

                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/Contact">Contact</Link>
                    </li>

                    <hr />

                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/login">Login</Link>
                    </li>

                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
           
        </>
    )
}

export default PublicNavBar