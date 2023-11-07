import React from 'react';


function MoviesInfo({title, poster_path, vote_average}) {
  return (
    <div className='movie-container'>
      <div className='movie_info'>
        <h4>{title}</h4>
        <div>{vote_average}</div>
      </div>

    </div>
  )
}

export default MoviesInfo;
