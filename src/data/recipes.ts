export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  spices: string[];
  description: string;
}

export const recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Bœuf épicé aux pommes de terre',
    image: 'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Viande',
    spices: ['Piment Impérial', 'Poivre Noir Royale'],
    description: "Un bœuf mijoté aux épices profondes, où la chaleur du piment rencontre la rondeur du poivre noir.",
  },
  {
    id: 'r2',
    title: "Poisson grillé, croûte d'épices",
    image: 'https://images.pexels.com/photos/12940588/pexels-photo-12940588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Poisson',
    spices: ['Piment Impérial', 'Thym'],
    description: "Un poisson entier grillé, enrobé d'une croûte de piment moulu, de thym et de citron.",
  },
  {
    id: 'r3',
    title: 'Légumes rôtis au curcuma',
    image: 'https://images.pexels.com/photos/4252141/pexels-photo-4252141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Légumes',
    spices: ['Curcuma Doré', 'Romarin'],
    description: "Des légumes de saison rôtis au curcuma et au romarin, colorés et gorgés de saveurs terriennes.",
  },
  {
    id: 'r4',
    title: 'Côtelettes aux sept épices',
    image: 'https://images.pexels.com/photos/38026238/pexels-photo-38026238.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Grillades',
    spices: ['Mélange Cajun', 'Poivre Noir Royale'],
    description: "Des côtelettes marinées dans notre mélange cajun, grillées jusqu'à la perfection.",
  },
  {
    id: 'r5',
    title: 'Sauce pimentée maison',
    image: 'https://images.pexels.com/photos/342230/pexels-photo-342230.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Sauces',
    spices: ['Piment Impérial', 'Feuille de Laurier'],
    description: "Une sauce vive et aromatique qui accompagne tous vos plats, du riz aux grillades.",
  },
  {
    id: 'r6',
    title: 'Poulet sauté du quotidien',
    image: 'https://images.pexels.com/photos/36979923/pexels-photo-36979923.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Cuisine quotidienne',
    spices: ['Mélange Cajun', 'Poivre Blanc'],
    description: "Un poulet rapide et savoureux, prêt en vingt minutes, parfumé au mélange cajun et au poivre blanc.",
  },
];
