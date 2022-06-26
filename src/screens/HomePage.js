import React,{useEffect,useState} from 'react'
import { Row } from 'react-bootstrap';
import MovieRow from '../components/movieRow/MovieRow';
// import axiosInst from '../utils/axiosInst'; // for all genres
import { genres } from '../ganres';

const HomePage = () => {
  const [selectGenIndex, setSelectedGenIndex] = useState(0)
  const [slectedTitleIndex, setSelectedTitleIndex] = useState(0)
  const [popUpVisible, setPopUpVisible] = useState(false)

  useEffect(() => {
    console.log('selectGenIndex', selectGenIndex)
    console.log('slectedTitleIndex', slectedTitleIndex)
    console.log('popUpVisible', popUpVisible)
  }, [selectGenIndex, slectedTitleIndex, popUpVisible])

  const handleKeyDown = ({ key }) => {
    const maxGenIndex = genres.length - 1

    switch(key) {
      case 'ArrowUp':
        if (selectGenIndex <= 0) return
        else setSelectedGenIndex(curr => curr - 1)
        break;

      case 'ArrowDown':
        if (selectGenIndex >= maxGenIndex) return
        else setSelectedGenIndex(curr => curr + 1)
        break;

      case 'ArrowLeft':
        if (slectedTitleIndex <= 0) return
        else setSelectedTitleIndex(curr => curr - 1)
        break;

      case 'ArrowRight':
        setSelectedTitleIndex(curr => curr + 1)
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
  }, [])

  return (
    <div className='homePage'>
        {genres.map((gen, index) => (
          <MovieRow
            key={index}
            popUpVisible={popUpVisible}
            genreName={gen.name}
            genreId={gen.id}
            selectedTitleIndex={selectGenIndex === index ? slectedTitleIndex : null}
            id={index}/>
        ))}
 
    </div>
  )
}

export default HomePage