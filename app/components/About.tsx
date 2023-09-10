/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 max-w-screen px-3 sm:px-0 sm:max-w-80% md:max-w-60% mx-auto text-theme-black bg-white">
      <div className="md:basis-3/5 flex-col text-xl space-y-3">
        <h2 className="text-4xl justify-center font-bold">About Me</h2>
        <div className="m-auto items-center place-content-center flex md:hidden">
          <AboutImg inside={true} />
        </div>
        <p className="text-theme-darkgray">I&apos;m a software engineer, recently graduated 
          from UC San Diego with a Bachelor&apos;s in Computer Science. I became interested in software 
          development in high school when I had the chance to make my own game based in Java. Since 
          then, creating fun with software has always been a key motivator in my journey with tech.</p>
        <p className="text-theme-darkgray">Currently, I&apos;m based in Cupertino, California. 
          I am looking for a Software Engineering role to contribute my skills towards the development 
          of sustainable and scalable software systems and solutions. I&apos;m primarily drawn to 
          backend and cloud development, especially as the world becomes more interconnected and tech 
          expands horizontally at an ever faster scale.</p>
      </div>
      <div className="md:basis-2/5 hidden md:flex">
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
      <div className="md:hidden m-auto items-center place-content-center flex">
        <div className="bg-theme-color4 rounded-xl -rotate-6 origin-bottom shadow-inner shadow-theme-black/50">
          <img src='/me.jpg' alt="Me" className="w-36 rounded-xl rotate-12 origin-bottom shadow-lg shadow-theme-black/50" />
          {/* <div className="w-36 h-36 bg-transparent"></div> */}
        </div>
      </div>
    )
  else
    return (
      <div className="hidden md:flex m-auto pl-6 items-center place-content-center">
        <div className="bg-theme-color4 rounded-xl -rotate-6 origin-bottom shadow-inner shadow-theme-black/50">
          <img src='/me.jpg' alt="Me" className="md:32 lg:w-48 rounded-xl rotate-12 origin-bottom shadow-lg shadow-theme-black/50 bg-transparent" />
        </div>
      </div>
    )
}