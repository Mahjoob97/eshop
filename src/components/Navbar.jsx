import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {IoMdSearch} from 'react-icons/io'
import DarkMode from './DarkMode'
import { FaCaretDown } from 'react-icons/fa6'

const menuLinks = [
    {
        id:1,
        name: 'Home',
        link: '/#'
    },
    {
        id:2,
        name: 'Shop',
        link: '/#shop'
    },
    {
        id:3,
        name: 'About',
        link: '/#about'
    },
    {
        id:4,
        name: 'Blog',
        link: '/#Blog'
    }
]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                {/* logo and links section */}
                <div className='flex justify-between items-center'>
                    <a href="#" className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'>
                        ESHOP
                    </a>
                    {/* menu items */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4 '>
                            {menuLinks.map((data, index) => (
                                <li key={index} >
                                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            {/* dropdown menu */}
                            <li className='relative cursor-pointer group:'>
                                <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white'>
                                    Quick links
                                    <span>
                                        <FaCaretDown        className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* navbar section */}
                <div className='flex justify-between items-center gap-4'>
                    {/* search bar section */}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search' className='search-bar' />
                        <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
                    </div>
                    {/* cart button seciton */}
                    <button className='relative p-3'>
                        <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
                        <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                            4
                        </div>
                    </button>
                    {/* dark mode section */}
                    <DarkMode/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar