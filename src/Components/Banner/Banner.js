import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../constants/Constants'
import {imageUrl} from '../../constants/Constants'
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US'`).then((res)=>{
    console.log(res.data);
    const random = Math.floor(Math.random()*20)
    setMovie(res.data.results[random])
    
   })
  
  }, [])
  
  return (
  
      
    <div className='Banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
        <div className='Content'>
            <h1 className='Title'>{movie ? movie.title : ""}</h1>
            <div className='Banner_buttons'>
                <button className='Button'>Play</button>
                <button className='Button'>My list</button>
            </div>
            <h1 className='Descriptions'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  
  )
}

export default Banner