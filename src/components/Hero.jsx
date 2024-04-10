import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
   
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
        <TypeAnimation 
        className='md:text-5xl sm:text-4xl text-xl text-gray-500 font-bold md:pl-4 pl-2'
        sequence={[
          'BTB', 
          1500,
          'BTC',
          1500,
          'SASS',
          1500,
        ]}
        speed={10}
        repeat={Infinity} />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md text-black font-semibold mt-10 py-3 hover:opacity-60 hover:scale-[1.15] duration-300 hover:text-lg'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
