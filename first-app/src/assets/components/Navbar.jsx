import React from 'react'

const Navbar = () => {
    return (

        <div className='flex justify-around h-15 shadow-md'>
            <div className='text-2xl p-2.5 bg-blue-400 mr-200 rounded'>logo</div>
            <ul className='flex gap-10.5 items-center text-2xl'>
                <li className= 'cursor-pointer p-3 rounded hover:bg-gray-300'>Home</li>
                <li className= 'cursor-pointer p-3 rounded hover:bg-gray-300'>About</li>
                <li className= 'cursor-pointer p-3 rounded hover:bg-gray-300'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
