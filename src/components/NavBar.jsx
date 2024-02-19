import React from 'react'

import { TfiAngleRight } from "react-icons/tfi";
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from 'react'


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className='text-white max-w-[1240px] mx-auto h-24 flex px-4 justify-between items-center'>
      <h1 className="text-[#00df9a] text-3xl w-full font-bold">REACT.</h1>
      <ul className='flex max-lg:hidden'>
        
        <li className='p-4 uppercase hover:opacity-60 font-semibold cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]'>Home</li>
        <li className='p-4 uppercase hover:opacity-60 font-semibold cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]'>Company</li>
        <li className='p-4 uppercase hover:opacity-60 font-semibold cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]'>Resources</li>
        <li className='p-4 uppercase hover:opacity-60 font-semibold cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]'>About</li>
        <li className='p-4 uppercase hover:opacity-60 font-semibold cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]'>Contact</li>
      </ul>

      <div onClick={handleNav} className='lg:hidden'>
        { !nav ? <TfiAlignJustify size={30}/> : <TfiAngleRight size={30} />  }
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer'>About</li>
          <li className='p-4 hover:opacity-60 cursor-pointer'>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
