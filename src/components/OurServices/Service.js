import React from "react";
import ServiceItem from "./ServiceItem";

//image
import order from "../../asset/clip-order-completed-3 1.png";
import delivery from "../../asset/clip-937 1.png";
import quality from "../../asset/clip-delivery-in-time-satisfied-customer 1.png";

//data
const data = [
  {
    image: order,
    title: "Easy to order",
    text: "You only need a few steps in ordering food",
  },
  {
    image: delivery,
    title: "fastest delivery",
    text: "Delivery that is always on time even faster",
  },
  {
    image: quality,
    title: "Best quality",
    text: "Not only fast for us quality is also number one",
  },
];

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 text-Roboto">
      <p className="text-[#EC6083] uppercase text-lg leading-[18px] ">
        What we serve
      </p>

      <h1 className="font-bold text-5xl leading-[50px] sm:w-[444px] text-center mt-2">
        your favourite food delivery partner
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full">
        {data.map((item) => (
          <ServiceItem data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Service;
