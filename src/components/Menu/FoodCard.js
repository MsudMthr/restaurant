import React from "react";

import plus from "../../asset/icons/entypo_plus.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const FoodCard = ({ food, img, price }) => {
  return (
    <>
      <div className="flex flex-col  overflow-auto relative   bg-white justify-center items-center  w-[290px] h-[400px] shadow-xl select-none rounded-[60px] bg-gradient-to-br from-[#E9F3FD] via-[#E8E8FF] to-[#E9F3FD]">
        <img
          src={img}
          alt={food.brand}
          className="z-50 absolute -top-28 w-60 mb-3"
        />
        <div className="flex flex-col gap-7 justify-end items-center h-full mt-16 mb-5">
          <h1 className="font-bold text-2xl m-2 text-center text-Roboto">{food.brand}</h1>
          <p className="w-60 opacity-50 text-lg leading-5 text-center text-Roboto">
            orem ipsum is placeholder text commonly used in the graphic
          </p>
          <div className="flex justify-between items-center w-full">
            <p className="font-bold text-4xl">{price}</p>
            <button>
              <img src={plus} alt="add to cart" className="bg-black rounded-full p-4 shadow-[0px_0px_5px_2px_#000] " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
