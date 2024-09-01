import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-40 m-2'>
        <img
        className=' rounded-lg'
            alt={movie.original_title}
            src={IMAGE_CDN_URL + movie.poster_path}
        />
    </div>
  )
}

export default MovieCard