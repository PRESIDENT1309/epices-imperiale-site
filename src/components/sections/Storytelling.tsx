import Reveal from '@/components/Reveal';
import { processSteps } from '@/data/process';

export default function Storytelling() {
  return (
    <section id="savoir-faire" className="section-pad bg-ink relative overflow-hidden">
      <div className="container-wide">
        <div className="mb-16 md:mb-24 text-center">
          <Reveal>
            <span className="text-eyebrow block mb-4">Storytelling</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-display-1 text-ivory text-balance">
              De la terre à votre table.
            </h2>
          </Reveal>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-ivory/10" />

          <div className="grid grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 120} y={40}>
                <div className="relative pt-8">
                  {/* Dot on timeline */}
                  <div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-spice border-2 border-ink" />

                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-display text-5xl text-ivory/10 block mb-2">{step.number}</span>
                  <h3 className="font-display text-2xl text-ivory mb-3">{step.title}</h3>
                  <p className="font-sans text-sm text-ivory/60 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ivory/10" />

          <div className="flex flex-col gap-12">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100} y={30}>
                <div className="relative pl-16">
                  <div className="absolute left-[22px] top-1 w-3 h-3 rounded-full bg-spice border-2 border-ink" />
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-display text-4xl text-ivory/10 block mb-1">{step.number}</span>
                  <h3 className="font-display text-2xl text-ivory mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-ivory/60 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
