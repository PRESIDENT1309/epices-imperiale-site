import { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  image: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ image, alt, onClose }: LightboxProps) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse d'image"
    >
      <button
        className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors duration-250 z-10"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X size={28} />
      </button>
      <img
        src={image}
        alt={alt}
        className="max-w-[90vw] max-h-[85vh] object-contain animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
