import React from "react";

import profile from "../asset/image 1.png";
import womenAndDog from "../asset/clip-waiting-1 1.png";

const Comments = () => {
  return (
    <div className=" mt-52 flex w-full flex-col-reverse items-center lg:items-end justify-between gap-20  lg:gap-5 lg:flex-row">
      <div>
        <img src={womenAndDog} alt="waiting" className=" w-[300px] lg:w-full " />
      </div>

      <div className="flex  flex-col items-center lg:items-start  lg:w-[520px]">
        <p className="smallTitle">what they say</p>
        <h1 className="title  mt-5 mb-8 capitalize w-80 md:w-[450px]">
          what our customer say about us
        </h1>
        <p className="text-center text-lg leading-6 w-3/6 sm:w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          varius eget pulvinar rhoncus eros, magna. Orci sed aenean scelerisque
          arcu. Venenatis odio etiam bibendum in nulla.
        </p>
        <div className="mt-5 flex  items-center gap-4">
          <img src={profile} alt="alex stanton" />
          <div className="flex flex-col gap-3">
            <h6 className="text-2xl font-medium leading-[0]">Alex Stanton</h6>
            <p className="text-base ">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
