import React from "react";

export default function Newsletter() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center">
        <div className="p-10">
          <p className="text-xl font-bold">
            Want tips & tricks to optimize your flow?
          </p>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="p-10 ">
          <input
            type="email"
            placeholder="Enter your Email?"
            className="bg-white ml-14 p-3 rounded-lg w-[300px] text-black"
          ></input>
          <button className="bg-[#00df9a] text-black font-bold ml-[50px] text-xl rounded-[10px] w-[150px] h-[50px] text-center md:mt-0 sm:mt-8">
            Notify Me
          </button>
          <p className=" ml-[60px] mt-5">We care about the blah</p>
          <p className="text-[#00df9a] ml-[60px] ">Privacy policy</p>
        </div>
      </div>
    </div>
  );
}
