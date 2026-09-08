import Reveal from '@/components/Reveal';
import { brand } from '@/config/brand';

export default function ImperialGroup() {
  return (
    <section className="section-pad bg-ink-800">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <Reveal>
              <span className="text-eyebrow block mb-4">{brand.parent}</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-display-3 text-ivory">
                Une marque.
                <br />
                Une vision plus grande.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-2 md:pl-8 md:border-l md:border-ivory/10">
            <Reveal delay={150}>
              <p className="font-sans text-base text-ivory/60 leading-relaxed mb-8">
                ÉPICES IMPÉRIALE est une marque développée par {brand.parent}, un groupe
                entrepreneurial qui développe des projets dans plusieurs secteurs, notamment
                l'agroalimentaire et le numérique.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <a
                href="#"
                className="link-underline font-sans text-sm text-spice hover:text-spice-light transition-colors duration-250"
              >
                Découvrir {brand.parent}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
