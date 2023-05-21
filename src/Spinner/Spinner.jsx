import React from "react";
import { Dna } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Dna
      visible={true}
        height="80"
        width="80"
        color="green"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      ></Dna>
    </div>
  );
};

export default Spinner;
