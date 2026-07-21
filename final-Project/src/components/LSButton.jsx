import React from 'react'
import { Link } from 'react-router'

const LSButton = () => {
    return (
        <div className='flex  items-center md:px-8 my-2 gap-3.5'>
            <button className='shadow-md rounded-md w-28 bg-blue-400 md:h-15'><Link to="/auth" state={{ mode: "login" }}>Login</Link></button>
            <button className='shadow-md rounded-md w-28 bg-blue-400 md:h-15'><Link to="/auth" state={{ mode: "signup" }}z>signup </Link></button>
        </div>
    )
}

export default LSButton
