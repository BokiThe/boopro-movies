import React from 'react'
import { Row } from 'react-bootstrap';
import getMoviesByGanre from '../api/movies';
import MovieRow from '../components/MovieRow';
import { genres } from '../ganres';
const HomePage = () => {
  return (
    <div>
        {genres.map((gen, index) => {
           console.log( gen.id);
        
         return <MovieRow key={index}
         genreName={gen.name}
         id={gen.id}/>
        })}
    </div>
  )
}

export default HomePage