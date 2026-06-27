export default function Gallery() {
  const images = [
    '/img/gallery/gallery1.jpg',
    '/img/gallery/gallery2.jpg',
    '/img/gallery/gallery3.jpg',
    '/img/gallery/gallery4.jpg',
    '/img/gallery/gallery5.jpg',
    '/img/gallery/gallery6.jpg',
    '/img/gallery/gallery7.jpg',
    '/img/gallery/gallery8.jpg',
    '/img/gallery/gallery9.jpg',
    '/img/gallery/gallery10.jpg',
    '/img/gallery/gallery11.jpg',
    '/img/gallery/gallery12.jpg',
    '/img/gallery/gallery13.jpg',
    '/img/gallery/gallery14.jpg',
    '/img/gallery/gallery15.jpg',
  ];

  const widths = [300, 220, 360, 260, 320, 200, 340, 240, 280, 320, 260, 340, 220, 300, 260];
  const row2 = [...images].reverse();

  return (
    <section id="gallery" className="section bg-white text-gray-800 overflow-hidden">
      <div className="container">
        <div className="text-center reveal">
          <p className="eyebrow">GALLERY</p>
          <h2 className="font-display text-4xl font-bold">
            Moments that shaped my
            <span className="grad-text"> journey.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            A collection of achievements and memories from my journey.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {/* Row 1 — scrolls left */}
        <div className="marquee-row">
          <div className="marquee-track">
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="marquee-item"
                style={{ width: `${widths[i % images.length]}px` }}
              >
                <img src={src} alt={`Gallery ${(i % images.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-row">
          <div className="marquee-track marquee-reverse">
            {[...row2, ...row2].map((src, i) => (
              <div
                key={i}
                className="marquee-item"
                style={{ width: `${widths[i % images.length]}px` }}
              >
                <img src={src} alt={`Gallery ${(i % images.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
