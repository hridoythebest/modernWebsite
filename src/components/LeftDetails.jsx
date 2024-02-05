import React from 'react';
import BlueCircle from '../assets/BlueCircle.jpg'

const LeftDetails = () => {
    return (
        <div>
            <div className='flex flex-row justify-center pt-20'>
                <img src={BlueCircle} alt=""  className='h-[20%] w-[20%]'/>
                <p className='text-white text-[22px] ml-8 mt-2 max-w-[400px]'>Hello From MyCyberBase Dev. This is a video of a website</p>
            </div>
        </div>
    );
};

export default LeftDetails;