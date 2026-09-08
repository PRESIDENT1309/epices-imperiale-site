export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Sélection',
    description: "Sélection rigoureuse des matières premières, auprès de producteurs et de terroirs choisis pour la qualité de leur récolte.",
    image: '/images/panier.jpg',
  },
  {
    number: '02',
    title: 'Préparation',
    description: "Préparation et transformation avec attention, dans le respect des arômes et des propriétés de chaque épice.",
    image: 'https://images.pexels.com/photos/4871347/pexels-photo-4871347.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    number: '03',
    title: 'Création',
    description: "Élaboration de produits adaptés aux habitudes culinaires modernes, où tradition et innovation se rencontrent.",
    image: 'https://images.pexels.com/photos/4871289/pexels-photo-4871289.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    number: '04',
    title: 'Partage',
    description: "Des épices pensées pour accompagner les cuisines du quotidien comme les créations les plus ambitieuses.",
    image: 'https://images.pexels.com/photos/633627/pexels-photo-633627.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

export interface SavoirFaireItem {
  title: string;
  description: string;
}

export const savoirFaireItems: SavoirFaireItem[] = [
  { title: 'Sélection', description: "Des matières premières choisies avec exigence." },
  { title: 'Qualité', description: "Un contrôle continu à chaque étape." },
  { title: 'Transformation', description: "Des méthodes qui préservent les arômes." },
  { title: 'Conditionnement', description: "Des pots pensés pour protéger et préserver." },
  { title: 'Innovation', description: "Des mélanges qui repoussent les frontières." },
  { title: 'Distribution', description: "Une logistique au service du goût." },
];

export const professionalTypes = [
  'Restaurants',
  'Hôtels',
  'Distributeurs',
  'Supermarchés',
  'Grossistes',
];
