import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-500">
            <div className="flex justify-around items-center h-16">
                <h1 className="text-white font-bold text-3xl">
                    Routing
                </h1>

                <ul className="flex gap-4 text-xl">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "bg-white text-green-600 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                    : "text-gray-300 hover:text-white hover:bg-green-600"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "bg-white text-green-600 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                    : "text-gray-300 hover:text-white hover:bg-green-600"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "bg-white text-green-600 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                    : "text-gray-300 hover:text-white hover:bg-green-600"
                                }`
                            }
                        >
                            Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                                    ? "bg-white text-green-600 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                    : "text-gray-300 hover:text-white hover:bg-green-600"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;