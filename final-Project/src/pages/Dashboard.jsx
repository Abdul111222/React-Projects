import React from 'react'
import DashboardCard from '../components/DashboardCard'
import DashboardNavbar from '../components/DashboardNavbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router'


const Dashboard = () => {
  const navigate = useNavigate();

  const [storeData, setStoreData] = useState([]);

  const ApiCall = async () => {
    let ApiRes = await axios.get("https://dummyjson.com/users");
    if (ApiRes) {
      setStoreData(ApiRes.data.users)
    }

  }
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/auth");
      return;
    }

    ApiCall();
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <div className='flex justify-evenly flex-wrap p-2.5 md:gap-6.5'>
        {storeData.length > 0 ? storeData.map((user) => {
          return (
            <DashboardCard
              key={user.id}
              user={user} />
          )
        }) : <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default Dashboard
