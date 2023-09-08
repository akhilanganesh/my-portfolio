// import Image from 'next/image'

import Front from './components/Front';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="bg-theme_white flex flex-col space-y-0.5">
      <Navbar />
      <Front />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
