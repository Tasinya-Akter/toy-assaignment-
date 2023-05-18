import React, { useContext, useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import style from './Header.module.css';
import { NavLink,Link } from 'react-router-dom';
import { themeContext } from '../../Firebase/AuthProvider';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const {user,setUser,loader,logOut} = useContext(themeContext)
  console.log(user)
  const handleMenuIcon = () => {
    setMobileMenu(!mobileMenu)
  }

  const handleLogOut = () => {
    logOut()
    .then(() => {
      console.log("first")
    })
    .catch()
  }

  const myNav = <>
  <NavLink to="/my_toy" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>My Toys</NavLink>
  <NavLink to="/add_toy" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>Add A Toy</NavLink>
  <NavLink to="/login" onClick={handleLogOut}>Log out</NavLink>
  </>

  return (
    <header className='w-full z-[15] bg-white h-[80px] flex items-center shadow-lg'>
      <div className="container mx-auto relative">
        <div className='flex items-center  justify-between'>
          <h3 className='text-3xl font-bold text-rose-600'>myBrand</h3>
          <ul className='hidden lg:flex lg:items-center gap-5'>
            <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>Home</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>Blog</NavLink>
            <NavLink to="/all_toys" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>All Toys</NavLink>
            {
              user ? myNav : <NavLink to="/login">Login</NavLink>
            }
            {
              user && <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img src={user.photoURL} className='w-10 h-10 rounded-full' alt="img" />
            </div>
            }
          </ul>
          {/* menubar  */}
          <div className='lg:hidden'>
              {
                mobileMenu ? <HiX onClick={handleMenuIcon} className='text-3xl hover:cursor-pointer font-semibold' /> : <HiMenu className='text-3xl hover:cursor-pointer font-semibold' onClick={handleMenuIcon}  />
              }
              
              {/* mobile menu responsive  */}
              <ul className={`${mobileMenu ? style.active: ''} lg:hidden ${style.mobile} ${style.myHeader}`}>
              <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>Home</NavLink>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>Blog</NavLink>
              <NavLink to="/all_toys" className={({ isActive }) => isActive ? "font-semibold text-rose-600" : "font-semibold"}>All Toys</NavLink>
                {
              user ? myNav : <NavLink to="/login">Login</NavLink>
            }
            {
              user && <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img src={user.photoURL} className='w-10 h-10 rounded-full' alt="img" />
            </div>
            }
              </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header