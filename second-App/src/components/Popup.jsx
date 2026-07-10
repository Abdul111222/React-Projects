import React from 'react'
import Home from '../Home';
import { useState } from 'react';

const Popup = () => {
    const [showHome , setShowHome] =useState(false);
    if (showHome) {
        return(<Home />)
    }

    return (
        <div className="min-h-screen bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.OkPwdYDOEBRYI6O6MVbN1gHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=382fe23a37eb2768dc06fb55008212e3cdb4ee2dc8e994072383089fd9169d1d&ipo=images')] bg-cover bg-no-repeat flex   justify-center items-center )">
            <div className=" h-95 rounded-2xl w-full max-w-sm shadow-md bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.OkPwdYDOEBRYI6O6MVbN1gHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=382fe23a37eb2768dc06fb55008212e3cdb4ee2dc8e994072383089fd9169d1d&ipo=images')] bg-cover bg-no-repeat">
                <p className='flex items-center justify-center text-3xl font-serif mt-17 text-white font-bold'>Do you want to proceed ?</p>
                <div className='flex justify-around items-center mt-30'>
                    <button className='text-3xl font-bold font-sans p-1 pl-5 pr-5 rounded cursor-pointer hover:bg-green-400 hover:text-white bg-gray-400 hover:shadow-md'>No</button>
                    <button onClick={() => setShowHome(true)} className='text-3xl font-bold font-sans p-1 pl-5 pr-5 rounded cursor-pointer hover:bg-green-400 hover:text-white bg-gray-400 hover:shadow-md'>Yes</button>
                </div>
            </div>
        </div>

    )
}

export default Popup
