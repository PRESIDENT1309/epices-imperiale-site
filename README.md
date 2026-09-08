# Épices Impériale — site vitrine

Site vitrine de la marque **Épices Impériale** (Imperial Group, Kinshasa, RDC).
React + TypeScript + Vite + Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

## Compiler pour la production

```bash
npm run build      # génère le dossier dist/
npm run preview    # sert le build en local
```

## Déploiement Vercel

Le fichier `vercel.json` configure déjà le framework (Vite), la commande de build,
le dossier de sortie (`dist`) et les redirections SPA — sans elles, recharger
`/professionnels` ou `/contact` renverrait une erreur 404.

## Photos

- `public/produits/` — photos des flacons de la gamme
- `public/images/` — photos de cuisine et étiquettes de dos

Les photos des recettes et de trois étapes du procédé proviennent encore d'une
banque d'images ; elles sont à remplacer par des photos maison.

## Contenu à mettre à jour

- `src/data/products.ts` — la gamme (nom, poids, description, photo)
- `src/data/recipes.ts` — les recettes
- `src/data/gallery.ts` — la galerie
- `src/config/brand.ts` — téléphone, WhatsApp, e-mail, réseaux sociaux
