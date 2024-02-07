import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StackIcon from "tech-stack-icons";
import techStackList from "./TechStackIcons/techStackList";
import Divider from "../Divider/Divider";

const TechSlider = () => {
  const list = techStackList;
  const [settings] = useState({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 50,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <div>
      <div className="container mx-auto mt-[100px]">
        <div className="flex flex-col text-center">
          <h1 className="text-[32px] text-white font-[600] px-5">Tech Stack</h1>
          <p className="text-white/[.6] font-[500] mt-2 px-5">
            Technologies and tools I have experience working with,
            <br /> always open for new things
          </p>
        </div>
        <Divider />
        <Slider {...settings} className="mt-10 inset-shadow">
          {list.map((item, index) => (
            <div className="p-5">
              <StackIcon key={index} className="" name={item.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TechSlider;
