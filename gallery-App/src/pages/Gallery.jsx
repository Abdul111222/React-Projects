import React from 'react'
import { useEffect,useState } from 'react'
import Card from '../components/Card'
import axios from "axios";

const Gallery = () => {
    const [sortData, setSortData]=useState([]);
    const [pages,setPages]=useState(1);
    const [limit,setLimit]=useState(12);


    const apiCall = async () => {
        let apiRes = await axios.get(`https://picsum.photos/v2/list?page=${pages}&limit=${limit}`)
        if (apiRes.data) {
            setSortData(apiRes.data)            
        }
    }
    useEffect(()=>{
        //  fetch("https://picsum.photos/v2/list?page=1&limit=30")
        // .then((res)=>(res.json()))
        // .then((result)=>(console.log(result)))

        // const getData = async () => {
        //     let apiRes = await fetch("https://picsum.photos/v2/list?page=1&limit=30")
        //     let result = await apiRes.json()
        //     console.log(result);
        // }
        // getData();
        apiCall();


    },[pages]);
    
    return (
        <>
        <div className='flex md:justify-evenly justify-around min-h-screen items-center flex-wrap'>
            {sortData.length > 0 ? sortData.map((post)=>{
                return(
                <Card post={post}/>)
            }):<h1 className='text-4xl flex justify-center items-center text-white md:min-h-screen'>Loading...</h1>}
            
        </div>
        <div className='flex justify-center gap-4.5'>
            <button
            onClick={()=> {setPages(prev => prev > 1 ? prev - 1 : prev)}} 
            className='bg-amber-300 w-20 md:w-40 md:h-10 rounded text-2xl text-black delay-30 transition-transform hover:scale-110'>prev</button>
            <button 
            onClick={() => {setPages(prev => prev + 1 )}}
            className='bg-amber-300 w-20 md:w-40 md:h-10 rounded text-2xl text-black delay-30 transition-transform hover:scale-110'>next {pages+1}</button>
            </div>
        </>
    )
}

export default Gallery
