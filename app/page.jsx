'use client';

import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Languages from '@/components/portfolio/Languages';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Languages />
      <Footer />
    </main>
  );
}
