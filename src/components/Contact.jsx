export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-br from-purple-700 to-pink-600">
      <div className="container text-center">
        <p className="eyebrow text-white">CONTACT</p>

        <h2 className="font-display text-5xl font-bold text-white">
          Let's work together.
        </h2>

        <p className="text-white/80 mt-6 max-w-2xl mx-auto">
          I am open to opportunities in Human Resources,
          Administration, Customer Service, and Virtual Assistance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass rounded-3xl p-8">
            <i className="fa-solid fa-envelope text-4xl"></i>
            <h3 className="mt-5 text-xl">Email</h3>
            <p className="mt-3 text-white/70">balbuenanationmariecielo@gmail.com</p>
          </div>

          <div className="glass rounded-3xl p-8">
            <i className="fa-solid fa-phone text-4xl"></i>
            <h3 className="mt-5 text-xl">Phone</h3>
            <p className="mt-3 text-white/70">09123456789</p>
          </div>

          <div className="glass rounded-3xl p-8">
            <i className="fa-solid fa-location-dot text-4xl"></i>
            <h3 className="mt-5 text-xl">Location</h3>
            <p className="mt-3 text-white/70">Ligao City, Albay</p>
          </div>
        </div>

        <a
          href="mailto:balbuenanationmariecielo@gmail.com"
          className="inline-block mt-16 btn-primary"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
