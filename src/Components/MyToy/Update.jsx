import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const Update = () => {
    const [info,setInfo] = useState({})
    const {id} = useParams();
    const Navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:5000/update/${id}`)
        .then(res => res.json())
        .then(result => setInfo(result))
    },[])
    const {name,price,ratings,shortDescription} = info;


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const shortDescription = form.desc.value;
        const ratings = form.ratings.value;
        const myInfo = {name,price,shortDescription,ratings}
        fetch(`http://localhost:5000/update/${id}`,{
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(myInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Data Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  Navigate("/my_toy")
            }
        })
    }



  return (
    <div className='container mx-auto py-12'>
        <form onSubmit={handleUpdate} className='w-full max-w-[500px] mx-auto'>
            <input type="text" name="name" defaultValue={name} placeholder="Type here" className="input input-bordered w-full mb-3" />
            <input type="text" name="price" defaultValue={price} placeholder="Type here" className="input input-bordered w-full mb-3" />
            <input type="text" name='ratings' defaultValue={ratings} placeholder="Type here" className="input input-bordered w-full mb-3" />

            <textarea name="desc" className="textarea textarea-bordered w-full" defaultValue={shortDescription}></textarea>
            <input type="submit" value="Update" className="text-white py-2 px-8 rounded-lg font-semibold cursor-pointer font-Jost mt-6 border border-primary bg-primary" />
        </form>
    </div>
  )
}

export default Update