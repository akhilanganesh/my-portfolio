// import Image from 'next/image'

import Front from './components/Front';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="bg-theme-white flex flex-col">
      <Navbar />
      <div className="m-0 p-0 space-y-10">
        <Front />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
