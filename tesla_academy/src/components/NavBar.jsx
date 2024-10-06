import React,{useState} from 'react'
import logo from '../assets/logo.png'
import {AiOutlineClose,AiOutlineMenu,} from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav);
  }
  
  return (
    <div className='flex justify-between items-center h-auto max-w-auto mx-auto px-4 text-white bg-white'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' className='h-14 w-14'/>
        <p className='font-bold text-black'>Tesla Academy</p>
      </div>  
      

      <ul className='hidden md:flex text-black'>
        <li className='p-4'>Courses</li>
        <li className='p-4'>Forum</li>
        <li className='p-4'>About Us</li>
        <li className='p-4'>Contact</li>
      </ul>

      <button className='hidden md:flex m-1 w-auto bg-black text-white rounded-full p-2'>
        Login/Register
      </button>

      <div onClick={handleNav} className='block md:hidden text-black'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] '} >
        <img src={logo} alt='logo' className='h-20 w-20 '/>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'>Login/Register</li>
          <li className='p-4 border-b border-gray-600'>Courses</li>
          <li className='p-4 border-b border-gray-600'>Forum</li>
          <li className='p-4 border-b border-gray-600'>About Us</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
/*
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from '../assets/logo.png'

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];
const NavBar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;*/