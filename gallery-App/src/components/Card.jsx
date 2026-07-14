import React from 'react'

const Card = ({post}) => {
    return (
        <div className='flex md:flex-row flex-col md:justify-evenly items-center md:min-h-screen'>
            <div className='bg-gray-400     md:w-90 rounded-2xl'>
                <div>
                    <img className='md:h-100 rounded-2xl' src={post.download_url}  alt="" />
                </div>
                <div>
                    <h1 className='text-center text-black'>Author:{post.author}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
