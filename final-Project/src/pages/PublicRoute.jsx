import React from 'react'
import { Outlet } from 'react-router'
import PublicNavBar from '../components/PublicNavBar'


const PublicRoute = () => {
    return (
        <div>
            <PublicNavBar />
            <Outlet/>
        </div>
    )
}

export default PublicRoute
