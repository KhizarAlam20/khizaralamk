// Updated HeadingSection.tsx with theme support
import React from "react";
import MagneticImage from "./MagneticImage";
// import { useTheme } from "./Context/ThemeContext";
import StarLogo from "./StarLogo";

const HeadingSection: React.FC = () => {
  // const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full bg-[#282828] text-[#DEEF1F] text-center text-[9px] sm:text-[12px] py-[2px] font-body tracking-wide mb-5">
        ⚠️ Website in development — full version coming soon!
      </div>

      <p className="mb-4 font-bold text-center text-[14px] sm:text-[16px] md:text-[14px] text-theme-gray font-body">
        CRAFTING DIGITAL GOODS SINCE 2021
      </p>

      <div className="relative flex flex-col items-center justify-center">
        <MagneticImage
          src="/me2.png"
          alt="Overlay"
          className="absolute top-1/2 left-1/2 
                    w-[60px] h-[100px]
                    sm:w-[100px] sm:h-[150px]
                    md:w-[120px] md:h-[180px]
                    lg:w-[110px] lg:h-[180px]
                    object-cover rounded-[100px]
                    transform -translate-x-1/2 -translate-y-1/2
                    z-20 shadow-xl grayscale hover:grayscale-0 "
        />

        <span className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] text-theme-primary text-center font-display leading-none z-10">
          KHIZAR
        </span>
        <span className="mt-[-12px] sm:mt-[-14px] md:mt-[-16px] lg:mt-[-18px] text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] text-theme-primary text-center font-display leading-none z-10 mb-10">
          ALAM
        </span>
      </div>

      <StarLogo />

      <div className="mt-10">
        <p className="font-bold text-center text-[14px] sm:text-[16px] md:text-[16px] text-theme-gray font-body">
          I'm Khizar Alam – I blend development and design <br />
          to craft impactful digital products.
        </p>
      </div>
    </div>
  );
};

export default HeadingSection;
