const SSESIcon = () => (
  <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '10px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src="/img/SSES.jpg" alt="San Sebastian Elementary School" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(2.4)', transformOrigin: 'center center' }} />
  </div>
);

const LNHSIcon = () => (
  <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '2px' }}>
    <img src="/img/LNHS-logo.jpg" alt="Ligao National High School" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>
);

const BUIcon = () => (
  <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '2px' }}>
    <img src="/img/BUP-logo.jpg" alt="Bicol University" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>
);

export default function Education() {
  const schools = [
    {
      level: 'College',
      icon: <BUIcon />,
      school: 'Bicol University',
      degree: 'Bachelor of Technology and Livelihood Education',
      detail: 'Major in Information Communication Technology (ICT)',
      location: 'Legazpi City, Albay',
      year: '2022 – 2026',
      status: 'Graduate',
      accent: '#7c3aed',
      glow: 'rgba(124,58,237,0.35)',
      accentLight: 'rgba(124,58,237,0.12)',
      iconBg: 'transparent',
    },
    {
      level: 'Senior High School',
      icon: <LNHSIcon />,
      school: 'Ligao National High School',
      degree: 'Senior High School Diploma',
      detail: '',
      location: 'Tuburan, Ligao City',
      year: '2020 – 2021',
      status: 'Completer',
      accent: '#a855f7',
      glow: 'rgba(168,85,247,0.30)',
      accentLight: 'rgba(168,85,247,0.10)',
    },
    {
      level: 'Junior High School',
      icon: <LNHSIcon />,
      school: 'Ligao National High School',
      degree: 'Junior High School Diploma',
      detail: '',
      location: 'Tuburan, Ligao City',
      year: '2015 – 2019',
      status: 'Completer',
      accent: '#ec4899',
      glow: 'rgba(236,72,153,0.25)',
      accentLight: 'rgba(236,72,153,0.10)',
    },
    {
      level: 'Elementary',
      icon: <SSESIcon />,
      school: 'San Sebastian Elementary School',
      degree: 'Elementary School Diploma',
      detail: '',
      location: 'San Sebastian, Tarlac City',
      year: '2009 – 2015',
      status: 'Completer',
      accent: '#f59e0b',
      glow: 'rgba(245,158,11,0.25)',
      accentLight: 'rgba(245,158,11,0.10)',
    },
  ];

  return (
    <section id="education" className="section bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">EDUCATION</p>
          <h2 className="font-display text-4xl text-white font-bold">
            Academic
            <span className="grad-text"> Foundation</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            A journey of continuous learning — from elementary through college.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-14 pl-8 lg:pl-14">

          {/* vertical line */}
          <div
            className="absolute left-0 lg:left-5 top-3 bottom-3 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #7c3aed, #a855f7, #ec4899, #f59e0b)' }}
          ></div>

          <div className="space-y-6">
            {schools.map((s, index) => (
              <div key={index} className="relative reveal">

                {/* glowing dot */}
                <div
                  className="absolute -left-8 lg:-left-[46px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#120d1d]"
                  style={{ background: s.accent, boxShadow: `0 0 10px 3px ${s.glow}` }}
                ></div>

                {/* CARD */}
                <div
                  className="glass rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{ borderLeft: `3px solid ${s.accent}` }}
                >
                  <div className="p-6 lg:p-7">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                      <div className="flex items-start gap-4">
                        <div
                          className="text-2xl w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                          style={{ background: s.iconBg || s.accentLight }}
                        >
                          {s.icon}
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-[3px]" style={{ color: s.accent }}>
                            {s.level}
                          </span>
                          <h3 className="font-display text-lg lg:text-xl font-bold text-white mt-0.5">
                            {s.school}
                          </h3>
                          <p className="text-gray-400 text-sm mt-0.5">{s.degree}</p>
                          {s.detail && <p className="text-gray-500 text-xs mt-0.5">{s.detail}</p>}
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <i className="fa-solid fa-location-dot text-xs" style={{ color: s.accent }}></i>
                            <span className="text-gray-500 text-xs">{s.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <div
                          className="rounded-xl px-5 py-2.5 text-center"
                          style={{ background: s.accentLight, border: `1px solid ${s.accent}30` }}
                        >
                          <p className="text-xs uppercase tracking-widest font-bold" style={{ color: s.accent }}>Year</p>
                          <p className="text-white font-bold text-base mt-0.5 font-display">{s.year}</p>
                          <p className="text-xs font-semibold mt-0.5" style={{ color: s.accent }}>{s.status}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
