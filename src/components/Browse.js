import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse