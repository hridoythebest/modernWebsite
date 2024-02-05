import React from 'react';
import react from '../assets/react.svg'

const Footer = () => {
    return (
        <div className='h-[400px] w-screen bg-black flex justify-center items-center'>
            <div className='mx-auto triangle absolute top-[1990px] left-1/2 transform -translate-x-1/2'>
                <div className='h-0 w-0 border-r-[250px] border-t-[170px] border-l-[250px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA] '></div>
            </div>
            <div className='mx-auto triangle absolute top-[1990px] ' style={{ right: '20%' }}>
                <div className='h-0 w-0 border-r-[220px] opacity-70 border-t-[150px] border-l-[220px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA] '></div>
            </div>
            <div className='mx-auto triangle absolute top-[1990px] ' style={{ left: '20%' }}>
                <div className='h-0 w-0 border-r-[220px] opacity-70 border-t-[150px] border-l-[220px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA] '></div>
            </div>
            <div className='mx-auto triangle absolute top-[1990px] ' style={{ right: '10%' }}>
                <div className='h-0 w-0 border-r-[220px] opacity-50 border-t-[150px] border-l-[220px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA] '></div>
            </div>
            <div className='mx-auto triangle absolute top-[1990px] ' style={{ left: '10%' }}>
                <div className='h-0 w-0 border-r-[220px] opacity-50 border-t-[150px] border-l-[220px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA] '></div>
            </div>
            <h1 className='text-white text-[30px] text-semibold mb-20'>MyCyberBase</h1>
            <img src={react} alt="" className='absolute top-[2230px] mt-4 ml-[-100px] h-[20%] left-1/2 transform-translate-x-1/2  ' />
        </div>
    );
};

export default Footer;