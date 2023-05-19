import React, { useContext } from 'react';
import { FaGithub,FaGoogle } from "react-icons/fa";
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { themeContext } from '../../Firebase/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signInGithub,signInGoogle,signHandle,setUser,loader} = useContext(themeContext)
    const Navigate = useNavigate();
    const location = useLocation();
    const myPath  = location.state?.from?.pathname || "/";

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


    const handleGithub = () => {
        signInGithub()
        .then((result) => {
            setUser(result.user);
            Navigate(myPath,{replace: true});
        })
        .catch((err) => {
            errorFunction("something went wrong")
        })
    }
    const handleGoogle = () => {
        signInGoogle()
        .then((result) => {
            setUser(result.user);
            Navigate(myPath,{replace: true});
        })
        .catch((err) => {
            errorFunction("something went wrong!")
        })
    }

    const signInHandleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if(email !== '' && password !== ''){
            signHandle(email,password)
            .then((current) => {
                setUser(current.user);
                Navigate(myPath,{replace: true});
            })
            .catch((err) => {
                errorFunction(err.message)
            })
        }else{
            errorFunction("Field must be required")
        }
        
    }
  return (
    <div className='container mx-auto'>
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='max-w-[450px] w-full p-7 shadow-lg'>
                <h2 className='text-center font-bold mb-4 text-2xl'>Please Log in</h2>
                <form action="" onSubmit={signInHandleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-lg font-semibold mb-1 block'>Email</label>
                        <input name="email" id='email' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="email" />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='text-lg font-semibold mb-1 block'>Password</label>
                        <input name="password" id='password' className='border outline-0 py-2 px-2 rounded-lg w-full block focus:border-gray-400' type="password" />
                    </div>
                    <div className='mb-4 text-center'>
                        <button className='py-2 px-8 border-0 bg-primary text-white font-semibold rounded-md'>{loader ? "Loading...":"Sign in" } </button>
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
                    <span className='text-lg font-medium'>Are you new here? <Link className='text-rose-600 hover:underline' to="/register">Please Register</Link></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login