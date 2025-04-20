import React, { useState } from "react";
import { Code, Palette, PenTool, Smartphone, Globe, Github, Database, Cloud, Figma, Image } from "lucide-react";
import { useTheme } from "./Context/ThemeContext";

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("services");
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full max-w-[700px] mx-auto px-4 bg-theme-bg-main mt-[-30px]">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-theme-primary text-center font-display leading-none mb-10">
        ABOUT
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 border rounded-full bg-theme-bg-card border-theme-highlight">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "services" 
                ? `bg-theme-primary ${isDark ? "text-black" : "text-white"}` 
                : "text-theme-gray hover:text-theme-text"
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "skills" 
                ? `bg-theme-primary ${isDark ? "text-black" : "text-white"}` 
                : "text-theme-gray hover:text-theme-text"
            }`}
          >
            SKILLS
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative">
        {/* MY SERVICES */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === "services" ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Design Services */}
            <div className="p-6 transition-all duration-300 border bg-theme-bg-card rounded-2xl border-theme-highlight hover:border-theme-primary group">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
                  <Palette size={24} className="text-theme-primary" />
                </div>
                <h4 className="ml-4 text-[20px] font-display text-theme-text">DESIGN</h4>
              </div>
              <ul className="space-y-3 text-theme-gray font-body">
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-theme-primary" />
                  <span className="transition-all duration-300 group-hover:text-theme-text">UI/UX</span>
                </li>
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-theme-primary" />
                  <span className="transition-all duration-300 group-hover:text-theme-text">Branding</span>
                </li>
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-theme-primary" />
                  <span className="transition-all duration-300 group-hover:text-theme-text">Logo Design</span>
                </li>
              </ul>
            </div>
            
            {/* Development Services */}
            <div className="p-6 transition-all duration-300 border bg-theme-bg-card rounded-2xl border-theme-highlight hover:border-theme-primary group">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full bg-theme-bg-input group-hover:bg-theme-primary/10">
                  <Code size={24} className="text-theme-primary" />
                </div>
                <h4 className="ml-4 text-[20px] font-display text-theme-text">DEVELOPMENT</h4>
              </div>
              <ul className="space-y-3 text-theme-gray font-body">
                <li className="flex items-center">
                  <Smartphone size={16} className="mr-3 text-theme-primary" />
                  <span className="transition-all duration-300 group-hover:text-theme-text">Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <Globe size={16} className="mr-3 text-theme-primary" />
                  <span className="transition-all duration-300 group-hover:text-theme-text">Web Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MY SKILLS */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === "skills" ? "block" : "hidden"
          }`}
        >
          {/* Development Skills */}
          <div className="p-8 mb-6 border bg-theme-bg-card rounded-2xl border-theme-highlight">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-theme-bg-input">
                <Code size={24} className="text-theme-primary" />
              </div>
              <h4 className="ml-4 text-[20px] font-display text-theme-text">DEVELOPMENT</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center mb-4">
                  <h5 className="text-lg text-theme-text font-display">Frontend</h5>
                  <div className="flex-grow h-px ml-3 bg-theme-highlight"></div>
                </div>
                <div className="space-y-2">
                  <SkillItem icon={<Code size={16} />} label="React Native" />
                  <SkillItem icon={<Code size={16} />} label="Expo" />
                  <SkillItem icon={<Code size={16} />} label="Kotlin" />
                  <SkillItem icon={<Code size={16} />} label="Tailwind CSS" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <h5 className="text-lg text-theme-text font-display">Backend</h5>
                  <div className="flex-grow h-px ml-3 bg-theme-highlight"></div>
                </div>
                <div className="space-y-2">
                  <SkillItem icon={<Database size={16} />} label="Node.js" />
                  <SkillItem icon={<Database size={16} />} label="SpringBoot" />
                  <SkillItem icon={<Database size={16} />} label="PostgreSQL" />
                  <SkillItem icon={<Database size={16} />} label="MySQL" />
                  <SkillItem icon={<Database size={16} />} label="MongoDB" />
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <h5 className="text-lg text-theme-text font-display">DevOps</h5>
                  <div className="flex-grow h-px ml-3 bg-theme-highlight"></div>
                </div>
                <div className="space-y-2">
                  <SkillItem icon={<Github size={16} />} label="GitHub" />
                  <SkillItem icon={<Github size={16} />} label="Git" />
                  <SkillItem icon={<Cloud size={16} />} label="AWS" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Design Skills */}
          <div className="p-8 border bg-theme-bg-card rounded-2xl border-theme-highlight">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-theme-bg-input">
                <Palette size={24} className="text-theme-primary" />
              </div>
              <h4 className="ml-4 text-[20px] font-display text-theme-text">DESIGN</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <SkillCard icon={<Image size={24} />} label="Adobe Illustrator" />
              <SkillCard icon={<Figma size={24} />} label="Figma" />
              <SkillCard icon={<Image size={24} />} label="Photoshop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for skill items in list
const SkillItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center cursor-pointer group">
      <div className="mr-2 text-theme-primary">{icon}</div>
      <span className="transition-all duration-300 text-theme-gray group-hover:text-theme-text font-body">
        {label}
      </span>
    </div>
  );
};

// Helper component for design skill cards
const SkillCard: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center p-4 transition-all duration-300 cursor-pointer bg-theme-bg-input rounded-xl hover:bg-theme-highlight group">
      <div className="mr-3 text-theme-primary">{icon}</div>
      <span className="transition-all duration-300 text-theme-gray group-hover:text-theme-text font-body">
        {label}
      </span>
    </div>
  );
};

export default AboutSection;