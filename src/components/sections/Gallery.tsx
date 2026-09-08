import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Lightbox from '@/components/Lightbox';
import { galleryItems, type GalleryItem } from '@/data/gallery';

const sizeClasses: Record<GalleryItem['size'], string> = {
  large: 'col-span-2 row-span-2 aspect-square',
  medium: 'col-span-1 row-span-1 aspect-square',
  small: 'col-span-1 row-span-1 aspect-square',
  tall: 'col-span-1 row-span-2 aspect-[1/2]',
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <section className="section-pad bg-ink relative overflow-hidden">
      <div className="container-wide">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <span className="text-eyebrow block mb-4">Galerie</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display font-light text-display-1 text-ivory text-balance">
              Dans votre cuisine.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 4) * 80}
              y={30}
              className={sizeClasses[item.size]}
            >
              <button
                onClick={() => setLightbox(item)}
                className="group relative w-full h-full overflow-hidden block"
                data-cursor="hover"
                aria-label={item.alt}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-500" />
                <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] uppercase text-ivory/0 group-hover:text-ivory/80 transition-all duration-500">
                  {item.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          image={lightbox.image}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
