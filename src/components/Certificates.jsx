import { useState } from 'react';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('school');

  const schoolCertificates = [
    { image: '/img/certificates/sports-club-org-cert.jpg', title: 'BU Sports Club President', alt: 'BU Sports Club Organization Certificate' },
    { image: '/img/certificates/siklab-cert.jpg', title: 'SIKLAB Dance Troupe President', alt: 'SIKLAB Dance Troupe Certificate' },
    { image: '/img/certificates/SLAC-cert.jpg', title: 'SLAC Certificate', alt: 'SLAC Certificate' },
    { image: '/img/certificates/pre-service-cert.jpg', title: 'Pre-Service Training Certificate', alt: 'Pre-Service Certificate' },
  ];

  const onlineCertificates = [
    { image: '/img/certificates/Executive Search-Specialist-Certification.jpg', title: 'Executive Search Specialist Certification', alt: 'Executive Search Specialist' },
    { image: '/img/certificates/AI-Powered Recruiter-Certification.jpg', title: 'AI-Powered Recruiter Certification', alt: 'AI-Powered Recruiter Certification' },
    { image: '/img/certificates/Talent Acquisition-Cerification.jpg', title: 'Talent Acquisition Certification', alt: 'Talent Acquisition Certification' },
    { image: '/img/certificates/Compensation and Rewards Management-Certification.jpg', title: 'Compensation & Rewards Management Certification', alt: 'Compensation and Rewards Management Certification' },
  ];

  const CertificateCard = ({ certificate }) => (
    <div>
      <div className="glass rounded-2xl overflow-hidden group">
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-center text-white mt-3 text-sm font-medium px-2">
        {certificate.title}
      </p>
    </div>
  );

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
          className="grid gap-6 mt-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', animation: 'fadeIn .4s ease-in' }}
        >
          {current.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
