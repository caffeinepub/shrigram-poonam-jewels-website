import { MapPin, Star } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-ivory">
      {/* Top ornament */}
      <div className="flex items-center justify-center mb-16 px-4">
        <div className="ornament-divider w-full max-w-2xl">
          <span className="font-sans text-gold text-xs tracking-[0.35em] uppercase whitespace-nowrap px-4">
            Our Story
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
              About Poonam Jewels
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-bold leading-tight mb-6">
              A Legacy of{" "}
              <span className="gold-text-gradient">Purity &amp; Trust</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mb-8" />
            <p className="font-sans text-charcoal/75 text-base leading-relaxed mb-6">
              Nestled in the heart of Jamnagar, Gujarat — India's jewellery
              capital —
              <strong className="text-charcoal font-medium">
                {" "}
                Poonam Jewels
              </strong>{" "}
              has been a trusted name in gold jewellery for discerning buyers
              across the region. Under our brand{" "}
              <strong className="text-charcoal font-medium">Shrigram</strong>,
              we bring you the finest 1 gram and 2 gram gold jewellery that
              combines traditional craftsmanship with contemporary elegance.
            </p>
            <p className="font-sans text-charcoal/75 text-base leading-relaxed mb-10">
              Whether you are a retail customer seeking a perfect piece for a
              special occasion, or a wholesale buyer looking for premium quality
              at competitive prices, Shrigram is your trusted partner. Every
              piece we offer is a testament to our unwavering commitment to
              purity, beauty, and value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "1 & 2g", label: "Gold Jewellery" },
                { value: "Retail &", label: "Wholesale" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-charcoal/60 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="relative bg-charcoal rounded-none p-10 shadow-gold-lg">
              {/* Corner ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/60" />

              <div className="text-center mb-8">
                <img
                  src="/assets/generated/logo-shrigram.dim_256x256.png"
                  alt="Shrigram"
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gold/50 object-cover"
                />
                <h3 className="font-serif text-gold text-2xl font-bold">
                  Shrigram
                </h3>
                <p className="font-sans text-ivory/60 text-xs tracking-widest uppercase mt-1">
                  by Poonam Jewels
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <Star size={18} />,
                    title: "Artisan Craftsmanship",
                    desc: "Handcrafted by skilled artisans of Jamnagar",
                  },
                  {
                    icon: <MapPin size={18} />,
                    title: "Jamnagar, Gujarat",
                    desc: "India's jewellery hub — your local trusted source",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="text-gold mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-sans text-ivory text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="font-sans text-ivory/55 text-xs mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-none -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/15 rounded-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
