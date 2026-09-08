import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brand, navLinks } from '@/config/brand';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-smooth
          ${scrolled
            ? 'bg-ink/90 backdrop-blur-md py-4 border-b border-ivory/5'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container-wide flex items-center justify-between">
          <Link to="/" className="group" aria-label={brand.name}>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl tracking-wide text-ivory">
                ÉPICES IMPÉRIALE
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-earth-light mt-1 hidden sm:block">
                {brand.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="link-underline font-sans text-sm text-ivory/80 hover:text-ivory transition-colors duration-250"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/#commander" className="btn-spice text-xs px-6 py-3">
              Commander
            </Link>
          </div>

          <button
            className="lg:hidden text-ivory p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-smooth
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-ink" />
        <nav className="relative h-full flex flex-col justify-center items-center gap-8 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-display text-3xl text-ivory hover:text-spice transition-colors duration-250"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 80 + 200}ms, transform 0.5s ease ${i * 80 + 200}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#commander"
            className="btn-spice mt-4"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ease ${navLinks.length * 80 + 300}ms, transform 0.5s ease ${navLinks.length * 80 + 300}ms`,
            }}
          >
            Commander
          </Link>
        </nav>
      </div>
    </>
  );
}
