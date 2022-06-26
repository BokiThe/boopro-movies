import MovieCard from '../movieCard/MovieCard'
import './movieRow.css';

const MovieRow = ({genreName, selectedTitleIndex, popUpVisible, titles}) => {
  return (
    <div className='movieContainer'>
        <h3>{genreName} - Slected index: {selectedTitleIndex}</h3>
      <div className="movieRow">
            {titles && titles.map((title, index) => <MovieCard key={index} title={title} isSelected={index === selectedTitleIndex} popUpVisible={popUpVisible} />)}
            
      </div>
    </div>
            
    
  )
}

export default MovieRow