import React,{useEffect, useState} from 'react'
import axios from '../axios/axios'
import {API_Key,imageurl} from '../constants/constant.js'
import './banner.css'
function Banner() {
  
  const [Movie, setMovie] = useState()
  const [random,setrandom]=useState(0)
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((res)=>{
      console.log(res);
      setMovie(res.data.results[getRndInteger(1,19)])
    })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${Movie ? imageurl+Movie.backdrop_path:''})`}}
    className='banner_outline'>
      <div className="content">
        <h1 className='title'>{Movie ? Movie.title:""}</h1>
        <div className='content_btns'>
          <button className='content_btn'>+ Play</button>
          <button className='content_btn'>= My List</button>
        </div>
        <p className='discrption'>{Movie ?  Movie.overview:''}</p>
      </div>
    </div>
  )
}

export default Banner

// key : 67f9e3aac61defb1812cca02e8d5c11e
