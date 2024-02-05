import React from 'react';
import TechLines from '../assets/TechLines.jpg'

const RightDetails = () => {
    return (
        <div>
            <div className='flex flex-row justify-center pt-20 pl-20'>
                <p className='text-white text-[22px] ml-8 mt-2 max-w-[500px] text-justify pr-6'>Hello From MyCyberBase Dev. This is a video of a website Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum nostrum fuga quod, eum fugiat minima doloremque at alias aliquam pariatur, sint accusamus? Quod excepturi animi inventore fugiat voluptas nesciunt perferendis, atque necessitatibus dolores voluptate saepe dolorem quis exercitationem numquam vitae suscipit sequi eaque nam enim alias mollitia ab? Quidem esse deserunt . Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repudiandae?  </p>
                <img src={TechLines} alt=""  className='h-[35%] w-[36%]'/>
            </div>
        </div>
    );
};

export default RightDetails;