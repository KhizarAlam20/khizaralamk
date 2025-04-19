import React from "react";
import MagneticImage from "./MagneticImage";


const HeadingSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <p className="mb-4 font-bold text-center text-[14px] sm:text-[16px] md:text-[14px] text-grayLight font-body">
        CRAFTING DIGITAL GOODS SINCE 2021
      </p>

      <div className="relative flex flex-col items-center justify-center">
        <MagneticImage
          src="/R.jpg"
          alt="Overlay"
          className="absolute top-1/2 left-1/2 
                    w-[60px] h-[100px]
                    sm:w-[100px] sm:h-[150px]
                    md:w-[120px] md:h-[180px]
                    lg:w-[110px] lg:h-[180px]
                    object-cover rounded-[100px]
                    transform -translate-x-1/2 -translate-y-1/2
                    z-20 shadow-xl"
        />

        <span className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] text-yellowText text-center font-display leading-none z-10">
          KHIZAR
        </span>
        <span className="mt-[-12px] sm:mt-[-14px] md:mt-[-16px] lg:mt-[-18px] text-[100px] sm:text-[140px] md:text-[160px] lg:text-[180px] text-yellowText text-center font-display leading-none z-10">
          ALAM
        </span>
      </div>
    </div>
  );
};

export default HeadingSection;
