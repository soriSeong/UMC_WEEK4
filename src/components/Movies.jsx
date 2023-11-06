import React from 'react';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';

function Movies({title, poster_path, vote_average}) {
  return (
    <div className='movie-container'>
      <img src={IMAGE_BASE_URL + poster_path} alt='영화포스터' />
      <div className='movie_info'>
        <h4>{title}</h4>
        <div>{vote_average}</div>
      </div>

    </div>
  )
}

export default Movies;
