export default function Hero() {
  const handleScrollToInquiry = () => {
    const el = document.querySelector("#inquiry");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToProducts = () => {
    const el = document.querySelector("#products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1440x600.png"
          alt="Shrigram Gold Jewellery"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Ornamental top element */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/70" />
          <span className="font-sans text-gold text-xs tracking-[0.35em] uppercase">
            Est. Jamnagar, Gujarat
          </span>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/70" />
        </div>

        {/* Company name */}
        <p className="font-sans text-gold-muted text-sm sm:text-base tracking-[0.4em] uppercase mb-3 animate-fade-in-up-delay-1">
          Poonam Jewels Presents
        </p>

        {/* Brand name */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-in-up-delay-1">
          <span className="gold-text-gradient">Shrigram</span>
        </h1>

        {/* Slogan */}
        <div className="mb-8 animate-fade-in-up-delay-2">
          <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-ivory/95 italic font-light tracking-wide">
            Pure Gold.{" "}
            <span className="text-gold font-medium not-italic">
              Timeless Grace.
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in-up-delay-2">
          <div className="h-px w-12 bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-24 bg-gold/70" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="h-px w-24 bg-gold/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-12 bg-gold/50" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-ivory/75 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed tracking-wide animate-fade-in-up-delay-2">
          Retailer &amp; Wholesaler of exquisite 1 &amp; 2 gram gold jewellery,
          crafted for every occasion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <button
            type="button"
            onClick={handleScrollToProducts}
            className="group relative px-8 py-3.5 font-sans text-sm tracking-[0.2em] uppercase font-medium text-charcoal overflow-hidden rounded-none transition-all duration-300"
          >
            <span className="absolute inset-0 gold-gradient" />
            <span className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Explore Collection</span>
          </button>
          <button
            type="button"
            onClick={handleScrollToInquiry}
            className="group px-8 py-3.5 font-sans text-sm tracking-[0.2em] uppercase font-medium text-gold border border-gold/60 hover:border-gold hover:bg-gold/10 transition-all duration-300 rounded-none"
          >
            Wholesale Inquiry
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-gold/60 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
