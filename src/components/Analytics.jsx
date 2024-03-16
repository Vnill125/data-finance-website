import React from 'react'

import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-[1240px] py-20 mx-auto flex flex-col lg:flex-row'>
      <img className='w-[500px] mx-auto' src={laptop} />
      <div className='flex flex-col justify-center p-4'>
        <p className='font-bold text-[#00df9a] text-lg lg:text-xl py-2'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='font-bold text-black text-2xl lg:text-3xl'>Manage Data Analytics Centrally</h1>
        <p className='text-black lg:text-lg'>
        Our data analytics company provides actionable insights and meaningful solutions to help businesses make informed decisions and improve their bottom line. We use cutting-edge technologies and industry expertise to turn data into valuable business intelligence.
        </p>
        <button className='bg-black w-[200px] mx-auto rounded-md text-[#00df9a] font-medium py-3 hover:opacity-60 hover:scale-110 duration-300 hover:text-lg mt-14'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Analytics
