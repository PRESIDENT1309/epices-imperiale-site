import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { brand } from '@/config/brand';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-transparent border border-ivory/15 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-spice focus:outline-none transition-colors duration-250';

  const whatsappUrl = `${brand.whatsappLink}?text=${encodeURIComponent('Bonjour ÉPICES IMPÉRIALE,')}`;

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
            <span className="text-eyebrow block mb-6">Contact</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-light text-display-1 text-ivory mb-6 text-balance">
              Contactez-nous.
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <Reveal>
              <div className="space-y-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-ivory/15 group-hover:border-spice transition-colors duration-250 shrink-0">
                    <MessageCircle size={18} className="text-ivory/60 group-hover:text-spice transition-colors duration-250" />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-1">WhatsApp</p>
                    <p className="text-sm text-ivory/70 group-hover:text-ivory transition-colors duration-250">
                      {brand.whatsapp}
                    </p>
                  </div>
                </a>

                <a href={`tel:${brand.phone}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-ivory/15 group-hover:border-spice transition-colors duration-250 shrink-0">
                    <Phone size={18} className="text-ivory/60 group-hover:text-spice transition-colors duration-250" />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-1">Téléphone</p>
                    <p className="text-sm text-ivory/70 group-hover:text-ivory transition-colors duration-250">
                      {brand.phone}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${brand.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-ivory/15 group-hover:border-spice transition-colors duration-250 shrink-0">
                    <Mail size={18} className="text-ivory/60 group-hover:text-spice transition-colors duration-250" />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-1">Email</p>
                    <p className="text-sm text-ivory/70 group-hover:text-ivory transition-colors duration-250">
                      {brand.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-ivory/15 shrink-0">
                    <MapPin size={18} className="text-ivory/60" />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-1">Localisation</p>
                    <p className="text-sm text-ivory/70">{brand.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-ivory/15 shrink-0">
                    <Instagram size={18} className="text-ivory/60" />
                  </div>
                  <div>
                    <p className="text-eyebrow mb-1">Réseaux sociaux</p>
                    <div className="flex gap-3 mt-1">
                      <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-ivory/70 hover:text-spice transition-colors duration-250">Instagram</a>
                      <span className="text-ivory/20">·</span>
                      <a href={brand.social.tiktok} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-ivory/70 hover:text-spice transition-colors duration-250">TikTok</a>
                      <span className="text-ivory/20">·</span>
                      <a href={brand.social.facebook} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-ivory/70 hover:text-spice transition-colors duration-250">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <Reveal>
                <div className="border border-spice/30 bg-spice/5 p-12 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-spice/20">
                    <Check size={28} className="text-spice" />
                  </div>
                  <h2 className="font-display text-2xl text-ivory mb-4">
                    Message envoyé.
                  </h2>
                  <p className="font-sans text-sm text-ivory/60">
                    Merci. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              </Reveal>
            ) : (
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-eyebrow block mb-2" htmlFor="name">Nom</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    className={inputClass} placeholder="Votre nom"
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
                  <label className="text-eyebrow block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={handleChange}
                    className={inputClass + ' resize-none'} placeholder="Votre message"
                  />
                </div>
                <button type="submit" className="btn-spice w-full">
                  Envoyer
                </button>
              </form>
            </Reveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
