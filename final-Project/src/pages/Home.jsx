import React from 'react'
import PublicNavbar from '../components/PublicNavbar'

const Home = () => {
  return (
    <>
    <PublicNavbar/>
    <div className='flex justify-center items-center min-h-screen '>
      <h1 className='md:text-6xl text-3xl font-bold text-blue-400'>This is a Home Page..</h1>
    </div>
    </>
  )
}

export default Home
