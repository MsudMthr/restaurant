import React from 'react';
import cart from '../asset/icons/Cart 2.svg'
import search from '../asset/icons/Search....svg'
import user from '../asset/icons/User.svg'

const Icons = () => {
    return (
        <div>
            <ul className='w-10 bg-black'>
                <li><a href='s' className='bg-black h-10'><img src={search} alt="search" className='h-5' /></a></li>
                <li><a href='s' className='bg-black h-10'><img src={cart} alt="cart" className='h-5' /></a></li>
                <li><a href='s' className='bg-black h-10'><img src={user} alt="user" className='h-5' /></a></li>
            </ul>
        </div>
    );
};

export default Icons;