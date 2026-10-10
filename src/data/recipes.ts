
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
    slug: 'saka-madesu',
    title: 'Saka-madesu à la congolaise',
    image:
        'https://commons.wikimedia.org/wiki/Special:FilePath/Tshaka_Madesu_(Beans_%EF%BC%86_cassava_leaves_stew).jpg?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Un plat généreux qui associe les feuilles de manioc pilées aux haricots mijotés. Une recette familiale, nourrissante et profondément ancrée dans la cuisine congolaise.',
    prepTime: '25 min',
    cookTime: '1 h 15 min',
    servings: 4,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Feuilles de manioc pilées (pondu)', quantity: '500 g' },
      { name: 'Haricots secs', quantity: '250 g' },
      { name: 'Huile de palme', quantity: '150 ml, selon le goût' },
      { name: 'Oignon', quantity: '1 gros' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Feuilles de laurier', quantity: '1 feuille' },
      { name: 'Poivre noir', quantity: '½ c. à café' },
      { name: 'Sel', quantity: 'Selon le goût' },
      { name: 'Eau', quantity: 'Selon les besoins de cuisson' },
    ],
    steps: [
      'Trier les haricots, les rincer et les faire cuire dans une grande quantité d’eau jusqu’à ce qu’ils deviennent tendres. Égoutter et réserver.',
      'Dans une autre marmite, faire cuire les feuilles de manioc selon leur préparation habituelle, jusqu’à ce qu’elles soient bien cuites.',
      'Ajouter l’oignon finement haché, l’ail et l’huile de palme aux feuilles de manioc.',
      'Incorporer les haricots cuits et mélanger délicatement.',
      'Ajouter la feuille de laurier, le poivre noir et le sel. Laisser mijoter à feu doux pendant 15 à 20 minutes, en mélangeant régulièrement.',
      'Retirer la feuille de laurier, rectifier l’assaisonnement et servir chaud avec du chikwangue, du riz ou un autre accompagnement apprécié.',
    ],
    spices: ['Feuilles de Laurier', 'Poivre Noir', 'Ail en Poudre'],
    productIds: ['1', '3', '10'],
    story: {
      title: 'Un goût de maison et de tradition',
      content:
        'Le saka-madesu réunit deux ingrédients familiers de nombreuses tables congolaises : les feuilles de manioc et les haricots. Cette version met en valeur leur goût avec un assaisonnement simple, sans masquer les saveurs traditionnelles.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
  {
    id: 'r2',
    slug: 'poulet-a-la-moambe',
    title: 'Poulet à la moambe',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Poulet_%C3%A0_la_moambe.JPG?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Un poulet mijoté dans une sauce riche à base de pâte de noix de palme, relevé d’aromates. Un grand classique des repas de fête et des tables familiales.',
    prepTime: '20 min',
    cookTime: '1 h',
    servings: 4,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Poulet découpé', quantity: '1 kg' },
      { name: 'Pâte de noix de palme (moambe)', quantity: '400 g' },
      { name: 'Oignon', quantity: '1 gros' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Gingembre en poudre', quantity: '½ c. à café' },
      { name: 'Poivre blanc', quantity: '½ c. à café' },
      { name: 'Eau chaude', quantity: 'Selon la consistance souhaitée' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Nettoyer le poulet et le découper en morceaux. Assaisonner avec le sel, le poivre blanc et le gingembre.',
      'Faire revenir le poulet dans une marmite avec un peu d’huile si nécessaire, jusqu’à ce que les morceaux soient légèrement dorés.',
      'Ajouter l’oignon et l’ail hachés, puis laisser cuire quelques minutes.',
      'Délayer la pâte de noix de palme avec de l’eau chaude selon les indications du produit utilisé.',
      'Verser la préparation de moambe dans la marmite et bien mélanger.',
      'Couvrir et laisser mijoter à feu doux jusqu’à ce que le poulet soit tendre et la sauce bien cuite. Ajouter un peu d’eau si nécessaire.',
      'Rectifier l’assaisonnement et servir avec du chikwangue, du riz ou des bananes plantain.',
    ],
    spices: ['Poivre Blanc', 'Gingembre en Poudre', 'Ail en Poudre'],
    productIds: ['2', '14', '10'],
    story: {
      title: 'La richesse des saveurs congolaises',
      content:
        'La moambe doit son caractère à la pâte de noix de palme. Les épices interviennent en complément : elles renforcent les arômes du poulet tout en laissant la sauce traditionnelle occuper la première place.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
  {
    id: 'r3',
    slug: 'liboke-de-poisson',
    title: 'Liboke de poisson',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Liboke_entrouvert_03.JPG?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Du poisson assaisonné, enveloppé dans des feuilles adaptées à la cuisson, puis cuit à la vapeur ou sur une source de chaleur douce pour préserver ses arômes.',
    prepTime: '20 min',
    cookTime: '35 à 45 min',
    servings: 3,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Poisson entier nettoyé ou darnes', quantity: '700 à 900 g' },
      { name: 'Tomates', quantity: '2' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Jus de citron', quantity: '1 c. à soupe' },
      { name: 'Poivre blanc', quantity: '½ c. à café' },
      { name: 'Citron en poudre', quantity: '¼ c. à café, facultatif' },
      { name: 'Sel', quantity: 'Selon le goût' },
      { name: 'Feuilles propres et adaptées à la cuisson', quantity: 'Pour envelopper le poisson' },
    ],
    steps: [
      'Nettoyer le poisson. Si nécessaire, pratiquer quelques entailles pour que l’assaisonnement pénètre mieux.',
      'Hacher les tomates, l’oignon et l’ail.',
      'Mélanger les légumes avec le jus de citron, le poivre blanc et le sel.',
      'Répartir cette préparation sur le poisson et laisser mariner 15 à 20 minutes.',
      'Déposer le poisson sur les feuilles adaptées, puis envelopper soigneusement en maintenant le paquet fermé.',
      'Cuire à la vapeur ou sur une source de chaleur douce jusqu’à ce que le poisson soit entièrement cuit. Adapter le temps à son épaisseur.',
      'Ouvrir délicatement le paquet et servir chaud avec du chikwangue, du riz ou des bananes plantain.',
    ],
    spices: ['Poivre Blanc', 'Ail en Poudre', 'Citron en Poudre'],
    productIds: ['2', '10', '17'],
    story: {
      title: 'Le parfum d’une cuisson enveloppée',
      content:
        'Le liboke met en valeur la cuisson du poisson dans son enveloppe de feuilles. L’assaisonnement doit rester équilibré afin de préserver le goût du poisson et les arômes des ingrédients frais.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
  {
    id: 'r4',
    slug: 'pondu-a-la-congolaise',
    title: 'Pondu à la congolaise',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Saka-saka_-_pounded_and_cooked_cassava_leaves.jpg?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Des feuilles de manioc longuement cuites et assaisonnées, préparées dans l’esprit de la cuisine familiale congolaise.',
    prepTime: '20 min',
    cookTime: '1 h à 1 h 30',
    servings: 4,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Feuilles de manioc pilées', quantity: '700 g' },
      { name: 'Huile de palme', quantity: '100 à 150 ml' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Poivre noir', quantity: '½ c. à café' },
      { name: 'Piment', quantity: 'Selon le goût, facultatif' },
      { name: 'Sel', quantity: 'Selon le goût' },
      { name: 'Eau', quantity: 'Selon les besoins de cuisson' },
    ],
    steps: [
      'Placer les feuilles de manioc préparées dans une marmite avec suffisamment d’eau.',
      'Faire cuire à feu moyen en remuant régulièrement et en ajoutant de l’eau si nécessaire. Respecter les instructions de préparation des feuilles utilisées.',
      'Lorsque les feuilles sont bien cuites, ajouter l’oignon et l’ail finement hachés.',
      'Incorporer l’huile de palme, puis le poivre noir et le sel.',
      'Laisser mijoter à feu doux en mélangeant régulièrement jusqu’à obtenir une texture tendre et une préparation homogène.',
      'Ajouter éventuellement un peu de piment, rectifier l’assaisonnement et servir avec du chikwangue, du riz ou un autre accompagnement.',
    ],
    spices: ['Poivre Noir', 'Ail en Poudre', 'Piment Impérial'],
    productIds: ['3', '10', '9'],
    story: {
      title: 'Le pondu, un incontournable des familles',
      content:
        'Le pondu occupe une place importante dans de nombreux repas congolais. Sa préparation varie selon les familles et les régions. Un assaisonnement mesuré permet de conserver la saveur des feuilles de manioc.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
  {
    id: 'r5',
    slug: 'fumbwa-a-la-congolaise',
    title: 'Fumbwa à la congolaise',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Mfumbwa_-_sauce_with_fufu.jpg?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Une préparation de feuilles de fumbwa mijotées avec les ingrédients qui leur donnent leur caractère. Une recette à adapter aux habitudes culinaires de chaque famille.',
    prepTime: '20 min',
    cookTime: '40 à 60 min',
    servings: 4,
    difficulty: 'Intermédiaire',
    ingredients: [
      { name: 'Feuilles de fumbwa préparées', quantity: '500 g' },
      { name: 'Pâte d’arachide', quantity: '150 g' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Ail', quantity: '2 gousses' },
      { name: 'Poivre noir', quantity: '½ c. à café' },
      { name: 'Huile de palme ou huile utilisée dans votre recette familiale', quantity: 'Selon le goût' },
      { name: 'Sel', quantity: 'Selon le goût' },
      { name: 'Eau', quantity: 'Selon la consistance souhaitée' },
    ],
    steps: [
      'Trier et laver soigneusement les feuilles de fumbwa, puis les préparer selon leur état et les usages locaux.',
      'Placer les feuilles dans une marmite avec un peu d’eau et commencer la cuisson.',
      'Ajouter l’oignon et l’ail hachés, puis poursuivre la cuisson jusqu’à ce que les feuilles commencent à devenir tendres.',
      'Délayer la pâte d’arachide dans un peu d’eau et l’incorporer progressivement en mélangeant.',
      'Ajouter le poivre noir, le sel et l’huile selon la recette choisie.',
      'Laisser mijoter à feu doux jusqu’à ce que les feuilles soient tendres et la sauce bien liée. Remuer régulièrement pour éviter que la préparation n’attache.',
      'Servir chaud avec du chikwangue, du riz ou un accompagnement de votre choix.',
    ],
    spices: ['Poivre Noir', 'Ail en Poudre'],
    productIds: ['3', '10'],
    story: {
      title: 'Les feuilles et les saveurs du terroir',
      content:
        'Le fumbwa se décline selon les traditions et les ingrédients disponibles. Cette proposition met l’accent sur la cuisson des feuilles et l’équilibre entre leur goût, l’arachide et les aromates.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
  {
    id: 'r6',
    slug: 'poisson-braise-a-la-congolaise',
    title: 'Poisson braisé à la congolaise',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Poisson_brais%C3%A9_%C3%A0_Kinkole.jpg?width=1200',
    category: 'Cuisine congolaise',
    description:
      'Un poisson mariné aux aromates puis braisé jusqu’à obtenir une peau dorée et une chair tendre. À servir avec des bananes plantain, du chikwangue ou une salade.',
    prepTime: '20 min',
    cookTime: '25 à 40 min',
    servings: 3,
    difficulty: 'Facile',
    ingredients: [
      { name: 'Poisson entier nettoyé', quantity: '1 pièce d’environ 1 kg' },
      { name: 'Ail', quantity: '3 gousses' },
      { name: 'Oignon', quantity: '1' },
      { name: 'Jus de citron', quantity: '1 à 2 c. à soupe' },
      { name: 'Piment Impérial', quantity: 'Selon le goût' },
      { name: 'Poivre noir', quantity: '½ c. à café' },
      { name: 'Huile', quantity: '2 c. à soupe' },
      { name: 'Sel', quantity: 'Selon le goût' },
    ],
    steps: [
      'Nettoyer le poisson et réaliser quelques entailles de chaque côté.',
      'Écraser ou hacher l’ail et l’oignon. Les mélanger avec le jus de citron, l’huile, le poivre noir, le piment et le sel.',
      'Enduire le poisson de cette marinade, y compris dans les entailles, puis laisser reposer 20 à 30 minutes au frais.',
      'Faire braiser le poisson sur un gril adapté ou au four chaud, en le retournant délicatement si nécessaire.',
      'Badigeonner légèrement avec le reste de marinade pendant la cuisson, en évitant toute contamination de la préparation cuite par la marinade ayant touché le poisson cru.',
      'Vérifier que la chair est entièrement cuite et se détache facilement, puis servir chaud avec l’accompagnement choisi.',
    ],
    spices: ['Piment Impérial', 'Poivre Noir', 'Ail en Poudre'],
    productIds: ['9', '3', '10'],
    story: {
      title: 'Le plaisir du poisson braisé',
      content:
        'Le poisson braisé fait partie des repas appréciés dans de nombreuses villes et régions de la RDC. La marinade apporte du caractère, tandis que la cuisson au gril développe les arômes du poisson.',
      author: 'Épices Impériale',
      role: 'Inspiration culinaire congolaise',
      location: 'Kinshasa, RDC',
    },
    published: true,
  },
];
