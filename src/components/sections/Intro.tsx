import Reveal from '@/components/Reveal';

export default function Intro() {
  return (
    <section id="histoire" className="relative section-pad bg-ink overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Asymmetric layout: text on left (5 cols), image on right (7 cols, offset) */}
          <div className="lg:col-span-5 lg:pt-20">
            <Reveal>
              <span className="text-eyebrow block mb-6">Introduction</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-display-1 text-ivory mb-8 text-balance">
                Le goût commence par ce que l'on choisit.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-lg text-ivory/60 leading-relaxed max-w-md">
                ÉPICES IMPÉRIALE sélectionne, transforme et imagine des épices destinées à accompagner
                les cuisines du quotidien comme les créations culinaires les plus ambitieuses.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 relative">
            <Reveal delay={150} y={40}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/produits/cannelle.jpg"
                  alt="Flacon de cannelle Épices Impériales tenu en main"
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
            {/* Small offset image for asymmetry */}
            <Reveal delay={300} y={20}>
              <div className="hidden lg:block absolute -bottom-12 -left-12 w-48 aspect-square overflow-hidden border-4 border-ink">
                <img
                  src="/images/cuisine-melange.jpg"
                  alt="Flacon d'épices au-dessus d'un plat de poulet mariné"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
