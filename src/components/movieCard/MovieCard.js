import React from 'react';
import "./movieCard.css";

const MovieCard =({movie}) => {
  return (
    <div className='movieCard'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
    </div>
  )
}



export default MovieCard;