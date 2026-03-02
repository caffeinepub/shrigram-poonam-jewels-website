import { Award, Gem, Shield, TrendingDown, Truck, Users } from "lucide-react";

const features = [
  {
    icon: <Shield size={28} />,
    title: "Purity Guaranteed",
    description:
      "Every piece of jewellery is crafted to the highest gold purity standards, ensuring you receive only the finest quality.",
  },
  {
    icon: <TrendingDown size={28} />,
    title: "Wholesale Pricing",
    description:
      "Competitive wholesale rates for bulk buyers, retailers, and distributors across India.",
  },
  {
    icon: <Gem size={28} />,
    title: "Wide Variety",
    description:
      "An extensive range of designs in 1 gram and 2 gram gold — from traditional to contemporary.",
  },
  {
    icon: <Award size={28} />,
    title: "Trusted Brand",
    description:
      "Shrigram by Poonam Jewels is a name synonymous with quality and integrity in Jamnagar.",
  },
  {
    icon: <Users size={28} />,
    title: "Retail & Wholesale",
    description:
      "We serve both individual retail customers and large-scale wholesale buyers with equal dedication.",
  },
  {
    icon: <Truck size={28} />,
    title: "Pan-India Supply",
    description:
      "Reliable supply chain ensuring timely delivery of your orders across Gujarat and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.72 0.12 78) 0, oklch(0.72 0.12 78) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
            The Shrigram Difference
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory font-bold mb-4">
            Why Choose <span className="gold-text-gradient">Shrigram?</span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <div className="w-2 h-2 rounded-full bg-gold mx-2" />
          </div>
          <p className="font-sans text-ivory/60 text-base max-w-xl mx-auto mt-6 leading-relaxed">
            We don't just sell jewellery — we deliver trust, beauty, and value
            with every single piece.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-charcoal-light/50 border border-gold/15 hover:border-gold/40 p-8 transition-all duration-400 hover:bg-charcoal-light/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />

              {/* Icon */}
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feature.icon}
              </div>

              <h3 className="font-serif text-ivory text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-ivory/55 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
