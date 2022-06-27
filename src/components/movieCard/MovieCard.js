import React from 'react';
import "./movieCard.css";

const MovieCard =({title, isSelected, popUpVisible}) => {
  return (
    <div className='movieCard'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`}
          alt={title.original_title}
          className={`${isSelected ? 'selected' : ''}`} /> 
          {
            isSelected && popUpVisible
              ? <div className='popUpContainer'> 
                  <div className='popUp'>
                  <h4>{title.original_title}</h4>
                    <hr />
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