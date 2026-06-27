export default function Leadership() {
  const roles = [
    {
      image: '/img/sportsclub.jpg',
      year: '2025',
      title: 'President',
      organization: 'BU Sports Club',
      description: 'Led the organization through planning, communication, coordination, and support activities for student-athletes.',
      skills: ['Team leadership', 'Event organization', 'Member coordination', 'Administrative work']
    },
    {
      image: '/img/siklab.jpg',
      year: '2025',
      title: 'President',
      organization: 'SIKLAB Dance Troupe',
      description: 'Managed organization activities, coordinated members, and supported programs and events.',
      skills: ['Team management', 'Event planning', 'Communication', 'Leadership skills']
    }
  ];

  return (
    <section id="leadership" className="section bg-white text-gray-800">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">LEADERSHIP</p>
          <h2 className="font-display text-4xl font-bold">
            Leading organizations with
            <span className="grad-text"> purpose.</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            Leadership taught me how to communicate, organize, support teams, and make decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {roles.map((role, index) => (
            <div key={index} className="skill-card bg-white rounded-[28px] shadow-xl overflow-hidden reveal">
              <img src={role.image} className="w-full h-56 object-cover" alt={role.organization} />
              <div className="p-6">
                <span className="text-purple-600 text-xs uppercase tracking-widest">{role.year}</span>
                <h3 className="font-display text-2xl font-bold mt-2">{role.title}</h3>
                <h4 className="text-purple-600 mt-1 font-medium">{role.organization}</h4>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">{role.description}</p>
                <ul className="mt-4 space-y-2">
                  {role.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-gray-700">✓ {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
