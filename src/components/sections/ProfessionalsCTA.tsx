import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { professionalTypes } from '@/data/process';

export default function ProfessionalsCTA() {
  return (
    <section className="section-pad bg-ink relative overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <Reveal>
            <span className="text-eyebrow block mb-6">Professionnels</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-display-1 text-ivory mb-8 text-balance">
              Pour les professionnels du goût.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-lg text-ivory/60 leading-relaxed max-w-2xl mx-auto mb-12">
              Vous êtes restaurant, hôtel, distributeur, revendeur ou grossiste ?
              Construisons ensemble la prochaine étape.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {professionalTypes.map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 border border-ivory/15 text-sm text-ivory/60 hover:border-spice hover:text-spice transition-all duration-250 cursor-default"
              >
                {type}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="text-center">
            <Link to="/professionnels" className="btn-primary">
              Devenir partenaire
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
