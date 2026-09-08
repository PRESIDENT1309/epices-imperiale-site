import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { professionalTypes } from '@/data/process';

interface FormData {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  activityType: string;
  volume: string;
  message: string;
}

const initialForm: FormData = {
  name: '', company: '', role: '', phone: '', email: '',
  city: '', country: '', activityType: '', volume: '', message: '',
};

export default function Professionals() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-transparent border border-ivory/15 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-spice focus:outline-none transition-colors duration-250';

  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink">
      <div className="container-narrow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ivory/50 hover:text-ivory transition-colors duration-250 mb-12"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <div className="mb-16">
          <Reveal>
            <span className="text-eyebrow block mb-6">Professionnels</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-light text-display-1 text-ivory mb-6 text-balance">
              Pour les professionnels du goût.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-lg text-ivory/60 leading-relaxed max-w-2xl">
              Vous êtes restaurant, hôtel, distributeur, revendeur ou grossiste ?
              Construisons ensemble la prochaine étape.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="flex flex-wrap gap-3 mb-16">
            {professionalTypes.map((type) => (
              <span
                key={type}
                className="px-5 py-2.5 border border-ivory/15 text-sm text-ivory/60"
              >
                {type}
              </span>
            ))}
          </div>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className="border border-spice/30 bg-spice/5 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-spice/20">
                <Check size={28} className="text-spice" />
              </div>
              <h2 className="font-display text-3xl text-ivory mb-4">
                Demande envoyée.
              </h2>
              <p className="font-sans text-sm text-ivory/60 max-w-md mx-auto">
                Merci pour votre intérêt. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="btn-outline mt-8 text-xs"
              >
                Envoyer une autre demande
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={400}>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="name">Nom</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  className={inputClass} placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="company">Entreprise</label>
                <input
                  id="company" name="company" type="text" required
                  value={form.company} onChange={handleChange}
                  className={inputClass} placeholder="Nom de l'entreprise"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="role">Fonction</label>
                <input
                  id="role" name="role" type="text"
                  value={form.role} onChange={handleChange}
                  className={inputClass} placeholder="Votre fonction"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="phone">Téléphone</label>
                <input
                  id="phone" name="phone" type="tel" required
                  value={form.phone} onChange={handleChange}
                  className={inputClass} placeholder="+243 ..."
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  className={inputClass} placeholder="email@exemple.com"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="city">Ville</label>
                <input
                  id="city" name="city" type="text"
                  value={form.city} onChange={handleChange}
                  className={inputClass} placeholder="Votre ville"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="country">Pays</label>
                <input
                  id="country" name="country" type="text"
                  value={form.country} onChange={handleChange}
                  className={inputClass} placeholder="Votre pays"
                />
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="activityType">Type d'activité</label>
                <select
                  id="activityType" name="activityType"
                  value={form.activityType} onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" className="bg-ink">Sélectionner...</option>
                  {professionalTypes.map((type) => (
                    <option key={type} value={type} className="bg-ink">{type}</option>
                  ))}
                  <option value="Autre" className="bg-ink">Autre</option>
                </select>
              </div>
              <div>
                <label className="text-eyebrow block mb-2" htmlFor="volume">Volume recherché</label>
                <input
                  id="volume" name="volume" type="text"
                  value={form.volume} onChange={handleChange}
                  className={inputClass} placeholder="Ex: 50 pots / mois"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-eyebrow block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={form.message} onChange={handleChange}
                  className={inputClass + ' resize-none'} placeholder="Votre message"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="btn-spice w-full md:w-auto">
                  Envoyer une demande
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </div>
  );
}
