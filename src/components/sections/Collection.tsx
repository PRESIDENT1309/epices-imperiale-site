import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ProductModal from '@/components/ProductModal';
import { products, type Product } from '@/data/products';

function IntensityDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-all duration-350 ${
            i <= level ? 'bg-spice' : 'bg-ivory/15'
          }`}
        />
      ))}
    </div>
  );
}

export default function Collection() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="collection" className="section-pad bg-ink-800 relative">
      <div className="container-wide">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <span className="text-eyebrow block mb-4">Collection</span>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal delay={100}>
              <h2 className="font-display font-light text-display-1 text-ivory text-balance">
                La collection Impériale
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-lg text-ivory/50 max-w-sm">
                12 façons de donner du caractère à vos plats.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 80} y={30}>
              <button
                onClick={() => setSelected(product)}
                className="group relative w-full text-left overflow-hidden bg-ink-700"
                data-cursor="hover"
                aria-label={`Découvrir ${product.name}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Number indicator */}
                  <span className="absolute top-4 right-4 font-display text-sm text-ivory/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-earth-light block mb-1">
                      {product.category}
                    </span>
                    <h3 className="font-display text-xl text-ivory mb-2">{product.name}</h3>
                    <p className="font-sans text-xs text-ivory/50 leading-relaxed line-clamp-2 mb-3
                                   opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20
                                   transition-all duration-500 ease-smooth overflow-hidden">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-ivory/50">{product.size}</span>
                        {product.intensity !== undefined && (
                          <IntensityDots level={product.intensity} />
                        )}
                      </div>
                      <span className="text-xs text-ivory/70 group-hover:text-spice transition-colors duration-250
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                     flex items-center gap-1">
                        Découvrir
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
