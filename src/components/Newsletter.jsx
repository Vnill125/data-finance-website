import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black'>
        <div className='w-max-[1240px] mx-auto flex flex-col lg:flex-row justify-around py-14 px-4'>
            <div className='flex flex-col'>
                <h1 className='text-white text-4xl font-bold'>Wants rips & tricks to optimize your flow?</h1>
                <p className='text-white my-2'>Sing up to our newsletter and stay up to date.</p>
            </div>
            <div className='flex'>
                <input type="email" placeholder='Enter your email' className='mr-6 w-full my-6 rounded-md font-mono pl-2' />
                <button type='submit' className='bg-[#00df9a] hover:opacity-60 text-black rounded-md font-semibold w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
            </div>

        </div>
    </div>
  )
}

export default Newsletter
