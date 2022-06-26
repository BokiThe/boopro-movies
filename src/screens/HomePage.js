import React,{useEffect,useState} from 'react'
import { Row } from 'react-bootstrap';
import MovieRow from '../components/movieRow/MovieRow';
import axiosInst from '../utils/axiosInst'; 
import { genres } from '../ganres';

const HomePage = () => {
  const [selectedGenIndex, setSelectedGenIndex] = useState(0)
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0)
  const [popUpVisible, setPopUpVisible] = useState(false)
  const [titles, setTitles] = useState([])

  const fetchAllTitle = async () => {

    const titlePromises = genres.map(genre => axiosInst.get(`/discover/movie?with_genres=${genre.id}&page=1&api_key=d38aa8716411ef7d8e9054b34a6678ac`))
    const titles = await Promise.all(titlePromises)

    setTitles(titles.map(title => title.data.results))
    
    // .then(data => setMoviesArr(data.data.results))
    // .catch(err => console.log('nesto nije u redu', err));
  }

  useEffect(() => {
    fetchAllTitle()
  }, [])

  // useEffect(() => {
  //   console.log('selectGenIndex', selectedGenIndex)
  //   console.log('slectedTitleIndex', slectedTitleIndex)
  //   console.log('popUpVisible', popUpVisible)


  //   // if (titles.length) {
  //   //   if (selectGenIndex < 0) setSelectedGenIndex(0)
  //   //   if (selectGenIndex > genres.length - 2) setSelectedGenIndex(genres.length - 1)
    
  //   //   if (slectedTitleIndex < 0) setSelectedTitleIndex(0)
  //   //   if (slectedTitleIndex > titles[selectGenIndex].length - 2) setSelectedTitleIndex(titles[selectGenIndex].length - 1)
  //   // }

  // }, [selectedGenIndex, slectedTitleIndex, popUpVisible])

  const handleKeyDown = ({ key }) => {
    const minGenIndex = 0
    const maxGenIndex = titles.length ? titles.length - 1 : 0
    const minTitleIndex = 0
    const maxTitleIndex = titles[selectedGenIndex] ? titles[selectedGenIndex].length - 1 : 0

    console.log('selectGenIndex', selectedGenIndex)
    console.log('slectedTitleIndex', selectedTitleIndex)
    console.log('popUpVisible', popUpVisible)

    console.log('maxGenIndex', maxGenIndex)
    console.log('maxTitleIndex', maxTitleIndex)

    

    switch(key) {
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

  useEffect(() => {
    console.log('Setting event listener...')
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