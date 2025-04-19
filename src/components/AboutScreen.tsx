import React, { useState } from "react";
import { Code, Palette, PenTool, Smartphone, Globe, Github, Database, Cloud, Figma, Image } from "lucide-react";

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <section className="w-full max-w-[700px] mx-auto pt-5">
      <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-yellowText text-center font-display leading-none mb-10">
        ABOUT
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#111111] p-1 rounded-full border border-[#282828] inline-flex">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "services" ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-full text-sm font-display transition-all duration-300 ${
              activeTab === "skills" ? "bg-yellowText text-black" : "text-grayLight hover:text-white"
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
            <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center group-hover:bg-yellowText/10 transition-all duration-300">
                  <Palette size={24} className="text-yellowText" />
                </div>
                <h4 className="ml-4 text-[20px] font-display text-white">DESIGN</h4>
              </div>
              <ul className="space-y-3 text-grayLight font-body">
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-yellowText" />
                  <span className="transition-all duration-300 group-hover:text-white">UI/UX</span>
                </li>
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-yellowText" />
                  <span className="transition-all duration-300 group-hover:text-white">Branding</span>
                </li>
                <li className="flex items-center">
                  <PenTool size={16} className="mr-3 text-yellowText" />
                  <span className="transition-all duration-300 group-hover:text-white">Logo Design</span>
                </li>
              </ul>
            </div>
            
            {/* Development Services */}
            <div className="bg-[#111111] p-6 rounded-2xl border border-[#282828] hover:border-yellowText transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center group-hover:bg-yellowText/10 transition-all duration-300">
                  <Code size={24} className="text-yellowText" />
                </div>
                <h4 className="ml-4 text-[20px] font-display text-white">DEVELOPMENT</h4>
              </div>
              <ul className="space-y-3 text-grayLight font-body">
                <li className="flex items-center">
                  <Smartphone size={16} className="mr-3 text-yellowText" />
                  <span className="transition-all duration-300 group-hover:text-white">Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <Globe size={16} className="mr-3 text-yellowText" />
                  <span className="transition-all duration-300 group-hover:text-white">Web Development</span>
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
          <div className="bg-[#111111] p-8 rounded-2xl border border-[#282828] mb-6">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center">
                <Code size={24} className="text-yellowText" />
              </div>
              <h4 className="ml-4 text-[20px] font-display text-white">DEVELOPMENT</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center mb-4">
                  <h5 className="text-lg text-white font-display">Frontend</h5>
                  <div className="h-px bg-[#282828] flex-grow ml-3"></div>
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
                  <h5 className="text-lg text-white font-display">Backend</h5>
                  <div className="h-px bg-[#282828] flex-grow ml-3"></div>
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
                  <h5 className="text-lg text-white font-display">DevOps</h5>
                  <div className="h-px bg-[#282828] flex-grow ml-3"></div>
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
          <div className="bg-[#111111] p-8 rounded-2xl border border-[#282828]">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center">
                <Palette size={24} className="text-yellowText" />
              </div>
              <h4 className="ml-4 text-[20px] font-display text-white">DESIGN</h4>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <SkillCard icon={<Image size={24} />} label="Adobe Illustrator" />
              <SkillCard icon={<Figma size={24} />} label="Figma" />
              <SkillCard icon={<Image size={24} />} label="Photoshop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for skill items in list
const SkillItem: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => {
  return (
    <div className="flex items-center cursor-pointer group">
      <div className="mr-2 text-yellowText">{icon}</div>
      <span className="transition-all duration-300 text-grayLight group-hover:text-white font-body">
        {label}
      </span>
    </div>
  );
};

// Helper component for design skill cards
const SkillCard: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => {
  return (
    <div className="bg-[#181818] p-4 rounded-xl flex items-center hover:bg-[#1c1c1c] transition-all duration-300 cursor-pointer group">
      <div className="mr-3 text-yellowText">{icon}</div>
      <span className="transition-all duration-300 text-grayLight group-hover:text-white font-body">
        {label}
      </span>
    </div>
  );
};

export default AboutSection;