import { useState, useEffect } from 'react';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('school');
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  const tabs = [
    {
      key: 'school',
      label: 'School',
      certs: [
        { image: '/img/certificates/sports-club-org-cert.jpg',  title: 'BU Sports Club President',        alt: 'BU Sports Club Organization Certificate' },
        { image: '/img/certificates/siklab-cert.jpg',            title: 'SIKLAB Dance Troupe President',   alt: 'SIKLAB Dance Troupe Certificate' },
        { image: '/img/certificates/SLAC-cert.jpg',              title: 'SLAC Certificate',                alt: 'SLAC Certificate' },
        { image: '/img/certificates/pre-service-cert.jpg',       title: 'Pre-Service Training',            alt: 'Pre-Service Certificate' },
      ],
    },
    {
      key: 'it',
      label: 'IT Support',
      certs: [
        { image: '/img/certificates/InformationTechnologyFundamentals-cert.jpg',        title: 'IT Fundamentals',                     alt: 'Information Technology Fundamentals' },
        { image: '/img/certificates/StartACarrerInTechThroughITSupport-cert.jpg',       title: 'Start a Career in IT Support',        alt: 'Start a Career in Tech Through IT Support' },
        { image: '/img/certificates/ExploreMS365SecurityFoundations-cert.jpg',          title: 'MS365 Security Foundations',          alt: 'Microsoft 365 Security Foundations' },
        { image: '/img/certificates/IntroToMS365CoreServicesAndAdminControl-cert.jpg',  title: 'MS365 Core Services & Admin Control', alt: 'Intro to Microsoft 365 Core Services and Admin Control' },
      ],
    },
    {
      key: 'microsoft',
      label: 'Microsoft',
      certs: [
        { image: '/img/certificates/ExcelTrainingMS-cert.jpg',        title: 'Microsoft Excel',       alt: 'Microsoft Excel Training' },
        { image: '/img/certificates/WordTrainingMS-cert.jpg',         title: 'Microsoft Word',        alt: 'Microsoft Word Training' },
        { image: '/img/certificates/PowerPointTraining-MS-cert.jpg',  title: 'Microsoft PowerPoint',  alt: 'Microsoft PowerPoint Training' },
        { image: '/img/certificates/MicrosoftTeamTraining-cert.jpg',  title: 'Microsoft Teams',       alt: 'Microsoft Teams Training' },
        { image: '/img/certificates/OneDriveTrainingMS-cert.jpg',     title: 'Microsoft OneDrive',    alt: 'Microsoft OneDrive Training' },
        { image: '/img/certificates/OneNoteTrainingMS-cert.jpg',      title: 'Microsoft OneNote',     alt: 'Microsoft OneNote Training' },
        { image: '/img/certificates/AccesTrainingMS-cert.jpg',        title: 'Microsoft Access',      alt: 'Microsoft Access Training' },
      ],
    },
    {
      key: 'professional',
      label: 'Professional',
      certs: [
        { image: '/img/certificates/Executive Search-Specialist-Certification.jpg',              title: 'Executive Search Specialist',         alt: 'Executive Search Specialist' },
        { image: '/img/certificates/AI-Powered Recruiter-Certification.jpg',                     title: 'AI-Powered Recruiter',                alt: 'AI-Powered Recruiter Certification' },
        { image: '/img/certificates/Talent Acquisition-Cerification.jpg',                        title: 'Talent Acquisition',                  alt: 'Talent Acquisition Certification' },
        { image: '/img/certificates/Compensation and Rewards Management-Certification.jpg',      title: 'Compensation & Rewards Management',   alt: 'Compensation and Rewards Management' },
      ],
    },
  ];

  const current = tabs.find(t => t.key === activeTab);

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

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={activeTab === tab.key ? {
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: '#fff',
                border: '1px solid transparent',
              } : {
                background: 'rgba(255,255,255,0.04)',
                color: '#9ca3af',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {tab.label}
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                style={activeTab === tab.key ? {
                  background: 'rgba(255,255,255,0.25)',
                  color: '#fff',
                } : {
                  background: 'rgba(255,255,255,0.08)',
                  color: '#6b7280',
                }}
              >
                {tab.certs.length}
              </span>
            </button>
          ))}
        </div>

        {/* GRID */}
        <div
          key={activeTab}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6"
          style={{ animation: 'fadeIn .4s ease-in' }}
        >
          {current.certs.map((cert, index) => (
            <button
              key={index}
              onClick={() => setModal(cert)}
              className="group text-left focus:outline-none"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/5 group-hover:border-purple-500/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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

        <p className="text-center text-gray-700 text-xs mt-8">
          {tabs.reduce((sum, t) => sum + t.certs.length, 0)} certificates across {tabs.length} categories
        </p>
      </div>

      {/* MODAL */}
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
            <button
              onClick={() => setModal(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              ✕
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <img
                src={modal.image}
                alt={modal.alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-[#1a1030]"
              />
            </div>
            <p className="text-center text-white font-semibold mt-4 text-sm">{modal.title}</p>
            <p className="text-center text-gray-500 text-xs mt-1">Click outside or press Esc to close</p>
          </div>
        </div>
      )}
    </section>
  );
}
