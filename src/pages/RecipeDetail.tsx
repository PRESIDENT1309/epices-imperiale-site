import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  ChefHat,
  Users,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { recipes } from '../data/recipes';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();

  const recipe = recipes.find(
    (item) => item.slug === slug && item.published
  );

  if (!recipe) {
    return (
      <main className="min-h-screen bg-ink-800 px-6 py-32 text-ivory">
        <div className="container-wide">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-spice">
              Recette introuvable
            </p>

            <h1 className="max-w-3xl font-display text-5xl leading-tight md:text-7xl">
              Cette recette n'existe pas ou n'est plus disponible.
            </h1>

            <Link
              to="/recettes"
              className="group mt-10 inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-spice hover:text-spice"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              Retour aux recettes
            </Link>
          </Reveal>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-ink-800 text-ivory">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[70vh]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-ink-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />

          <div className="container-wide relative z-10 flex min-h-[70vh] flex-col justify-end pb-14 pt-32 md:pb-20">
            <Reveal>
              <Link
                to="/recettes"
                className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-spice"
              >
                <ArrowLeft size={15} strokeWidth={1.5} />
                Toutes les recettes
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-spice">
                {recipe.category}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="max-w-5xl font-display text-5xl leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
                {recipe.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-ivory/70 md:text-lg">
                {recipe.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recipe information */}
      <section className="border-b border-white/10 bg-ink-900">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-r border-white/10 px-5 py-7 md:px-8">
              <Clock
                size={20}
                strokeWidth={1.2}
                className="mb-4 text-spice"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Préparation
              </p>
              <p className="mt-2 font-display text-xl text-ivory">
                {recipe.prepTime}
              </p>
            </div>

            <div className="border-b border-white/10 px-5 py-7 md:border-b-0 md:border-r md:px-8">
              <ChefHat
                size={20}
                strokeWidth={1.2}
                className="mb-4 text-spice"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Cuisson
              </p>
              <p className="mt-2 font-display text-xl text-ivory">
                {recipe.cookTime}
              </p>
            </div>

            <div className="border-r border-white/10 px-5 py-7 md:px-8">
              <Users
                size={20}
                strokeWidth={1.2}
                className="mb-4 text-spice"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Portions
              </p>
              <p className="mt-2 font-display text-xl text-ivory">
                {recipe.servings} personnes
              </p>
            </div>

            <div className="px-5 py-7 md:px-8">
              <ChefHat
                size={20}
                strokeWidth={1.2}
                className="mb-4 text-spice"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Difficulté
              </p>
              <p className="mt-2 font-display text-xl text-ivory">
                {recipe.difficulty}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main recipe content */}
      <section className="bg-ivory py-20 text-ink-900 md:py-28">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            {/* Ingredients */}
            <Reveal>
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs uppercase tracking-[0.25em] text-spice">
                  Les ingrédients
                </p>

                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                  Ce qu'il vous faut.
                </h2>

                <div className="mt-8 border-t border-ink-900/10">
                  {recipe.ingredients.map((ingredient) => (
                    <div
                      key={ingredient.name}
                      className="flex items-start justify-between gap-6 border-b border-ink-900/10 py-4"
                    >
                      <span className="text-sm leading-6 text-ink-900/75">
                        {ingredient.name}
                      </span>

                      <span className="shrink-0 text-sm text-ink-900/45">
                        {ingredient.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Spices */}
                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-900/40">
                    Épices Impériale
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {recipe.spices.map((spice) => (
                      <span
                        key={spice}
                        className="border border-spice/30 bg-spice/5 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-ink-900/70"
                      >
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>

            {/* Steps */}
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-spice">
                  La préparation
                </p>

                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                  Étape par étape.
                </h2>
              </Reveal>

              <div className="mt-10">
                {recipe.steps.map((step, index) => (
                  <Reveal key={`${recipe.id}-step-${index}`} delay={index * 0.05}>
                    <div className="flex gap-6 border-t border-ink-900/10 py-7 md:gap-10">
                      <span className="font-display text-3xl text-spice/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <p className="max-w-2xl pt-1 text-base leading-7 text-ink-900/70 md:text-lg">
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      {recipe.story && (
        <section className="bg-ink-900 py-20 md:py-28">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
              <Reveal>
                {recipe.story.image ? (
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={recipe.story.image}
                      alt={recipe.story.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center bg-ink-800">
                    <span className="font-display text-6xl text-spice/30">
                      EI
                    </span>
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-spice">
                    L'histoire derrière la recette
                  </p>

                  <h2 className="mt-5 font-display text-4xl leading-tight text-ivory md:text-6xl">
                    {recipe.story.title}
                  </h2>

                  <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/65 md:text-lg">
                    {recipe.story.content}
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-display text-2xl text-ivory">
                      {recipe.story.author}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/40">
                      {recipe.story.role}
                      {recipe.story.location
                        ? ` · ${recipe.story.location}`
                        : ''}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Product connection */}
      <section className="bg-spice py-20 text-ink-900 md:py-24">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-900/60">
                  Le goût Épices Impériale
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
                  Les épices qui donnent du caractère à cette recette.
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {recipe.spices.map((spice) => (
                    <span
                      key={spice}
                      className="border border-ink-900/20 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-ink-900/70"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/#collection"
                className="group inline-flex w-fit items-center gap-3 border border-ink-900/30 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-ink-900 hover:text-ivory"
              >
                Découvrir nos épices
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Back to recipes */}
      <section className="bg-ink-800 py-16">
        <div className="container-wide">
          <Link
            to="/recettes"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ivory/50 transition-colors hover:text-spice"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Retour à toutes les recettes
          </Link>
        </div>
      </section>
    </main>
  );
}