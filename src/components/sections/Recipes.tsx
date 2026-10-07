import Reveal from '@/components/Reveal';
import RecipeCard from '@/components/RecipeCard';
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
            <Reveal
              key={recipe.id}
              delay={(i % 3) * 100}
              y={30}
            >
              <RecipeCard recipe={recipe} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
