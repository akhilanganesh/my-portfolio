import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCloudDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function Front() {
  return (
    <div className="bg-theme-color1 w-screen">
      <div className="flex flex-col no:pb-4 pt-16 px-2 md:px-0 mx-auto max-w-full min-h-screen -mb-12">
        <div className="items-center flex flex-col my-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/me.jpg' alt="Me" className="w-32 md:w-44 rounded-full m-0 select-none pointer-events-none" />
          <div className="text-center mb-6 text-theme-white lg:tracking-widest">
            <p className="text-theme-white text-xl md:text-2xl text-left mb-2">Hi, I&apos;m</p>
            <h2 className="m-0 text-4xl xs:text-5xl sm:text-7xl font-bold text-theme-white">Akhilan Ganesh.</h2>
            <div className="m-0 mt-1 text-2xl sm:text-3xl md:text-4xl font-semibold text-theme-lightgray">
              <p>Software Engineer</p>{/* <p>Cupertino</p> */}
            </div>
          </div>

          <a
            href="/Akhilan Ganesh Resume.pdf"
            download='Akhilan Ganesh Resume.pdf'
            className="text-theme-white bg-theme-color3 border-theme-color3 inline-block py-2.5 px-5 text-xl xs:text-2xl font-semibold border-solid border-2 rounded-md text-center cursor-pointer no-underline my-auto shadow-lg shadow-theme-color3/40
                    transition duration-150 ease-in hover:motion-safe:animate-none
                  active:bg-theme-color3b active:border-theme-color3b active:text-theme-white active:shadow-theme-color3b/40 active:motion-safe:animate-none
            "
          >
            <svg className="w-7 h-7 inline mr-2 -mt-2 -ml-[0.15rem]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
            </svg>
            Resume
          </a>

          <div className="flex flex-row space-x-6 xs:space-x-10 mt-8 max-w-full">
            <Icon faicon={faGithub} url="https://github.com/akhilanganesh">
            </Icon>
            <Icon url="https://www.linkedin.com/in/akhilan-ganesh/">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </Icon>
            <Icon faicon={faEnvelope} url="mailto:aganesh.work@email.com">

            </Icon>
          </div>
        </div>
        <div className="bg-theme-color1b/50 w-[3.75rem] h-[3.75rem] rounded-full self-center mt-8 mb-8 p-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowDown} className="text-theme-color1 text-4xl" />
        </div>
      </div>
    </div>
  );
}

interface IconProps {
  faicon?: IconDefinition,
  url: string,
  children?: any
}

function Icon({ faicon, url, children }: IconProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="m-0 bg-theme-color2 rounded-xl h-12 w-12 flex items-center justify-center hover:motion-safe:fa-shake focus:motion-safe:fa-shake focus:motion-safe:bg-red-400 active:animate-none active:bg-theme-color2b transition ease-in duration-150">
        {
          (faicon !== undefined) ?
          <FontAwesomeIcon icon={faicon} size="2x" className="text-theme-white" /> :
          <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-theme-white">{children}</span>
        }
    </a>
  )
}