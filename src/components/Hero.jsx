import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='mt-[-80px] h-screen flex justify-center flex-col text-center text-white'>
      <p className='text-[#00df9a] font-bold text-[20px] md:text-[25px] lg:text-[30px] uppercase'>Growing with data analytics</p>
      <h1 className='text-[25px] md:text-[30px] lg:text-[35px] pb-8 font-bold uppercase'>Grow with data.</h1>
      <div className='flex justify-center'>
        <p className='text-xl md:text-2xl lg:text-4xl pb-2 font-bold mx-2'>Flex, flexible financing for</p>
        <TypeAnimation 
        className='text-xl md:text-2xl text-gray-400 lg:text-4xl font-bold e'
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
      <p className='md:text-xl lg:text-2xl pb-8 font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md text-black font-semibold mt-6 py-3 hover:opacity-60 hover:py-4
         hover:w-[220px] duration-300 hover:text-lg'>Get Started</button>
    </div>
  )
}

export default Hero
