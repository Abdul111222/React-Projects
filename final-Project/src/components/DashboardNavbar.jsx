import React from 'react'
import { useNavigate } from "react-router";

const DashboardNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    alert("Logged out successfully!");

    navigate("/auth");
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className=' flex md:h-15 md:text-2xl items-center justify-between p-2.5 outline outline-gray-200 shadow-md'>
      <h1> Welcome, {currentUser?.username} 👋</h1>
      <h1>Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardNavbar
