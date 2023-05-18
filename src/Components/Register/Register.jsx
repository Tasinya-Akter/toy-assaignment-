import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FaGithub,FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { themeContext } from '../../Firebase/AuthProvider';

const Register = () => {
    const {signInGithub,createUser,setUser,profileUpdate,signInGoogle} = useContext(themeContext);

    const navigate = useNavigate();

const errorFunction = (errorM) => {
    toast.error(errorM, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const successFunction = (e) => {
    toast.success(e, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}
const handleGithub = () => {
    signInGithub()
    .then((result) => {
        setUser(result.user);
        navigate("/");
    })
    .catch((err) => {
        errorFunction("something went wrong")
    })
}
const handleGoogle = () => {
    signInGoogle()
    .then((result) => {
        setUser(result.user);
        navigate("/");
    })
    .catch((err) => {
        errorFunction("something went wrong!")
    })
}

    const registerHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const c_password = form.c_password.value;
        
        if(name===''){
            console.log(name)
            errorFunction("Name must be filled out");
        }else if(photo===''){
            errorFunction("Photo url must be filled out");
        }else if(email===''){
            errorFunction("Email must be filled out");
        }else if(password===''){
            errorFunction("Password must be filled out");
        }else if(password !== c_password){
            errorFunction("Confirm password not matched");
        }else if(password.length < 6){
            errorFunction("Password should be six characters");
        }else {
            createUser(email,password)
            .then((currentUser) => {
                if(currentUser.user){
                    setUser(currentUser.user);
                    successFunction("User Created");
                    profileUpdate(name,photo)
                    .then(() => {
                        navigate("/");
                    })
                    .catch(() => {
                        errorFunction("something went wrong");
                    })
                    

                }
            })
            .catch((err) => {
                const errorMessage = err.message;
                errorFunction(errorMessage);
            })
        }
    }
  return (
    <div className='container mx-auto py-7'>
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='max-w-[450px] w-full p-7 shadow-lg'>
            <h2 className='text-center font-bold mb-4 text-2xl'>Please Log in</h2>
            <form action="" onSubmit={registerHandle}>
            <div className='mb-4'>
                    <label htmlFor="name" className='text-lg font-semibold mb-1 block'>User Name</label>
                    <input name="name" id='name' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="text" />
                </div>
                <div className='mb-4'>
                    <label htmlFor="photo" className='text-lg font-semibold mb-1 block'>Photo Url</label>
                    <input name="photo" id='photo' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="text" />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='text-lg font-semibold mb-1 block'>Email</label>
                    <input name="email" id='email' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="email" />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='text-lg font-semibold mb-1 block'>Password</label>
                    <input name="password" id='password' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="password" />
                </div>
                <div className='mb-4'>
                    <label htmlFor="c_password" className='text-lg font-semibold mb-1 block'>Confirm Password</label>
                    <input name="c_password" id='c_password' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="password" />
                </div>
                <div className='mb-4 text-center'>
                    <button className='py-2 px-8 border-0 bg-rose-600 text-white font-semibold rounded-md hover:bg-rose-800'>Sing up</button>
                </div>
            </form>
            <div className='flex items-center my-6 gap-3'>
                <span className='grow w-full h-[1px] bg-gray-400'></span>
                <span className='grow-0 text-xl font-semibold'>Or</span>
                <span className='grow mr-auto w-full h-[1px] bg-gray-400'></span>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <FaGithub onClick={handleGithub} className='text-3xl hover:cursor-pointer' />
                <FaGoogle onClick={handleGoogle} className='text-3xl hover:cursor-pointer' />
            </div>
            <div className='my-4 text-right'>
                <span className='text-lg font-medium'>Already have an account? <Link className='text-rose-600 hover:underline' to="/login">Please Sing in</Link></span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register