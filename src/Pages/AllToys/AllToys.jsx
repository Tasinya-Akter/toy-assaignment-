import React, { useEffect, useState } from "react";
import SingleDoll from "../../Components/SingleDoll/SingleDoll";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle("All toys")
  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);



  return (
    <div className="py-14 container mx-auto px-0 md:px-3">

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
