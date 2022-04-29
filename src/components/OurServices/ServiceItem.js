import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ServiceItem = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center mt-9"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
    >
      <img src={data.image} alt={data.title} className="w-80" />
      <h4 className="font-medium text-4xl text-center">{data.title}</h4>

      <p className="font-normal opacity-50 text-base leading-5 text-center w-60 mt-4">
        {data.text}
      </p>
    </div>
  );
};

export default ServiceItem;
