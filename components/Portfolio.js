import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-autp py-16 text-center mx-auto">
      <h1 className="font-bold text-3xl p-6">Art Paintings</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2 mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="/"
            height={400}
            width={600}
          />
        </div>
        <div className="w-full h-full ">
          <Image
            src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            height={400}
            width={1200}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1533157950006-c38844053d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            height={400}
            width={1200}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            height={400}
            width={1200}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
