import { useEffect } from 'react';
import { X, ArrowLeft, MessageCircle } from 'lucide-react';
import type { Product } from '@/data/products';
import { brand } from '@/config/brand';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function IntensityMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-2 w-8 transition-all duration-350 ${
            i <= level ? 'bg-spice' : 'bg-ivory/10'
          }`}
        />
      ))}
      <span className="ml-2 text-xs text-ivory/50 font-sans">{level}/5</span>
    </div>
  );
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const whatsappUrl = `${brand.whatsappLink}?text=${encodeURIComponent(
    `Bonjour, je souhaite commander : ${product.name} (${product.size}).`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="min-h-full flex items-start justify-center py-20 px-4 md:px-8">
        <div
          className="relative w-full max-w-5xl bg-ink-800 border border-ivory/10 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-ivory hover:bg-ivory/5 transition-all duration-250"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X size={22} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden bg-ink-700">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col">
              <span className="text-eyebrow mb-3">{product.category}</span>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
                {product.name}
              </h2>
              <p className="font-sans text-sm text-ivory/70 leading-relaxed mb-6">
                {product.description}
              </p>

              {product.intensity !== undefined && (
                <div className="mb-6">
                  <p className="text-eyebrow mb-2">Intensité</p>
                  <IntensityMeter level={product.intensity} />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-eyebrow mb-1">Format</p>
                  <p className="text-sm text-ivory/80">{product.size}</p>
                </div>
                <div>
                  <p className="text-eyebrow mb-1">Origine</p>
                  <p className="text-sm text-ivory/80">{product.origin}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-eyebrow mb-2">Profil gustatif</p>
                <p className="text-sm text-ivory/80">{product.flavorProfile}</p>
              </div>

              <div className="mb-6">
                <p className="text-eyebrow mb-2">Utilisations</p>
                <div className="flex flex-wrap gap-2">
                  {product.uses.map((use) => (
                    <span key={use} className="text-xs px-3 py-1 border border-ivory/15 text-ivory/60">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-eyebrow mb-2">Idéal avec</p>
                <div className="flex flex-wrap gap-2">
                  {product.pairings.map((pair) => (
                    <span key={pair} className="text-xs px-3 py-1 border border-ivory/15 text-ivory/60">
                      {pair}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-eyebrow mb-2">Ingrédients</p>
                <p className="text-sm text-ivory/60">{product.ingredients.join(', ')}</p>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spice w-full"
                >
                  <MessageCircle size={16} />
                  Commander ce produit
                </a>
                <button
                  onClick={onClose}
                  className="btn-outline w-full text-xs"
                >
                  <ArrowLeft size={14} />
                  Retour à la collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
