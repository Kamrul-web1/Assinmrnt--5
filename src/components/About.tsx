import React from 'react';
import img1 from '../assets/banner-stack.png'

const About = () => {
    return (
        <div className=' grid grid-cols-2 container mx-auto py-[80px]'>
            <div >
                <h1 className='text-[80px]   font-bold text-[#0F172A] pt-3'>Build Your Ideal
                </h1>
                <h2 className='text-[80px] font-bold bg-gradient-to-r from-[#E44D26] via-[#C23B7E] to-[#6C3CC9] bg-clip-text text-transparent  pb-1.5'>Development  Stack </h2>
                <p className='text-2xl text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, px-2.5 m-3.5and put together the stack that fits your <br />
                    next project.</p>
                <div className=' py-[50px] flex gap-4 '>
                    <button className='text-2xl text-[#FFFFFF] bg-gradient-to-r from-[#F97316]  to-[#EC4899]  p-2 rounded-md' >Explore Technologies</button>
                    <button className='text-2xl text-[#374151] px-10 border border-[#E5E7EB] rounded-md '>Learn     More          </button>
                </div>

            </div>
            <div className=' ml-10  flex items-center justify-center'>
                <img src={img1} alt="" className=' px-1.5 pb-3.5 ps-6' />
            </div>
        </div>

    );
};

export default About;