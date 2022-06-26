import React from 'react';
import "./movieCard.css";

const MovieCard =({title, isSelected, popUpVisible}) => {
  return (
    <div className='movieCard'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
          alt={title.original_title}
          width="250rem"
          height="400rem"
          className={`${isSelected ? 'selected' : ''}`} /> 
          {
            isSelected && popUpVisible
              ? <div className='hidden'> 
                  <div className='popUp'>
                  <h6>{title.original_title}</h6>
                    <p>{title.tagline}</p>
                    <p>{title.overview}</p>
                    <p>{title.vote_average}</p>
                  </div>
                </div>
            : null
          }
       </div>
  )
}



export default MovieCard;