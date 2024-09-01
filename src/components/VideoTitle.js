import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[20%] px-20 text-white w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold px-2'>{title}</h1>
        <p className='w-1/4 py-3 px-3'>{overview}</p>
        <div className='mx-3'>
            <button className='bg-white text-black rounded-lg px-4 py-2 w-24 font-extrabold hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-600 text-white rounded-lg px-4 py-2 w-32 ml-3 bg-opacity-55 font-extrabold'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle