import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-auto max-w-auto mx-auto px-4 text-white bg-white'>
      <div className='flex items-center'>
        {/* Wrap the logo with Link to homepage */}
        <Link to="/">
          <img src={logo} alt='logo' className='h-14 w-14 cursor-pointer'/>
        </Link>
        <Link to="/">
        <p className='font-bold text-black'>Tesla Academy</p>
        </Link>
      </div>  

      <ul className='hidden md:flex text-black'>
        <li className='p-4'><Link to="/courses">Courses</Link></li>
        <li className='p-4'><Link to="/forum">Forum</Link></li>
        <li className='p-4'><Link to="/aboutus">About Us</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
      </ul>

      <Link to="/login">
        <button className='hidden md:flex m-1 w-auto bg-black text-white rounded-md pl-3 pr-3 pt-2 pb-2'>
          Login
        </button>
      </Link>

      <div onClick={handleNav} className='block md:hidden text-black'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%] '} >
        <Link to="/">
          <img src={logo} alt='logo' className='h-20 w-20'/>
        </Link>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b border-gray-600'><Link to="/login">Login/Register</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/courses">Courses</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/forum">Forum</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/aboutus">About Us</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/contact">Contact</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default NavBar;