import React, { useState } from 'react';
import { HiOutlinePencilAlt,HiTrash } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleMyToy = ({item,setReFresh,refresh}) => {
  
  const {picture,category,price,name,_id} = item;

const handleDelete = (id) => {


  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/delete/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          setReFresh(!refresh)
        }
      })
      
    }
  })


}


  return (
    
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        {name}
        </td>
        <td>{category}</td>
        <td>${price}</td>
        <th>
          <div className='flex items-center gap-3'>
            <Link to={`/update/${_id}`}><HiOutlinePencilAlt className='text-primary cursor-pointer text-2xl'/></Link>
            <HiTrash onClick={()=>handleDelete(_id)} className='text-red-500 cursor-pointer text-2xl' />
          </div>
        </th>
        <td>
          <Link to={`/toy_details/${_id}`} className='py-2 px-5 font-Bubblegum rounded-lg text-white bg-primary'>Details</Link>
        </td>
      </tr>
  )
}

export default SingleMyToy