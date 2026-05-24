'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ScrollToTop from '@/components/ScrollToTop';
import TechArsenal from '@/components/TechArsenal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });
  }, []);

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <TechArsenal />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <section id="home">
//         <Hero />
//       </section>

//       <section id="skills">
//         <TechArsenal />
//       </section>
//       <section id="projects">
//         <Projects/>
//       </section>
//       <section id="experience">
//         <Experience/>
//       </section>
//       <section id="about">
//         <About/>
//       </section>
//       <section id="contact">
//         <Contact/>
//       </section>
//       <section id="contact">
//         <Footer/>
//       </section>
//     </div>
//   );
// }
