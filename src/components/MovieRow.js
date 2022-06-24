import React from 'react'
import MovieCard from './movieCard/MovieCard'

const MovieRow = (props) => {
  console.log("movie row ", props);
  return (
    <div>
        <h3>{props.genreName}</h3>
        <div className='row'>
            {props.data.map(movie => {
             return <MovieCard movie={movie}/>
            })}
        </div>
        
    </div>
  )
}

export default MovieRow