import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"

export default function Projects() {
  return (
    <div className="max-w-full">
      <div className="max-w-screen sm:max-w-90% md:max-w-80% mx-auto px-3 sm:px-0 space-y-3 mb-8">
        <h2 className="text-4xl font-bold text-theme-white">Projects and Contributions</h2>
        <p className="text-lg sm:text-xl text-theme-lightgray">Here&apos;s a list of software projects and contributions I&apos;ve made over the past few years.</p>
      </div>
      <div className="m-auto max-w-full lg:max-w-90% min-h-[32rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 auto-rows-max gap-8 px-8">
        <Project name="Snek Compiler">
          Sample description from here on out yeah everything goes out to everything. In Rust.
        </Project>
        <Project name="Yodie ISA and Microprocessor">
          Sample description from here on out yeah everything goes out to everything. In SystemVerilog and Python.
        </Project>
        <Project name="Raytracer">
          Sample description from here on out yeah everything goes out to everything. In C++.
        </Project>
        <Project name="Bujo: Web-based Bullet Journal">
          Sample description from here on out yeah everything goes out to everything. With the traditional web tech stack.
        </Project>
        <Project name="Open Journey: A 2D Zelda-esque Game">
          Sample description from here on out yeah everything goes out to everything. In Java.
        </Project>
        <Project name="Test 6">
          Sample description from here on out yeah everything goes out to everything.
        </Project>
      </div>
    </div>
  );
}

interface ProjectProps {
  name: string,
  children: string,
}

function Project({ name, children }: ProjectProps) {
  return (
    <div className="shrink-0 bg-theme-color1c rounded-md p-4 px-5 pr-8 pb-8 shadow-lg shadow-theme-color1c/50 hover:bg-emerald-200 hover:shadow-emerald-200/50 transition duration-300">
      <a href="" target="_blank" className="">
        <div className="max-h-full overflow-clip space-y-2">  {/*overflow-y-scroll overscroll-y-contain*/}
          <div className="text-xl mt-1 text-theme-black flex flex-row space-x-3">
            <h3 className="text-xl -mt-0 z-10"><FontAwesomeIcon icon={faCodeBranch} className="" /></h3>
            <div className="space-y-3">
              <h3 className="font-bold">{name}</h3>
              <p className="text-lg text-theme-darkgray">{children}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}