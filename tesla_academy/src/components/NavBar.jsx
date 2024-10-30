import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HoverBorderGradient } from '../uicomponents/HoverBorderGradient'; // Assuming you saved the gradient component in the same folder

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-auto max-w-auto mx-auto px-4 text-white bg-white relative z-10'>
      <div className='flex items-center'>
        <Link to="/">
          <img src={logo} alt='logo' className='h-14 w-14 cursor-pointer' />
        </Link>
        <Link to="/">
          <p className='font-bold text-black'>Tesla Academy</p>
        </Link>
      </div>

      <ul className='hidden md:flex text-black'>
<<<<<<< HEAD
        <li className='p-4'>Courses</li>
        <li className='p-4'>Forum</li>
<<<<<<< Updated upstream
        <li className='p-4'>About Us</li>
        <li className='p-4'>Contact</li>
=======
        <li className='p-4'><Link to="/about">About Us</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
>>>>>>> Stashed changes
=======
        <li className='p-4'><Link to="/courses">Courses</Link></li>
        <li className='p-4'><Link to="/forum">Forum</Link></li>
        <li className='p-4'><Link to="/aboutus">About Us</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
>>>>>>> f9f9e9e931274122b976e5f175d778145d977934
      </ul>

      <Link to="/login">
        <HoverBorderGradient
          containerClassName="hidden md:flex m-1"
          className="w-auto bg-teal-500 text-white rounded-sm px-3 py-2"
          as="button"
          duration={1}
          clockwise={true}
        >
          Login
        </HoverBorderGradient>
      </Link>

      <div onClick={handleNav} className='block md:hidden text-black'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r text-black font-bold bg-teal-100 ease-in-out duration-500 z-50'
            : 'fixed left-[-100%] z-50'
        }
      >
        <Link to="/">
          <img src={logo} alt='logo' className='h-20 w-20 m-4' />
        </Link>
        <ul className='p-4 uppercase'>
<<<<<<< HEAD
          <li className='p-4 border-b border-gray-600'>Login/Register</li>
          <li className='p-4 border-b border-gray-600'>Courses</li>
          <li className='p-4 border-b border-gray-600'>Forum</li>
<<<<<<< Updated upstream
          <li className='p-4 border-b border-gray-600'>About Us</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
=======
          <li className='p-4 border-b border-gray-600'><Link to="/about">About Us</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/contact">Contact</Link></li>

>>>>>>> Stashed changes
=======
          <li className='p-4 border-b border-gray-600'><Link to="/login">Login</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/courses">Courses</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/forum">Forum</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/aboutus">About Us</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="/contact">Contact</Link></li>
>>>>>>> f9f9e9e931274122b976e5f175d778145d977934
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
