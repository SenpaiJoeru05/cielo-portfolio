export default function Skills() {
  const mainSkills = [
    { icon: 'fa-users', title: 'Communication', description: 'Effective verbal and written communication skills.' },
    { icon: 'fa-calendar', title: 'Organization', description: 'Scheduling, planning, and administrative support.' },
    { icon: 'fa-user-group', title: 'Leadership', description: 'Team management and organizational leadership.' },
    { icon: 'fa-computer', title: 'Digital Tools', description: 'Microsoft Office and Google Workspace.' }
  ];

  const allSkills = [
    'Microsoft Office', 'Google Workspace', 'Canva',
    'Data Entry', 'Scheduling', 'Administrative Support',
    'Team Leadership', 'Customer Service', 'Time Management'
  ];

  return (
    <section id="skills" className="section bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">SKILLS</p>
          <h2 className="font-display text-5xl text-white font-bold">
            Skills for HR, Administration, and
            <span className="grad-text"> Virtual Assistance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {mainSkills.map((skill, index) => (
            <div key={index} className="glass rounded-[35px] p-8 skill-card">
              <i className={`fa-solid ${skill.icon} text-4xl text-purple-400`}></i>
              <h3 className="text-2xl font-bold mt-6 text-white">{skill.title}</h3>
              <p className="text-gray-400 mt-4">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {allSkills.map((skill, index) => (
            <div key={index} className="glass p-5 rounded-2xl text-center text-white">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
