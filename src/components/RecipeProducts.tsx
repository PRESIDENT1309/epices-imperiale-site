import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import type { Recipe } from '../data/recipes';

interface RecipeProductsProps {
  recipe: Recipe;
}

export default function RecipeProducts({ recipe }: RecipeProductsProps) {
  const relatedProducts = products.filter((product) =>
    recipe.productIds.includes(product.id)
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-white/10 pt-16">
      <div className="mb-10">
        <span className="text-eyebrow block mb-3">Épices Impériale</span>

        <h2 className="font-display font-light text-3xl text-ivory md:text-4xl">
          Les produits utilisés
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory/50">
          Retrouvez les épices Épices Impériale utilisées dans cette recette.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {relatedProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden border border-white/10 bg-ink-900 transition-all duration-500 hover:border-spice/40"
          >
            <div className="grid grid-cols-[120px_1fr]">
              <div className="relative aspect-square overflow-hidden bg-ink-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center p-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/40">
                  {product.category}
                </span>

                <h3 className="mt-2 font-display text-xl text-ivory">
                  {product.name}
                </h3>

                {product.description && (
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-ivory/50">
                    {product.description}
                  </p>
                )}

                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-spice">
                  <span>Découvrir</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}