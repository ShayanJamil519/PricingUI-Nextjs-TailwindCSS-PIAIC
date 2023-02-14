import React from "react";
import { MdCheckCircle } from "react-icons/md";

const PricingDetails = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-1 mb-3 text-lg max-[640px]:text-[16px] ">
      <MdCheckCircle className="text-[#805AD5] p-1 text-3xl rounded-full" />
      <p>{text}</p>
    </div>
  );
};

export default PricingDetails;
