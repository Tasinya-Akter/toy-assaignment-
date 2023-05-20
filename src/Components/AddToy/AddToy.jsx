import React, { useContext } from "react";
import { themeContext } from "../../Firebase/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
  useTitle("Add toy")
    const {user} = useContext(themeContext)

    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const price = parseFloat(form.price.value).toFixed(2);
        const ratings = form.ratings.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const shortDescription = form.desc.value;
        const info = {category,quantity,name,picture,price,ratings,shortDescription,displayName: user.displayName,email:user.email}
        // console.log(info)
        fetch("https://toy-server-pearl.vercel.app/add_toy",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res =>res.json())
        .then(data => {
          console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Toy added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
            }
        })

    }


  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-Bubblegum text-primary mb-5 text-center">Add a New Toy</h2>
        <form onSubmit={handleAddToy} className="w-full max-w-[600px] mx-auto">
          
            <input
              type="text"
              name="name"
              placeholder="Doll Name"
              className="input input-bordered w-full mb-4"
            />

            <select name="category" className="select w-full mb-4 select-bordered">
              <option disabled>
              Category
              </option>
              <option value="Baby Doll">Baby Doll</option>
              <option defaultValue="Barbie Doll">Barbie Doll</option>
              <option defaultValue="American Girl">American Girl</option>
            </select>
         

         
          <input
              type="text"
              name="picture"
              placeholder="Photo Url"
              className="input input-bordered w-full mb-4"
            />
       

    
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full mb-4"
            />

            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full mb-4"
            />

            <input
              type="text"
              name="ratings"
              placeholder="Ratings"
              className="input input-bordered w-full mb-4"
            />

   


            <textarea name="desc" className="textarea textarea-bordered w-full mb-4" placeholder="Description"></textarea>

            <div className="text-center mt-10">
                <button className="text-white py-2 px-8 rounded-lg font-semibold font-Jost border border-primary bg-primary">Add Doll</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
