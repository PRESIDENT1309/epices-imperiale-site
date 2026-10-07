import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import Reveal from '../components/Reveal';
import { recipes } from '../data/recipes';

export default function Recipes() {
  const publishedRecipes = recipes.filter((recipe) => recipe.published);

  return (
    <main className="bg-ink-800 text-ivory">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Plat généreux préparé avec des épices"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
        </div>

        <div className="container-wide relative z-10 pb-16 pt-32 md:pb-24">
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-spice">
              Inspiration culinaire
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
              Des recettes qui
              <br />
              <span className="text-spice">racontent une histoire.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-7 text-ivory/70 md:text-lg">
              Découvrez des recettes pensées autour des épices Épices Impériale,
              mais surtout autour des personnes, des savoir-faire et des histoires
              qui donnent du goût à notre cuisine.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden md:block">
          <ArrowDown
            size={24}
            strokeWidth={1}
            className="animate-bounce text-ivory/60"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-ivory py-20 text-ink-900 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-spice">
                  Notre table
                </p>
                <div className="mt-5 h-px w-16 bg-spice" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="max-w-4xl font-display text-4xl leading-tight md:text-6xl">
                  Une épice ne raconte jamais toute l'histoire.
                </h2>

                <p className="mt-7 max-w-3xl text-base leading-7 text-ink-900/65 md:text-lg">
                  Derrière chaque plat, il y a une personne, une famille, une
                  tradition, une découverte ou simplement l'envie de bien manger.
                  Cette collection rassemble ces histoires et les recettes qui les
                  accompagnent.
                </p>

                <p className="mt-5 max-w-3xl text-base leading-7 text-ink-900/65 md:text-lg">
                  Certaines recettes viennent de notre cuisine, d'autres seront
                  racontées par nos partenaires, fournisseurs et collaborateurs.
                  Toutes ont un point commun : les épices Épices Impériale.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="bg-ink-800 py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-spice">
                  La collection
                </p>

                <h2 className="font-display text-4xl leading-tight text-ivory md:text-6xl">
                  À table.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-ivory/50">
                Des recettes simples, généreuses et inspirées par les saveurs
                d'ici et d'ailleurs.
              </p>
            </div>
          </Reveal>

          {publishedRecipes.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publishedRecipes.map((recipe, index) => (
                <Reveal key={recipe.id} delay={index * 0.05}>
                  <RecipeCard recipe={recipe} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 py-20 text-center">
              <p className="font-display text-2xl text-ivory">
                Les premières recettes arrivent bientôt.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ivory/50">
                Nous préparons une collection de recettes racontées par celles et
                ceux qui font vivre notre univers.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partner story CTA */}
      <section className="bg-spice py-20 text-ink-900 md:py-28">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-ink-900/60">
                  Vous avez une histoire à raconter ?
                </p>

                <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
                  Votre recette peut avoir sa place à notre table.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-ink-900/70">
                  Producteur, fournisseur, restaurateur, partenaire ou passionné
                  de cuisine : partagez avec nous une recette qui vous ressemble
                  et l'histoire qui se cache derrière.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 border border-ink-900/30 px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-ink-900 hover:text-ivory"
              >
                Partager mon histoire
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
    </main>
  );
}