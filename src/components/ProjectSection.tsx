import React, { useState } from "react";
import { Code, Palette, ArrowUpRight } from "lucide-react";

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
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Sample project data
  const projects: Project[] = [
    // Featured projects
    { id: 1, title: "E-commerce Platform", type: 'development', featured: true, link: "#" },
    { id: 2, title: "Fitness App UI", type: 'design', featured: true, link: "#" },
    { id: 3, title: "Banking Dashboard", type: 'development', featured: true, link: "#" },
    
    // Development projects
    { id: 4, title: "Task Management Tool", type: 'development', link: "#" },
    { id: 5, title: "Social Media API", type: 'development', link: "#" },
    { id: 6, title: "Weather App", type: 'development', link: "#" },
    { id: 7, title: "Portfolio Site", type: 'development', link: "#" },
    { id: 8, title: "Inventory System", type: 'development', link: "#" },
    
    // Design projects
    { id: 9, title: "Mobile App Prototype", type: 'design', link: "#" },
    { id: 10, title: "Brand Identity", type: 'design', link: "#" },
    { id: 11, title: "Landing Page Design", type: 'design', link: "#" },
    { id: 12, title: "Dashboard UI Kit", type: 'design', link: "#" },
    { id: 13, title: "Icon Set", type: 'design', link: "#" },
    { id: 14, title: "Website Redesign", type: 'design', link: "#" },
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "featured") return project.featured;
    return project.type === activeTab;
  });

  // Handle mouse movement for hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left-10,
      y: e.clientY - rect.top-10
    });
    setHoveredId(projectId);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <section className="w-full max-w-[700px] mx-auto">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-yellowText text-center font-display leading-none mb-10">
        PROJECTS
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#111111] p-1 rounded-full border border-[#282828] inline-flex">
          <button
            onClick={() => setActiveTab("featured")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "featured" ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
            }`}
          >
            FEATURED
          </button>
          <button
            onClick={() => setActiveTab("development")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "development" ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
            }`}
          >
            DEVELOPMENT
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "design" ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
            }`}
          >
            DESIGN
          </button>
        </div>
      </div>

      {/* Section header based on active tab */}
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center">
          {activeTab === "design" ? (
            <Palette size={24} className="text-yellowText" />
          ) : (
            <Code size={24} className="text-yellowText" />
          )}
        </div>
        <h4 className="ml-4 text-[20px] font-display text-white">
          {activeTab === "featured" ? "FEATURED PROJECTS" : 
           activeTab === "development" ? "DEVELOPMENT PROJECTS" : "DESIGN PROJECTS"}
        </h4>
      </div>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-[#111111] border border-[#282828] hover:border-yellowText transition-all duration-300"
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={project.link} className="block w-full h-full">
              <div className="absolute inset-0 bg-[#181818] flex items-center justify-center">
                {project.type === 'design' ? (
                  <Palette size={32} className="text-[#282828]" />
                ) : (
                  <Code size={32} className="text-[#282828]" />
                )}
              </div>
              
              {/* Project title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl text-white font-display">{project.title}</h3>
                <p className="text-sm capitalize text-grayLight">
                  {project.type}
                </p>
              </div>
              
              {/* Dynamic arrow that follows cursor */}
              {hoveredId === project.id && (
                <div 
                  className="absolute flex items-center justify-center text-white transition-opacity duration-200"
                  style={{
                    left: `${hoverPosition.x}px`,
                    top: `${hoverPosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="flex items-center p-2 rounded-full shadow-lg bg-yellowText">
                    <ArrowUpRight size={20} className="text-black" />
                    <span className="ml-1 mr-2 text-xs font-medium text-black">VISIT</span>
                  </div>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;