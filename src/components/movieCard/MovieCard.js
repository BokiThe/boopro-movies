import React from 'react';
import "./movieCard.css";

const MovieCard =({movie,id}) => {
  return (
    <div className='movieCard' id={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} width="250rem" height="400rem" />
    </div>
  )
}



export default MovieCard;