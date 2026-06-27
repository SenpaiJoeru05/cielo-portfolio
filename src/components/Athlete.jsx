export default function Athlete() {
  const stats = [
    { value: '8+', label: 'Years in Arnis' },
    { value: '40+', label: 'Medals Earned' },
    { value: '10+', label: 'Competitions' },
    { value: 'BU', label: 'University Representative' }
  ];

  return (
    <section id="athlete" className="section bg-[#120d1d] overflow-hidden">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">UNIVERSITY ATHLETE</p>
          <h2 className="font-display text-4xl font-bold text-white">
            Discipline forged through
            <span className="grad-text"> Arnis.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Beyond academics and leadership, sports became one of
            the strongest foundations of my character. Arnis taught
            me resilience, discipline, focus, teamwork, and perseverance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-14">
          <div className="reveal">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img src="/img/arnis.jpg" className="w-full h-[420px] object-cover" alt="Arnis" />
            </div>
          </div>

          <div className="reveal">
            <p className="text-purple-400 uppercase text-xs tracking-[4px]">
              Bicol University Arnis Team
            </p>
            <h3 className="font-display text-3xl text-white font-bold mt-3">
              Years of dedication, training, and competition.
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed text-sm">
              As a member of the Bicol University Arnis Team,
              I represented the university in various competitions,
              continuously developing discipline, confidence, and resilience.
            </p>

            <p className="text-gray-400 mt-3 leading-relaxed text-sm">
              My athletic journey started during high school and
              continued throughout college, allowing me to earn
              valuable experiences and achievements both inside
              and outside the university.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-5">
                  <h4 className="text-3xl font-bold grad-text">{stat.value}</h4>
                  <p className="text-gray-400 mt-1 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
