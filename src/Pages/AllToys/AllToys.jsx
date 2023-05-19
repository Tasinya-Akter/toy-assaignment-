import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleDoll from "../../Components/SingleDoll/SingleDoll";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category/Baby Doll")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleCategory = (e) => {
    const url = `http://localhost:5000/category/${e}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="py-14 container mx-auto px-0 md:px-3">
      <div className="">
        <div className="py-8">
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
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {toys &&
          toys.map((item) => (
            <SingleDoll item={item} key={item._id}></SingleDoll>
          ))}
      </div>
    </div>
  );
};

export default AllToys;
