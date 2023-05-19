import React, { useEffect, useState } from 'react';
import SingleGallery from './SingleGallery';


const Gallery = () => {
    const [toy,setToy] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/toy_three")
        .then(res => res.json())
        .then(data => setToy(data))
    },[])



  return (
    <div className='py-10'>
        <div className='mb-8'>
            <h3 className='font-Bubblegum text-4xl text-primary text-center'>Gallery</h3>
        </div>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                toy && toy.map((item) => <SingleGallery item={item} key={item._id}></SingleGallery>)
            }
        </div>
    </div>
  )
}

export default Gallery