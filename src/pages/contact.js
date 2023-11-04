import ContactDetails from "components/ContactDetails";
import Hero from "components/Hero";
import React from "react";

const contact = () => {
  return (
    <div>
      <Hero
        headings="Contact Me Now"
        message="I like to work with enegetic people."
      />
      <ContactDetails />
    </div>
  );
};

export default contact;
