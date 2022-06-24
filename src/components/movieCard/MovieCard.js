import React from 'react';
import "./movieCard.css";

const MovieCard = props => {
  console.log("movie card props.movie ", props.movie)
  return (
    <div className='movieCard'>
        <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.original_title} />
    </div>
  )
}



export default MovieCard;