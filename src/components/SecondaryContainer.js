import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  if(movies == null)return;
  
  return (
    <div className='-mt-56 relative z-20 pl-16'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Trending" movies={movies.nowPlayingMovies}/>
      <MovieList title="Hollywood" movies={movies.nowPlayingMovies}/>
      <MovieList title="Award Winning" movies={movies.nowPlayingMovies}/>
      <MovieList title="Romantic Favourites" movies={movies.nowPlayingMovies}/>
      <MovieList title="Exciting Movies" movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer