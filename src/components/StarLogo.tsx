import React from "react";

const StarLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="/star.png"
        alt="Logo"
        className="w-8 sm:w-7 md:w-7 lg:w-[30px] h-auto object-contain"
      />
    </div>
  );
};

export default StarLogo;
