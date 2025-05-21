// Updated HeadingSection.tsx centered on screen
import React from "react";
import BlurTexts from "./items/BlurTexts";

const HeadingSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen mt-4 hide-scrollbar">
      <div className="flex flex-col items-start w-full max-w-lg px-3 ml-4 sm:ml-0">
        {/* Profile Image */}
        <div className="mb-4">
          <img 
            src="/me2.png" 
            alt="Profile" 
            className="object-cover w-24 h-24 overflow-hidden rounded-full"
          />
        </div>
        
        {/* Name and Title - Left aligned */}
        <div className="w-full mb-4 text-left">
       
        <BlurTexts
  text="Hi, I'm Khizar Alam"
  delay={150}
  animateBy="words"
  direction="top"
  className="mb-0 text-3xl font-black tracking-tight text-black sm:text-3xl md:text-4xl font-body"
/>
<BlurTexts
  text="A Creative Developer and Designer"
  delay={300}
  animateBy="words"
  direction="top"
  className="mb-4 text-3xl font-thin leading-tight text-black sm:mb-6 sm:text-3xl md:text-4xl font-body"
/>
 <p className="mb-4 text-sm font-medium font-bold tracking-tight text-red-600 sm:mb-6 sm:text-base font-body">
            WEBSITE IS CURRENTLY UNDER DEVELOPMENT!!!
          </p>
        
          <p className="mb-4 text-sm font-medium tracking-tight text-gray-600 sm:mb-6 sm:text-base font-body">
            Crafting seamless experiences and bold visuals. High school student 
            by day, creative thinker, and aspiring innovator by night.
          </p>
        </div>
        
        {/* Call to Action Button & Badge - Responsive layout */}
        <div className="flex flex-wrap items-start w-full gap-3 sm:flex-nowrap sm:items-center sm:gap-4">
          <button
            style={{ backgroundColor: "#242424" }}
            className="px-3 py-3 text-xs font-medium text-white transition-colors rounded-lg font-body w-36 hover:bg-gray-800 sm:w-auto sm:px-6 sm:py-3 sm:text-base sm:rounded-2xl"
          >
            View my creations
          </button>
          <div className="flex items-center px-3 py-3 bg-green-100 rounded-lg sm:px-4 sm:py-3 sm:rounded-2xl">
            <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-green-500 font-body sm:text-base">Available for new project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;