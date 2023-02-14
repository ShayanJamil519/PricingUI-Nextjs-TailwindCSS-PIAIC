import Image from "next/image";
import React from "react";

const BenefitsSection = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex justify-center max-[640px]:justify-start align-center gap-5 max-[640px]:gap-3 w-1/3 max-[640px]:w-full max-[640px]:px-6 max-[640px]:mb-3">
      <Image
        src={icon}
        alt={text}
        width={50}
        height={25}
        className="object-contain max-[640px]:w-6 h-6"
      />
      <p>{text}</p>
    </div>
  );
};

export default BenefitsSection;
