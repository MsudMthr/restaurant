import React , {useState} from 'react';

const Menu = () => {

    const [isShow , setIsShow] = useState(false)
    
    console.log(isShow);
    return (
        <div className={`md:w-11/12 flex justify-center items-center ${isShow ? "w-auto":"w-6"}`}>
                  
            {/* hamburger menu */}
            <div className={`md:hidden flex flex-col items-center justify-evenly gap-[5px]  transition-all ease-in-out ${isShow && "-translate-x-5"}` } onClick={() => setIsShow(!isShow)}>
                <span className={`h-[3px] w-6 bg-black transition-all ease-out ${isShow && "rotate-45 origin-[1px]"}`}></span>
                <span className={`h-[3px] w-6 bg-black transition-all ease-out ${isShow && "-translate-x-7 opacity-0"}`}></span>
                <span className={`h-[3px] w-6 bg-black transition-all ease-out ${isShow && "-rotate-45 origin-[1px]"}`}></span>
            </div>

            {/* menu */}
            <ul className={` font-Roboto flex flex-col text-center md:flex-row justify-between w-8/12 lg:gap-8 gap-6  transition-all ease-in-out md:translate-y-0 ${isShow ? "translate-y-0" : "translate-y-[-1000%]"}`}>
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