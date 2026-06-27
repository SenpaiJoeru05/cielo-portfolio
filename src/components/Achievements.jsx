export default function Achievements() {
  const achievements = [
    { emoji: '👑', title: 'Organization President', description: 'Served as President of two accredited student organizations at Bicol University.' },
    { emoji: '🥋', title: 'University Athlete', description: 'Represented Bicol University in Arnis competitions and athletic events.' },
    { emoji: '🎓', title: 'Graduate', description: 'Successfully completed Bachelor of Technology and Livelihood Education at Bicol University.' },
    { emoji: '🏅', title: 'Medalist', description: 'Earned various medals and recognitions throughout years of athletic competition.' },
    { emoji: '💃', title: 'Dance Leader', description: 'Led SIKLAB Dance Troupe through organizational activities and performances.' },
    { emoji: '🤝', title: 'Leadership Skills', description: 'Developed communication, organization, and people management skills through leadership roles.' }
  ];

  return (
    <section className="section bg-white text-gray-800">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">ACHIEVEMENTS</p>
          <h2 className="font-display text-5xl font-bold">
            Accomplishments that shaped my
            <span className="grad-text"> journey.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="skill-card bg-purple-50 rounded-[35px] p-10">
              <div className="text-5xl">{achievement.emoji}</div>
              <h3 className="font-display text-2xl mt-6 font-bold">{achievement.title}</h3>
              <p className="mt-4 text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
