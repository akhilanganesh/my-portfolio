import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshakeSimple, faCode, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { robotoMono } from "../fonts";

const faContribution = faHandshakeSimple;

export default function Projects() {
  return (
    <div className="max-w-full relative z-30">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-4 mb-8">
        <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 mx-0 sm:-mx-3 p-4 sm:p-6 flex flex-col text-theme-lightgray space-y-4 rounded-2xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden z-30">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
          
          <h2 className="text-center md:text-left text-3xl sm:text-4xl font-bold text-theme-white relative z-30">
            <span className="bg-gradient-to-r from-theme-white via-theme-white to-theme-white/90 bg-clip-text text-transparent">Projects and Contributions</span>
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-theme-color2/80 to-theme-color2/50 rounded-full hidden md:block"></span>
          </h2>
          
          <p className="text-base sm:text-lg relative leading-relaxed z-30">
            Here&apos;s a curated list of <span className="text-theme-white/90">software projects</span> <span className="whitespace-nowrap inline">(<FontAwesomeIcon 
            icon={faCode} className="inline text-sm sm:text-base" />)</span> and <span className="text-theme-white/90">contributions</span> <span className="whitespace-nowrap 
            inline">(<FontAwesomeIcon icon={faContribution} className="inline text-sm sm:text-base" />)</span> I&apos;ve made over 
            the past few years.
          </p>
        </div>
      </div>
      <div className="m-auto max-w-full lg:max-w-90% min-h-[20rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 auto-rows-max gap-6 px-8 relative z-30">
        <Project name="Portfolio Website" tools="React Next.js Typescript TailwindCSS" url="https://github.com/akhilanganesh/my-portfolio">
          The website you&apos;re reading right now! Hosted on Vercel with server side rendering (SSR).
        </Project>
        <Project name="Snek Compiler" tools="Rust" url="https://github.com/akhilanganesh/snek-compiler">
          A compiler for the CSE 131 Snek language, which includes types, functions, heap allocation, and more.
        </Project>
        <Project name="Yodie ISA Design" tools="SystemVerilog Python Quartus QuestaSim" url="https://github.com/KartikeyanSubramanyam/CSE141L-Project">
          A custom ISA and microprocessor design and implementation that can handle error detection and correction, as well as bit pattern matching.
        </Project>
        <Project name="Surfstore" tools="Golang gRPC" url="https://github.com/ucsd-cse124-fa22/proj4-akhilanganesh">
          A networked consistent hash ring for unstructured data that is scalable to a number of nodes/servers.
        </Project>
        <Project name="Hexcaliber Games" tools="Unity C#" url="https://hexcaliber.dev/" cont={true}>
          Contributions to Hexcaliber 2D game development.
        </Project>
        <Project name="Bujo: Web Bullet Journal" tools="HTML CSS Javascript Scrum" url="https://github.com/cse110-sp21-group10/cse110-sp21-group10">
          A bullet journal website that can store tasks, notes, and events. Built by an 8-person team with the traditional web tech stack.
        </Project>
        {/* <Project name="Open Journey: 2D Game" tools="Java">
          A 2D top-down Zelda-esque game built with Javax and Swing API, using an event-driven runtime.
        </Project> */}
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string;
  tools: string;
  children: React.ReactNode;
  url?: string;
  cont?: boolean;
}

function Project({ name, tools, children, url, cont }: ProjectProps) {
  return (
    <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 pt-2 pb-3 px-4 sm:pt-3 sm:pb-4 sm:px-6 flex flex-col text-theme-lightgray space-y-4 rounded-xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-theme-black/40 transition-all duration-300 relative overflow-hidden z-30 border-l-4 border-l-theme-color2/60 h-full">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col space-y-4 pb-10">
        <div className="flex flex-row justify-between items-center relative z-30">
          <h3 className="text-xl sm:text-2xl font-bold text-theme-white">{name}</h3>
          {cont ? 
            <FontAwesomeIcon icon={faContribution} className="text-theme-color2 text-xl" /> : 
            <FontAwesomeIcon icon={faCode} className="text-theme-color2 text-xl" />
          }
        </div>
        
        <div className={`${robotoMono.className} text-xs sm:text-sm flex flex-wrap gap-1.5 relative z-30`}>
          {tools.split(" ").map((tool, index) => (
            <span 
              key={index} 
              className="bg-theme-black/30 border border-theme-white/10 px-1.5 py-0.5 rounded text-[0.85rem] text-theme-white/70"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <p className="text-sm sm:text-base relative z-30">{children}</p>
      </div>
      
      {url && (
        <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 z-30">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-theme-color2 hover:text-theme-color2b transition-colors duration-200 flex items-center space-x-1 text-sm sm:text-base"
          >
            <span>View Project</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs sm:text-sm" />
          </a>
        </div>
      )}
    </div>
  );
}