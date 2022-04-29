import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

const ServiceItem = ({ data }) => {
  return (
    <ScrollAnimation animateIn="tada" initiallyVisible={true}>
      <div className="flex flex-col items-center justify-center mt-9">
        <img src={data.image} alt={data.title} className="w-80" />
        <h4 className="font-medium text-4xl text-center">{data.title}</h4>

        <p className="font-normal opacity-50 text-base leading-5 text-center w-60 mt-4">
          {data.text}
        </p>
      </div>
    </ScrollAnimation>
  );
};

export default ServiceItem;
