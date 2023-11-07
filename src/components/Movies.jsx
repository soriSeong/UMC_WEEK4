import React,{ useState } from "react";

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';

function Movies({title, poster_path, vote_average, overview}) {

  const [isHovered, setisHovered] = useState(false);
    const handleMouseOver =() =>{
        setisHovered(true);
    }
    const handleMouseOut =()=>{
        setisHovered(false);
    }

  return (
    <div className='movie-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={`infoBox ${isHovered ? 'visible' : 'hidden'}`}>
        <h4 className='infoTitle'>{title}</h4>
        <div className='overview'>{overview}</div>
      </div>
      <img src={IMAGE_BASE_URL + poster_path} alt='영화포스터' />
      <div className='movie_info'>
        <h4>{title}</h4>
        <div>{vote_average}</div>
      </div>

    </div>
  )
}

export default Movies;
