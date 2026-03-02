import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'shrigram-poonam-jewels'
  );

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      {/* Top gold line */}
      <div className="h-0.5 gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/generated/logo-shrigram.dim_256x256.png"
                alt="Shrigram"
                className="w-12 h-12 rounded-full border border-gold/40 object-cover"
              />
              <div>
                <h3 className="font-serif text-gold text-xl font-bold">Shrigram</h3>
                <p className="font-sans text-ivory/50 text-xs tracking-widest uppercase">
                  Poonam Jewels
                </p>
              </div>
            </div>
            <p className="font-cormorant text-ivory/70 text-lg italic leading-relaxed mb-4">
              "Pure Gold. Timeless Grace."
            </p>
            <p className="font-sans text-ivory/45 text-xs leading-relaxed">
              Retailer &amp; Wholesaler of 1 &amp; 2 gram gold jewellery,
              crafted with love in Jamnagar, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Wholesale Inquiry', href: '#inquiry' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="font-sans text-ivory/55 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-ivory/40 text-xs tracking-wider uppercase mb-1">
                  Location
                </p>
                <p className="font-sans text-ivory/70 text-sm">
                  Jamnagar, Gujarat, India
                </p>
              </div>
              <div>
                <p className="font-sans text-ivory/40 text-xs tracking-wider uppercase mb-1">
                  Business
                </p>
                <p className="font-sans text-ivory/70 text-sm">
                  Retail &amp; Wholesale
                </p>
                <p className="font-sans text-ivory/70 text-sm">
                  1 Gram &amp; 2 Gram Gold Jewellery
                </p>
              </div>
              <div>
                <p className="font-sans text-ivory/40 text-xs tracking-wider uppercase mb-1">
                  Company
                </p>
                <p className="font-sans text-ivory/70 text-sm">Poonam Jewels</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-ivory/40 text-xs text-center sm:text-left">
            © {year} Shrigram | Poonam Jewels, Jamnagar, Gujarat. All rights reserved.
          </p>
          <p className="font-sans text-ivory/35 text-xs flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-gold fill-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors duration-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
