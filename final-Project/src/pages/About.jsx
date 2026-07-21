import React from 'react'
import PublicNavbar from '../components/PublicNavbar'

const About = () => {
  return (
    <div>
      <PublicNavbar />
      <div className='flex justify-center items-center min-h-screen '>
      <h1 className='md:text-6xl text-3xl font-bold text-blue-400'>This is a About Page..</h1>
    </div>
    </div>
  )
}

export default About
