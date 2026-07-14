import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Artist from './pages/Artist'
import Journal from './pages/Journal'
const App = () => {
  return (
    <>
      <CursorGlow>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Journal" element={<Journal />} />
        </Routes>
      </CursorGlow>
    </>
  )
}

export default App
