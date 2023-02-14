import { Inter } from "@next/font/google";
import BenefitsSection from "components/BenefitsSection";
import CardSection from "components/CardSection";
import { benefitsData } from "components/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="w-full h-screen "
      style={{
        background:
          "linear-gradient( to bottom, #6B46C1 0%,  #6B46C1 50%, white 50%, white 100%)",
      }}
    >
      <h1 className="text-white text-[40px] max-[640px]:text-[37px] font-inter font-bold text-center max-[640px]:text-left max-[640px]:px-6  pt-14 max-[640px]:pt-10 mb-3">
        Simple pricing for your business
      </h1>
      <h5 className="text-white opacity-[0.9] text-center max-[640px]:text-left text-xl max-[640px]:text-md max-[640px]:px-6 mb-10 max-[640px]:mb-6">
        Plans that are carefully crafted to suit your business.
      </h5>
      {/* CardSection Component Rendered */}
      <CardSection />
      {/* BenefitsSection Component Rendered */}
      <div className="flex flex-wrap w-[70%] max-[640px]:w-full mx-auto mt-8 text-lg font-bold justify-around max-[640px]:justify-start">
        {benefitsData.map((data, index) => (
          <BenefitsSection key={index} icon={data.icon} text={data.text} />
        ))}
      </div>
    </main>
  );
}
