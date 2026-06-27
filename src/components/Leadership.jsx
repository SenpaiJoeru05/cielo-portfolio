export default function Leadership() {
  const roles = [
    {
      image: 'img/sportsclub.jpg',
      year: '2025',
      title: 'President',
      organization: 'BU Sports Club',
      description: 'Led the organization through planning, communication, coordination, and support activities for student-athletes.',
      skills: ['Team leadership', 'Event organization', 'Member coordination', 'Administrative work']
    },
    {
      image: 'img/siklab.jpg',
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
          <h2 className="font-display text-5xl font-bold">
            Leading organizations with
            <span className="grad-text"> purpose.</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Leadership taught me how to communicate, organize, support teams, and make decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {roles.map((role, index) => (
            <div key={index} className="skill-card bg-white rounded-[35px] shadow-2xl overflow-hidden reveal">
              <img src={role.image} className="w-full h-72 object-cover" alt={role.organization} />
              <div className="p-8">
                <span className="text-purple-600 text-sm uppercase">{role.year}</span>
                <h3 className="font-display text-3xl font-bold mt-3">{role.title}</h3>
                <h4 className="text-purple-600 mt-1">{role.organization}</h4>
                <p className="mt-5 text-gray-600">{role.description}</p>
                <ul className="mt-5 space-y-3">
                  {role.skills.map((skill, i) => (
                    <li key={i}>✓ {skill}</li>
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
