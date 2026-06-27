import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const tiltPhotoRef = useRef(null);

  const roles = [
    "Future HR Professional",
    "Student Leader",
    "University Athlete",
    "Administrative Professional",
    "People-Oriented Leader"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!tiltPhotoRef.current) return;
    const rect = tiltPhotoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 15;
    const rotateX = (0.5 - y) * 15;
    tiltPhotoRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (tiltPhotoRef.current) {
      tiltPhotoRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="blob-field">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="container relative z-10 px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left reveal">
            <p className="eyebrow">LEADERSHIP • DISCIPLINE • SERVICE</p>
            <h1 className="font-display font-bold leading-none text-6xl lg:text-8xl">
              Marie Cielo
              <span className="grad-text block">Balbuena</span>
            </h1>

            <div className="mt-8">
              <p className="text-2xl lg:text-3xl text-white font-medium transition-opacity duration-300">
                {roles[currentRole]}
              </p>
            </div>

            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
              A fresh graduate, student leader, and university athlete
              committed to bringing organization, discipline,
              and people-centered service into Human Resources,
              Administrative Support, and Virtual Assistance.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              <a href="#about" className="btn-primary">Explore My Journey</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-16">
              <div className="glass rounded-3xl p-5">
                <h2 className="text-3xl font-bold grad-text">2</h2>
                <p className="text-xs uppercase text-gray-400 mt-2">Organizations Led</p>
              </div>
              <div className="glass rounded-3xl p-5">
                <h2 className="text-3xl font-bold grad-text">8+</h2>
                <p className="text-xs uppercase text-gray-400 mt-2">Years Athlete</p>
              </div>
              <div className="glass rounded-3xl p-5">
                <h2 className="text-3xl font-bold grad-text">2026</h2>
                <p className="text-xs uppercase text-gray-400 mt-2">Graduate</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center reveal">
            <div
              ref={tiltPhotoRef}
              className="relative w-80 sm:w-96 lg:w-[500px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className="orbit"></div>
              <div className="orbit orbit2"></div>

              <div className="hero-image relative">
                <img src="img/profile.jpg" alt="Marie Cielo Balbuena" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>
              </div>

              {/* FLOATING CARDS */}
              <div className="glass absolute -left-10 top-10 rounded-2xl p-4">
                <p className="font-semibold">👑 President</p>
                <p className="text-sm text-gray-400">BU Sports Club</p>
              </div>

              <div className="glass absolute -right-8 bottom-16 rounded-2xl p-4">
                <p className="font-semibold">💃 President</p>
                <p className="text-sm text-gray-400">SIKLAB</p>
              </div>

              <div className="glass absolute left-8 bottom-0 rounded-2xl p-4">
                <p className="font-semibold">🥋 University Athlete</p>
                <p className="text-sm text-gray-400">Arnis Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
