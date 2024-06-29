import YouTube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import axios from '../axios/axios'
import {API_Key,imageurl} from '../constants/constant'
import './poster.css'
function Poster(props) {
  const[Poster,setPoster]=useState([])
  const[travid,settravid]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      setPoster(res.data.results)
    })
  },[])
  const opts = {
    height: '550',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const  handelMovieClick=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_Key}`).then((res)=>{
      if(res.data.results.length!==0){
        settravid(res.data.results[0])
      }else{
        console.log("err")
      }
    })
  }
  return (
    <div className='poster-row'>
        <h3 className='poster-cate'>{props.title}</h3>
        <div className="posters">
         {
            Poster.map((obj)=><img onClick={()=>handelMovieClick(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={imageurl+obj.poster_path} alt='Poster'/>
          )}
        </div>
      {travid && <YouTube videoId={travid.key} opts={opts}/>}
    </div>
  )
}

export default Poster
