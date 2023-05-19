import React from 'react'

const SingleGallery = ({item}) => {
    const {picture} = item;
  return (
    <div className='p-5 border'>
        <img src={picture} className=' mx-auto w-full max-w-[200px]' alt="" />
    </div>
  )
}

export default SingleGallery