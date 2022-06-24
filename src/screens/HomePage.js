import React,{useEffect,useState} from 'react'
import { Row } from 'react-bootstrap';
import MovieRow from '../components/movieRow/MovieRow';
// import axiosInst from '../utils/axiosInst'; // for all genres
import { genres } from '../ganres';
const HomePage = () => {
  // This is the state with all genres from api !!!

//   const [ganresArr, setGanresArr] = useState([]);

// useEffect(()=>{
//   const fetchData = async ()=> {
//    const ganres = await axiosInst.get(`/genre/movie/list?api_key=d38aa8716411ef7d8e9054b34a6678ac&language=en-US`)
//    .then(data => Promise.resolve(data) )
//    .catch(err => console.log('nesto nije u redu', err));
//   setGanresArr(ganres.data.genres)
//   }
//   fetchData()
// },[])
  return (
    <div>
        {genres.map((gen, index) => {
         return <MovieRow key={index}
         genreName={gen.name}
         genreId={gen.id}/>
        })}
    </div>
  )
}

export default HomePage