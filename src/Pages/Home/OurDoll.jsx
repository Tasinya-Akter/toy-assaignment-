import React, { useEffect, useState } from 'react';
import SingleDoll from '../../Components/SingleDoll/SingleDoll'
import { Link } from 'react-router-dom'

const OurDoll = () => {
    const [toy,setToy] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/toy_three")
        .then(res => res.json())
        .then(data => setToy(data))
    },[])



  return (
    <div className='py-10'>
        <div className='mb-8'>
            <h3 className='font-Bubblegum text-4xl text-primary text-center'>Our Dolls</h3>
        </div>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                toy && toy.map((item) => <SingleDoll item={item} key={item._id}></SingleDoll>)
            }
        </div>

        <div className='text-center mt-8'>
            <Link to="/all_toys" className='text-xl font-Bubblegum bg-primary py-2 px-8 rounded-lg text-white'>View All</Link>
        </div>
    </div>
  )
}

export default OurDoll