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
                  <h1>{title.original_title}</h1>
                    <hr />
                    <h3>{title.tagline}</h3>
                    <h3><h1>Overview</h1> <br /> {title.overview}</h3>
                    <h3>Raiting:{title.vote_average}</h3>
                  </div>
                </div>
            : null
          }
       </div>
  )
}



export default MovieCard;