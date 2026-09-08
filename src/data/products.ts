export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  size: string;
  category: string;
  intensity?: number;
  flavorProfile: string;
  ingredients: string[];
  uses: string[];
  pairings: string[];
  origin: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Piment Impérial',
    slug: 'piment-imperial',
    description:
      "Le pili pili moulu, sélectionné pour sa chaleur vive et sa profondeur aromatique. Le piquant se diffuse dans tout le plat au lieu de rester en surface.",
    image: '/produits/piment-moulu-85.jpg',
    size: '85 g',
    category: 'Épice',
    intensity: 5,
    flavorProfile: 'Chaleur vive, notes fumées, finale persistante',
    ingredients: ['Piment rouge séché et moulu'],
    uses: ['Cuisson', 'Marinades', 'Sauces', 'Assaisonnement final'],
    pairings: ['Viandes grillées', 'Poissons', 'Légumes rôtis', 'Riz'],
    origin: 'RDC',
  },
  {
    id: '2',
    name: 'Piment Impérial — Grand Format',
    slug: 'piment-imperial-grand-format',
    description:
      "Le même piment, en format familial. Pensé pour les cuisines qui tournent tous les jours et pour la restauration.",
    image: '/produits/piment-moulu-200.jpg',
    size: '200 g',
    category: 'Épice',
    intensity: 5,
    flavorProfile: 'Chaleur vive, notes fumées, mouture généreuse',
    ingredients: ['Piment rouge séché et moulu'],
    uses: ['Cuisson', 'Marinades', 'Grillades', 'Sauces'],
    pairings: ['Poulet', 'Poisson braisé', 'Riz', 'Légumes sautés'],
    origin: 'RDC',
  },
  {
    id: '3',
    name: 'Curcuma Doré',
    slug: 'curcuma-dore',
    description:
      "Un curcuma moulu au parfum terrien et à la couleur or intense. Une demi-cuillère colore une casserole entière.",
    image: '/produits/curcuma.jpg',
    size: '125 g',
    category: 'Épice',
    intensity: 1,
    flavorProfile: 'Terreux, légèrement poivré, notes chaudes',
    ingredients: ['Curcuma séché et moulu'],
    uses: ['Riz', 'Sauces', 'Mijotés', 'Légumes'],
    pairings: ['Riz', 'Poulet', 'Lentilles', 'Légumes-racines'],
    origin: 'RDC',
  },
  {
    id: '4',
    name: 'Poivre Noir Royale',
    slug: 'poivre-noir-royale',
    description:
      "Un poivre noir finement moulu, au piquant net et à l'arôme boisé. La base de toute cuisine qui se respecte.",
    image: '/produits/poivre-noir.jpg',
    size: '95 g',
    category: 'Épice',
    intensity: 3,
    flavorProfile: 'Piquant, boisé, notes résineuses',
    ingredients: ['Poivre noir moulu'],
    uses: ['Assaisonnement', 'Sauces', 'Marinades', 'Tous plats'],
    pairings: ['Viandes', 'Œufs', 'Salades', 'Légumes sautés'],
    origin: 'RDC',
  },
  {
    id: '5',
    name: 'Poivre Blanc',
    slug: 'poivre-blanc',
    description:
      "Plus discret à l'œil que le noir, plus direct en bouche. Il relève sans tacher les préparations claires.",
    image: '/produits/poivre-blanc.jpg',
    size: '95 g',
    category: 'Épice',
    intensity: 3,
    flavorProfile: 'Piquant net, notes fermentées, finale nette',
    ingredients: ['Poivre blanc moulu'],
    uses: ['Sauces blanches', 'Purées', 'Poissons', 'Volailles'],
    pairings: ['Poisson', 'Poulet', 'Pommes de terre', 'Béchamel'],
    origin: 'RDC',
  },
  {
    id: '6',
    name: 'Cannelle Écorce',
    slug: 'cannelle-ecorce',
    description:
      "Une cannelle fine et aromatique, choisie pour sa douceur et sa chaleur subtile. Elle traverse aussi bien le salé que le sucré.",
    image: '/produits/cannelle.jpg',
    size: '125 g',
    category: 'Épice',
    intensity: 1,
    flavorProfile: 'Doux, boisé, notes chaudes et sucrées',
    ingredients: ['Cannelle moulue'],
    uses: ['Desserts', 'Boissons chaudes', 'Mijotés', 'Marinades'],
    pairings: ['Riz au lait', 'Café', 'Agneau', 'Patates douces'],
    origin: 'RDC',
  },
  {
    id: '7',
    name: 'Muscade',
    slug: 'muscade',
    description:
      "Moulue, chaude et légèrement sucrée. Elle se dose à la pincée, jamais à la cuillère : une trace suffit à changer un plat.",
    image: '/produits/muscade.jpg',
    size: '125 g',
    category: 'Épice',
    intensity: 2,
    flavorProfile: 'Chaud, boisé, légèrement sucré',
    ingredients: ['Noix de muscade moulue'],
    uses: ['Purées', 'Béchamel', 'Gratins', 'Pâtisserie'],
    pairings: ['Pommes de terre', 'Épinards', 'Fromage', 'Cakes'],
    origin: 'RDC',
  },
  {
    id: '8',
    name: 'Clou de Girofle',
    slug: 'clou-de-girofle',
    description:
      "Puissant, presque médicinal. Moulu, il se répartit bien mieux dans la préparation que les clous entiers, sans surprise sous la dent.",
    image: '/produits/girofle.jpg',
    size: '95 g',
    category: 'Épice',
    intensity: 4,
    flavorProfile: 'Intense, chaud, notes camphrées',
    ingredients: ['Clous de girofle moulus'],
    uses: ['Bouillons', 'Viandes mijotées', 'Marinades', 'Infusions'],
    pairings: ['Bœuf', 'Oignon', 'Agrumes', 'Thé'],
    origin: 'RDC',
  },
  {
    id: '9',
    name: 'Feuille de Laurier',
    slug: 'feuille-de-laurier',
    description:
      "Le laurier moulu : tout le parfum du bouillon, sans la feuille à repêcher avant de servir.",
    image: '/produits/laurier.jpg',
    size: '65 g',
    category: 'Herbe',
    intensity: 2,
    flavorProfile: 'Herbacé, légèrement amer, notes balsamiques',
    ingredients: ['Feuilles de laurier séchées et moulues'],
    uses: ['Bouillons', 'Haricots', 'Sauces', 'Viandes en sauce'],
    pairings: ['Haricots', 'Poisson', 'Tomate', 'Riz'],
    origin: 'RDC',
  },
  {
    id: '10',
    name: 'Thym',
    slug: 'thym',
    description:
      "Séché et effeuillé, prêt à jeter dans la casserole. L'herbe de fond des marinades et des plats du dimanche.",
    image: '/produits/thym.jpg',
    size: '67 g',
    category: 'Herbe',
    intensity: 2,
    flavorProfile: 'Herbacé, chaud, notes mentholées',
    ingredients: ['Thym séché'],
    uses: ['Grillades', 'Marinades', 'Rôtis', 'Légumes au four'],
    pairings: ['Poulet', 'Tomate', 'Pommes de terre', 'Agneau'],
    origin: 'RDC',
  },
  {
    id: '11',
    name: 'Romarin',
    slug: 'romarin',
    description:
      "Aiguilles séchées entières, très parfumées. À froisser entre les doigts avant de les jeter dans le plat pour libérer les huiles.",
    image: '/produits/romarin.jpg',
    size: '67 g',
    category: 'Herbe',
    intensity: 3,
    flavorProfile: 'Résineux, camphré, notes de pin',
    ingredients: ['Romarin séché'],
    uses: ['Rôtis', 'Huiles parfumées', 'Légumes au four', 'Grillades'],
    pairings: ['Poulet rôti', 'Agneau', 'Pommes de terre', 'Citron'],
    origin: 'RDC',
  },
  {
    id: '12',
    name: 'Mélange Cajun',
    slug: 'melange-cajun',
    description:
      "Notre assemblage pimenté, prêt à l'emploi, à la fois épicé et herbacé. Il fait le travail de cinq épices d'un seul geste.",
    image: '/produits/cajun.jpg',
    size: '125 g',
    category: 'Mélange',
    intensity: 4,
    flavorProfile: 'Complexe, épicé, notes herbacées',
    ingredients: ['Piment', 'Paprika', 'Ail', 'Oignon', 'Herbes', 'Poivre'],
    uses: ['Grillades', 'Poulet', 'Crevettes', 'Frites maison'],
    pairings: ['Poulet', 'Crevettes', 'Riz sauté', 'Maïs'],
    origin: 'RDC',
  },
];
