import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleDoll = ({item}) => {
    const {picture,name,_id,category,price,ratings} = item
  return (
    <div className='border rounded-md py-6 px-4'>
        <div>
            <img src={picture} className='max:w-[200px] mb-6 h-[250px] object-contain  w-full' alt="" />
        </div>
        <h3 className='text-3xl font-Bubblegum text-left'>{name}</h3>
        <p className='font-Jost font-semibold text-left'>Category: {category}</p>
        <div className='flex items-center justify-between mt-4'>
            <p className='font-Jost font-semibold'>price: ${price}</p>
            <p className='font-Jost font-semibold'>ratings: {ratings}</p>
         </div>
         <div className='text-right mt-12'>
            <NavLink to={`/toy_details/${_id}`} className="text-white py-2 px-8 rounded-lg font-semibold font-Jost border border-primary bg-primary  ">View Details</NavLink>
         </div>
    </div>
  )
}

export default SingleDoll