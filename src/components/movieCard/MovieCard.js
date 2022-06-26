import React from 'react';
import "./movieCard.css";

const MovieCard =({movie, id, isSelected, popUpVisible}) => {
  return (
    <div className='movieCard' id={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          width="250rem"
          height="400rem"
          className={`${isSelected ? 'selected' : ''}`} /> 

          {
            isSelected && popUpVisible
              ? <div className='hidden'> 
                  <div className='popUp'>
                  <h6>title</h6>
                    <p>tagline</p>
                    <p>owervju</p>
                    <p>vote avrage</p>
                  </div>
                </div>
            : null
          }
       </div>
  )
}



export default MovieCard;