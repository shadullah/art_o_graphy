import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import React from "react";

const work = () => {
  return (
    <div>
      <Hero
        headings="Latest Works"
        message="Dedication can depict your Inner telent"
      />
      <Portfolio />
    </div>
  );
};

export default work;
