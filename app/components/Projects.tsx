import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faCode, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { robotoMono } from "../layout";

export default function Projects() {
  return (
    <div className="max-w-full">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-3 mb-8">
        <h2 className="text-4xl font-bold text-theme-white">Projects and Contributions</h2>
        <p className="text-lg sm:text-xl text-theme-lightgray">Here&apos;s a list of software projects and contributions I&apos;ve made over the past few years.</p>
      </div>
      <div className="m-auto max-w-full lg:max-w-90% min-h-[32rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-2 auto-rows-max gap-6 px-8">
        <Project name="Snek Compiler" tools="Rust" url="">
          A compiler for the CSE 131 Snek language, which includes types, functions, heap allocation, and more.
        </Project>
        <Project name="Yodie ISA Design" tools="SystemVerilog Python Quartus QuestaSim" url="">
          Sample description from here on out yeah everything goes out to everything. In SystemVerilog and Python.
        </Project>
        <Project name="Raytracer" tools="C++ OpenGL" url="">
          Sample description from here on out yeah everything goes out to everything. In C++.
        </Project>
        <Project name="Bujo: Web Bullet Journal" tools="HTML CSS Javascript" url="">
          Sample description from here on out yeah everything goes out to everything. With the traditional web tech stack.
        </Project>
        <Project name="Open Journey: 2D Game" tools="Java" url="">
          Sample description from here on out yeah everything goes out to everything. In Java.
        </Project>
        <Project name="Test 6" tools="test" url="">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string,
  url: string,
  children: string,
  tools?: string,
}

const ProjectPropsDefault : ProjectProps = {
  name: "",
  url: "",
  children: "",
  tools: "",
}

function Project(props: ProjectProps) {
  const { name, url, children, tools } = {...ProjectPropsDefault, ...props}

  return (
    <div className="relative shrink-0 bg-theme-color1c rounded-md p-4 pb-10 transition duration-300">
      <div className="max-h-full overflow-contain space-y-2">  {/*overflow-y-scroll overscroll-y-contain*/}
        <div className="text-lg text-theme-black flex flex-row space-x-3">
          {/* <h3 className="text-xl sm:text-2xl -mt-0 z-10 text-theme-black"><FontAwesomeIcon icon={faCodeBranch} className="" /></h3> */}
          <div className="space-y-2">
            <h3 className="font-bold">{name}</h3>
            <p className="text-base text-theme-darkgray">{children}</p>
            <p className={`${robotoMono.className} text-theme-black text-sm font-semibold justify-self-end`}>
              {tools}
            </p>
          </div>
        </div>
      </div>
      <a 
        href={url}
        target="_self"
        rel="noopener noreferrer"
        className="text-theme-black bg-theme-color2 hover:bg-theme-color2b shadow-md shadow-theme-color2/80 hover:shadow-theme-color2b/80 h-12 w-12 absolute -bottom-2 -right-2 rounded-lg z-10 flex items-center justify-center transition duration-300">
        <FontAwesomeIcon icon={faArrowRight} className="static text-2xl" />
      </a>
    </div>
  )
}