export default function Footer() {
  const links = [
    { label: 'About',       href: '#about' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Gallery',     href: '#gallery' },
    { label: 'Contact',     href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-5 py-10 flex flex-col items-center gap-6">

        {/* NAME & TAGLINE */}
        <div className="text-center">
          <h3 className="font-display text-lg font-bold grad-text">
            Marie Cielo B. Balbuena
          </h3>
          <p className="text-gray-600 text-xs mt-1 tracking-widest uppercase">
            Leadership · Discipline · Service
          </p>
        </div>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-white text-xs transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/marie-cielo-balbuena-74017b366/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#38aef5] transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          linkedin.com/in/marie-cielo-balbuena
        </a>

        {/* COPYRIGHT */}
        <p className="text-gray-700 text-xs">
          © 2026 Marie Cielo B. Balbuena · All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
