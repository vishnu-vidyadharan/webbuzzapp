import React from 'react'

const Theme = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://p.imgci.com/db/PICTURES/CMS/317900/317989.jpg" alt="" className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Play with Heart, Win with Class  - XYZ Cricket Club</h1>
                <h2 className='text-2xl py-4 italic'>Inspiring the Next Generation of Cricketers with the Wisdom of Legends</h2>
                <button className='bg-stone-600 w-32 h-[5vh]'>
                    Register
                </button>
            </div>

        </div>
    </div>
  )
}

export default Theme