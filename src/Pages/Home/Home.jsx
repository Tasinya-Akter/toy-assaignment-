import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Banner from './Banner';
import Gallery from './Gallery';
import DollTab from './DollTab';
import useTitle from '../../Hooks/useTitle';
import Unleas from './Unleas';

const Home = () => {
  useTitle("Home");
  return (
    <div className='container mx-auto py-[60px] px-3 md:px-0'>
      <Banner></Banner>
      <DollTab></DollTab>
      <Unleas></Unleas>
      <Gallery></Gallery>
    </div>
  )
}

export default Home