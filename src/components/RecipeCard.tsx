import { ArrowUpRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      to={`/recettes/${recipe.slug}`}
      className="group block h-full"
    >
      <article className="h-full overflow-hidden border border-white/10 bg-ink-900 transition-all duration-500 hover:border-spice/50">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-70" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="inline-block bg-ivory px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-900">
              {recipe.category}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-ink-900/40 text-ivory backdrop-blur-sm transition-all duration-300 group-hover:border-spice group-hover:bg-spice">
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-display text-2xl leading-tight text-ivory transition-colors duration-300 group-hover:text-spice">
            {recipe.title}
          </h3>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ivory/60">
            {recipe.description}
          </p>

          {/* Meta information */}
          <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-ivory/50">
            <span className="flex items-center gap-1.5">
              <Clock size={13} strokeWidth={1.5} />
              {recipe.prepTime}
            </span>

            <span className="flex items-center gap-1.5">
              <Users size={13} strokeWidth={1.5} />
              {recipe.servings} pers.
            </span>

            <span>{recipe.difficulty}</span>
          </div>

          {/* Spices */}
          {recipe.spices.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {recipe.spices.slice(0, 3).map((spice) => (
                <span
                  key={spice}
                  className="border border-spice/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-spice"
                >
                  {spice}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 group-hover:text-spice">
            Découvrir la recette
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </div>
        </div>
      </article>
    </Link>
  );
}