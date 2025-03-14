import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCloudDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { chakraPetch } from "../layout";
import tileImg from '../assets/hexagon-tile.png'
import ScrollDownButton from "./ScrollDownButton"
import SocialIcon from "./SocialIcon"

export default function Front() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Base layers (lowest) */}
      
      {/* Combined background with hexagon texture and enhanced radial gradient */}
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-100 -z-10"
        style={{ 
          backgroundImage: `
            radial-gradient(
              ellipse at 35% 25%, 
              rgba(6,78,90,0.15) 0%, 
              rgba(6,78,90,0.4) 20%, 
              rgba(8,51,68,0.7) 40%, 
              rgba(8,51,68,0.9) 60%,
              rgba(8,51,68,1) 75%
            ), 
            url(${tileImg.src})
          `,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 70%)'
        }}
      ></div>
      
      {/* Gradient overlays - with deeper negative z-index to appear below glows and bubbles */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-theme-color1 pointer-events-none -z-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-theme-color1 pointer-events-none -z-30"></div>
      
      {/* Solid color at the bottom to ensure 100% coverage */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-theme-color1 pointer-events-none -z-30"></div>
      
      {/* Redesigned glows with emerald and cyan accents to match theme */}
      <div className="absolute top-[0vh] -right-[5vw] w-[60vw] h-[60vh] rounded-full bg-gradient-radial from-emerald-400/[0.08] to-transparent blur-3xl z-5 float-very-slow delay-2"></div>
      <div className="absolute top-[10vh] right-[20vw] w-[45vw] h-[45vh] rounded-full bg-gradient-radial from-cyan-500/[0.06] to-transparent blur-3xl z-5 float-slow delay-5-5"></div>
      
      {/* Left side glows for balance */}
      <div className="absolute top-[15vh] left-[10vw] w-[40vw] h-[40vh] rounded-full bg-gradient-radial from-emerald-500/[0.05] to-transparent blur-3xl z-5 float-medium delay-3"></div>
      <div className="absolute top-[25vh] left-[15vw] w-[30vw] h-[30vh] rounded-full bg-gradient-radial from-cyan-400/[0.04] to-transparent blur-3xl z-5 float-slow delay-1-5"></div>
      
      {/* Brighter accent glows */}
      <div className="absolute top-[18vh] right-[25vw] w-[35vw] h-[35vh] rounded-full bg-gradient-radial from-emerald-300/[0.12] to-transparent blur-3xl z-5 float-medium delay-4-5"></div>
      <div className="absolute top-[20vh] right-[27vw] w-[25vw] h-[25vh] rounded-full bg-gradient-radial from-cyan-400/[0.15] to-transparent blur-2xl z-5 float-slow delay-2-5"></div>
      <div className="absolute top-[22vh] right-[28vw] w-[15vw] h-[15vh] rounded-full bg-gradient-radial from-white/[0.18] to-transparent blur-xl z-5 glow-pulse"></div>
      
      {/* Subtle color accents */}
      <div className="absolute top-[30vh] left-[30vw] w-[20vw] h-[20vh] rounded-full bg-gradient-radial from-emerald-400/[0.07] to-transparent blur-2xl z-5 float-medium delay-6"></div>
      <div className="absolute top-[35vh] right-[40vw] w-[18vw] h-[18vh] rounded-full bg-gradient-radial from-cyan-500/[0.06] to-transparent blur-2xl z-5 float-slow delay-3-5"></div>
      
      {/* New glows - positioned above 10% from bottom */}
      <div className="absolute top-[45vh] left-[15vw] w-[40vw] h-[40vh] rounded-full bg-gradient-radial from-emerald-400/[0.09] to-transparent blur-3xl z-5 float-slow delay-4"></div>
      <div className="absolute top-[48vh] right-[20vw] w-[35vw] h-[35vh] rounded-full bg-gradient-radial from-cyan-500/[0.07] to-transparent blur-3xl z-5 float-medium delay-2-5"></div>
      <div className="absolute top-[40vh] left-[40vw] w-[25vw] h-[25vh] rounded-full bg-gradient-radial from-emerald-300/[0.1] via-cyan-400/[0.05] to-transparent blur-2xl z-5 float-very-slow delay-3-5"></div>
      
      {/* Content container */}
      <div className="flex flex-col pt-16 px-2 md:px-0 mx-auto max-w-full min-h-screen relative z-30">
        <div className="items-center flex flex-col my-auto relative z-30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="h-20"></div>
          {/* <img src='/me.jpg' alt="Me" className="w-32 md:w-44 rounded-full m-0 select-none pointer-events-none" /> */}
          <div className="text-center mb-6 text-theme-white lg:tracking-widest relative z-30">
            <p className="text-theme-white text-xl md:text-2xl text-left mb-2">Hi, I&apos;m</p>
            <h2 className="m-0 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-medium text-theme-white">Akhilan Ganesh.</h2>
            <p className="m-0 mt-1 text-2xl sm:text-3xl md:text-4xl font-medium text-theme-lightgray">Software Engineer</p>{/* <p>Cupertino</p> */}
            <p className="text-theme-lightgray text-left tracking-normal"></p>
          </div>

          <div className="float-very-slow">
            <a
              href="/Akhilan Ganesh Resume.pdf"
              download='Akhilan Ganesh Resume.pdf'
              className={`${chakraPetch.className} text-white inline-block py-3 px-6 text-xl xs:text-2xl font-medium text-center cursor-pointer no-underline my-auto relative z-30
                      hover:motion-safe:animate-none tracking-wide
                    active:bg-theme-lightgray active:text-theme-white active:motion-safe:animate-none
                    group transition-all duration-300
              `}
            > 
              <div className="absolute inset-0 bg-gradient-to-br from-theme-color2/80 to-theme-color2d/90 backdrop-blur-sm rounded-full border border-theme-white/40 shadow-lg shadow-theme-color2/30 transition-all duration-300 group-hover:from-theme-color2b/90 group-hover:to-theme-color2c/95 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-theme-color2/15 blur-md rounded-full"></div>
              <span className="relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 inline mr-2 -mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Resume
              </span>
            </a>
          </div>

          <div className="flex flex-row space-x-5 mt-8 relative z-30">
            <div className="float-very-slow">
              <SocialIcon icon={faGithub} url="https://github.com/akhilanganesh" />
            </div>
            <div className="float-very-slow delay-2">
              <SocialIcon icon={faLinkedin} url="https://www.linkedin.com/in/akhilanganesh/" />
            </div>
            <div className="float-very-slow delay-4">
              <SocialIcon icon={faEnvelope} url="#contact" scroll={true} />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 self-center mt-8 mb-16">
          <ScrollDownButton />
        </div>
      </div>
    </div>
  )
}
