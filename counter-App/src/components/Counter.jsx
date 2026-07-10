import React from 'react'
import Toggle from './Toggle';
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState();
    return (
        <div
            className={`flex flex-col gap-2  justify-around  min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white "
          : "bg-white text-black"
      }`}>
            <div className='flex justify-end'>
                <Toggle
                darkMode={darkMode}
                setDarkMode={setDarkMode} />
                </div>
            <h1 className=' font-bold text-4xl flex justify-center items-center'>COUNTER</h1>
            <div className='flex gap-2 justify-around'>
                <button
                    onClick={() => { setCount(prevcount => prevcount > 0 ? prevcount -1 : 0) }}
                    className='cursor-pointer text-7xl bg-blue-300 p-3 rounded hover:text-white'>-</button>
                <p className='text-9xl' >{count}</p>
                <button
                    onClick={() => { setCount(prevcount => prevcount + 1) }}
                    className='cursor-pointer text-7xl bg-blue-300 p-2 rounded hover:text-white'>+</button>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={() => { setCount(0) }}
                    className='text-3xl bg-blue-300 p-2 rounded shadow-md hover:text-white cursor-pointer'>Reset</button>
            </div>
        </div>

    )
}

export default Counter
