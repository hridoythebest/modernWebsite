import React from 'react';
import react from '../assets/react.svg'

const Navbar = () => {
    return (
        <div>
            <div className='bg-black w-screen h-[200px] flex flex-row justify-center items-center'>
                <img src={react} alt="" className='absolute top-[25px] h-[18%] w-[20%] ' style={{ left: '5%' }} />

                <div className='mx-auto triangle absolute top-[120px] left-1/2 transform -translate-x-1/2'>
                    <div className='h-0 w-0 border-r-[120px] border-b-[80px] border-l-[120px] border-solid border-r-transparent border-l-transparent border-b-[#337EEA]'></div>
                </div>
                <div className='mx-auto triangle absolute top-[120px] ' style={{left:'35%' }}>
                    <div className='h-0 w-0 border-r-[120px] border-b-[80px] opacity-70 border-l-[120px] border-solid border-r-transparent border-l-transparent border-b-[#337EEA]'></div>
                </div>
                <div className='mx-auto triangle absolute top-[120px] ' style={{right:'35%' }}>
                    <div className='h-0 w-0 border-r-[120px] border-b-[80px] opacity-70 border-l-[120px] border-solid border-r-transparent border-l-transparent border-b-[#337EEA]'></div>
                </div>
                <div className='mx-auto triangle absolute top-[120px] ' style={{left:'28%' }}>
                    <div className='h-0 w-0 border-r-[120px] border-b-[80px] opacity-50 border-l-[120px] border-solid border-r-transparent border-l-transparent border-b-[#337EEA]'></div>
                </div>
                <div className='mx-auto triangle absolute top-[120px] ' style={{right:'28%' }}>
                    <div className='h-0 w-0 border-r-[120px] border-b-[80px] opacity-50 border-l-[120px] border-solid border-r-transparent border-l-transparent border-b-[#337EEA]'></div>
                </div>


                <div className='mx-auto triangle absolute top-[200px] left-1/2 transform -translate-x-1/2'>
                    <div className='h-0 w-0 border-r-[250px] border-t-[40px] border-l-[250px] border-solid border-r-transparent border-l-transparent border-t-[#337EEA]'></div>
                </div>
                <div className='mx-auto triangle absolute top-[200px] left-1/2 transform -translate-x-1/2'>
                    <div className='h-0 w-0 border-r-[250px] border-t-[50px] border-l-[250px] border-solid border-r-transparent border-l-transparent opacity-50 border-t-[#337EEA]'></div>
                </div>

                <div className='flex flex-row gap-[175px] text-white text-[25px]'>
                    <h1 className='cursor-pointer'>Home</h1>
                    <h1 className='cursor-pointer'>Product</h1>
                    <h1 className='cursor-pointer'>About</h1>

                </div>

            </div>


        </div>

    );
};

export default Navbar;