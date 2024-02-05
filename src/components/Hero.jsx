import React from 'react';
import particles from "../assets/Particles.jpg"
import ai from "../assets/ai.png"

const Hero = () => {
    return (
        <div className='bg-fixed bg-center bg-cover' style={{backgroundImage: `url(${particles})`}}>
          <div className='h-[650px] flex flex-row gap-[400px]'>
            <img src={ai} alt=""  className='w-[38%] animate-pulse'/>
            <h1 className='text-[70px] text-white mt-20 '>Join US NOW!</h1>
          </div>
        </div>
    );
};

export default Hero;