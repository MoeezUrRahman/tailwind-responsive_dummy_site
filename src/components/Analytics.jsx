import React from "react";
import Laptop from "../assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="text-black bg-white py-16 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <img src={Laptop} alt="random" className="w-full md:max-w-[600px]" />
        <div className="mt-8 md:mt-[100px] md:ml-8">
          <p className="md:text-4xl sm:text-3xl font-bold text-[#0e3528] ">
            Data Analytics Dashboard
          </p>
          <p className="text-black md:text-2xl sm:text-2xl text-justify py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iste
            accusantium amet doloribus dolor hic nemo sunt delectus doloremque,
            sed odit in, debitis rerum magni aperiam dolore deserunt nam
            molestiae!
          </p>
          <button className=" sm:ml-[180px] md:mx-0 bg-black text-[#00df9a] px-16 py-3 text-xl  font-bold rounded-[10px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
