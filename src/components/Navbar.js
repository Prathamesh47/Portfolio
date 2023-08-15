import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../tailwind.css'
const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className=" flex justify-between bg-black ">
      <div className='flex items-center justify-center flex-shrink-0 sm:ml-4'>
          <h1  className="ml-8  font-serif text-white text-2xl">Portfo<span className='text-red-700'>lio.</span> </h1>
      </div>
      <div className='nav-items px-20'>
        <ul className='flex py-10 '>
            <Link to="/">
              <li className="px-2 py-2 text-md text-white hover:text-blue-500 cursor-pointer ">Home</li>
            </Link>
            <a href="#about" className='px-2 py-2 text-md  text-white hover:text-blue-500 cursor-pointer'>About </a>

            <a href="#contact" className='px-2 py-2 text-md  text-white hover:text-blue-500 cursor-pointer'>Contact </a>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
