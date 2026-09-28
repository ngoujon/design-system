import { useState } from "react";

import { img } from "../../lib/img";
import "./atelier-cream.css";

const projects = [
  {
    name: "Nordis",
    kind: "Identité visuelle & design system",
    year: "2025",
    desc: "Refonte complète de la marque d'un fabricant scandinave de mobilier : logotype, typographie, 140 composants documentés.",
    tags: ["Branding", "Design system"],
    image: "1561070791-2526d30994b5",
    bg: "#e9e2d3",
    result: "+32 % de conversion sur le nouveau site",
  },
  {
    name: "Halo",
    kind: "Application mobile de santé",
    year: "2024",
    desc: "Une app qui aide 80 000 patients à suivre leur traitement, conçue avec des soignants du CHU de Lyon.",
    tags: ["iOS / Android", "Recherche utilisateur"],
    image: "1586717791821-3f44a563fa4c",
    bg: "#dfe4d8",
    result: "Note de 4,8 sur l'App Store",
  },
  {
    name: "Verre",
    kind: "Site e-commerce",
    year: "2024",
    desc: "Boutique en ligne d'un souffleur de verre lyonnais. Photographie, direction artistique et intégration Shopify.",
    tags: ["E-commerce", "Direction artistique"],
    image: "1610701596007-11502861dcfa",
    bg: "#efe6da",
    result: "Stock de Noël écoulé en 9 jours",
  },
  {
    name: "Ferme Paluel",
    kind: "Outil interne de planification",
    year: "2023",
    desc: "Un tableau de bord pour gérer 40 hectares de maraîchage bio, pensé pour être utilisé avec des gants.",
    tags: ["SaaS", "Dashboard"],
    image: "1523348837708-15d4a09cfac2",
    bg: "#e4e0cf",
    result: "6 h de saisie économisées par semaine",
  },
];

const services = [
  { n: "01", title: "Design produit", desc: "De l'atelier de cadrage aux maquettes haute-fidélité, pour applications web et mobiles.", price: "à partir de 650 € / jour" },
  { n: "02", title: "Design system", desc: "Audit, bibliothèque Figma, tokens et documentation — prêts pour vos développeurs.", price: "forfait dès 8 000 €" },
  { n: "03", title: "Identité visuelle", desc: "Logotype, palette, typographie et gabarits pour les petites marques qui veulent durer.", price: "forfait dès 4 500 €" },
  { n: "04", title: "Accompagnement", desc: "Une demi-journée par semaine aux côtés de votre équipe pour faire grandir la culture design.", price: "sur devis" },
];

const clients = ["Nordis", "Halo", "Verre", "Bellecour & Co", "Paluel", "Studio Ondine", "La Fabrique"];

const testimonials = [
  {
    quote: "Hugo a ce talent rare de rendre simple ce qui était compliqué, sans jamais le rendre simpliste. Nos équipes le réclament encore.",
    name: "Camille Aubert",
    role: "Directrice produit, Halo",
    avatar: "1573497019940-1c28c88b4f3e",
  },
  {
    quote: "Un vrai partenaire. Il a posé les bonnes questions dès le premier atelier et le design system tient toujours, deux ans après.",
    name: "Erik Lindqvist",
    role: "CEO, Nordis",
    avatar: "1472099645785-5658abf4ff4e",
  },
];

const notes = [
  { date: "12 sept. 2026", title: "Pourquoi j'ai arrêté de livrer des maquettes « pixel perfect »", read: "6 min" },
  { date: "28 août 2026", title: "Concevoir pour des mains gantées : leçons d'une ferme bio", read: "8 min" },
  { date: "03 juil. 2026", title: "Le design system minimum viable, en 12 composants", read: "5 min" },
];

const now = [
  { k: "Je lis", v: "« Le Geste et la Parole », André Leroi-Gourhan" },
  { k: "J'écoute", v: "Nils Frahm — Day" },
  { k: "J'apprends", v: "La céramique, le jeudi soir aux Pentes" },
  { k: "Je travaille sur", v: "Une app de réservation pour refuges alpins" },
];

export default function AtelierCreamSite() {
  const [filter, setFilter] = useState("Tous");
  const filters = ["Tous", "Branding", "Design system", "E-commerce", "SaaS"];
  const visible = projects.filter((p) => filter === "Tous" || p.tags.some((t) => t.includes(filter)));

  return (
    <div className="ac-root min-h-full">
      <header className="ac-header sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="ac-logo flex items-center gap-3">
            <img src={img("1527980965255-d3b416303d12", 80, 80)} alt="" className="h-8 w-8 rounded-full object-cover" />
            Hugo Vasseur
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            {["Travaux", "Services", "Notes", "À propos"].map((l) => (
              <a key={l} href="#" className="ac-link">
                {l}
              </a>
            ))}
          </nav>
          <span className="ac-status">
            <span className="ac-dot" />
            Disponible en octobre
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="ac-eyebrow mb-6">Designer produit indépendant — Lyon, France</p>
          <h1 className="text-4xl font-medium leading-[1.15] tracking-[-0.02em] text-[#2e2a25] md:text-[3.4rem]">
            Je conçois des interfaces <span className="ac-serif">calmes</span> qui font gagner du temps aux gens qui les utilisent.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#6b6255]">
            Dix ans d'expérience, une quarantaine de produits livrés, et toujours la même obsession : la clarté avant l'esthétique.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="ac-btn ac-btn-primary">Voir mes travaux ↓</button>
            <button className="ac-btn">Réserver un appel de 20 min</button>
          </div>
        </div>
        <div className="relative">
          <img
            src={img("1527980965255-d3b416303d12", 700, 860)}
            alt="Portrait de Hugo Vasseur"
            className="ac-portrait aspect-[4/5] w-full rounded-[28px] object-cover"
          />
          <div className="ac-sticker absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 text-sm">
            <p className="text-[#8a8072]">Il est</p>
            <p className="font-medium text-[#2e2a25]">14:32 à Lyon ☀︎ 19°</p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="ac-border-y">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm text-[#8a8072]">
          <span className="ac-eyebrow">Ils m'ont fait confiance</span>
          {clients.map((c) => (
            <span key={c} className="font-medium text-[#6b6255]">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="ac-eyebrow mb-3">Sélection de projets</p>
            <h2 className="text-3xl font-medium tracking-tight text-[#2e2a25]">Travaux récents, 2023 — 2026</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`ac-chip ${filter === f ? "ac-chip-active" : ""}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((p) => (
            <article key={p.name} className="ac-project group">
              <div className="overflow-hidden rounded-[24px] p-8" style={{ background: p.bg }}>
                <div className="ac-frame overflow-hidden rounded-2xl">
                  <img src={img(p.image, 900, 620)} alt={p.name} className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-[#2e2a25]">
                    {p.name} <span className="text-[#8a8072]">— {p.kind}</span>
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#6b6255]">{p.desc}</p>
                  <p className="mt-3 text-sm text-[#5f6f57]">↗ {p.result}</p>
                </div>
                <span className="shrink-0 text-sm text-[#8a8072]">{p.year}</span>
              </div>
              <div className="mt-4 flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="ac-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="ac-soft py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="ac-eyebrow mb-3">Services</p>
            <h2 className="text-3xl font-medium tracking-tight text-[#2e2a25]">
              Ce que je peux faire <span className="ac-serif">pour vous</span>.
            </h2>
            <p className="mt-4 text-[#6b6255]">Je travaille seul ou avec un petit réseau de développeurs et rédacteurs de confiance.</p>
          </div>
          <div className="ac-divide">
            {services.map((s) => (
              <div key={s.n} className="ac-service grid gap-4 py-7 md:grid-cols-[48px_1fr_auto]">
                <span className="text-sm text-[#8a8072]">{s.n}</span>
                <div>
                  <h3 className="text-xl font-medium text-[#2e2a25]">{s.title}</h3>
                  <p className="mt-1.5 max-w-md text-[15px] text-[#6b6255]">{s.desc}</p>
                </div>
                <span className="text-sm text-[#5f6f57] md:text-right">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="ac-eyebrow mb-3">Méthode</p>
        <h2 className="mb-12 max-w-xl text-3xl font-medium tracking-tight text-[#2e2a25]">Une façon de travailler simple, en quatre temps.</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["Écouter", "Deux jours d'entretiens avec vos équipes et vos utilisateurs."],
            ["Cadrer", "Un document d'une page : problème, cible, succès attendu."],
            ["Dessiner", "Des itérations courtes, testées chaque vendredi avec de vrais gens."],
            ["Transmettre", "Fichiers propres, documentation et une passation sans surprise."],
          ].map(([t, d], i) => (
            <div key={t} className="ac-step rounded-3xl p-6">
              <span className="ac-step-n">{i + 1}</span>
              <h3 className="mt-6 text-lg font-medium text-[#2e2a25]">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6255]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="ac-card flex flex-col justify-between p-9">
            <blockquote className="ac-serif text-2xl leading-snug text-[#2e2a25]">« {t.quote} »</blockquote>
            <figcaption className="mt-8 flex items-center gap-3 text-sm">
              <img src={img(t.avatar, 96, 96)} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="font-medium text-[#2e2a25]">{t.name}</p>
                <p className="text-[#8a8072]">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>

      {/* About + now */}
      <section className="ac-border-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="ac-eyebrow mb-3">À propos</p>
            <p className="text-2xl leading-relaxed text-[#2e2a25]">
              Avant d'être designer, j'ai été typographe dans un petit atelier de la Croix-Rousse. J'en ai gardé le goût du détail, des marges généreuses et des choses bien faites.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <img src={img("1507238691740-187a5b1d37b8", 600, 460)} alt="Bureau" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <img src={img("1509042239860-f550ce710b93", 600, 460)} alt="Café" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div>
            <p className="ac-eyebrow mb-3">En ce moment</p>
            <div className="ac-divide">
              {now.map((n) => (
                <div key={n.k} className="flex justify-between gap-6 py-4 text-[15px]">
                  <span className="text-[#8a8072]">{n.k}</span>
                  <span className="text-right text-[#2e2a25]">{n.v}</span>
                </div>
              ))}
            </div>
            <p className="ac-eyebrow mb-3 mt-12">Notes récentes</p>
            <div className="ac-divide">
              {notes.map((n) => (
                <a key={n.title} href="#" className="ac-note flex items-baseline justify-between gap-6 py-4">
                  <span className="text-[#2e2a25]">{n.title}</span>
                  <span className="shrink-0 text-xs text-[#8a8072]">
                    {n.date} · {n.read}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="ac-status mb-6">
              <span className="ac-dot" />2 créneaux disponibles au T4 2026
            </span>
            <h2 className="mt-6 text-5xl font-medium leading-[1.1] tracking-tight text-[#2e2a25] md:text-6xl">
              Un projet en tête ? <span className="ac-serif">Parlons-en.</span>
            </h2>
            <a href="#" className="ac-link mt-8 inline-block text-xl">
              hello@hugovasseur.com
            </a>
            <p className="mt-2 text-sm text-[#8a8072]">Réponse sous 48 h, promis.</p>
          </div>
          <form className="ac-card space-y-5 p-8" onSubmit={(e) => e.preventDefault()}>
            {[
              ["Votre nom", "Camille Aubert"],
              ["E-mail", "camille@studio.fr"],
            ].map(([l, ph]) => (
              <label key={l} className="block">
                <span className="text-sm text-[#6b6255]">{l}</span>
                <input placeholder={ph} className="ac-input mt-1.5" />
              </label>
            ))}
            <label className="block">
              <span className="text-sm text-[#6b6255]">Budget estimé</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {["< 5 k€", "5 – 15 k€", "15 – 40 k€", "> 40 k€"].map((b, i) => (
                  <span key={b} className={`ac-chip ${i === 1 ? "ac-chip-active" : ""}`}>
                    {b}
                  </span>
                ))}
              </div>
            </label>
            <label className="block">
              <span className="text-sm text-[#6b6255]">Quelques mots sur le projet</span>
              <textarea rows={3} placeholder="Nous refondons notre application…" className="ac-input mt-1.5 resize-none" />
            </label>
            <button className="ac-btn ac-btn-primary w-full justify-center">Envoyer le message →</button>
          </form>
        </div>
      </section>

      <footer className="ac-border-t px-6 py-10 text-sm text-[#8a8072]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Hugo Vasseur — design system « Atelier Cream »</p>
          <div className="flex gap-6">
            {["Dribbble", "LinkedIn", "Read.cv", "Instagram"].map((s) => (
              <a key={s} href="#" className="ac-link">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
