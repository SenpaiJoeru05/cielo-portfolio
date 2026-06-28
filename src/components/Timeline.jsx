export default function Timeline() {
  const events = [
    {
      year: '2018',
      sideNote: 'Started my athletic journey in Arnis.',
      title: 'Started Competing in Arnis',
      subtitle: 'Athletic Beginning',
      description: 'Began training and competing in Arnis during high school, developing discipline, perseverance, and teamwork.',
      align: 'left'
    },
    {
      year: '2022',
      sideNote: 'Began university education.',
      title: 'Entered Bicol University',
      subtitle: 'University Journey',
      description: 'Started BTLEd majoring in ICT, building a technical foundation in computer systems, networking, and digital tools while becoming actively involved in student organizations.',
      align: 'right'
    },
    {
      year: '2025',
      sideNote: 'Took on two leadership roles.',
      title: 'Organization President',
      subtitle: 'Leadership',
      description: 'Became President of the BU Sports Club and President of SIKLAB Dance Troupe, leading members and organizing activities.',
      align: 'left'
    },
    {
      year: '2026',
      sideNote: 'A new chapter begins.',
      title: 'Completed BTLEd Degree',
      subtitle: 'Graduation',
      description: 'Graduated from Bicol University with an ICT major and prepared to pursue a career in Help Desk and Service Desk support, combining technical knowledge with strong communication and customer service experience.',
      align: 'right'
    }
  ];

  return (
    <section id="timeline" className="section relative overflow-hidden bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">MY JOURNEY</p>
          <h2 className="font-display text-4xl font-bold text-white">
            The journey that shaped
            <span className="grad-text"> who I am today.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            From athlete to ICT graduate, every chapter built the discipline,
            resilience, and communication skills I now bring to
            Help Desk and Service Desk work.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="timeline-line hidden lg:block"></div>

          {events.map((event, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 mb-12 reveal">
              {event.align === 'left' ? (
                <>
                  <div className="text-right pr-12 hidden lg:block">
                    <h3 className="text-2xl font-bold text-white">{event.year}</h3>
                    <p className="text-gray-400 mt-1 text-sm">{event.sideNote}</p>
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <span className="text-purple-400 text-xs uppercase tracking-widest">{event.subtitle}</span>
                    <h3 className="font-display text-xl mt-2 text-white">{event.title}</h3>
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass rounded-2xl p-6">
                    <span className="text-purple-400 text-xs uppercase tracking-widest">{event.subtitle}</span>
                    <h3 className="font-display text-xl mt-2 text-white">{event.title}</h3>
                    <p className="text-gray-400 mt-3 text-sm leading-relaxed">{event.description}</p>
                  </div>
                  <div className="pl-12 hidden lg:block">
                    <h3 className="text-2xl font-bold text-white">{event.year}</h3>
                    <p className="text-gray-400 mt-1 text-sm">{event.sideNote}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
