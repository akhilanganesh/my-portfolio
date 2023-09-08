import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Front() {
  return (
    <div className="flex flex-col p-6 pt-20 sm-h:pt-6 mx-auto rounded-3xl max-w-full md:max-w-50% min-h-screen items-center">
      <div className="items-center flex flex-col my-auto p-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/me.jpg' alt="Me" className="w-44 rounded-full m-0" />
        <div className="text-center mb-6 text-theme_black">
          <p className="text-theme_color1 text-2xl md:text-3xl text-left mb-2">Hi, I&apos;m</p>
          <h2 className="m-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-radial from-theme_color1 to-theme_color1 inline-block">Akhilan Ganesh.</h2>
          <div className="m-0 mt-1 text-xl md:text-3xl font-semibold">
            <p>Software Engineer</p>{/* <p>Cupertino</p> */}
          </div>
        </div>

        <a
          href="/Akhilan Ganesh Resume.pdf"
          download='Akhilan Ganesh Resume.pdf'
          className="text-theme_white bg-theme_color2 border-theme_color2 inline-block py-2.5 px-5 text-2xl font-semibold border-solid border-2 rounded-md text-center cursor-pointer no-underline my-auto shadow-lg shadow-theme_color2/70
                  transition duration-300 ease-in hover:motion-safe:animate-heartbeat2 hover:shadow-theme_color2b
                 active:bg-theme_color2b active:border-theme_color2b active:text-theme_white active:motion-safe:animate-none
          "
        >Download Resume</a>

        <div className="flex flex-row space-x-6 xs:space-x-10 mt-8 max-w-full">
          <FAIcon icon={faGithub} url="https://github.com/akhilanganesh" />
          <FAIcon icon={faLinkedin} url="https://www.linkedin.com/in/akhilan-ganesh-0671031b4/" />
          <FAIcon icon={faEnvelope} url="mailto:aganesh.work@email.com" />
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
    <div className="bg-theme_color3 rounded-xl h-12 w-12 flex hover:motion-safe:animate-wiggle2">
      <a href={url} className="m-auto" target="_blank">
        <FontAwesomeIcon icon={icon} size="2x" className="" style={{ color: '#fff', }} />
      </a>
    </div>
  )
}