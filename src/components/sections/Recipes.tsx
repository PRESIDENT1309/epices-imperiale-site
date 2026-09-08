import Reveal from '@/components/Reveal';
import { recipes } from '@/data/recipes';

export default function Recipes() {
  return (
    <section className="section-pad bg-ink-800">
      <div className="container-wide">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <span className="text-eyebrow block mb-4">Inspiration</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-display-1 text-ivory text-balance">
              Et maintenant, cuisinez.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, i) => (
            <Reveal key={recipe.id} delay={(i % 3) * 100} y={30}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase text-ivory/90 px-3 py-1 bg-ink/60 backdrop-blur-sm">
                    {recipe.category}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ivory mb-2 group-hover:text-spice transition-colors duration-250">
                  {recipe.title}
                </h3>
                <p className="font-sans text-sm text-ivory/50 leading-relaxed mb-3">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {recipe.spices.map((spice) => (
                    <span key={spice} className="text-[10px] text-earth-light tracking-wide">
                      {spice}
                    </span>
                  ))}
                </div>
                <span className="link-underline font-sans text-xs text-ivory/70 uppercase tracking-wider">
                  Découvrir
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
