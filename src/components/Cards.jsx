import React from 'react'

import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {

    const cart = [
        {for: 'Single User',
        price: '$149',
        storage: '500 GB Storage',
        user : '1 User Allowed',
        send: 'Send up to 2 GB',
        img: Single
    },

    {for: 'Partnership',
        price: '$199',
        storage: '1 TB Storage',
        user : '3 User Allowed',
        send: 'Send up to 10 GB',
        img: Double
    },

    {for: 'Group Account',
        price: '$299',
        storage: '5 TB Storage',
        user : '10 User Allowed',
        send: 'Send up to 20 GB',
        img: Triple
    }
    ]
    
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row'>
            {cart.map((item) => (
            <div className={`w-full flex flex-col items-center border-1 p-8 my-8 lg:mx-4 rounded-lg shadow-2xl ${item.for === 'Partnership' ? 'bg-gray-100 my-0' : ''} hover:scale-105 duration-300`}>
                <img className='w-20' src={item.img} alt="/"/>
                <h2 className='text-2xl font-bold py-8'>{item.for}</h2>
                <p className='text-4xl font-bold'>{item.price}</p>
                <div className='font-medium'>
                    <p className='py-2 font-semibold border-b mx-8 mt-8'>{item.storage}</p>
                    <p className='py-2 font-semibold  border-b mx-8'>{item.user}</p>
                    <p className='py-2 font-semibold  border-b mx-8'>{item.send}</p>
                </div>
                <button className={`bg-[#00df9a] w-[200px] rounded-md font-medium hover:opacity-60 my-6 px-6 py-3 ${item.for === 'Partnership' ? 'bg-black text-[#00df9a]' : ''}`}>Start Trial</button>
            </div>
            ))}
      </div>
    </div>
  )
}

export default Cards
