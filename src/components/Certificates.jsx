import { useState } from 'react';

export default function Certificates() {
  const [activeTab, setActiveTab] = useState('school');

  const schoolCertificates = [
    {
      image: 'img/certificates/sports-club-org-cert.jpg',
      title: 'BU Sports Club President',
      alt: 'BU Sports Club Organization Certificate'
    },
    {
      image: 'img/certificates/siklab-cert.jpg',
      title: 'SIKLAB Dance Troupe President',
      alt: 'SIKLAB Dance Troupe Certificate'
    },
    {
      image: 'img/certificates/SLAC-cert.jpg',
      title: 'SLAC Certificate',
      alt: 'SLAC Certificate'
    },
    {
      image: 'img/certificates/pre-service-cert.jpg',
      title: 'Pre-Service Training Certificate',
      alt: 'Pre-Service Certificate'
    }
  ];

  const onlineCertificates = [
    {
      image: 'img/certificates/Executive Search-Specialist-Certification.jpg',
      title: 'Executive Search Specialist Certification',
      alt: 'Executive Search Specialist'
    }
  ];

  const CertificateCard = ({ certificate }) => (
    <div className="reveal">
      <div className="glass rounded-3xl overflow-hidden group">
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-center text-white mt-4 font-medium px-4">
        {certificate.title}
      </p>
    </div>
  );

  return (
    <section className="section bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">CERTIFICATES</p>
          <h2 className="font-display text-5xl text-white font-bold">
            Certifications & <span className="grad-text">Achievements</span>
          </h2>
          <p className="text-gray-400 mt-4">Professional development and recognition</p>
        </div>

        {/* TAB BUTTONS */}
        <div className="cert-tabs reveal">
          <button
            className={`cert-tab ${activeTab === 'school' ? 'active' : ''}`}
            onClick={() => setActiveTab('school')}
          >
            🎓 School Certificates
          </button>
          <button
            className={`cert-tab ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            💻 Online Courses
          </button>
        </div>

        {/* SCHOOL CERTIFICATES TAB */}
        {activeTab === 'school' && (
          <div className="cert-content active">
            {schoolCertificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
        )}

        {/* ONLINE COURSES TAB */}
        {activeTab === 'online' && (
          <div className="cert-content active">
            {onlineCertificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
