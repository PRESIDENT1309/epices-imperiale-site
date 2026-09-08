import Reveal from '@/components/Reveal';
import { savoirFaireItems } from '@/data/process';

export default function SavoirFaire() {
  return (
    <section className="section-pad bg-ink-800 relative overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: large image */}
          <div className="relative order-2 lg:order-1">
            <Reveal y={40}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/etiquette-dos.jpg"
                  alt="Dos de l'étiquette : 100 % naturelle, sélectionnée et transformée avec soin en RDC"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            {/* Offset second image */}
            <Reveal delay={200} y={20}>
              <div className="hidden lg:block absolute -bottom-10 -right-10 w-56 aspect-[4/3] overflow-hidden border-4 border-ink-800">
                <img
                  src="/images/etiquette-dos-2.jpg"
                  alt="Instructions d'utilisation et code-barres au dos du flacon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: text + items */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-eyebrow block mb-6">Savoir-faire</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-display-1 text-ivory mb-8 text-balance">
                Notre savoir-faire
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-lg text-ivory/60 leading-relaxed mb-12 max-w-md">
                Derrière chaque pot se trouve une volonté simple : proposer des épices accessibles,
                soignées et pensées pour apporter une véritable différence dans l'assiette.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {savoirFaireItems.map((item, i) => (
                <Reveal key={item.title} delay={i * 80} y={20}>
                  <div className="border-t border-ivory/10 pt-4 group">
                    <h3 className="font-display text-lg text-ivory mb-1 group-hover:text-spice transition-colors duration-250">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-ivory/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
