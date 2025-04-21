// Updated App.tsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeadingSection from "./components/HeadingSection";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutScreen";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import TestimonialsSection from "./components/TestimonialSection";
import { ThemeProvider } from "./components/Context/ThemeContext";

const App: React.FC = () => {

  useEffect(() => {
    const blockInspectShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ["U", "S", "P"].includes(e.key.toUpperCase()))
      ) {
        e.preventDefault();
      }
    };

    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    document.addEventListener("keydown", blockInspectShortcuts);
    document.addEventListener("contextmenu", blockContextMenu);

    return () => {
      document.removeEventListener("keydown", blockInspectShortcuts);
      document.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);
  
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans cursor-none theme-transition">
        <CustomCursor />
        <Navbar />

        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mt-10 mb-20">
            <HeadingSection />
           
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