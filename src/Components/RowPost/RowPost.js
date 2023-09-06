import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import  axios from '../../axios'
import {imageUrl,API_KEY}  from '../../constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
 const [movie,setMovie] = useState([])
 const [urlId,setUrl] = useState('')
 useEffect(() => {
  axios.get(props.url).then((Response)=>{
    console.log(Response.data);
    setMovie(Response.data.results)
  }).catch(
    (err)=>{
      alert("Oops! somthing went wrong")
    }
  )

  return () => {
    
  }
}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleMovie = (id) =>{

  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
    console.log(Response.data);
    if(Response.data.results.length !== 0){
       setUrl(Response.data.results[0])
    }else{
      alert("Array empty")
    }
  })

}

    return (
      <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>
            <div >
            <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPosters' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
             <h3>{props.isSmall ? obj.original_title :obj.name }</h3>
            </div>
            )}
            </div>
              

        { urlId   &&    <Youtube opts={opts} videoId={urlId.key}  />}
      </div>
    )
  
}

export default RowPost