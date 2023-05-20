import React from 'react'
import { useLoaderData } from 'react-router-dom';
import style from './ToyDetails.module.css';
import useTitle from '../../Hooks/useTitle';

const ToyDetails = () => {
    useTitle("Details")
    const my = useLoaderData();
    const {name,picture,ratings,price,category,shortDescription,quantity,displayName} = useLoaderData();


  return (
<div>
    <div className={style.details}>
        <h2 className='text-center font-Bubblegum text-4xl text-white'>{category}</h2>
    </div>
<div className='py-14 container mx-auto'>
        <div className='text-center'>
            <div className='p-5 w-full max-w-[500px] mx-auto rounded-lg border'>
                <img src={picture} className='w-full mb-5 max-w-[250px] mx-auto' alt="" />
                <h3 className='text-3xl font-Bubblegum text-left'>{name}</h3>
                <p className='font-Jost font-semibold text-left'>Category: {category}</p>
                <div className='flex items-center justify-between mt-4'>
                    <p className='font-Jost font-semibold'>price: ${price}</p>
                    <p className='font-Jost font-semibold'>ratings: {ratings}</p>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='font-Jost font-semibold'>Quantity: {quantity}</p>
                    <p className='font-Jost font-semibold'>Author: {displayName}</p>
                </div>
                <p className='font-Jost font-semibold text-left mt-4'>{shortDescription}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default ToyDetails