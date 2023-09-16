/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="-mt-10 flex flex-col md:flex-row md:space-x-2 max-w-screen px-3 sm:px-0 sm:max-w-90% md:max-w-80% mx-auto text-theme-white">
      <div className="text-base sm:text-lg md:text-xl md:basis-2/3 flex-col space-y-3">
        <h2 className="text-center md:text-left text-3xl sm:text-4xl justify-center font-bold">About Me</h2>
        <div className="m-auto items-center place-content-center flex md:hidden">
          <AboutImg inside={true} />
        </div>
        <p className="text-theme-lightgray text-justify">I&apos;m a software engineer, recently graduated 
          from UC San Diego with a Bachelor&apos;s in Computer Science. I&apos;ve been interested in software 
          development since high school when I made my own game based in Java. Since 
          then, creating fun with software has always been a key motivator in my journey with tech.</p>
        <p className="text-theme-lightgray text-justify">I&apos;m currently based near San Jose, California. 
          I am looking for a Software Engineering role to contribute my skills towards the development 
          of sustainable and scalable software systems and solutions. I&apos;m primarily drawn to 
          backend and cloud development, but I&apos;m always open to explore.</p>
      </div>
      <div className="md:basis-1/3 hidden md:flex">
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
      <div className="md:hidden m-auto items-center place-content-center flex my-5">
        <div className="bg-gradient-to-bl from-theme-color2 to-theme-color1/5 rounded-xl -rotate-6 origin-bottom">
          <img src='/me.jpg' alt="Me" className="w-36 xs:w-40 rounded-xl rotate-12 origin-bottom shadow-md shadow-theme-color1/50" />
          {/* <div className="w-36 h-36 bg-transparent"></div> */}
        </div>
      </div>
    )
  else
    return (
      <div className="hidden h-full md:flex m-auto pl-6 items-center justify-end">
        <div className="bg-gradient-to-bl from-theme-color2 to-theme-color1/5 rounded-xl -rotate-6 origin-bottom">
          <img src='/me.jpg' alt="Me" className="md:w-48 lg:w-60 rounded-xl rotate-12 origin-bottom shadow-md shadow-theme-color1/50" />
        </div>
      </div>
    )
}