import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import PublicRoute from './pages/PublicRoute'
import PrivateRoute from './pages/PrivateRoute'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Auth from './pages/Auth'


const App = () => {
  return (
    <>
      <div>
        
        {/* Public Routes */}
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/auth' element={<Auth />} />
          </ Route >
        {/* Private Routes */}
          <Route element={<PrivateRoute />} >
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/profile/:id" element={<UserProfile />} />
            
          </Route>
        </Routes>
      </div>

    </>
  )
}

export default App
