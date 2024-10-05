import React from "react";
import { useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
      <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto">
        <h1 className="text-[#00df9a] text-3xl p-7 font-bold">REACT.</h1>
        <div className="md:flex hidden">
          <ul className="text-xl my-3  md:flex hidden">
            <li className="mx-12 border-b-4 border-gray-500">Home</li>
            <li className="mx-12 border-b-4 border-gray-500">Contact</li>
            <li className="mx-12 border-b-4 border-gray-500">Services</li>
          </ul>
          <button className="text-xl border-2 p-3 mx-8 bg-[#00df9a] rounded-full border-gray-500 text-[#000300]">
            Get Started
          </button>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
      </div>
      
  );
}
