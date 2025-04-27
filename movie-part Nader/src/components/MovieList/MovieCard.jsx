import React from 'react'
import "./MovieCard.css"

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className='movie_card'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='movie_poster' />
        <div className="movie_details">
            <h3 className='movie_details_heading'>{movie.original_title}</h3>
            <div className="align_center movie_data_rate">
                <p className='move_details_data'>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </div>
            <p className='movie_description'>
              {movie.overview.slice(0,100) + "..."}            
          </p>
        </div>
    </a>
  )
}

export default MovieCard