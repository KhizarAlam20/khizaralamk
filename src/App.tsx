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
import ImageCarousel from "./components/items/ImageCarousel";
import InfiniteMenu from "./components/items/InfiniteMenu";
import DesignProjects from "./components/DesignProjects";
import MyServices from "./components/screens/MyServices";

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

  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];
  
  
  return (
    
      <div className="min-h-screen font-sans hide-scrollbar ">
        {/* <CustomCursor /> */}
        <Navbar />
           <HeadingSection/>
   <ImageCarousel/>
       <AboutSection/>
       {/* <InfiniteMenu items={items}/> */}
       <ProjectSection/>
       <MyServices/>
       {/* <DesignProjects/> */}
      </div>
  );
};

export default App;