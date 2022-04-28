import React from "react";
import vector from "../../asset/icons/Vector.svg";
import burger from "../../asset/burger1 1.png";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-start  justify-between mt-14">
      <div className="lg:w-7/12 ml-[52px] flex flex-col md:items-start items-center">
        <h1 className="lg:text-8xl text-6xl lg:w-[658px] text-center md:text-left capitalize">
          Be the fastest in delivering your{" "}
          <span className="text-[#EC6083]">food</span>
        </h1>
        <p className="text-2xl md:w-[455px] w-full text-center md:text-left mt-5 text-black/60">
          We cook and deliver the tastiest food right away to your designated
          location
        </p>
        <button className="bg-[#EC6083] rounded-full px-5 py-2 font-bold text-xl my-10 ">
          Get Started
        </button>
      </div>
      <div className="relative mr-4 flex flex-col md:flex-row justify-center items-center">
        <img src={vector} alt="vector" className=" w-8/12 md:w-[645px]" />
        <img
          src={burger}
          alt="burger"
          className="absolute xl:-top-8 w-8/12 md:w-[645px] "
        />
      </div>
    </header>
  );
};

export default Header;
