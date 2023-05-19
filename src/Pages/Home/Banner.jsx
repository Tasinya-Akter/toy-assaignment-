import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../../assets/img/banner.png";



const Banner = () => {
    AOS.init();
  return (
    <div className="overflow-hidden md:flex md:flex-row-reverse gap-4 md:items-center md:justify-between">
      <div>
        <div>
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            src={banner}
            className="max-w-[555px] mx-auto max-h-[488px] w-full"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <div>
          <h2 data-aos="fade-right" data-aos-duration="1500" className="font-Bubblegum md:text-5xl text-3xl">
            Discover a World of Imagination and Adventure with Our Toys
          </h2>
          <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" className="text-[#334447] mb-10 mt-5 font-semibold">
            Bring Joy and Wonder to Your Child's Playtime
          </p>
          <button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800" className="bg-primary text-white font-semibold border border-primary py-2 px-7 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
