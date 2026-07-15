import React from 'react'

const WeatherCard = ({Api}) => {
    return (
        <div className='flex flex-col  '>
            <div className=''>
                <h1 className='text-2xl font-bold' >location    : {Api.name}  {Api?.sys?.country}</h1>
            </div>
            <div className=' flex justify-center items-center md:min-h-90'>
                <h1 className='text-5xl'>Current Temp: {Api?.main?.temp}°</h1>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-4.5 text-2xl '>
                    <li>feels like: {Api?.main?.feels_like}° </li>
                    <li>Pressure: {Api?.main?.pressure}hPa</li>
                    <li>Humidity: {Api?.main?.humidity} % </li></ul>
            </div>
        </div>
    )
}

export default WeatherCard
