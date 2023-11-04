import Image from "next/image";
import React from "react";

const InstaImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image src={socialImg} className="w-full h-[300px] mx-auto " alt="/" />

      {/* overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 text-gray-300 hidden group-hover:block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default InstaImg;
