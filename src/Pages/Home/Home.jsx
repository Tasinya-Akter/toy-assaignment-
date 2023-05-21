import React, { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Banner from './Banner';
import Gallery from './Gallery';
import DollTab from './DollTab';
import useTitle from '../../Hooks/useTitle';
import Unleas from './Unleas';
import Slider from './Slider';
import Spinner from './../../Spinner/Spinner';

const Home = () => {
  const [myLoader,setMyLoader] = useState(false);
  useTitle("Home");
  useEffect(() => {
    setTimeout(() => {
      setMyLoader(false)
    },3000)
  },[])
  if(myLoader){
    return <Spinner></Spinner>
  }
  return (
    <div className='container mx-auto py-[60px] px-3 md:px-0'>
      <Banner></Banner>
      <DollTab></DollTab>
      <Unleas></Unleas>
      <Gallery></Gallery>
      <Slider></Slider>
    </div>
  )
}

export default Home