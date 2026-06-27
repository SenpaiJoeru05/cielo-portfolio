import { useEffect } from 'react';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Leadership from './components/Leadership';
import Athlete from './components/Athlete';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');

    const revealElements = () => {
      reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();

    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <>
      <SideNav />
      <Hero />
      <About />
      <Timeline />
      <Leadership />
      <Athlete />
      <Achievements />
      <Education />
      <Experience />
      <Skills />
      <Gallery />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
