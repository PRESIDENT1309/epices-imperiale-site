export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  size: 'large' | 'medium' | 'small' | 'tall';
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    image: '/images/panier.jpg',
    alt: "Flacons Épices Impériales et panier de légumes frais en cuisine",
    size: 'large',
    category: 'Produits',
  },
  {
    id: 'g2',
    image: '/produits/piment-moulu-85.jpg',
    alt: 'Flacon de piment moulu tenu à la main, jardin en arrière-plan',
    size: 'tall',
    category: 'Produits',
  },
  {
    id: 'g3',
    image: '/images/cuisine-cajun.jpg',
    alt: 'Mélange cajun saupoudré sur un poulet à mariner',
    size: 'medium',
    category: 'Cuisine',
  },
  {
    id: 'g4',
    image: '/produits/girofle.jpg',
    alt: 'Flacon de clou de girofle moulu Épices Impériales',
    size: 'small',
    category: 'Produits',
  },
  {
    id: 'g5',
    image: '/images/panier2.jpg',
    alt: 'Poulet mariné aux épices, prêt à cuire',
    size: 'large',
    category: 'Cuisine',
  },
  {
    id: 'g6',
    image: '/produits/curcuma.jpg',
    alt: 'Flacon de curcuma moulu Épices Impériales',
    size: 'tall',
    category: 'Produits',
  },
  {
    id: 'g7',
    image: '/images/cuisine-laurier.jpg',
    alt: 'Flacon de feuille de laurier au-dessus du plat',
    size: 'medium',
    category: 'Cuisine',
  },
  {
    id: 'g8',
    image: '/produits/romarin.jpg',
    alt: 'Flacon de romarin Épices Impériales',
    size: 'small',
    category: 'Produits',
  },
  {
    id: 'g9',
    image: '/images/cuisine-melange.jpg',
    alt: 'Assaisonnement du poulet avant cuisson',
    size: 'large',
    category: 'Cuisine',
  },
  {
    id: 'g10',
    image: '/images/etiquette-dos.jpg',
    alt: 'Étiquette de dos : fabriqué en RDC, 100 % naturelle, sans additifs',
    size: 'medium',
    category: 'Fabrication',
  },
];
