export default function About() {
  return (
    <section id="about" className="section bg-white text-gray-800">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="reveal">
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img src="/img/about.jpg" className="w-full aspect-[4/5] object-cover" alt="About" />
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow">ABOUT ME</p>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Your first call
              <span className="grad-text"> for tech support,</span>
              {' '}done right.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I am Marie Cielo B. Balbuena, a Bachelor of Technology
              and Livelihood Education (BTLEd) graduate, Major in
              Information Communication Technology (ICT) from Bicol University.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              My ICT background built a solid foundation in computer systems,
              software, networking basics, and digital tools — everything
              needed to diagnose and resolve common technical issues at the
              first line of support.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              Years of customer service experience taught me how to stay calm
              under pressure, communicate clearly with non-technical users,
              and resolve concerns efficiently — the core of great Help Desk
              and Service Desk work.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              I am looking for a Help Desk or Service Desk role where I can
              apply my technical knowledge, patience, and people skills to
              keep users productive and systems running.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-600">2026</h3>
                <p className="text-xs mt-1 text-gray-500">Graduate</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-600">2</h3>
                <p className="text-xs mt-1 text-gray-500">Leadership Roles</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold text-purple-600">8+</h3>
                <p className="text-xs mt-1 text-gray-500">Years Athlete</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
