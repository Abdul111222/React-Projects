import React from 'react'
import { useNavigate } from 'react-router'

const DashboardCard = ({user}) => {
    const navigate =useNavigate();
    return (
        <div onClick={()=> navigate(`/profile/${user.id}`)} className='p-3 flex just md:h-20 md:w-90 rounded-2xl shadow-md outline outline-gray-300 cursor-pointer hover:outline-blue-400 hover:shadow-blue-400   '>
            <div className='flex gap-4 items-center '>
                <img className=' rounded-full object-cover md:h-14' src={user.image} alt="" />
                <div>
                    <p className=''>{user.firstName} {user.lastName}</p>
                    <p className='text-gray-500 md:text-[15px]'>{user.company.title}</p>
                    <p className='text-gray-500 md:text-[15px]'>{user.address.city} ,{user.address.country}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
