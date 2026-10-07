import { ArrowLeft, ArrowUpRight, Clock, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import { recipes } from '@/data/recipes';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((item) => item.slug === slug);

  if (!recipe) {
    return (
      <main className="min-h-screen bg-ink-900 text-ivory">
        <div className="container-wide section-pad flex min-h-screen flex-col items-center justify-center text-center">
          <span className="text-eyebrow mb-4">Recette introuvable</span>

          <h1 className="font-display text-display-2 font-light">
            Cette recette n’existe pas.
          </h1>

          <Link
            to="/recettes"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-spice"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            Retour aux recettes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-ink-900 text-ivory">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-ink-900/10" />

        <div className="container-wide relative flex min-h-[75vh] items-end pb-16 pt-32 md:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <Link
                to="/recettes"
                className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-spice"
              >
                <ArrowLeft size={15} strokeWidth={1.5} />
                Toutes les recettes
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <span className="mb-5 block text-eyebrow text-spice">
                {recipe.category}
              </span>
            </Reveal>

            <Reveal delay={150}>
              <h1 className="max-w-4xl font-display text-display-1 font-light leading-[0.95] text-ivory">
                {recipe.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-ivory/65 md:text-lg">
                {recipe.description}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/15 pt-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ivory/60">
                  <Clock size={15} strokeWidth={1.5} />
                  <span>
                    Préparation {recipe.prepTime} · Cuisson {recipe.cookTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ivory/60">
                  <Users size={15} strokeWidth={1.5} />
                  <span>{recipe.servings} personnes</span>
                </div>

                <span className="text-xs uppercase tracking-[0.15em] text-ivory/60">
                  {recipe.difficulty}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* INGRÉDIENTS */}
            <Reveal>
              <div>
                <span className="text-eyebrow mb-4 block">Préparation</span>

                <h2 className="font-display text-display-3 font-light">
                  Les ingrédients
                </h2>

                <div className="mt-8 border-t border-white/10">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={`${ingredient.name}-${index}`}
                      className="flex items-center justify-between gap-6 border-b border-white/10 py-4"
                    >
                      <span className="text-sm text-ivory/80">
                        {ingredient.name}
                      </span>

                      <span className="text-xs uppercase tracking-[0.12em] text-ivory/40">
                        {ingredient.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <span className="mb-4 block text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                    Épices Impériale utilisées
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {recipe.spices.map((spice) => (
                      <span
                        key={spice}
                        className="border border-spice/30 px-3 py-2 text-xs text-spice"
                      >
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ÉTAPES */}
            <Reveal delay={100}>
              <div>
                <span className="text-eyebrow mb-4 block">Le geste</span>

                <h2 className="font-display text-display-3 font-light">
                  Comment la préparer
                </h2>

                <div className="mt-10 space-y-8">
                  {recipe.steps.map((step, index) => (
                    <div
                      key={`${recipe.id}-step-${index}`}
                      className="grid grid-cols-[48px_1fr] gap-5"
                    >
                      <span className="font-display text-2xl font-light text-spice">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <p className="border-b border-white/10 pb-8 text-sm leading-7 text-ivory/65 md:text-base">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HISTOIRE DU PARTENAIRE */}
      {recipe.story && (
        <section className="section-pad bg-ink-800">
          <div className="container-wide">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden">
                  {recipe.story.image ? (
                    <img
                      src={recipe.story.image}
                      alt={recipe.story.author}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink-900">
                      <span className="text-eyebrow text-ivory/30">
                        Portrait à venir
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div>
                  <span className="text-eyebrow mb-5 block text-spice">
                    Une histoire derrière l’assiette
                  </span>

                  <h2 className="font-display text-display-2 font-light leading-tight">
                    {recipe.story.title}
                  </h2>

                  <div className="mt-8 max-w-xl">
                    <p className="text-base leading-8 text-ivory/65 md:text-lg">
                      {recipe.story.content}
                    </p>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="font-display text-xl text-ivory">
                      {recipe.story.author}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ivory/40">
                      {recipe.story.role}
                    </p>

                    {recipe.story.location && (
                      <p className="mt-2 text-xs text-ivory/40">
                        {recipe.story.location}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad">
        <div className="container-wide">
          <Reveal>
            <div className="border border-white/10 bg-ink-800 p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl">
                <span className="text-eyebrow mb-5 block">
                  Épices Impériale
                </span>

                <h2 className="font-display text-display-2 font-light leading-tight">
                  Le goût commence par de bons ingrédients.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-ivory/55 md:text-base">
                  Retrouvez les épices utilisées dans cette recette et
                  découvrez toute la collection Épices Impériale.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/#collection"
                    className="group inline-flex items-center gap-3 bg-spice px-6 py-4 text-xs uppercase tracking-[0.16em] text-ink-900 transition-colors hover:bg-ivory"
                  >
                    Découvrir nos épices
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    to="/recettes"
                    className="inline-flex items-center gap-2 border border-white/15 px-6 py-4 text-xs uppercase tracking-[0.16em] text-ivory/70 transition-colors hover:border-white/30 hover:text-ivory"
                  >
                    Voir toutes les recettes
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}