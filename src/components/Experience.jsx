const LogoImg = ({ src, alt, bg = '#fff' }) => (
  <div style={{ width: '100%', height: '100%', background: bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '3px' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </div>
);

export default function Experience() {
  const experiences = [
    {
      icon: <LogoImg src="/img/LNHS-logo.jpg" alt="Ligao National High School" bg="#fff" />,
      type: 'Teaching Practicum',
      role: 'Pre-Service Teacher',
      company: 'Ligao National High School',
      period: 'Feb 16 – Mar 31, 2026',
      location: 'Ligao City, Albay',
      gradient: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a855f7 100%)',
      accentLight: '#f3f0ff',
      accentText: '#6d28d9',
      description: 'Completed pre-service teaching practicum as part of the BTLEd program. Planned and delivered structured lessons, managed classroom activities, assessed student performance, and applied real-world pedagogical strategies in a public secondary school setting.',
      skills: ['Lesson Planning', 'Classroom Management', 'Student Assessment', 'Communication', 'Curriculum Development'],
    },
    {
      icon: <LogoImg src="/img/Potato_Corner_Logo_2023.png" alt="Potato Corner" bg="#2d8a3e" />,
      type: 'Customer Service',
      role: 'Service Crew',
      company: 'Potato Corner',
      period: 'Mar 2022 – Apr 2023',
      location: 'Ligao City, Albay',
      gradient: 'linear-gradient(135deg, #9d174d 0%, #ec4899 50%, #f472b6 100%)',
      accentLight: '#fdf2f8',
      accentText: '#be185d',
      description: 'Provided quality customer service in a fast-paced food kiosk environment. Handled customer orders with accuracy, maintained cleanliness and product presentation, and collaborated with team members to meet daily service targets.',
      skills: ['Customer Service', 'Communication', 'Team Collaboration', 'Problem Solving', 'Time Management'],
    },
    {
      icon: <LogoImg src="/img/Refreshing-grace-logo.jpg" alt="Refreshing Grace" bg="#fff" />,
      type: 'Food & Beverage · Customer Service',
      role: 'Barista',
      company: 'Refreshing Grace',
      period: 'Apr 2023 – Jan 2024',
      location: 'Ligao City, Albay',
      gradient: 'linear-gradient(135deg, #92400e 0%, #f59e0b 50%, #fbbf24 100%)',
      accentLight: '#fffbeb',
      accentText: '#b45309',
      description: 'Prepared and served coffee, beverages, and food items with consistency and quality in a fast-paced service environment. Delivered attentive customer service, handled orders accurately, resolved customer concerns, and contributed to a welcoming and efficient daily operation.',
      skills: ['Barista Skills', 'Customer Service', 'Food & Beverage', 'Order Management', 'Teamwork', 'Hospitality'],
    },
  ];

  return (
    <section id="experience" className="section bg-white text-gray-800">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="font-display text-4xl font-bold">
            Professional
            <span className="grad-text"> Experience</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            Hands-on experience across education, customer service, and food service
            that shaped my communication, teamwork, and leadership skills.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="reveal rounded-[28px] overflow-hidden shadow-xl">

              {/* GRADIENT BANNER */}
              <div className="relative px-7 py-6 lg:px-10 overflow-hidden" style={{ background: exp.gradient }}>
                <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white opacity-5"></div>
                <div className="absolute right-4 bottom-0 w-24 h-24 rounded-full bg-white opacity-5"></div>

                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {exp.icon}
                    </div>
                    <div>
                      <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{exp.type}</span>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-white mt-0.5">{exp.role}</h3>
                      <p className="text-white/80 font-medium mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col gap-2 lg:items-end flex-shrink-0">
                    {exp.period && (
                      <div className="flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-white text-xs font-medium">
                        <i className="fa-solid fa-calendar-days text-xs"></i>
                        {exp.period}
                      </div>
                    )}
                    <div className="flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-white text-xs font-medium">
                      <i className="fa-solid fa-location-dot text-xs"></i>
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* BODY */}
              <div className="bg-white px-7 py-6 lg:px-10">
                <p className="text-gray-600 leading-relaxed text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: exp.accentLight, color: exp.accentText }}>
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
