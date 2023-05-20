import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleDoll from '../../Components/SingleDoll/SingleDoll';

const DollTab = () => {
  const [toys, setToys] = useState([]);

  const handleCategory = (e) => {
    const url = `https://toy-server-pearl.vercel.app/category/${e}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  useEffect(() => {
    fetch('https://toy-server-pearl.vercel.app/category/Baby Doll')
      .then((res) => res.json())
      .then((data) => setToys(data));
  },[])

  return (
    <div className='py-12'>
        <div className="container mx-auto px-3 md:px-0">
          <div>
            <h3 className='font-Bubblegum text-3xl text-center mb-6'>Shop by category</h3>
          </div>
        <div className="py-4">
          <Tabs>
            <TabList>
              <Tab onClick={() => handleCategory("Baby Doll")}>Baby Doll</Tab>
              <Tab onClick={() => handleCategory("Barbie Doll")}>
                Barbie Doll
              </Tab>
              <Tab onClick={() => handleCategory("American Girl")}>
                American Girl
              </Tab>
            </TabList>

            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {toys &&
          toys.map((item) => (
            <SingleDoll item={item} key={item._id}></SingleDoll>
          ))}
      </div>


        </div>
      </div>
    </div>
  )
}

export default DollTab