
export interface RecipeStory {
  title: string;
  content: string;
  author: string;
  role: string;
  location?: string;
  image?: string;
}

export interface RecipeIngredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Facile' | 'Intermédiaire' | 'Avancé';
  ingredients: RecipeIngredient[];
  steps: string[];
  spices: string[];
  productIds: string[];
  story?: RecipeStory;
  published: boolean;
}

export const recipes: Recipe[] = [
  {
    id: 'r1',
    slug: 'boeuf-epice-aux-pommes-de-terre',
    title: 'Bœuf épicé aux pommes de terre',
    image:
      'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Viande',
    description:
      "Un bœuf mijoté aux épices profondes, où la chaleur du piment rencontre la rondeur du poivre noir.",
    prepTime: '20 min',
    cookTime: '45 min',
    servings: 4,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Bœuf', quantity: '800 g' },
      { name: 'Pommes de terre', quantity: '500 g' },
      { name: 'Oignon', quantity: '1 gros' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Piment Impérial', quantity: '1 c. à café' },
      { name: 'Poivre Noir Royale', quantity: '1 c. à café' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Couper le bœuf en morceaux réguliers et assaisonner avec le sel, le poivre noir et le piment.',
      'Faire chauffer l’huile dans une cocotte et faire revenir la viande jusqu’à ce qu’elle soit bien dorée.',
      'Ajouter l’oignon et l’ail puis poursuivre la cuisson pendant quelques minutes.',
      'Ajouter les pommes de terre coupées en morceaux et mélanger.',
      'Ajouter un peu d’eau, couvrir et laisser mijoter jusqu’à ce que la viande soit tendre et les pommes de terre bien cuites.',
      'Rectifier l’assaisonnement et servir chaud.',
    ],
    spices: ['Piment Impérial', 'Poivre Noir Royale'],
    productIds: ['9', '3'],
    story: {
      title: 'Une recette généreuse et familiale',
      content:
        "Le bœuf mijoté fait partie de ces plats qui prennent leur véritable caractère lorsqu'ils sont préparés avec patience. Les épices apportent ici une chaleur progressive et un parfum profond qui accompagne naturellement la viande et les pommes de terre.",
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },

  {
    id: 'r2',
    slug: 'poisson-grille-croute-depices',
    title: "Poisson grillé, croûte d'épices",
    image:
      'https://images.pexels.com/photos/12940588/pexels-photo-12940588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Poisson',
    description:
      "Un poisson entier grillé, enrobé d'une croûte de piment moulu, de thym et de citron.",
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 3,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Poisson entier', quantity: '1 pièce d’environ 1 kg' },
      { name: 'Piment Impérial', quantity: '1 c. à café' },
      { name: 'Thym', quantity: '1 c. à café' },
      { name: 'Citron', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Nettoyer le poisson et réaliser quelques entailles sur les côtés.',
      'Mélanger le piment, le thym, l’ail, le jus de citron, l’huile et le sel.',
      'Badigeonner généreusement le poisson avec cette préparation.',
      'Laisser mariner pendant au moins 20 minutes.',
      'Griller le poisson jusqu’à ce que la chair soit bien cuite et que la surface soit légèrement dorée.',
      'Servir immédiatement avec l’accompagnement de votre choix.',
    ],
    spices: ['Piment Impérial', 'Thym'],
    productIds: ['9', '8'],
    story: {
      title: 'Le goût du feu et du citron',
      content:
        'Une recette simple où les épices jouent un rôle essentiel. Le piment apporte du caractère, tandis que le thym et le citron donnent au poisson une fraîcheur aromatique.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },

  {
    id: 'r3',
    slug: 'legumes-rotis-au-curcuma',
    title: 'Légumes rôtis au curcuma',
    image:
      'https://images.pexels.com/photos/4252141/pexels-photo-4252141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Légumes',
    description:
      'Des légumes de saison rôtis au curcuma et au romarin, colorés et gorgés de saveurs terriennes.',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Carottes', quantity: '3' },
      { name: 'Pommes de terre', quantity: '400 g' },
      { name: 'Poivron', quantity: '1' },
      { name: 'Courgette', quantity: '1' },
      { name: 'Curcuma', quantity: '1 c. à café' },
      { name: 'Romarin', quantity: '1 c. à café' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Laver et découper les légumes en morceaux de taille similaire.',
      'Les déposer dans un grand récipient.',
      'Ajouter le curcuma, le romarin, l’huile et le sel.',
      'Mélanger afin de bien répartir les épices.',
      'Disposer les légumes sur une plaque et cuire au four jusqu’à ce qu’ils soient tendres et légèrement dorés.',
      'Servir chaud en accompagnement ou comme plat végétal.',
    ],
    spices: ['Curcuma Doré', 'Romarin'],
    productIds: ['6', '7'],
    story: {
      title: 'La simplicité des légumes bien assaisonnés',
      content:
        'Cette recette montre qu’une cuisine simple peut devenir très expressive grâce à un bon équilibre d’épices. Le curcuma apporte sa couleur et son caractère, tandis que le romarin complète l’ensemble.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },

  {
    id: 'r4',
    slug: 'cotelettes-aux-sept-epices',
    title: 'Côtelettes aux sept épices',
    image:
      'https://images.pexels.com/photos/38026238/pexels-photo-38026238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Grillades',
    description:
      "Des côtelettes marinées dans notre mélange cajun, grillées jusqu'à la perfection.",
    prepTime: '15 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Côtelettes', quantity: '800 g' },
      { name: 'Mélange Cajun', quantity: '2 c. à café' },
      { name: 'Poivre Noir Royale', quantity: '1 c. à café' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Préparer une marinade avec le mélange cajun, le poivre noir, l’ail, l’huile et le sel.',
      'Enrober les côtelettes avec la marinade.',
      'Laisser reposer au réfrigérateur pendant au moins 30 minutes.',
      'Faire griller les côtelettes sur une grille chaude ou dans une poêle adaptée.',
      'Retourner régulièrement jusqu’à obtenir une belle coloration et une cuisson adaptée.',
      'Laisser reposer quelques minutes avant de servir.',
    ],
    spices: ['Mélange Cajun', 'Poivre Noir Royale'],
    productIds: ['11', '3'],
    story: {
      title: 'Une recette pensée pour les grillades',
      content:
        'Le mélange cajun apporte immédiatement du caractère aux grillades. Associé au poivre noir, il permet d’obtenir une croûte parfumée et généreuse.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },

  {
    id: 'r5',
    slug: 'sauce-pimentee-maison',
    title: 'Sauce pimentée maison',
    image:
      'https://images.pexels.com/photos/342230/pexels-photo-342230.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sauces',
    description:
      'Une sauce vive et aromatique qui accompagne tous vos plats, du riz aux grillades.',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 6,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Piments', quantity: 'Selon le niveau de piquant souhaité' },
      { name: 'Tomates', quantity: '3' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Piment Impérial', quantity: '½ à 1 c. à café' },
      { name: 'Feuille de Laurier', quantity: '1' },
      { name: 'Huile', quantity: '1 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Laver et préparer les tomates, l’oignon, l’ail et les piments.',
      'Mixer ou écraser les ingrédients selon la texture souhaitée.',
      'Faire chauffer l’huile dans une casserole.',
      'Ajouter la préparation et le piment Impérial.',
      'Ajouter la feuille de laurier et laisser mijoter à feu doux.',
      'Retirer la feuille de laurier avant de servir et rectifier l’assaisonnement.',
    ],
    spices: ['Piment Impérial', 'Feuille de Laurier'],
    productIds: ['9', '1'],
    story: {
      title: 'La sauce qui accompagne tout',
      content:
        'Une bonne sauce pimentée peut transformer un repas quotidien. Cette version mise sur un équilibre entre le piquant, les notes aromatiques du laurier et la douceur de la tomate.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },

  {
    id: 'r6',
    slug: 'poulet-saute-du-quotidien',
    title: 'Poulet sauté du quotidien',
    image:
      'https://images.pexels.com/photos/36979923/pexels-photo-36979923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Cuisine quotidienne',
    description:
      'Un poulet rapide et savoureux, prêt en vingt minutes, parfumé au mélange cajun et au poivre blanc.',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Poulet', quantity: '600 g' },
      { name: 'Mélange Cajun', quantity: '1 c. à café' },
      { name: 'Poivre Blanc', quantity: '½ c. à café' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Découper le poulet en morceaux réguliers.',
      'Assaisonner avec le mélange cajun, le poivre blanc et le sel.',
      'Faire chauffer l’huile dans une poêle.',
      'Ajouter le poulet et le faire dorer sur toutes ses faces.',
      'Ajouter l’oignon et l’ail puis poursuivre la cuisson jusqu’à ce que le poulet soit bien cuit.',
      'Servir immédiatement avec du riz, des légumes ou l’accompagnement de votre choix.',
    ],
    spices: ['Mélange Cajun', 'Poivre Blanc'],
    productIds: ['11', '2'],
    story: {
      title: 'Bien manger, même les jours pressés',
      content:
        'Cette recette est pensée pour la cuisine du quotidien : peu d’ingrédients, une préparation rapide et surtout beaucoup de goût grâce à un bon équilibre d’épices.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
];