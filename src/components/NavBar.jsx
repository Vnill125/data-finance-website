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
        scroll:"0",
        scroll2:'0'
      },
      {
        id: "2",
        title: "Analytics",
        url: "/Analytics",
        scroll:"800",
        scroll2:'870'
      },
      {
        id: "3",
        title: "Newsletter",
        url: "/Resources",
        scroll:"1300",
        scroll2:'1500'
      },
      {
        id: "4",
        title: "Start",
        url: "/GetStarted",
        scroll:"1750",
        scroll2:'1980'
      },
      {
        id: "5",
        title: "About",
        url: "/About",
        scroll:"2500",
        scroll2:'5000'
      },
    ]

  return (
    <div className='text-white max-w-[1240px] mx-auto h-24 flex px-4 justify-between items-center'>
      <h1 className="text-[#00df9a] text-3xl w-full font-bold">IDATA.</h1>
      <ul className='flex max-lg:hidden'>
        {Navigation.map((item) => (
          <a key={item.id}><li className={`p-4 uppercase hover:opacity-60 font-semibold
          cursor-pointer hover:border-b-4 duration-75 border-b-[#00df9a]`}
          onClick={() => {window.scroll({top:item.scroll, behavior:'smooth'})}}>{item.title}</li></a>
        ))}
        {console.log(pathName.hash)}
      </ul>

      <div onClick={handleNav} className='lg:hidden'>
        { !nav ? <TfiAlignJustify size={30}/> : <TfiAngleRight size={30} />  }
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] z-50' : 'fixed left-[-100%]'}>
        <div className='flex items-center'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>IDATA.</h1>
          <p onClick={handleNav} className='lg:hidden p-4'>
            { !nav ? <TfiAlignJustify size={20}/> : <TfiAngleRight size={20} />  }
          </p>
        </div>
          {Navigation.map((item) => (
            <a key={item.id}><li className='p-4 border-b border-gray-600 hover:opacity-60 cursor-pointer' onClick={() => {window.scroll({top:item.scroll2, behavior:'smooth'})}}>{item.title}</li></a>
          ))}
      </ul>
    </div>
  )
}

export default NavBar
