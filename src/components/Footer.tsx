import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { brand, navLinks } from '@/config/brand';

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-800 border-t border-ivory/5 pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-ivory/5">
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl text-ivory mb-2">
              {brand.name}
            </h2>
            <p className="text-eyebrow">{brand.tagline}</p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Navigation pied de page">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="link-underline font-sans text-sm text-ivory/70 hover:text-ivory transition-colors duration-250 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="text-eyebrow">Suivez-nous</p>
            <div className="flex gap-4">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-ivory/15 hover:border-spice hover:text-spice text-ivory/70 transition-all duration-250"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={brand.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-ivory/15 hover:border-spice hover:text-spice text-ivory/70 transition-all duration-250"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-ivory/15 hover:border-spice hover:text-spice text-ivory/70 transition-all duration-250"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-ivory/40 tracking-wide">
            © {brand.year} {brand.name} — {brand.parent}
          </p>
          <p className="font-sans text-xs text-ivory/40 tracking-wide">
            Une marque de {brand.parent}
          </p>
        </div>
      </div>
    </footer>
  );
}
