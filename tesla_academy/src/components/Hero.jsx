import React from "react";
import { ReactTyped } from "react-typed";
import hero from "../assets/hero.png";
import blob from '../assets/blob.svg'
const Hero = () => {
    return (
        <div 
          className='bg-cover bg-center h-screen '
          style={{ backgroundImage: `url(${blob})` }}
        >
            <div className="text-2xl lg:text-5xl font-bold">
                <div className="mt-4 left-3 text-black" > 
                    <h1 className='md:text-7xl sm:text-6xl text-3xl p-2 font-bold  text-left'>
                        Empowering Minds,
                    </h1>
                    <h1 className='text-teal-500 marker:first-letter:md:text-7xl sm:text-6xl text-3xl p-4 font-bold  text-left'>
                        Shaping Futures at
                    </h1>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl p-2 font-bold  text-left'>
                        Tesla Academy.
                    </h1>
                    
                    <div className="flex justify-end">
                      <img
                      src={hero}
                      alt="Description of the image"
                      className="w-4/2 " // Increase size and add shadow
 />
        </div>
                </div>

                <div className='mt-4'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold  text-left'>
                    </p>
                    <ReactTyped strings={['SCIENCE', 'MATHEMATICS', 'SOCIAL STUDIES']} className="md:text-5xl sm:text-4xl text-2xl p-2 font-bold text-black text-left"typeSpeed={40} backSpeed={50} loop />
                </div>
            </div>
        </div> 
    );
};

export default Hero;
