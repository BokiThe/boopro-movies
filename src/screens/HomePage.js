import React from 'react'
import { Row } from 'react-bootstrap';
import getMoviesByGanre from '../api/movies';
import MovieRow from '../components/MovieRow';
import { genres } from '../ganres';
const HomePage = () => {
  return (
    <div>
        {genres.map(gen => {
           console.log( gen.id);
         const movies = getMoviesByGanre(gen.id);
         console.log("homepage movies ",movies);
         return <MovieRow 
         genreName={gen.name}
         data={movies}/>
        })}
    </div>
  )
}

export default HomePage