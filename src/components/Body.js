import React from 'react'
import Logo from "../assets/profile.jpg"
import About from "./About"
import Contact from './Contact'

const Body = () => {
  return (
    <>
    <div className='flex bg-black'>
      <div className='px-20 py-4'>
        <img src={Logo} className='items-center mb-1  md:flex  justify-end  relative rounded-full   sm:w-64 sm:h-64 shadow-md ' ></img>
      </div>
      <div className='p-10'>
        <h1 className='ml-8 font-bold text-white text-2xl'>Hello 👋 I'm</h1>
        <br></br>
      <h1  className="ml-8 font-bold text-white text-4xl">Prathamesh <span className=' dark:text-cyan-600'> Dikondawar</span></h1>
      <h3 className='text-white ml-8 py-2 text-xl font-mono'>Transform the way the world works!</h3>
      </div>
    </div>
    <div className='bg-black'>

      <About/>

      <Contact/>
    </div>
    </>
  )
}

export default Body
