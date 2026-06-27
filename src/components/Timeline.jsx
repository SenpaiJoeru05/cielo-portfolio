export default function Timeline() {
  const events = [
    {
      year: '2018',
      title: 'Started Competing in Arnis',
      subtitle: 'Athletic Beginning',
      description: 'Began training and competing in Arnis during high school, developing discipline, perseverance, and teamwork.',
      align: 'left'
    },
    {
      year: '2022',
      title: 'Entered Bicol University',
      subtitle: 'University Journey',
      description: 'Started taking Bachelor of Technology and Livelihood Education and became actively involved in student organizations.',
      align: 'right'
    },
    {
      year: '2025',
      title: 'Organization President',
      subtitle: 'Leadership',
      description: 'Became President of the BU Sports Club and President of SIKLAB Dance Troupe, leading members and organizing activities.',
      align: 'left'
    },
    {
      year: '2026',
      title: 'Completed BTLEd Degree',
      subtitle: 'Graduation',
      description: 'Graduated from Bicol University and prepared to pursue a professional career in Human Resources, Administration, and Virtual Assistance.',
      align: 'right'
    }
  ];

  return (
    <section id="timeline" className="section relative overflow-hidden bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">MY JOURNEY</p>
          <h2 className="font-display text-5xl font-bold text-white">
            The journey that shaped
            <span className="grad-text"> who I am today.</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            From athlete to student leader, every chapter built
            the discipline, resilience, and leadership that I now
            bring into my future career.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="timeline-line hidden lg:block"></div>

          {events.map((event, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-10 mb-20 reveal">
              {event.align === 'left' ? (
                <>
                  <div className="text-right pr-16 hidden lg:block">
                    <h3 className="text-3xl font-bold text-white">{event.year}</h3>
                    <p className="text-gray-400 mt-2">{event.description.substring(0, 50)}...</p>
                  </div>
                  <div className="glass rounded-3xl p-8">
                    <span className="text-purple-400 text-sm uppercase">{event.subtitle}</span>
                    <h3 className="font-display text-2xl mt-3">{event.title}</h3>
                    <p className="text-gray-400 mt-4">{event.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass rounded-3xl p-8">
                    <span className="text-purple-400 text-sm uppercase">{event.subtitle}</span>
                    <h3 className="font-display text-2xl mt-3">{event.title}</h3>
                    <p className="text-gray-400 mt-4">{event.description}</p>
                  </div>
                  <div className="pl-16 hidden lg:block">
                    <h3 className="text-3xl font-bold text-white">{event.year}</h3>
                    <p className="text-gray-400 mt-2">{event.description.substring(0, 50)}...</p>
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
