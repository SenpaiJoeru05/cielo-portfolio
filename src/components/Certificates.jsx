import { useState, useEffect } from 'react';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('school');
  const [modal, setModal] = useState(null);

  /* close modal on Escape key */
  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  /* prevent body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  const schoolCertificates = [
    { image: '/img/certificates/sports-club-org-cert.jpg', title: 'BU Sports Club President', alt: 'BU Sports Club Organization Certificate' },
    { image: '/img/certificates/siklab-cert.jpg', title: 'SIKLAB Dance Troupe President', alt: 'SIKLAB Dance Troupe Certificate' },
    { image: '/img/certificates/SLAC-cert.jpg', title: 'SLAC Certificate', alt: 'SLAC Certificate' },
    { image: '/img/certificates/pre-service-cert.jpg', title: 'Pre-Service Training Certificate', alt: 'Pre-Service Certificate' },
  ];

  const onlineCertificates = [
    { image: '/img/certificates/Executive Search-Specialist-Certification.jpg', title: 'Executive Search Specialist', alt: 'Executive Search Specialist' },
    { image: '/img/certificates/AI-Powered Recruiter-Certification.jpg', title: 'AI-Powered Recruiter', alt: 'AI-Powered Recruiter Certification' },
    { image: '/img/certificates/Talent Acquisition-Cerification.jpg', title: 'Talent Acquisition', alt: 'Talent Acquisition Certification' },
    { image: '/img/certificates/Compensation and Rewards Management-Certification.jpg', title: 'Compensation & Rewards Management', alt: 'Compensation and Rewards Management Certification' },
  ];

  const current = activeTab === 'school' ? schoolCertificates : onlineCertificates;

  return (
    <section className="section bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">CERTIFICATES</p>
          <h2 className="font-display text-4xl text-white font-bold">
            Certifications & <span className="grad-text">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">Professional development and recognition</p>
        </div>

        <div className="cert-tabs mt-8">
          <button className={`cert-tab ${activeTab === 'school' ? 'active' : ''}`} onClick={() => setActiveTab('school')}>
            🎓 School Certificates
          </button>
          <button className={`cert-tab ${activeTab === 'online' ? 'active' : ''}`} onClick={() => setActiveTab('online')}>
            💻 Online Courses
          </button>
        </div>

        <div
          key={activeTab}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6"
          style={{ animation: 'fadeIn .4s ease-in' }}
        >
          {current.map((cert, index) => (
            <button
              key={index}
              onClick={() => setModal(cert)}
              className="group text-left focus:outline-none"
            >
              {/* uniform card */}
              <div className="glass rounded-2xl overflow-hidden border border-white/5 group-hover:border-purple-500/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* zoom hint overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-300 group-hover:text-white mt-3 text-xs font-medium px-1 transition-colors duration-200 leading-snug">
                {cert.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ── MODAL LIGHTBOX ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setModal(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              ✕
            </button>

            {/* image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                src={modal.image}
                alt={modal.alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-[#1a1030]"
              />
            </div>

            {/* title */}
            <p className="text-center text-white font-semibold mt-4 text-sm">{modal.title}</p>
            <p className="text-center text-gray-500 text-xs mt-1">Click outside or press Esc to close</p>
          </div>
        </div>
      )}
    </section>
  );
}
