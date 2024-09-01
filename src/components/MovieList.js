import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(movies==null)return;
  return (
    <div className='p-2'>
        <h1 className='text-3xl text-white p-2'>{title}</h1>
        <div className='flex overflow-x-scroll custom-scrollbar'>
            <div className='flex'>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList