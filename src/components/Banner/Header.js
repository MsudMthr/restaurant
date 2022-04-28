import React from "react";
import vector from '../../asset/icons/Vector.svg'
import burger from '../../asset/burger1 1.png'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1>Be the fastest in delivering your food</h1>
        <p>
          We cook and deliver the tastiest food right away to your designated
          location
        </p>
        <button>Get Started</button>
      </div>
      <div className="relative">
          <img src={vector} alt="vector"/>
          <img src={burger} alt="burger" className="absolute -top-8 back"/>
              
      </div>
    </div>
  );
};

export default Header;
