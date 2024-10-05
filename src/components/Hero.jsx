import React from "react";
import { ReactTyped } from "react-typed";  // Use named import

export default function Hero() {
  return (
    <div className="text-white">
      <div className="mt-[-70px] flex flex-col h-screen justify-center items-center px-5">
        <p className="md:text-4xl sm:text-3xl text-[#00df9a] font-bold md:py-2 text-center">
          GROWING WITH DATA ANALYTICS
        </p>
        <p className="text-3xl font-bold my-5">Grow with data.</p>
        <div className="flex">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2">Fast, flexible financing for</p>
          <ReactTyped
            className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={["ABCD", "EFGH", "HIJK"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-gray-400 my-10 font-bold">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className="bg-[#00df9a] p-5 text-xl text-[#000300] font-bold rounded-[20px]">Get Started</button>
      </div>
    </div>
  );
}
