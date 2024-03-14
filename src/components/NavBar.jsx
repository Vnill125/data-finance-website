import React from 'react'

import { useLocation } from "react-router-dom";
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from 'react'


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

    const pathName = useLocation();

    const Navigation = [
      {
        id: "1",
        title: "Home",
        url: "/Home",
      },
      {
        id: "2",
        title: "Company",
        url: "/Company",
      },
      {
        id: "3",
        title: "Resources",
        url: "/Resources",
      },
      {
        id: "4",
        title: "About",
        url: "/About",
      },
      {
        id: "5",
        title: "Contact",
        url: "/Contact",
      },
    ]

  return (
    <div className='text-white max-w-[1240px] mx-auto h-24 flex px-4 justify-between items-center'>
      <h1 className="text-[#00df9a] text-3xl w-full font-bold">REACT.</h1>
      <ul className='flex max-lg:hidden'>
        {Navigation.map((item) => (
          <a key={item.id} href={item.url}><li className={`p-4 uppercase hover:opacity-60 font-semibold
           cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a] ${item.url == pathName.pathname ? ' text-[#00df9a]' : 'text-white'}`}>{item.title}</li></a>
        ))}
        {console.log(pathName.hash)}
      </ul>

      <div onClick={handleNav} className='lg:hidden'>
        { !nav ? <TfiAlignJustify size={30}/> : <TfiAngleRight size={30} />  }
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          {Navigation.map((item) => (
            <a key={item.id} href={item.url}><li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer'>{item.title}</li></a>
          ))}
      </ul>
    </div>
  )
}

export default NavBar
