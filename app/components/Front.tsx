import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCloudDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function Front() {
  return (
    <div className="bg-theme-color1 w-screen">
      <div className="flex flex-col no:pb-4 pt-16 px-2 md:px-0 mx-auto max-w-full min-h-screen">
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
            className="text-theme-white bg-theme-color3 border-theme-color3 inline-block py-2.5 px-5 text-xl xs:text-2xl font-semibold border-solid border-2 rounded-md text-center cursor-pointer no-underline my-auto shadow-lg shadow-theme-color3/70
                    transition duration-150 ease-in hover:motion-safe:animate-none
                  active:bg-theme-color3b active:border-theme-color3b active:text-theme-white active:shadow-theme-color3b active:motion-safe:animate-none
            "
          ><FontAwesomeIcon icon={faCloudDownload} className="text-white" />  Resume</a>

          <div className="flex flex-row space-x-6 xs:space-x-10 mt-8 max-w-full">
            <FAIcon icon={faGithub} url="https://github.com/akhilanganesh" />
            <FAIcon icon={faLinkedin} url="https://www.linkedin.com/in/akhilan-ganesh/" />
            <FAIcon icon={faEnvelope} url="mailto:aganesh.work@email.com" />
          </div>
        </div>
        <div className="bg-theme-color1b/50 w-[3.75rem] h-[3.75rem] rounded-full self-center mt-8 mb-8 p-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowDown} className="text-theme-color1 text-4xl" />
        </div>
      </div>
    </div>
  );
}

interface FAIconProps {
  icon: any
  url: string
}

function FAIcon({ icon, url }: FAIconProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="m-0 bg-theme-color2 rounded-xl h-12 w-12 flex items-center justify-center hover:motion-safe:fa-shake focus:motion-safe:fa-shake focus:motion-safe:bg-red-400 active:animate-none active:bg-theme-color2b transition ease-in duration-150">
        <FontAwesomeIcon icon={icon} size="2x" className="text-white" />
    </a>
  )
}