import React from 'react'
import { useState } from 'react'

const Toggle = ({darkMode,setDarkMode}) => {
    return (
        <div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {darkMode ?  "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
    )
}

export default Toggle
