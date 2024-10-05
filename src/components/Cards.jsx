import React from 'react';
import single from '../assets/single.png';
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className='bg-white text-black flex flex-col items-center justify-center md:flex-row py-16 md:space-y-0 sm:space-y-16'>
      <div className='w-[380px] flex flex-col justify-center items-center border bg-slate-100 my-8 mx-auto'>
        <img src={single} alt='onehead' className='w-[150px] mt-[-80px]'></img>
        <p className='mt-12 font-bold text-2xl'>Single User</p>
        <p className='p-5 font-bold text-2xl'>149$</p>
        <ul>
          <li className='border-b-4 border-gray-300 p-3'>500GB Storage</li>
          <li className='border-b-4 border-gray-300 p-3'>1 User Allowed</li>
          <li className='border-b-4 border-gray-300 p-3'>Send upto 2GB</li>
        </ul>
        <button className='p-3 mb-14 bg-[#000300] mt-8 text-[#00df9a] text-xl font-bold rounded-[12px] px-16'>Start Trial</button>
      </div>

      <div className='w-[380px] flex flex-col justify-center items-center border bg-slate-100 my-8 mx-auto'>
        <img src={double} alt='onehead' className='w-[150px] mt-[-70px]'></img>
        <p className='mt-12 font-bold text-2xl'>Double User</p>
        <p className='p-5 font-bold text-2xl'>149$</p>
        <ul>
          <li className='border-b-4 border-gray-300 p-3'>500GB Storage</li>
          <li className='border-b-4 border-gray-300 p-3'>1 User Allowed</li>
          <li className='border-b-4 border-gray-300 p-3'>Send upto 2GB</li>
        </ul>
        <button className='p-3 mb-14 bg-[#000300] mt-8 text-[#00df9a] text-xl font-bold rounded-[12px] px-16'>Start Trial</button>
      </div>

      <div className='w-[380px] flex flex-col justify-center items-center border bg-slate-100 my-8 mx-auto'>
        <img src={triple} alt='onehead' className='w-[150px] mt-[-70px]'></img>
        <p className='mt-12 font-bold text-2xl'>Triple User</p>
        <p className='p-5 font-bold text-2xl'>149$</p>
        <ul>
          <li className='border-b-4 border-gray-300 p-3'>500GB Storage</li>
          <li className='border-b-4 border-gray-300 p-3'>1 User Allowed</li>
          <li className='border-b-4 border-gray-300 p-3'>Send upto 2GB</li>
        </ul>
        <button className='p-3 mb-14 bg-[#000300] mt-8 text-[#00df9a] text-xl font-bold rounded-[12px] px-16'>Start Trial</button>
      </div>
    </div>
  );
}
