export default function Experience() {
  return (
    <section id="experience" className="section bg-white text-gray-800">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="font-display text-5xl font-bold">
            Professional
            <span className="grad-text"> Experience</span>
          </h2>
        </div>

        <div className="mt-20">
          <div className="bg-white shadow-2xl rounded-[40px] p-10 reveal">
            <div className="flex flex-col lg:flex-row justify-between">
              <div>
                <p className="text-purple-600 uppercase text-sm">Customer Service</p>
                <h3 className="font-display text-4xl font-bold mt-3">Potato Corner</h3>
              </div>

              <div className="mt-5 lg:mt-0">
                <span className="bg-purple-100 text-purple-700 px-5 py-3 rounded-full">
                  Example Dates
                </span>
              </div>
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed">
              Provided quality customer service while maintaining
              professionalism, efficiency, and effective
              communication with customers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-2xl">✓ Customer Service</div>
              <div className="bg-gray-50 p-6 rounded-2xl">✓ Communication Skills</div>
              <div className="bg-gray-50 p-6 rounded-2xl">✓ Team Collaboration</div>
              <div className="bg-gray-50 p-6 rounded-2xl">✓ Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
