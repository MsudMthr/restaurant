import React from 'react';
import cart from '../../asset/icons/Cart 2.svg'
import search from '../../asset/icons/Search....svg'
import user from '../../asset/icons/User.svg'

const Icons = () => {
    return (
        <div>
            <ul className='justify-between flex w-56 mx-auto items-center mr-4'>    
                <li className='bg-[#EC6083] p-4 rounded-3xl'><a href='s' className=' h-14 '><img src={search} alt="search" className='h-6' /></a></li>
                <li className='bg-[#A18EE5] p-4 rounded-3xl'><a href='s' className=' h-14 '><img src={cart} alt="cart" className='h-6' /></a></li>
                <li className='bg-[#212135] p-4 rounded-3xl'><a href='s' className=' h-14 '><img src={user} alt="user" className='h-6' /></a></li>
            </ul>
        </div>
    );
};

export default Icons;