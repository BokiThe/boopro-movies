import React, {useEffect,useState} from 'react'
import MovieCard from '../movieCard/MovieCard'
import axiosInst from '../../utils/axiosInst';
import './movieRow.css';

const MovieRow = ({genreName, genreId, id, selectedTitleIndex, popUpVisible}) => {
const [moviesArr, setMoviesArr] = useState([]);

useEffect(()=>{
  axiosInst.get(`/discover/movie?with_genres=${genreId}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`)
    .then(data => setMoviesArr(data.data.results))
    .catch(err => console.log('nesto nije u redu', err));
},[])

  return (
    <div className='movieContainer'>
        <h3>{genreName} - Slected index: {selectedTitleIndex}</h3>
        <div className='movieRow' id={id}>
            {moviesArr.map((movie, index,arr) => <MovieCard key={index} id={index} movie={movie} isSelected={index === selectedTitleIndex} popUpVisible={popUpVisible} />)}
        </div>
        
    </div>
  )
}

export default MovieRow