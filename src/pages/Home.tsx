
import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Collection from '@/components/sections/Collection';
import Storytelling from '@/components/sections/Storytelling';
import SavoirFaire from '@/components/sections/SavoirFaire';
import Vision from '@/components/sections/Vision';
import ImperialGroup from '@/components/sections/ImperialGroup';
import Gallery from '@/components/sections/Gallery';
import Recipes from '@/components/sections/Recipes';
import ProfessionalsCTA from '@/components/sections/ProfessionalsCTA';
import OrderCTA from '@/components/sections/OrderCTA';

const MANUFACTURING_DATE = '2026-10-01';

type Lot = {
  number: string;
  product: string;
  category: string;
  rawMaterial: string;
  process: string[];
  packaging: string;
  storage: string;
  shelfLifeMonths: number;
  quality: string;
};

const lots: Lot[] = [
  {
    number: 'PI-011026-01',
    product: 'Piment',
    category: 'Épice',
    rawMaterial: 'Piment',
    process: ['Réception de la matière première', 'Séchage', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'PA-011026-01',
    product: 'Paprika',
    category: 'Épice',
    rawMaterial: 'Paprika',
    process: ['Réception de la matière première', 'Séchage si nécessaire', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'TO-011026-01',
    product: 'Tomate en poudre',
    category: 'Épice',
    rawMaterial: 'Tomate',
    process: ['Réception des tomates', 'Lavage et préparation', 'Séchage', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de l’humidité.',
    shelfLifeMonths: 12,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'PN-011026-01',
    product: 'Poivre noir',
    category: 'Épice',
    rawMaterial: 'Poivre noir',
    process: ['Réception de la matière première', 'Tri', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'PB-011026-01',
    product: 'Poivre blanc',
    category: 'Épice',
    rawMaterial: 'Poivre blanc',
    process: ['Réception de la matière première', 'Tri', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'CA-011026-01',
    product: 'Cannelle',
    category: 'Épice',
    rawMaterial: 'Cannelle',
    process: ['Réception de la matière première', 'Tri', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'CL-011026-01',
    product: 'Clou de girofle',
    category: 'Épice',
    rawMaterial: 'Clou de girofle',
    process: ['Réception de la matière première', 'Tri', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'MU-011026-01',
    product: 'Muscade',
    category: 'Épice',
    rawMaterial: 'Muscade',
    process: ['Réception de la matière première', 'Tri', 'Broyage si nécessaire', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'TH-011026-01',
    product: 'Thym',
    category: 'Herbe aromatique',
    rawMaterial: 'Thym',
    process: ['Réception de la matière première', 'Tri', 'Séchage si nécessaire', 'Broyage selon le produit', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver au sec, à l’abri de l’humidité et de la lumière.',
    shelfLifeMonths: 6,
    quality: 'Vérifier notamment l’absence d’insectes et de signes d’humidité avant libération du lot.',
  },
  {
    number: 'RO-011026-01',
    product: 'Romarin',
    category: 'Herbe aromatique',
    rawMaterial: 'Romarin',
    process: ['Réception de la matière première', 'Tri', 'Séchage si nécessaire', 'Broyage selon le produit', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver au sec, à l’abri de l’humidité et de la lumière.',
    shelfLifeMonths: 6,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'FL-011026-01',
    product: 'Feuilles de laurier',
    category: 'Herbe aromatique',
    rawMaterial: 'Feuilles de laurier',
    process: ['Réception de la matière première', 'Tri', 'Séchage si nécessaire', 'Broyage selon le produit', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver au sec, à l’abri de l’humidité et de la lumière.',
    shelfLifeMonths: 6,
    quality: 'Vérifier notamment l’absence d’insectes et de signes d’humidité avant libération du lot.',
  },
  {
    number: 'CJ-011026-01',
    product: 'Mélange cajun',
    category: 'Mélange d’épices',
    rawMaterial: 'Mélange de différentes épices',
    process: ['Réception et vérification des ingrédients', 'Dosage selon la recette', 'Mélange homogène', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 12,
    quality: 'La composition exacte et les contrôles du lot sont à documenter.',
  },
  {
    number: 'AIL-011026-01',
    product: 'Ail en poudre',
    category: 'Épice',
    rawMaterial: 'Ail',
    process: ['Réception de la matière première', 'Préparation', 'Séchage', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de l’humidité.',
    shelfLifeMonths: 12,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'OI-011026-01',
    product: 'Oignon en poudre',
    category: 'Épice',
    rawMaterial: 'Oignon',
    process: ['Réception de la matière première', 'Préparation', 'Séchage', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de l’humidité.',
    shelfLifeMonths: 12,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'CU-011026-01',
    product: 'Curcuma',
    category: 'Épice',
    rawMaterial: 'Curcuma',
    process: ['Réception de la matière première', 'Tri et préparation', 'Séchage si nécessaire', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de la lumière.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'GI-011026-01',
    product: 'Gingembre',
    category: 'Épice',
    rawMaterial: 'Gingembre',
    process: ['Réception de la matière première', 'Lavage et préparation', 'Séchage', 'Broyage', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver dans un endroit sec, frais et à l’abri de l’humidité.',
    shelfLifeMonths: 24,
    quality: 'Les contrôles spécifiques de ce lot restent à renseigner.',
  },
  {
    number: 'AR-011026-01',
    product: 'Arachide',
    category: 'Produit transformé',
    rawMaterial: 'Arachide',
    process: ['Réception de la matière première', 'Tri', 'Transformation selon le produit', 'Conditionnement'],
    packaging: 'Pot alimentaire fermé',
    storage: 'Conserver selon les conditions validées pour ce produit.',
    shelfLifeMonths: 6,
    quality: 'Allergène : arachide. La maîtrise des risques et les contrôles du lot doivent être documentés.',
  },
];

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function calculateDurabilityDate(months: number): string {
  const [year, month, day] = MANUFACTURING_DATE.split('-').map(Number);

  const durabilityDate = new Date(Date.UTC(year, month - 1, day));
  durabilityDate.setUTCMonth(durabilityDate.getUTCMonth() + months);

  return formatDate(durabilityDate);
}

function formatDuration(months: number): string {
  if (months === 6) return '6 mois';
  if (months === 12) return '1 an';
  if (months === 24) return '2 ans';

  return `${months} mois`;
}

function Traceability() {
  const [lotNumber, setLotNumber] = useState('');
  const [searched, setSearched] = useState(false);

  const result = lots.find(
    (lot) => lot.number === lotNumber.trim().toUpperCase(),
  );

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearched(true);
  }

  return (
    <section
      id="tracabilite"
      className="relative overflow-hidden bg-[#171914] px-5 py-20 text-white md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c9a45c]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#c9a45c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b36a]">
            <span className="h-px w-8 bg-[#d6b36a]" />
            Notre engagement qualité
            <span className="h-px w-8 bg-[#d6b36a]" />
          </span>

          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-5xl">
            De la matière première
            <span className="mt-2 block text-[#d6b36a]">à votre table.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            Retrouvez les informations enregistrées pour chaque lot de nos
            produits. Saisissez le numéro indiqué sur votre emballage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl md:p-8"
        >
          <form onSubmit={handleSearch}>
            <label htmlFor="lot-number" className="mb-3 block text-sm font-medium">
              Numéro de lot
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="lot-number"
                type="text"
                value={lotNumber}
                onChange={(event) => {
                  setLotNumber(event.target.value);
                  setSearched(false);
                }}
                placeholder="Ex. PI-011026-01"
                autoComplete="off"
                className="min-w-0 flex-1 rounded-xl border border-white/15 bg-black/20 px-4 py-4 text-sm uppercase text-white outline-none transition placeholder:normal-case placeholder:text-white/35 focus:border-[#d6b36a] focus:ring-2 focus:ring-[#d6b36a]/20"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#d6b36a] px-6 py-4 text-sm font-semibold text-[#171914] transition hover:bg-[#e6c783] focus:outline-none focus:ring-2 focus:ring-[#d6b36a]"
              >
                Vérifier le lot →
              </button>
            </div>

            <p className="mt-3 text-xs text-white/45">
              17 références enregistrées dans notre registre statique.
            </p>
          </form>

          <AnimatePresence mode="wait">
            {searched && (
              <motion.div
                key={result?.number ?? 'not-found'}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                aria-live="polite"
                className={`mt-6 rounded-xl border p-5 ${
                  result
                    ? 'border-[#d6b36a]/30 bg-[#d6b36a]/[0.07]'
                    : 'border-red-300/20 bg-red-400/[0.06]'
                }`}
              >
                {result ? (
                  <>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6b36a]/15 text-[#d6b36a]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                          <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#d6b36a]">
                          Fiche de traçabilité
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">{result.product}</h3>
                      </div>
                    </div>

                    <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                      <Info label="Numéro de lot" value={result.number} mono />
                      <Info label="Produit" value={result.product} />
                      <Info label="Catégorie" value={result.category} />
                      <Info label="Matière première" value={result.rawMaterial} />
                      <Info label="Date de fabrication" value={formatDate(new Date(`${MANUFACTURING_DATE}T00:00:00Z`))} />
                      <Info label="Durée de conservation prévue" value={formatDuration(result.shelfLifeMonths)} />
                      <Info label="Date de durabilité estimée" value={calculateDurabilityDate(result.shelfLifeMonths)} />
                      <Info label="Conditionnement" value={result.packaging} />
                      <Info label="Conservation" value={result.storage} />
                      <Info label="Contrôle qualité" value={result.quality} />
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <h4 className="mb-4 text-sm font-semibold text-[#d6b36a]">
                        Étapes de transformation
                      </h4>
                      <div className="space-y-3">
                        {result.process.map((step, index) => (
                          <div key={`${result.number}-${step}`} className="flex items-start gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d6b36a]/40 text-xs text-[#d6b36a]">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <p className="pt-1 text-sm leading-5 text-white/80">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 rounded-lg border border-[#d6b36a]/20 bg-black/20 p-3 text-xs leading-5 text-white/60">
                      <strong className="text-[#d6b36a]">Information importante :</strong>{' '}
                      la durée de conservation et la date de durabilité affichées
                      sont provisoires. Elles doivent être validées pour chaque
                      produit et son conditionnement avant publication définitive.
                      Les étapes de transformation et les contrôles doivent également
                      être confirmés pour le lot concerné.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-red-200">
                      Numéro de lot introuvable
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Vérifiez le numéro inscrit sur votre emballage et réessayez.
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <p className="mb-1.5 text-xs text-white/45">{label}</p>
      <p className={`text-sm leading-6 text-white/85 ${mono ? 'break-all font-mono' : ''}`}>
        {value}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Collection />
      <Storytelling />
      <SavoirFaire />
      <Vision />
      <ImperialGroup />
      <Gallery />
      <Traceability />
      <Recipes />
      <ProfessionalsCTA />
      <OrderCTA />
    </>
  );
}
