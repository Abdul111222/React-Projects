import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorGlow from './components/CursorGlow'
const App = () => {
  return (
    <div>
      <CursorGlow>
      <Navbar />
      <Hero/>
      </CursorGlow >
    </div>
  )
}

export default App
