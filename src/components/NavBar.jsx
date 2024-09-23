import React, { useState } from 'react'
import { FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import {BiSolidCricketBall } from 'react-icons/bi'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full min-h-[80px] flex justify-between items-center absolute z-10 text-white font-semibold bg-black'>
             <div className='flex items-center text-red'>
                <BiSolidCricketBall size={30} className='text-[var(--primary-red)] mr-2'/>
                <h1 className='text-xl font-bold text-black-700'>XYZ</h1>
            </div>
            <ul className='hidden sm:flex px-7'>
                <li className='mx-6'>
                    <a href='/'>Home</a>
                </li>
                <li className='mx-6'>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li className='mx-6'>
                    <a href='#about'>About</a>
                </li>
                <li className='mx-6'>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
            <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
            <p className='text-sm text-white'>10AM - 10PM</p>
            </div>
            </div>
            <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
            <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
            <p className='text-sm text-white'>+91-7536152155</p>
            </div>
        </div>
            <div className='flex justify-between'>
                <FaFacebookF className='mx-6' />
                <FaTwitter className='mx-6' />
                <FaGooglePlusG className='mx-6' />
                <FaInstagram className='mx-6' />
            </div>
            <div onClick={handleNav} className='sm:hidden z-10'>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>
            <div onClick={handleNav} className={nav?'overflow-y-hidden md-hidden ease-in duration-300 absolute text-gray-400 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#gallery'>Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#deals'>Deals</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar