import React from "react";
import { pricingData } from "./data";
import PricingDetails from "./PricingDetails";

const CardSection = () => {
  return (
    // Card Container
    <div className="w-[70%] max-[640px]:w-[90%] mx-auto flex max-[640px]:flex-col shadow-lg ">
      {/* Card Left Section */}
      <div className="flex-[0.4] bg-[#f3f3f3] text-center  pt-10  pb-7 max-[640px]:pb-10 max-[640px]:rounded-md rounded-sm">
        <h4 className="text-2xl font-bold mb-3">Premium PRO</h4>
        <h3 className="text-6xl font-bold mb-3">$329</h3>
        <h6 className="font-medium mb-8">billed just once</h6>
        <button className="w-[67%] mx-auto bg-[#805AD5] h-11 text-white rounded-md font-semibold">
          Get Started
        </button>
      </div>
      {/* Card Right Section */}
      <div className="flex-[0.6] bg-white p-10 max-[640px]:px-2 text-lg max-[640px]:text-md max-[640px]:rounded-md rounded-sm">
        <p className="mb-5">
          Access these features when you get this pricing package for your
          business.
        </p>
        <div>
          {Object.values(pricingData).map((text, index) => (
            <PricingDetails key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
