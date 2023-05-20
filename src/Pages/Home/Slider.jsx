import React, { useEffect, useState } from "react";

const Slider = () => {

  return (
    <div className="container py-12 mx-auto">
        <h3 className="font-Bubblegum text-3xl text-center text-primary mb-6">Client's Review</h3>
      <div className="carousel w-full">
        

      <div id="slider1" className="carousel-item relative w-full">
      <div className="sm:flex w-full sm:items-center gap-4 py-6 sm:justify-between">
            <div className="w-full sm:w-1/2">
                <div className="w-[300px] h-[300px] mx-auto rounded-full bg-rose-100 flex items-end justify-center">
                    <img className="w-[200px] h-[200px] rounded-full object-cover" src="https://i.ibb.co/wLMmbjm/pexels-photo-4063856.png" alt="" />
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div>
                    <h4 className="font-Jost">Writer: Eleanor</h4>
                    <h3 className=" my-2 font-Bubblegum text-2xl text-left">Toytopia Delivers Joy and Quality</h3>
                    <p className="font-Jost">Toytopia is an absolute treasure trove for toy enthusiasts! They have an amazing selection of toys from various brands, And their website is user friendly, making it easy to find exactly what you are looking for. The toys I purchased were of excellent quality. And my kids could not be happier. Highly recommended!</p>
                </div>
            </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-0  right-5 bottom-0">
        <a href="#slider3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slider2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slider2" className="carousel-item relative w-full">
      <div className="sm:flex  py-6 w-full sm:items-center sm:justify-between">
            <div className="w-full sm:w-1/2">
                <div className="w-[300px] h-[300px] mx-auto rounded-full bg-rose-200 flex items-end justify-center">
                    <img className="w-[200px] h-[200px] rounded-full object-cover" src="https://i.ibb.co/mDN6Vty/pexels-japheth-mast-569169.png" alt="" />
                </div>
            </div>
            <div className="w-full sm:w-1/2">
            <div>
                    <h4 className="font-Jost">Writer: Eleanor</h4>
                    <h3 className=" my-2 font-Bubblegum text-2xl text-left">Toytopia Delivers Joy and Quality</h3>
                    <p className="font-Jost">Toytopia is an absolute treasure trove for toy enthusiasts! They have an amazing selection of toys from various brands, And their website is user friendly, making it easy to find exactly what you are looking for. The toys I purchased were of excellent quality. And my kids could not be happier. Highly recommended!</p>
                </div>
            </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-0  right-5 bottom-0">
        <a href="#slider1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slider3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slider3" className="carousel-item relative w-full">
      <div className="sm:flex  py-6 w-full sm:items-center sm:justify-between">
            <div className="w-full sm:w-1/2">
                <div className="w-[300px] h-[300px] mx-auto rounded-full bg-rose-200 flex items-end justify-center">
                    <img className="w-[200px] h-[200px] rounded-full object-cover" src="https://i.ibb.co/K2gsm1c/pexels-marlene-lepp-nen-1183266.png" alt="" />
                </div>
            </div>
            <div className="w-full sm:w-1/2">
            <div>
                    <h4 className="font-Jost">Writer: Eleanor</h4>
                    <h3 className=" my-2 font-Bubblegum text-2xl text-left">Toytopia Delivers Joy and Quality</h3>
                    <p className="font-Jost">Toytopia is an absolute treasure trove for toy enthusiasts! They have an amazing selection of toys from various brands, And their website is user friendly, making it easy to find exactly what you are looking for. The toys I purchased were of excellent quality. And my kids could not be happier. Highly recommended!</p>
                </div>
            </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-0  right-5 bottom-0">
        <a href="#slider2" className="btn btn-circle">
          ❮
        </a>
        <a href="#slider1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>



      </div>
    </div>
  );
};

export default Slider;
