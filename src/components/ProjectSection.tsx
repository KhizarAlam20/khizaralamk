import React, { useState } from "react";
import { Code, Palette } from "lucide-react";
import { useTheme } from "./Context/ThemeContext";

interface Project {
  id: number;
  title: string;
  type: 'development' | 'design';
  image?: string;
  link: string;
}

const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const featuredProjects: Project[] = [
    { id: 1, title: "E-commerce Platform", type: 'development', link: "#" },
    
  ];

  const projects: Project[] = [
    { id: 2, title: "Music App Logo Design", type: 'design', image: "https://res.cloudinary.com/dityjpdl6/image/upload/f_auto,q_auto/zjgqltpwapkbqzcg6vuc.jpg", link: "#" },
    { id: 3, title: "Banking Dashboard", type: 'development', link: "#" },
    { id: 4, title: "Music App Logo Design", type: 'design', image: "https://res.cloudinary.com/dityjpdl6/image/upload/f_auto,q_auto/v1745246092/ghyiv4wjsqevnlum25qy.jpg", link: "#" },
    { id: 5, title: "Task Management Tool", type: 'development', link: "#" },
    { id: 6, title: "Social Media API", type: 'development', link: "#" },
    { id: 7, title: "Weather App", type: 'development', link: "#" },
    { id: 8, title: "Portfolio Site", type: 'development', link: "#" },
    { id: 9, title: "Inventory System", type: 'development', link: "#" },
    { id: 10, title: "Mobile App Prototype", type: 'design', image: "https://res.cloudinary.com/dityjpdl6/image/upload/f_auto,q_auto/v1745246150/hinbcw7k8gm92mtbiqg1.jpg", link: "#" },
    { id: 11, title: "Brand Identity", type: 'design', link: "#" },
    { id: 12, title: "Landing Page Design", type: 'design', link: "#" },
    { id: 13, title: "Dashboard UI Kit", type: 'design', link: "#" },
    { id: 14, title: "Icon Set", type: 'design', link: "#" },
    { id: 15, title: "Website Redesign", type: 'design', link: "#" },
  ];

  const filteredProjects = activeTab === "featured"
    ? featuredProjects
    : projects.filter(project => project.type === activeTab);

  return (
    <section className="w-full max-w-[700px] mx-auto px-4 bg-theme-bg-main">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-theme-primary text-center font-display leading-none mb-8">
        PROJECTS
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 border rounded-full bg-theme-bg-card border-theme-highlight">
          {["featured", "development", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
                activeTab === tab 
                  ? `bg-theme-primary ${isDark ? "text-black" : "text-white"}` 
                  : "text-theme-gray hover:text-theme-text"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Section Header Icon */}
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-theme-bg-input">
          {activeTab === "design" ? (
            <Palette size={20} className="text-theme-primary" />
          ) : (
            <Code size={20} className="text-theme-primary" />
          )}
        </div>
        <h4 className="ml-4 text-[18px] font-display text-theme-text">
          {activeTab === "featured"
            ? "FEATURED PROJECTS"
            : activeTab === "development"
            ? "DEVELOPMENT PROJECTS"
            : "DESIGN PROJECTS"}
        </h4>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square overflow-hidden rounded-[3px] bg-theme-bg-card border border-theme-highlight hover:border-theme-primary transition-all duration-500 ease-in-out"
          >
            <a
              href={project.link}
              className="relative z-10 block w-full h-full"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {/* Project image or fallback */}
              {project.image ? (
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out delay-75 group-hover:scale-110">
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out delay-100 bg-black opacity-0 group-hover:opacity-40" />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out delay-75 group-hover:scale-110">
                  <div className="relative z-10 flex items-center justify-center w-full h-full text-4xl font-bold text-theme-highlight">
                    ✦
                  </div>
                  <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out delay-100 bg-black opacity-0 group-hover:opacity-40" />
                </div>
              )}

              {/* Project title label on hover */}
              <div className="absolute z-20 transition-opacity duration-500 ease-in-out delay-150 opacity-0 bottom-4 left-4 group-hover:opacity-100">
                <div className="bg-theme-primary px-3 py-1 rounded-tr-[3px] inline-block max-w-full">
                  <span className={`text-sm font-semibold font-display whitespace-nowrap ${isDark ? "text-black" : "text-white"}`}>
                    {project.title}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
