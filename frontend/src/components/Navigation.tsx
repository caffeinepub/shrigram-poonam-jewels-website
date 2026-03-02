import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Wholesale', href: '#inquiry' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/97 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/logo-shrigram.dim_256x256.png"
              alt="Shrigram Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-gold/40 group-hover:border-gold transition-colors duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-gold text-lg md:text-xl font-bold tracking-wide">
                Shrigram
              </span>
              <span className="font-sans text-gold-muted text-[10px] md:text-xs tracking-[0.2em] uppercase">
                Poonam Jewels
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-sm tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ivory/80 hover:text-gold transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-sm tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors duration-300 py-3 text-left border-b border-gold/10 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
