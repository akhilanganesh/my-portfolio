import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshakeSimple, faCode, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { robotoMono } from "../layout";

const faContribution = faHandshakeSimple;

export default function Projects() {
  return (
    <div className="max-w-full">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-3 mb-8">
        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-bold text-theme-white">Projects and Contributions</h2>
        <p className="text-lg sm:text-xl text-theme-lightgray">Here&apos;s a list of software projects (<FontAwesomeIcon icon={faCode} className="text-sm sm:text-base" />) and contributions (<FontAwesomeIcon icon={faContribution} className="text-sm sm:text-base" />) I&apos;ve made over the past few years.</p>
      </div>
      <div className="m-auto max-w-full lg:max-w-90% min-h-[20rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 auto-rows-max gap-6 px-8">
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
          Sample description from here on out yeah everything goes out to everything. With the traditional web tech stack.
        </Project>
        {/* <Project name="Open Journey: 2D Game" tools="Java">
          A 2D top-down Zelda-esque game built with Javax and Swing API, using an event-driven runtime.
        </Project> */}
      </div>
    </div>
  );
}

interface ProjectProps {
  name?: string,
  url?: string | false,
  children?: string,
  tools?: string,
  cont?: boolean
}

const ProjectPropsDefault : ProjectProps = {
  name: "",
  url: false,
  children: "",
  tools: "",
  cont: false,
}

function Project(props: ProjectProps) {
  const { name, url, children, tools, cont } = {...ProjectPropsDefault, ...props}

  return (
    <div className="relative shrink-0 bg-theme-color1c rounded-md p-4 pb-4 md:pb-4 transition duration-300">
      <div className="max-h-full overflow-contain space-y-2">  {/*overflow-y-scroll overscroll-y-contain*/}
        <div className="text-base md:text-lg text-theme-black flex flex-row space-x-3">
          {/* <h3 className="text-xl sm:text-2xl -mt-0 z-10 text-theme-black"><FontAwesomeIcon icon={faContribution} className="" /></h3> */}
          <div className="space-y-2">
            <div className="flex flex-row place-content-start">
              { (cont) ? (<FontAwesomeIcon icon={faContribution} className="static mr-2 mt-1" />)
                  : (<FontAwesomeIcon icon={faCode} className="static mr-2 mt-1" />)
              }
              <h3 className="font-bold">{name}</h3>
            </div>
            <p className="text-sm md:text-base text-theme-darkgray">{children}</p>
            <p className={`${robotoMono.className} text-theme-black text-xs sm:text-sm font-semibold pr-7`}>
              {tools}
            </p>
          </div>
        </div>
      </div>
      { (url != false) &&
        <a 
          href={url}
          target="_self"
          rel="noopener noreferrer"
          className="text-theme-black bg-theme-color2 hover:bg-theme-color2b active:bg-theme-color2d shadow-sm active:shadow-none shadow-theme-color2/80 hover:shadow-theme-color2b/80 h-12 w-12 absolute -bottom-2 -right-2 rounded-lg z-10 flex items-center justify-center transition duration-300">
          <FontAwesomeIcon icon={faArrowRight} strokeWidth={0} className="static text-lg sm:text-xl md:text-2xl" />
        </a>
      }
    </div>
  )
}