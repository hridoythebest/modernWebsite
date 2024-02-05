import React from 'react';
import BlueCircle from '../assets/BlueCircle.jpg'

const LeftDetails = () => {
    return (
        <div>
            <div className='flex flex-row justify-center pt-20 pr-20'>
                <img src={BlueCircle} alt=""  className='h-[30%] w-[30%] '/>
                <p className='text-white text-[22px] ml-8 mt-2 max-w-[400px] text-justify'>Hello From MyCyberBase Dev. This is a video of a website <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eaque, praesentium quaerat necessitatibus pariatur a neque, velit voluptas exercitationem quia distinctio delectus dicta aperiam at provident quisquam placeat, quidem asperiores sequi fuga. Ab delectus facere in optio, porro tenetur consectetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default LeftDetails;