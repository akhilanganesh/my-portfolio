import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCloudDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { chakraPetch } from "../layout";
import tileImg from '../assets/hexagon-tile.png'

export default function Front() {
  return (
    <div className="w-screen bg-repeat bg-center" style={{ backgroundImage: `linear-gradient(rgba(8,51,68,0.5), rgba(8,51,68,1)), url(${tileImg.src})` }}>
      <div className="flex flex-col pt-16 px-2 md:px-0 mx-auto max-w-full min-h-screen">
        <div className="items-center flex flex-col my-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="h-20"></div>
          {/* <img src='/me.jpg' alt="Me" className="w-32 md:w-44 rounded-full m-0 select-none pointer-events-none" /> */}
          <div className="text-center mb-6 text-theme-white lg:tracking-widest">
            <p className="text-theme-white text-xl md:text-2xl text-left mb-2">Hi, I&apos;m</p>
            <h2 className="m-0 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-medium text-theme-white">Akhilan Ganesh.</h2>
            <p className="m-0 mt-1 text-2xl sm:text-3xl md:text-4xl font-medium text-theme-lightgray">Software Engineer</p>{/* <p>Cupertino</p> */}
            <p className="text-theme-lightgray text-left tracking-normal"></p>
          </div>

          <a
            href="/Akhilan Ganesh Resume.pdf"
            download='Akhilan Ganesh Resume.pdf'
            className={`${chakraPetch.className} text-white bg-theme-color2c inline-block py-2.5 px-5 text-xl xs:text-2xl font-medium rounded-md text-center cursor-pointer no-underline my-auto shadow-lg shadow-theme-black/40
                    hover:bg-theme-color2b transition duration-150 ease-in hover:motion-safe:animate-none tracking-wide
                  active:bg-theme-lightgray  active:text-theme-white active:motion-safe:animate-none
            `}
          > 
            {/* <svg className="w-7 h-7 inline mr-2 -mt-2 -ml-[0.15rem]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-7 h-7 inline mr-2 -mt-2 -ml-[0.15rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

            Resum&#233;
          </a>

          <div className="flex flex-row space-x-6 xs:space-x-10 mt-8 max-w-full">
            <Icon faicon={faGithub} url="https://github.com/akhilanganesh" label="Github Link">
            </Icon>
            <Icon url="https://www.linkedin.com/in/akhilan-ganesh/">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </Icon>
            <Icon faicon={faEnvelope} url="mailto:aganesh.work@gmail.com">
            </Icon>
          </div>
        </div>
        <div className="bg-theme-color1b/50 w-12 h-12 md:w-[3.75rem] md:h-[3.75rem] rounded-full self-center mt-8 mb-16 p-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowDown} className="text-theme-color1 text-3xl md:text-4xl" />
        </div>
      </div>
    </div>
  );
}

interface IconProps {
  faicon?: IconDefinition,
  url: string,
  children?: any,
  label?: string,
}

function Icon({ faicon, url, children, label }: IconProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="shadow-lg shadow-black/50 m-0 bg-theme-color2c/100 rounded-full h-12 w-12 flex items-center justify-center hover:bg-theme-color2b hover:motion-safe:fa-shake focus:motion-safe:fa-shake focus:motion-safe:bg-theme-lightgray active:animate-none active:motion-safe:bg-theme-lightgray transition ease-in duration-150">
        {
          (faicon !== undefined) ?
          <FontAwesomeIcon icon={faicon} size="2x" className="text-theme-white" /> :
          <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-theme-white">{children}</span>
        }
    </a>
  )
}
