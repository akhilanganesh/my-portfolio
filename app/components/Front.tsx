import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Front() {
  return (
    <div className="bg-theme-color1 w-screen">
      <div className="flex flex-col pb-4 pt-16 md-h:pt-10 px-2 md:px-0 mx-auto rounded-3xl max-w-full md:max-w-50% min-h-screen items-center">
        <div className="items-center flex flex-col my-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/me.jpg' alt="Me" className="w-32 md:w-44 rounded-full m-0" />
          <div className="text-center mb-6 text-theme-white">
            <p className="text-theme-white text-2xl md:text-3xl text-left mb-2">Hi, I&apos;m</p>
            <h2 className="m-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-theme-white inline-block">Akhilan Ganesh.</h2>
            <div className="m-0 mt-1 text-xl md:text-3xl font-semibold">
              <p>Software Engineer</p>{/* <p>Cupertino</p> */}
            </div>
          </div>

          <a
            href="/Akhilan Ganesh Resume.pdf"
            download='Akhilan Ganesh Resume.pdf'
            className="text-theme-white bg-theme-color3 border-theme-color3 inline-block py-2.5 px-5 text-2xl font-semibold border-solid border-2 rounded-md text-center cursor-pointer no-underline my-auto shadow-lg shadow-theme-color3/70
                    transition duration-300 ease-in hover:motion-safe:animate-none
                  active:bg-theme-color3b active:border-theme-color3b active:text-theme-white active:shadow-theme-color3b active:motion-safe:animate-none
            "
          >Download Resume</a>

          <div className="flex flex-row space-x-6 xs:space-x-10 my-8 max-w-full">
            <FAIcon icon={faGithub} url="https://github.com/akhilanganesh" />
            <FAIcon icon={faLinkedin} url="https://www.linkedin.com/in/akhilan-ganesh/" />
            <FAIcon icon={faEnvelope} url="mailto:aganesh.work@email.com" />
          </div>
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
    <div className="bg-theme-color2 rounded-xl h-12 w-12 flex items-center justify-center hover:motion-safe:fa-shake active:animate-none active:bg-theme-color2b transition ease-in duration-200">
      <a href={url} className="m-0" target="_blank">
        <FontAwesomeIcon icon={icon} className="text-4xl text-white" />
      </a>
    </div>
  )
}