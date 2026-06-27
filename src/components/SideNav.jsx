import { useState, useEffect } from 'react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    'hero', 'about', 'timeline', 'leadership', 'athlete', 'experience', 'skills', 'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          if (window.scrollY >= sectionTop - 300) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="side-nav">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`${activeSection === section ? 'active' : ''}`}
          title={section}
        ></a>
      ))}
    </nav>
  );
}
