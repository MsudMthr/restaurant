import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul className='font-Roboto flex justify-between w-9/12 gap-8'>
                <li><a href='a' className='menu-item'>Home</a></li>
                <li><a href='a' className='menu-item'>Menu</a></li>
                <li><a href='a' className='menu-item'>Reservation</a></li>
                <li><a href='a' className='menu-item'>About</a></li>
                <li><a href='a' className='menu-item'>Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;