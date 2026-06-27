export default function Contact() {
  return (
    <section id="contact" className="section bg-[#0e0818] relative overflow-hidden">
      {/* ambient glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-12 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      ></div>

      <div className="container relative">
        {/* HEADING */}
        <div className="text-center reveal">
          <p className="eyebrow">CONTACT</p>
          <h2 className="font-display text-4xl text-white font-bold">
            Let&apos;s <span className="grad-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Open to opportunities in Human Resources, Administration,
            Customer Service, and Virtual Assistance.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-12 reveal">
          <a
            href="mailto:mariecielobalbune@gmail.com"
            className="group glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
              style={{ background: 'rgba(167,139,250,0.15)' }}>
              <i className="fa-solid fa-envelope text-purple-400 text-lg"></i>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">Email</p>
              <p className="text-gray-400 text-xs mt-1 break-all">mariecielobalbune@gmail.com</p>
            </div>
          </a>

          <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(244,114,182,0.15)' }}>
              <i className="fa-solid fa-phone text-pink-400 text-lg"></i>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">Phone</p>
              <p className="text-gray-400 text-xs mt-1">09123456789</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(251,191,36,0.15)' }}>
              <i className="fa-solid fa-location-dot text-amber-400 text-lg"></i>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">Location</p>
              <p className="text-gray-400 text-xs mt-1">Ligao City, Albay</p>
            </div>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 reveal">
          <a
            href="mailto:mariecielobalbune@gmail.com"
            className="btn-primary"
          >
            <i className="fa-solid fa-envelope text-sm"></i>
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/marie-cielo-balbuena-74017b366/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(0,119,181,0.10)',
              border: '1px solid rgba(0,119,181,0.35)',
              color: '#38aef5',
            }}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="#38aef5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
