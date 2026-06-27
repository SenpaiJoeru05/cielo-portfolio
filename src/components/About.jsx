export default function About() {
  return (
    <section id="about" className="section bg-white text-gray-800">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img src="img/about.jpg" className="w-full aspect-[4/5] object-cover" alt="About" />
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow">ABOUT ME</p>
            <h2 className="font-display text-5xl font-bold leading-tight">
              Leading with
              <span className="grad-text"> discipline,</span>
              service, and organization.
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              I am Marie Cielo B. Balbuena, a Bachelor of Technology
              and Livelihood Education graduate from Bicol University.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              As a student leader, university athlete, and customer
              service professional, I developed the ability to lead,
              communicate, organize, and support others.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Through my leadership roles as President of the
              BU Sports Club and SIKLAB Dance Troupe, I gained
              valuable experience in team management, event
              coordination, communication, and organizational work.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Today, I aspire to build a career in Human Resources,
              Administration, and Virtual Assistance where I can
              contribute my leadership, discipline, and passion
              for helping people.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-purple-50 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-purple-600">2026</h3>
                <p className="text-sm mt-2">Graduate</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-purple-600">2</h3>
                <p className="text-sm mt-2">Leadership Roles</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-bold text-purple-600">8+</h3>
                <p className="text-sm mt-2">Years Athlete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
