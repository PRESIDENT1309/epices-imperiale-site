export const brand = {
  name: 'ÉPICES IMPÉRIALE',
  tagline: "L'empreinte du goût",
  parent: 'IMPERIAL GROUP',
  subtitle: 'Des épices pensées pour donner du caractère à chaque recette.',
  description:
    "ÉPICES IMPÉRIALE, marque agroalimentaire d'IMPERIAL GROUP spécialisée dans les épices et mélanges d'épices.",
  whatsapp: '+243 854 951 761',
  whatsappLink: 'https://wa.me/243854951761',
  email: 'contact@epicesimperiale.com',
  phone: '+243 854 951 761',
  social: {
    instagram: 'https://instagram.com/epicesimperiale',
    tiktok: 'https://tiktok.com/@epicesimperiale',
    facebook: 'https://facebook.com/epicesimperiale',
  },
  location: 'Kinshasa, République Démocratique du Congo',
  year: 2026,
} as const;

export const navLinks = [
  { label: 'Collection', to: '/#collection' },
  { label: 'Notre histoire', to: '/#histoire' },
  { label: 'Savoir-faire', to: '/#savoir-faire' },
  { label: 'Professionnels', to: '/professionnels' },
  { label: 'Contact', to: '/contact' },
] as const;
