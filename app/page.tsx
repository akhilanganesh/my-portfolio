// import Image from 'next/image'

import Front from './components/Front';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SectionDivider from './components/effects/SectionDivider';
import AtmosphericEffects from './components/effects/AtmosphericEffects';
import Bubbles from './components/effects/Bubbles';
import LowerBubbles from './components/effects/LowerBubbles';

export default function Home() {
  return (
    <main className="flex flex-col min-h-full selection:bg-emerald-500 selection:text-theme-white relative">
      {/* All bubble effects in a single component */}
      <Bubbles />
      
      {/* Front component */}
      <Front />
      
      {/* Extra spacing div to push About section lower */}
      <div className="h-[10vh] bg-transparent"></div>
      
      {/* Main content */}
      <div className="m-0 p-0 relative z-20">
        {/* Atmospheric effects positioned to overlap from About to Contact */}
        <div className="absolute inset-0 w-full h-full z-10" style={{ height: '100%', overflow: 'hidden' }}>
          <AtmosphericEffects />
        </div>
        
        {/* Lower bubbles effects positioned to overlap from About to Contact */}
        <div className="absolute inset-0 w-full h-full z-20" style={{ height: '100%', overflow: 'hidden' }}>
          <LowerBubbles />
        </div>
        
        <div className="space-y-20 relative z-30">
          <About />
          <SectionDivider className="-mt-8 mb-8" />
          <Projects />
          <SectionDivider className="-mt-8 mb-8" />
          <Skills />
          <SectionDivider className="-mt-8 mb-8" />
          <Contact />
        </div>
      </div>
      
      {/* Navbar (above everything) */}
      <Navbar className="z-60" />
    </main>
  )
}
