import React from "react";
import img1 from "../public/img1.avif";
import img2 from "../public/img2.avif";
import img3 from "../public/img3.avif";
import img4 from "../public/img4.avif";
import img5 from "../public/img5.avif";
import img6 from "../public/img6.avif";
import InstaImg from "./InstaImg";

const Insta = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <h1 className="text-2xl font-bold">follow me on Instagram</h1>
      <p className="text-xl font-medium py-5">@ArtO</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
        <InstaImg socialImg={img1} />
        <InstaImg socialImg={img2} />
        <InstaImg socialImg={img3} />
        <InstaImg socialImg={img4} />
        <InstaImg socialImg={img5} />
        <InstaImg socialImg={img6} />
      </div>
    </div>
  );
};

export default Insta;
