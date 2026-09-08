import Reveal from '@/components/Reveal';
import { brand } from '@/config/brand';

export default function Vision() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-ink">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0">
        <img
          src="/images/panier2.jpg"
          alt="Légumes frais et flacons Épices Impériales dans une cuisine"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="relative container-wide py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-eyebrow block mb-6">Vision</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-display-1 text-ivory mb-8 text-balance">
              Faire voyager les saveurs d'ici.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-lg md:text-xl text-ivory/60 leading-relaxed mb-16 max-w-2xl mx-auto">
              Notre ambition est de valoriser les ressources agricoles africaines et de construire
              des marques capables de trouver leur place dans les cuisines d'aujourd'hui et de demain.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-3xl text-ivory">{brand.name}</span>
              <span className="text-eyebrow">Une marque de {brand.parent}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
