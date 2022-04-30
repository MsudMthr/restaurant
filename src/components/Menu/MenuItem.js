import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const MenuItem = ({ data, changeHandler, menu }) => {
  console.log();

  return (
    <div>
      <input
        type={"radio"}
        name="menu"
        id={data.category}
        onClick={changeHandler}
        className="hidden"
        value={menu}  
        onChange={() => data.category === menu && "checked"}
        checked={data.category === menu && true}
          
      />
      <label
        htmlFor={data.category}
        onClick={() => Navigate(`?sortBy=${data.category}`)}
        className={`flex justify-start items-center bg-[#A18EE5]  p-2 rounded-full shadow-md shadow-[#A18EE5]   `}
      >
        <div className="bg-[#E9F3FD] rounded-full flex justify-center items-center z-20 ">
          <img src={data.image_src} alt={data.category} />
        </div>
        <span
          className={`md:ml-5 ml-3 capitalize font-medium text-white text-xl md:text-2xl leading-7 ${
            data.category !== menu && "hidden"
          }`}
        >
          {data.category === menu && menu}
        </span>
      </label>{" "}
    </div>
  );
};

export default MenuItem;

{
  /* <Link to={`?sortBy=${data.category}`} className="z-0"> */
}
{
  /* </Link> */
}
