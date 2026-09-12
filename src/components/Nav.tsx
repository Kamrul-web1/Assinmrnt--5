import React from 'react';
import imgs from '../assets/logo-text.png'

const Nav = () => {
    return (

        <nav className="bg-[#f9efef] p-8">
            <div className="container mx-auto flex  justify-between py-1">
                <img src={imgs} alt="" width={280} />
                <ul className="flex gap-7 items-center text-1xl ">

                    <li className="text-[#DB2777]">Home</li>
                    <li className='text-[#334155]'>  Technologies</li>
                    <li className='text-[#334155]'>  Projects</li>
                    <li className='text-[#334155]'>  About</li>
                    <li className='text-[#334155]'>   Contact</li>
                </ul>
                <div className=" flex gap-3 p-2">
                    <button className='text-[#334155]' >Sign In</button>
                    <button className="bg-[#D91B7E] p-3 rounded-4xl text-[#FFFFFF]">Sign Up</button>
                </div>
            </div>

        </nav>

    );
};

export default Nav;