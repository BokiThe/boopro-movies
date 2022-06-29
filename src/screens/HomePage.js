import React,{useEffect,useState} from 'react';
import MovieRow from '../components/movieRow/MovieRow';
import axiosInst from '../utils/axiosInst'; 
import { genres } from '../ganres';
import Pagination from 'react-js-pagination'


const HomePage = () => {
  //states for movements and movies
  const [selectedGenIndex, setSelectedGenIndex] = useState(0)
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0)
  const [popUpVisible, setPopUpVisible] = useState(false)
  const [titles, setTitles] = useState([]);
  const [activePage,setActivePage] = useState(1);
  // const [scrollY, setScrollY] = useState(0);
// async fetching all movies 
  const fetchAllTitle = async () => {

    const titlePromises = genres.map(genre => axiosInst.get(`/discover/movie?with_genres=${genre.id}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`))
    const titles = await Promise.all(titlePromises)

    setTitles(titles.map(title => title.data.results))
  }

  useEffect(() => {
    fetchAllTitle()
  }, [])
// handle movment function
  const handleKeyDown = (event) => {
    event.preventDefault();
    
    const minGenIndex = 0
    const maxGenIndex = titles.length ? titles.length - 1 : 0
    const minTitleIndex = 0
    const maxTitleIndex = titles[selectedGenIndex] ? titles[selectedGenIndex].length - 1 : 0;
    switch(event.key) {
      case 'ArrowUp':
        if (selectedGenIndex <= minGenIndex) return
        setSelectedGenIndex(curr => curr - 1)
        setPopUpVisible(false)
        break;

      case 'ArrowDown':
        if (selectedGenIndex >= maxGenIndex) return
        setSelectedGenIndex(curr => curr + 1)
        setPopUpVisible(false)
        break;

      case 'ArrowLeft':
        if (selectedTitleIndex <= minTitleIndex) return
        setSelectedTitleIndex(curr => curr - 1)
        setPopUpVisible(false)
        break;

      case 'ArrowRight':
        if (selectedTitleIndex >= maxTitleIndex) return
        setSelectedTitleIndex(curr => curr + 1)
        setPopUpVisible(false)
        break;

      case 'Enter':
        setPopUpVisible(true)
        break;

      case 'Escape':
        setPopUpVisible(false)
        break;

      default:
        console.log('Unrecognized key press.')
    }
  }
  // adding the event listner to window 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [titles, selectedGenIndex, selectedTitleIndex])

  return (
    <div className='homePage'>
        {genres.map((gen, index) => (
          <MovieRow
            key={index}
            genreName={gen.name}
            titles={titles[index]}
            popUpVisible={popUpVisible}
            selectedTitleIndex={selectedGenIndex === index ? selectedTitleIndex : null}
          />
            
     
        ))}
 
    </div>
  )
}

export default HomePage