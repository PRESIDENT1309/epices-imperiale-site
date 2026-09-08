import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { brand } from '@/config/brand';

export default function OrderCTA() {
  const whatsappUrl = `${brand.whatsappLink}?text=${encodeURIComponent(
    'Bonjour, je souhaite commander des épices ÉPICES IMPÉRIALE.'
  )}`;

  return (
    <section id="commander" className="relative section-pad bg-ink overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/produits/piment-moulu-85.jpg"
          alt="Flacon de piment moulu Épices Impériales"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="relative container-narrow text-center">
        <Reveal>
          <span className="text-eyebrow block mb-6">Commande</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-light text-display-1 text-ivory mb-8 text-balance">
            Vous avez trouvé votre épice ?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-sans text-lg text-ivory/60 mb-12 max-w-xl mx-auto">
            Commandez directement.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-spice"
          >
            <MessageCircle size={18} />
            Commander sur WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
