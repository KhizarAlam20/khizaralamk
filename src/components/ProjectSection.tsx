import React, { useState } from "react";
import { Code, Palette } from "lucide-react";

// Define types for project data
interface Project {
  id: number;
  title: string;
  type: 'development' | 'design';
  featured?: boolean;
  image?: string;
  link: string;
}

const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const projects: Project[] = [
    { id: 1, title: "E-commerce Platform", type: 'development', featured: true, link: "#" },
    { id: 2, title: "Fitness App UI", type: 'design', featured: true, link: "#" },
    { id: 3, title: "Banking Dashboard", type: 'development', featured: true, link: "#" },
    { id: 4, title: "Task Management Tool", type: 'development', link: "#" },
    { id: 5, title: "Social Media API", type: 'development', link: "#" },
    { id: 6, title: "Weather App", type: 'development', link: "#" },
    { id: 7, title: "Portfolio Site", type: 'development', link: "#" },
    { id: 8, title: "Inventory System", type: 'development', link: "#" },
    { id: 9, title: "Mobile App Prototype", type: 'design', link: "#" },
    { id: 10, title: "Brand Identity", type: 'design', link: "#" },
    { id: 11, title: "Landing Page Design", type: 'design', link: "#" },
    { id: 12, title: "Dashboard UI Kit", type: 'design', link: "#" },
    { id: 13, title: "Icon Set", type: 'design', link: "#" },
    { id: 14, title: "Website Redesign", type: 'design', link: "#" },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === "featured") return project.featured;
    return project.type === activeTab;
  });

  return (
    <section className="w-full max-w-[700px] mx-auto px-4">
      {/* Heading */}
      <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-yellowText text-center font-display leading-none mb-8">
        PROJECTS
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#111111] p-1 rounded-full border border-[#282828] inline-flex">
          {["featured", "development", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
                activeTab === tab ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Section Header Icon */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center">
          {activeTab === "design" ? (
            <Palette size={20} className="text-yellowText" />
          ) : (
            <Code size={20} className="text-yellowText" />
          )}
        </div>
        <h4 className="ml-4 text-[18px] font-display text-white">
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
            className="group relative aspect-square overflow-hidden rounded-[3px] bg-[#0F0E0E] border border-[#282828] hover:border-yellowText transition-all duration-500 ease-in-out"
          >
            <a href={project.link} className="relative z-10 block w-full h-full">
              {/* Center logo or icon placeholder */}
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out delay-75 group-hover:scale-110">
                <div className="w-full h-full flex items-center justify-center text-[#282828] text-4xl font-bold relative z-10">
                  ✦
                </div>
                {/* Backdrop on hover */}
                <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out delay-100 bg-black opacity-0 group-hover:opacity-40" />
              </div>

              {/* Yellow hover label */}
              <div className="absolute z-20 transition-opacity duration-500 ease-in-out delay-150 opacity-0 bottom-4 left-4 group-hover:opacity-100">
                <div className="bg-yellowText px-3 py-1 rounded-tr-[3px] inline-block max-w-full">
                  <span className="text-sm font-semibold text-black font-display whitespace-nowrap">
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
