/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="-mt-10 flex flex-col md:flex-row md:space-x-2 max-w-screen px-3 sm:px-0 sm:max-w-90% md:max-w-80% mx-auto text-theme-white relative z-30">
      <div className="text-base sm:text-lg md:basis-2/3 flex-col space-y-4">
        <div className="backdrop-blur-sm bg-gradient-to-br from-theme-black/30 to-theme-black/20 border-2 border-theme-white/30 mx-0 sm:-mx-3 p-4 sm:p-6 flex flex-col text-theme-lightgray space-y-4 rounded-2xl shadow-lg shadow-theme-black/30 hover:bg-gradient-to-br hover:from-theme-black/40 hover:to-theme-black/30 hover:border-theme-white/40 transition duration-300 relative overflow-hidden z-30">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-color2/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-color1/15 rounded-full blur-3xl"></div>
          
          <h2 className="text-center md:text-left text-3xl sm:text-4xl justify-center font-bold text-theme-white relative z-30">
            <span className="bg-gradient-to-r from-theme-white via-theme-white to-theme-white/90 bg-clip-text text-transparent">About Me</span>
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-theme-color2/80 to-theme-color2/50 rounded-full hidden md:block"></span>
          </h2>
          
          <div className="m-auto items-center place-content-center flex md:hidden relative z-30">
            <AboutImg inside={true} />
          </div>
          
          <p className="relative leading-relaxed z-30">
            <span className="text-theme-white/90 font-medium">Hey, nice to meet you,</span> I&apos;m Akhil!
          </p>
          
          <p className="relative leading-relaxed z-30">
            I&apos;m a <span className="text-theme-white/90">software engineer</span>, graduated from <span className="text-theme-white/90">UC San Diego</span> in 2023 with a Bachelor&apos;s 
            in Computer Science. I&apos;ve been interested in software development ever since making my first website and later my first <span className="text-theme-white/90">2D game</span> in high school. 
            I&apos;m passionate about taking on challenging projects and building cool things that can help make someone&apos;s day a little better. Feel free to check out my <a href="https://www.linkedin.com/in/akhilanganesh/" className="text-theme-white/90 hover:text-theme-white underline">LinkedIn</a> to learn more about my journey.
          </p>
        </div>
      </div>
      <div className="md:basis-1/3 hidden md:flex relative z-30">
        <AboutImg inside={false} />
      </div>
    </div>
  );
}

interface AboutImgProps {
  inside: boolean 
}

function AboutImg({ inside }: AboutImgProps) {
  if (inside) 
    return (
      <div className="md:hidden m-auto items-center place-content-center flex my-5 relative z-30">
        <div className="bg-gradient-to-br from-theme-color2/90 to-theme-color1/40 p-2 rounded-[1.5rem] shadow-md shadow-theme-black/40 hover:from-theme-color2 hover:to-theme-color1/50 transition duration-300 transform hover:-translate-y-1">
          <img 
            src='/me.jpg' 
            alt="Me" 
            className="w-36 xs:w-40 rounded-[1.2rem] shadow-sm brightness-105 contrast-[1.02] saturate-[1.05] filter"
          />
        </div>
      </div>
    );
  
  return (
    <div className="m-auto items-center place-content-center flex relative z-30">
      <div className="bg-gradient-to-br from-theme-color2/90 to-theme-color1/40 p-3 rounded-[2rem] shadow-md shadow-theme-black/40 hover:from-theme-color2 hover:to-theme-color1/50 transition duration-300 transform hover:-translate-y-1">
        <img 
          src='/me.jpg' 
          alt="Me" 
          className="w-full max-w-[15rem] rounded-[1.7rem] shadow-sm brightness-105 contrast-[1.02] saturate-[1.05] filter"
        />
      </div>
    </div>
  );
}