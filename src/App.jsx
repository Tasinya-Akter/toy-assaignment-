import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <Header />
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
