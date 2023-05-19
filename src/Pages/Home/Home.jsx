import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Banner from './Banner';
import Gallery from './Gallery';
import DollTab from './DollTab';

const Home = () => {
  return (
    <div className='container mx-auto py-[60px] px-3 md:px-0'>
      <Banner></Banner>
      <Gallery></Gallery>
      <DollTab></DollTab>
    </div>
  )
}

export default Home