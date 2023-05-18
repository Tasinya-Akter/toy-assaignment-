import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">FoodieApp</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="/" className="link link-hover">Home</Link>
    <Link to="/blog" className="link link-hover">Blog</Link>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer