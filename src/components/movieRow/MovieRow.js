import React, {useEffect,useState} from 'react'
import MovieCard from '../movieCard/MovieCard'
import axiosInst from '../../utils/axiosInst';
import './movieRow.css';
const MovieRow = ({genreName,genreId}) => {
const [moviesArr, setMoviesArr] = useState([]);

useEffect(()=>{
  const fetchData = async ()=> {
   const movies = await axiosInst.get(`/discover/movie?with_genres=${genreId}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`)
   .then(data => Promise.resolve(data) )
   .catch(err => console.log('nesto nije u redu', err));
  setMoviesArr(movies.data.results)
  }
  fetchData()
},[genreId])

  return (
    <div className='movieContainer'>
        <h3>{genreName}</h3>
        <div className='movieRow'>
            {moviesArr.map((movie, index) => {
             return <MovieCard key={index} movie={movie}/>
            })}
        </div>
        
    </div>
  )
}

export default MovieRow