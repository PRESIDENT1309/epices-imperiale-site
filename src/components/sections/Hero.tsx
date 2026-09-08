import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-ink">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="/images/panier.jpg"
          alt="Flacons Épices Impériales autour d'un panier de légumes frais et d'un poulet mariné"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center container-wide">
        <div className="max-w-4xl">
          <div
            className="overflow-hidden mb-6"
            style={{ animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both' }}
          >
            <span className="text-eyebrow block">IMPERIAL GROUP — Agroalimentaire</span>
          </div>

          <h1
            className="font-display font-light text-hero text-ivory leading-[0.95] mb-4"
            style={{ animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both' }}
          >
            ÉPICES
            <br />
            IMPÉRIALE
          </h1>

          <p
            className="font-display italic text-2xl md:text-3xl text-ivory/80 mb-8"
            style={{ animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both' }}
          >
            {brand.tagline}.
          </p>

          <p
            className="font-sans text-base md:text-lg text-ivory/60 max-w-xl mb-10 leading-relaxed"
            style={{ animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both' }}
          >
            {brand.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1s both' }}
          >
            <Link to="/#collection" className="btn-primary">
              Explorer la collection
              <ArrowRight size={16} />
            </Link>
            <Link to="/#histoire" className="btn-outline">
              Découvrir notre histoire
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fade-in 1s ease 1.5s both' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/40 font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
