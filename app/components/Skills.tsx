// import '../styles/Skills.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faDatabase, faTools, faCloud, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { robotoMono } from "../fonts";
import SkillCarousel from "./SkillCarousel";

export default function Skills() {
  // Individual categories for the carousel
  const skillCategories = [
    // Languages
    <div key="slide1" className="flex justify-center px-2 sm:px-8">
      <div className="w-full max-w-5xl">
        <SkillCategory 
          title="Languages" 
          icon={faCode}
          skills={["Java", "C", "C++", "C#", "Golang", "Python", "Rust", "SystemVerilog", "ARMv8", "x86", "Prolog"]}
        />
      </div>
    </div>,
    // Frontend
    <div key="slide2" className="flex justify-center px-8">
      <div className="w-full max-w-3xl">
        <SkillCategory 
          title="Frontend" 
          icon={faLaptopCode}
          skills={["React", "Next.js", "TailwindCSS", "HTML", "CSS", "JavaScript"]}
        />
      </div>
    </div>,
    // Backend
    <div key="slide3" className="flex justify-center px-8">
      <div className="w-full max-w-3xl">
        <SkillCategory 
          title="Backend" 
          icon={faServer}
          skills={["Node.js", "Express.js", "C-CUDA"]}
        />
      </div>
    </div>,
    // Databases
    <div key="slide4" className="flex justify-center px-8">
      <div className="w-full max-w-3xl">
        <SkillCategory 
          title="Databases" 
          icon={faDatabase}
          skills={["PostgreSQL", "MongoDB", "MySQL", "SQLite", "SQL"]}
        />
      </div>
    </div>,
    // Tools & Technologies
    <div key="slide5" className="flex justify-center px-8">
      <div className="w-full max-w-3xl">
        <SkillCategory 
          title="Tools & Technologies" 
          icon={faTools}
          skills={["Git/Github", "Docker", "Linux", "Pytorch", "Quartus", "QuestaSim"]}
        />
      </div>
    </div>
  ];

  return (
    <div className="max-w-full relative z-30">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-4 mb-8">
        <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 mx-0 sm:-mx-3 p-4 sm:p-6 flex flex-col text-theme-lightgray space-y-4 rounded-2xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden z-30">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
          
          <h2 className="text-center md:text-left text-3xl sm:text-4xl font-bold text-theme-white relative z-30">
            <span className="bg-gradient-to-r from-theme-white via-theme-white to-theme-white/90 bg-clip-text text-transparent">Technical Skills</span>
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-theme-color2/80 to-theme-color2/50 rounded-full hidden md:block"></span>
          </h2>
          
          <p className="text-base sm:text-lg relative leading-relaxed z-30">
            Here&apos;s an overview of my <span className="text-theme-white/90">technical expertise</span> across various domains of software development. From frontend frameworks to backend technologies, I&apos;ve developed a diverse skill set through both academic and professional experiences.
          </p>
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0">
        <SkillCarousel>
          {skillCategories}
        </SkillCarousel>
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  icon: any;
  skills: string[];
}

function SkillCategory({ title, icon, skills }: SkillCategoryProps) {
  return (
    <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 pt-4 pb-6 px-4 sm:px-8 sm:pt-5 sm:pb-8 flex flex-col text-theme-lightgray space-y-6 rounded-xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition-all duration-300 group relative overflow-hidden h-full">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
      
      <div className="flex items-center space-x-4 relative z-30">
        <FontAwesomeIcon icon={icon} className="text-theme-color2 text-3xl" />
        <h3 className="text-2xl font-bold text-theme-white">{title}</h3>
      </div>
      
      <div className={`${robotoMono.className} grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative z-30`}>
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-theme-black/40 border border-theme-white/30 px-3 sm:px-4 py-2.5 rounded-lg text-sm sm:text-base text-theme-white/90 hover:bg-theme-black/50 hover:border-theme-white/40 hover:text-theme-white transition-all duration-200 text-center shadow-sm flex items-center justify-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}