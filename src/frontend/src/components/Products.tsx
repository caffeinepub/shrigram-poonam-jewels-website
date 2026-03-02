import { Sparkles } from "lucide-react";

const products = [
  {
    id: "1gram",
    weight: "1 Gram",
    image: "/assets/generated/product-1gram.dim_600x600.png",
    tagline: "Delicate Elegance",
    description:
      "Our 1 gram gold jewellery collection is perfect for everyday wear and gifting. Lightweight yet luxurious, each piece is crafted with precision to deliver maximum beauty at an accessible price point.",
    highlights: [
      "Lightweight & Comfortable",
      "Perfect for Daily Wear",
      "Ideal for Gifting",
      "Wholesale Available",
    ],
    badge: "Bestseller",
  },
  {
    id: "2gram",
    weight: "2 Gram",
    image: "/assets/generated/product-2gram.dim_600x600.png",
    tagline: "Statement Luxury",
    description:
      "The 2 gram gold jewellery range offers a richer, more substantial feel — ideal for special occasions, weddings, and celebrations. A perfect balance of grandeur and affordability.",
    highlights: [
      "Rich & Substantial",
      "Occasion Wear",
      "Wedding Collections",
      "Bulk Orders Welcome",
    ],
    badge: "Premium",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-ivory-dark">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-bold mb-4">
            Crafted in <span className="gold-text-gradient">Pure Gold</span>
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <div className="w-2 h-2 rounded-full bg-gold mx-2" />
          </div>
          <p className="font-sans text-charcoal/65 text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Explore our signature 1 gram and 2 gram gold jewellery — where every
            piece tells a story of heritage and craftsmanship.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={`${product.weight} Gold Jewellery`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="gold-gradient font-sans text-charcoal text-xs font-semibold tracking-widest uppercase px-3 py-1.5">
                    {product.badge}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Weight badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-gold" />
                  <span className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium">
                    {product.weight} Gold
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-charcoal font-bold mb-1">
                  {product.tagline}
                </h3>
                <div className="w-10 h-0.5 gold-gradient mb-4" />

                <p className="font-sans text-charcoal/65 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span className="font-sans text-charcoal/70 text-sm">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.querySelector("#inquiry");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="w-full py-3 font-sans text-xs tracking-[0.25em] uppercase font-medium text-charcoal gold-gradient hover:opacity-90 transition-opacity duration-300"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
