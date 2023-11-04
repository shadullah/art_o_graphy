import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="collection" className="max-w-[1240px] mx-auto">
      <h1 className="py-24 text-4xl font-bold text-center">Collections</h1>
      <div>
        <div className="relative flex justify-center items-center ">
          {SliderData.map((slide, index) => {
            return (
              <div
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
                key={index}
              >
                <div onClick={prevSlide}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12 absolute top-[50%] left-[30px] text-black cursor-pointer select-none z-2 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {index === current && (
                  <Image
                    // objectFit="cover"
                    height={40}
                    width={1400}
                    src={slide.image}
                    alt="/"
                  />
                )}
                <div onClick={nextSlide}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12 absolute top-[50%] right-[30px] text-black cursor-pointer select-none z-2 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
