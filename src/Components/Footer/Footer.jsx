import React from 'react'
import { Link } from 'react-router-dom';
import { HiLocationMarker,HiPhoneOutgoing,HiOutlineMail } from "react-icons/hi";
import { FaTwitterSquare,FaInstagramSquare,FaFacebook } from "react-icons/fa";
import logo from '../../assets/img/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#F5FDFF] py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <div>
    <img src={logo} className='w-[145px]' alt="" /> 
    <p  className='font-Jost font-semibold mt-7 text-[#334447]'>We're passionate about providing high-quality toys that inspire imagination and foster learning</p>
  </div> 
  <div>
    <h3 className="font-Bubblegum text-xl text-[#000] mb-5">Quick link</h3> 
    <Link to="/" className="block font-Jost text-base mb-3 font-semibold">Home</Link>
    <Link to="/blog" className="block font-Jost text-base mb-4 font-semibold">Blog</Link>
    <Link to="/all_toys" className="block font-Jost text-base mb-3 font-semibold">All Toys</Link>
  </div> 
  <div>
    <h3 className="font-Bubblegum text-xl text-[#000] mb-5">Contact</h3>
    <div className='flex item-center gap-3 mb-3'>
      <HiLocationMarker className='text-4xl' />
      <p className="font-Jost text-base mb-3 font-semibold">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
    </div>
    <div className='flex item-center gap-3 mb-3'>
      <HiPhoneOutgoing className='text-4xl' />
      <p className="font-Jost text-base mb-3 font-semibold">222-44-2222</p>
    </div>
    <div className='flex item-center gap-3 mb-3'>
      <HiOutlineMail className='text-4xl' />
      <p className="font-Jost text-base mb-3 font-semibold">demo@gmail.com</p>
    </div>
  </div>

  <div>
    <h3 className="font-Bubblegum text-xl text-[#000] mb-5">Follow Us</h3> 
    <div className='flex items-center gap-2 mb-4'>
      <FaTwitterSquare className='text-2xl' />
      <FaInstagramSquare className='text-2xl' />
      <FaFacebook className='text-2xl'/>
    </div>
    <h3 className="font-Bubblegum text-xl text-[#000] mb-5">Newsletter</h3>
    <div className='flex items-center'>
      <input type="email" className='rounded-tl-md rounded-bl-md p-[8px] border border-primary border-r-0 focus:outline-0' />
      <button className='text-white py-2 px-8 rounded-tr-md rounded-br-md font-semibold font-Jost border border-primary bg-primary'>Send</button>
    </div>
  </div> 
  
  </div>
</footer>
  )
}

export default Footer