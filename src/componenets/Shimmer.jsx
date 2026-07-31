import React from 'react'

const Shimmer = () => {
  return (
    <div className='mx-2  px-2'>
      <div className="w-30 h-40 md:w-60 md:h-80 rounded-lg bg-gray-300 ">
      <div className="h-2/3 bg-gray-400" /> 
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="h-3 bg-gray-400 rounded w-1/2" />
      </div>
    </div>
    </div>
  )
}

export default Shimmer;