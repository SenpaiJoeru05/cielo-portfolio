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
              Leading with
              <span className="grad-text"> discipline,</span>
              {' '}service, and organization.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I am Marie Cielo B. Balbuena, a Bachelor of Technology
              and Livelihood Education (BTLEd) graduate, Major in
              Information Communication Technology (ICT) from Bicol University.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              As a student leader, university athlete, and customer
              service professional, I developed the ability to lead,
              communicate, organize, and support others.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              Through my leadership roles as President of the
              BU Sports Club and SIKLAB Dance Troupe, I gained
              valuable experience in team management, event
              coordination, communication, and organizational work.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              Today, I aspire to build a career in Human Resources,
              Administration, and Virtual Assistance where I can
              contribute my leadership, discipline, and passion
              for helping people.
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
