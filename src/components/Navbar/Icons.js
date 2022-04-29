import React from 'react';
import cart from '../../asset/icons/Cart 2.svg'
import search from '../../asset/icons/Search....svg'
import user from '../../asset/icons/User.svg'

const Icons = () => {
    return (
        <div>
            <ul className='justify-around flex flex-col sm:flex-row lg:w-56 sm:w-36 gap-4 sm:gap-0 mx-auto items-center mr-4'>    
                <li className='bg-[#EC6083] lg:p-4 p-3 rounded-2xl'><a href='s' className=' h-14  '><img src={search} alt="search" className='h-4' /></a></li>
                <li className='bg-[#A18EE5] lg:p-4 p-3 rounded-2xl'><a href='s' className=' h-14  '><img src={cart} alt="cart" className='h-4' /></a></li>
                <li className='bg-[#212135] lg:p-4 p-3 rounded-2xl'><a href='s' className=' h-14  '><img src={user} alt="user" className='h-4' /></a></li>
            </ul>
        </div>
    );
};

export default Icons;