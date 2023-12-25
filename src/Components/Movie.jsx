import React from "react";
import { InfoBox, MovieBox, MovieInfo } from "./Movie.style";

const Movie = ({movie}) => (
    <MovieBox>
        <InfoBox>
            <h4 className='infoTitle'>{movie.title}</h4>
            <div className='overview'>{movie.overview}</div>
        </InfoBox>
        <img 
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
        />
        <MovieInfo>
            <h4>{movie.title}</h4>
            <div>{movie.vote_average}</div>
        </MovieInfo>
    </MovieBox>
);

export default Movie;