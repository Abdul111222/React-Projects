import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import axios, { isCancel, AxiosError } from "axios";
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  const [apiStore, setApiStore] = useState({});
  const apiCall = async () => {
    let apiRes = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Karachi,PK&appid=8cd970a0f8b5b17d3474a14c9587365f&units=metric");
    if (apiRes.data) {
      setApiStore(apiRes.data);
    }

  }
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div>
      <WeatherCard Api={apiStore}/>
    </div>
  )
}

export default Home
