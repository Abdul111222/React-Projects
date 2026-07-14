import React from 'react'

const Card = ({post}) => {
    return (
        <div className='flex justify-evenly md:flex-row md:items-center    md:justify-evenly  md:min-h-screen'>
            <div className='bg-gray-400 w-45    md:w-90 rounded-2xl'>
                <div>
                    <img className='md:h-100 h-30 rounded-2xl' src={post.download_url}  alt="" />
                </div>
                <div>
                    <h1 className='md:text-2xl text-[7px] text-center text-black'>Author : {post.author}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
