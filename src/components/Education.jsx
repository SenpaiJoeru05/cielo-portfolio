export default function Education() {
  return (
    <section id="education" className="section bg-[#120d1d]">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">EDUCATION</p>
          <h2 className="font-display text-5xl text-white font-bold">
            Academic
            <span className="grad-text"> Foundation</span>
          </h2>
        </div>

        <div className="glass rounded-[40px] p-12 mt-20 reveal">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-purple-400 uppercase text-sm">Bicol University</p>
              <h3 className="text-4xl text-white font-display font-bold mt-3">
                Bachelor of Technology and Livelihood Education
              </h3>
              <p className="text-gray-400 mt-4">Major in Technology and Livelihood Education</p>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-purple-600 px-6 py-4 rounded-2xl">
                <h4 className="text-3xl font-bold text-white">2026</h4>
                <p className="text-white/70">Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
