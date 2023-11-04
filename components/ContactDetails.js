import Link from "next/link";
import React from "react";

const ContactDetails = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-600 text-center">
        Contact Details
      </h1>
      <div className="flex justify-between max-w-[500px] mx-auto bg-slate-600 p-10 rounded-2xl my-16">
        <p className="text-white font-extrabold">
          <Link href="https://github.com/hexaalif">Github: Hexa Alif</Link>
        </p>
        <p className="text-white font-extrabold">
          Email: hexaalif2020@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
