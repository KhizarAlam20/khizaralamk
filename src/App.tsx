// // import React from "react";
// // import Navbar from "./components/Navbar";
// // import HeadingSection from "./components/HeadingSection";
// // import StarLogo from "./components/StarLogo";
// // import "./App.css";
// // import CustomCursor from "./components/CustomCursor";
// // import AboutSection from "./components/AboutScreen";
// // import ProjectSection from "./components/ProjectSection";
// // import ContactSection from "./components/ContactSection";
// // import TestimonialsSection from "./components/TestimonialSection";

// // const App: React.FC = () => {
// //   return (
// //     <div className="min-h-screen font-sans text-white cursor-none">
// //       <CustomCursor />
// //       <Navbar />

// //       <div className="container px-4 mx-auto">
// //         <div className="flex flex-col items-center mt-10 mb-20">
// //           <HeadingSection />
// //           <StarLogo />
// //           <p className="mb-4 font-bold text-center text-[14px] sm:text-[16px] md:text-[14px] text-grayLight font-body">
// //             I'm Khizar Alam – blending development and design <br/>
// //             to craft impactful digital products.
// //           </p>
// //         </div>

// //         <div className="space-y-28">
// //           <AboutSection />
// //           <ProjectSection />
// //           <TestimonialsSection/>
// //           <ContactSection />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import HeadingSection from "./components/HeadingSection";
// import StarLogo from "./components/StarLogo";
// import "./App.css";
// import CustomCursor from "./components/CustomCursor";
// import AboutSection from "./components/AboutScreen";
// import ProjectSection from "./components/ProjectSection";
// import ContactSection from "./components/ContactSection";
// import TestimonialsSection from "./components/TestimonialSection";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen font-sans text-white cursor-none">
//       <CustomCursor />
//       <Navbar />

//       <div className="flex flex-col items-center mt-10 mb-10 gap-y-10">
//         <HeadingSection />
//         <StarLogo />
//         <p className="mb-4 font-bold text-center text-[14px] sm:text-[16px] md:text-[14px] text-grayLight font-body">
//           I'm Khizar Alam – blending development and design <br />
//           to craft impactful digital products.
//         </p>
//       </div>

//       <div className="space-y-28">
//         <AboutSection />
//         <ProjectSection />
//         <TestimonialsSection />
//         <ContactSection />
//       </div>
//     </div>
//   );
// };

// export default App;

// Updated App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import HeadingSection from "./components/HeadingSection";
import StarLogo from "./components/StarLogo";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutScreen";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import TestimonialsSection from "./components/TestimonialSection";
import { ThemeProvider } from "./components/Context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans cursor-none theme-transition">
        <CustomCursor />
        <Navbar />

        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mt-10 mb-20">
            <HeadingSection />
            {/* <p className="mb-4 font-bold text-center text-[14px] sm:text-[16px] md:text-[14px] text-theme-gray font-body">
              I'm Khizar Alam – blending development and design <br/>
              to craft impactful digital products.
            </p> */}
          </div>

          <div className="space-y-28">
            <AboutSection />
            <ProjectSection />
            <TestimonialsSection/>
            <ContactSection />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;