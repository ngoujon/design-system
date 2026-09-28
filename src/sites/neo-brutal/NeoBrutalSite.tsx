import { useState } from "react";

import { img } from "../../lib/img";
import "./neo-brutal.css";

const nav = ["PRODUIT", "TEMPLATES", "TARIFS", "BLOG"];

const features = [
  { title: "GLISSER. DÉPOSER. PUBLIER.", desc: "Un éditeur visuel sans friction. Tes blocs s'alignent sur une grille stricte, tu ne peux littéralement pas faire moche.", tag: "01", color: "#fff200" },
  { title: "100 MS CHRONO.", desc: "Pages statiques servies depuis 42 edges. Ton score Lighthouse ? 100. Tous les jours.", tag: "02", color: "#ff8a7a" },
  { title: "SEO SANS BLABLA.", desc: "Balises, sitemap, Open Graph, données structurées : générés automatiquement. Point.", tag: "03", color: "#6ee7b7" },
  { title: "E-COMMERCE INCLUS.", desc: "Stripe branché en 2 clics. Paniers, codes promo, stock : c'est déjà là.", tag: "04", color: "#b8a6ff" },
  { title: "À PLUSIEURS.", desc: "Curseurs en direct, commentaires, versions. Ton équipe bosse sur la même page sans se marcher dessus.", tag: "05", color: "#7cc7ff" },
  { title: "TON CODE, SI TU VEUX.", desc: "Export HTML/CSS propre ou composants React. Zéro verrouillage, jamais.", tag: "06", color: "#ffffff" },
];

const templates = [
  { name: "DROP.SHOP", cat: "E-commerce", image: "1542291026-7eec264c27ff", color: "#ff8a7a" },
  { name: "SUNNY STUDIO", cat: "Portfolio", image: "1515886657613-9f3515b0c78f", color: "#fff200" },
  { name: "KICKS LAB", cat: "Lancement produit", image: "1606107557195-0e29a4b5b4aa", color: "#6ee7b7" },
  { name: "PASTEL CLUB", cat: "Événement", image: "1595950653106-6c9ebd614d3a", color: "#b8a6ff" },
];

const stats = [
  { value: "12K+", label: "équipes actives" },
  { value: "380K", label: "sites publiés" },
  { value: "4.9/5", label: "note moyenne" },
  { value: "99.99%", label: "uptime" },
];

const testimonials = [
  { quote: "On a refait tout notre site en un week-end. UN WEEK-END. Nos ventes ont pris +40 % le mois suivant.", name: "Maya Okafor", role: "Fondatrice, Drop.Shop", avatar: "1531746020798-e6953c6e8e04", color: "#fff200" },
  { quote: "Enfin un outil qui assume d'avoir du caractère. Nos clients reconnaissent nos sites au premier coup d'œil.", name: "Lucas Ferrand", role: "DA, Studio Brique", avatar: "1506794778202-cad84cf45f1d", color: "#6ee7b7" },
  { quote: "Le seul SaaS dont je lis les newsletters. Et le produit est aussi direct que leur ton.", name: "Inès Garnier", role: "Growth, Kicks Lab", avatar: "1524504388940-b1c1722653e1", color: "#ff8a7a" },
];

const plans = [
  { name: "SOLO", m: 0, desc: "Pour tester sans risque.", features: ["1 site", "Sous-domaine block.site", "Templates de base"], color: "#ffffff" },
  { name: "PRO", m: 19, desc: "Pour les indés et les marques.", features: ["10 sites", "Domaine perso", "E-commerce (0 % de commission)", "Analytics"], color: "#fff200", hot: true },
  { name: "STUDIO", m: 49, desc: "Pour les agences sans pitié.", features: ["Sites illimités", "Espaces clients", "Marque blanche", "Support prioritaire"], color: "#b8a6ff" },
];

const faqs = [
  ["C'EST VRAIMENT GRATUIT ?", "Oui. Le plan SOLO est gratuit pour toujours. Pas de carte, pas de piège, pas de « période d'essai » déguisée."],
  ["JE PEUX MIGRER DEPUIS WORDPRESS ?", "Colle ton URL, BLOCK. importe tes pages, tes images et ton blog. Il te reste juste à choisir tes couleurs (vives, on espère)."],
  ["ET SI JE VEUX PARTIR ?", "Tu exportes ton site en HTML ou en React, et tu t'en vas. On sera tristes, mais on ne te retiendra pas en otage."],
];

export default function NeoBrutalSite() {
  const [yearly, setYearly] = useState(false);
  const [open, setOpen] = useState(0);

  return (
    <div className="nb-root min-h-full">
      <div className="nb-ticker nb-border-b overflow-hidden py-2">
        <div className="nb-ticker-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex shrink-0 gap-10 pr-10">
              {["★ BLOCK. 3.0 EST SORTI", "E-COMMERCE SANS COMMISSION", "★ 380 000 SITES PUBLIÉS", "ZÉRO ARRONDI GARANTI", "★ -30 % SUR LE PLAN STUDIO AVEC LE CODE BRUT30"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <header className="nb-border-b sticky top-0 z-30 bg-[#f5f3ee]">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <div className="nb-logo flex items-center gap-2 text-3xl">
            <span className="nb-logo-box">B</span>BLOCK.
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map((item) => (
              <a key={item} href="#" className="nb-navlink">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <button className="nb-btn nb-btn-white hidden sm:block">CONNEXION</button>
            <button className="nb-btn nb-btn-yellow">S'INSCRIRE →</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="nb-border-b grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-7 px-6 py-16 md:px-12">
          <span className="nb-chip w-fit">★ NOUVEAU DROP 2026</span>
          <h1 className="text-6xl uppercase leading-[0.92] md:text-[5.5rem]">
            Arrête de
            <br />
            <span className="nb-highlight">lisser</span> ton
            <br />
            site web.
          </h1>
          <p className="nb-body max-w-md text-xl font-medium text-black/75">
            BLOCK. est le créateur de sites qui garde ses angles droits pendant que les autres arrondissent tout. Brut, rapide, mémorable.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="nb-btn nb-btn-black nb-btn-lg">CRÉER MON SITE →</button>
            <button className="nb-btn nb-btn-white nb-btn-lg">▶ VOIR LA DÉMO</button>
          </div>
          <div className="nb-body flex items-center gap-3 text-sm font-bold">
            <div className="flex">
              {["1438761681033-6461ffad8d80", "1500648767791-00dcc994a43e", "1544005313-94ddf0286df2", "1463453091185-61582044d556"].map((a, i) => (
                <img key={a} src={img(a, 80, 80)} alt="" className="nb-avatar h-10 w-10 object-cover" style={{ marginLeft: i ? -10 : 0 }} />
              ))}
            </div>
            REJOINS 12 000+ ÉQUIPES QUI OSENT
          </div>
        </div>
        <div className="nb-border-l relative flex items-center justify-center overflow-hidden bg-[#fff200] p-8 md:p-12">
          <div className="nb-dots absolute inset-0" />
          <div className="nb-card relative w-full max-w-lg bg-white">
            <div className="nb-border-b flex items-center gap-2 px-4 py-2.5">
              <span className="h-3.5 w-3.5 border-[3px] border-black bg-[#ff5c5c]" />
              <span className="h-3.5 w-3.5 border-[3px] border-black bg-[#fff200]" />
              <span className="h-3.5 w-3.5 border-[3px] border-black bg-[#6ee7b7]" />
              <span className="nb-body ml-3 flex-1 border-[3px] border-black px-2 py-0.5 text-[11px] font-bold">drop.shop</span>
            </div>
            <div className="grid grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col justify-between gap-3 p-4">
                <span className="nb-chip w-fit !px-2 !py-0.5 !text-[10px]">NEW IN</span>
                <p className="text-3xl uppercase leading-[0.9]">
                  Rouge
                  <br />
                  vif.
                </p>
                <p className="nb-body text-xs font-medium">Runner Flex — série limitée à 300 paires.</p>
                <button className="nb-btn nb-btn-black !px-3 !py-2 !text-[11px]">ACHETER · 129 €</button>
              </div>
              <div className="nb-border-l-3">
                <img src={img("1542291026-7eec264c27ff", 600, 700)} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="nb-sticker absolute right-6 top-6 rotate-12 bg-[#ff8a7a]">100/100 LIGHTHOUSE</div>
          <div className="nb-sticker absolute bottom-8 left-6 -rotate-6 bg-[#6ee7b7]">✓ PUBLIÉ EN 4 S</div>
        </div>
      </section>

      {/* Logos */}
      <section className="nb-border-b flex flex-wrap items-center justify-around gap-6 px-6 py-8 text-xl">
        {["DROP.SHOP", "KICKS LAB", "STUDIO BRIQUE", "PASTEL CLUB", "MÉGAPHONE", "RADIO BÉTON"].map((l) => (
          <span key={l} className="opacity-70">
            {l}
          </span>
        ))}
      </section>

      {/* Stats */}
      <section className="nb-border-b grid divide-y-4 divide-black sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x-4">
        {stats.map((s, i) => (
          <div key={s.label} className="px-6 py-10 text-center" style={{ background: i === 1 ? "#b8a6ff" : undefined }}>
            <p className="text-5xl">{s.value}</p>
            <p className="nb-body mt-2 text-sm font-bold uppercase tracking-widest text-black/65">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="nb-border-b px-6 py-20 md:px-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-5xl uppercase leading-[0.95] md:text-6xl">
            Pourquoi <span className="nb-highlight-y">BLOCK.</span> ?
          </h2>
          <p className="nb-body max-w-sm text-lg font-medium">Six raisons. Pas une de plus. On déteste les listes à rallonge.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="nb-card nb-card-hover p-7" style={{ background: f.color }}>
              <div className="flex items-start justify-between">
                <span className="nb-num">{f.tag}</span>
                <span className="text-2xl">↗</span>
              </div>
              <h3 className="mt-6 text-2xl uppercase leading-tight">{f.title}</h3>
              <p className="nb-body mt-3 text-[15px] font-medium leading-relaxed text-black/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="nb-border-b grid md:grid-cols-2">
        <div className="px-6 py-16 md:px-12">
          <span className="nb-chip mb-6 inline-block" style={{ background: "#e5e5e5" }}>AVANT</span>
          <div className="nb-before p-6">
            <div className="mx-auto h-3 w-24 rounded-full bg-black/10" />
            <div className="mx-auto mt-6 h-6 w-3/4 rounded-full bg-black/10" />
            <div className="mx-auto mt-3 h-6 w-1/2 rounded-full bg-black/10" />
            <div className="mx-auto mt-6 h-10 w-40 rounded-full bg-gradient-to-r from-[#cfd8ff] to-[#e7d6ff]" />
            <p className="nb-body mt-6 text-center text-sm text-black/40">« Solution innovante pour booster votre synergie »</p>
          </div>
          <p className="nb-body mt-5 text-lg font-medium text-black/60">Dégradé pastel, coins arrondis, slogan vide. Tu l'as déjà vu mille fois.</p>
        </div>
        <div className="nb-border-l bg-[#111] px-6 py-16 text-white md:px-12">
          <span className="nb-chip mb-6 inline-block text-black" style={{ background: "#fff200" }}>APRÈS</span>
          <div className="nb-card bg-[#ff8a7a] p-6 text-black">
            <p className="text-4xl uppercase leading-[0.95]">
              On vend des
              <br />
              chaussures.
              <br />
              Des rouges.
            </p>
            <button className="nb-btn nb-btn-black mt-6">VOIR LE STOCK →</button>
          </div>
          <p className="nb-body mt-5 text-lg font-medium text-white/80">Une idée. Une couleur. Une action. Ta page se souvient d'elle-même.</p>
        </div>
      </section>

      {/* Templates */}
      <section className="nb-border-b px-6 py-20 md:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-5xl uppercase">Templates</h2>
          <a href="#" className="nb-navlink nb-body font-bold">
            LES 140 TEMPLATES →
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((t) => (
            <article key={t.name} className="nb-card nb-card-hover overflow-hidden bg-white">
              <div className="nb-border-b relative">
                <img src={img(t.image, 600, 700)} alt={t.name} className="aspect-[6/7] w-full object-cover" />
                <span className="nb-sticker absolute left-3 top-3 -rotate-3" style={{ background: t.color }}>
                  {t.cat}
                </span>
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="text-lg">{t.name}</p>
                <span className="nb-body text-sm font-bold">UTILISER →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="nb-border-b bg-[#7c5cff] px-6 py-20 md:px-12">
        <h2 className="mb-12 text-5xl uppercase text-white">Ils ont cassé les codes</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="nb-card flex flex-col p-7" style={{ background: t.color, transform: `rotate(${[-1.5, 1, -0.5][i]}deg)` }}>
              <blockquote className="nb-body flex-1 text-xl font-bold leading-snug">« {t.quote} »</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={img(t.avatar, 100, 100)} alt="" className="nb-avatar h-14 w-14 object-cover" />
                <div>
                  <p className="text-base uppercase">{t.name}</p>
                  <p className="nb-body text-sm font-medium">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="nb-border-b px-6 py-20 md:px-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-5xl uppercase">Tarifs honnêtes</h2>
          <div className="nb-toggle flex">
            <button onClick={() => setYearly(false)} className={!yearly ? "nb-toggle-on" : ""}>
              MENSUEL
            </button>
            <button onClick={() => setYearly(true)} className={yearly ? "nb-toggle-on" : ""}>
              ANNUEL −20 %
            </button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="nb-card relative flex flex-col p-8" style={{ background: p.color }}>
              {p.hot && <span className="nb-sticker absolute -top-4 right-6 rotate-6 bg-[#ff8a7a]">🔥 LE PLUS PRIS</span>}
              <p className="text-2xl">{p.name}</p>
              <p className="nb-body mt-1 font-medium">{p.desc}</p>
              <p className="mt-6 text-6xl">
                {yearly ? Math.round(p.m * 0.8) : p.m}€<span className="nb-body text-lg font-bold">/MOIS</span>
              </p>
              <ul className="nb-body mt-6 flex-1 space-y-2.5 font-bold">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="nb-tick">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`nb-btn mt-8 w-full ${p.hot ? "nb-btn-black" : "nb-btn-white"}`}>CHOISIR {p.name} →</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="nb-border-b grid md:grid-cols-[1fr_2fr]">
        <div className="nb-border-r-md bg-[#6ee7b7] px-6 py-16 md:px-12">
          <h2 className="text-5xl uppercase leading-none">FAQ.</h2>
          <p className="nb-body mt-4 text-lg font-medium">Réponses courtes. Comme on aime.</p>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className={i > 0 ? "nb-border-t" : ""}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-xl md:px-12">
                {q}
                <span className="nb-plus">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="nb-body px-6 pb-6 text-lg font-medium md:px-12">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="nb-border-b bg-[#111] px-6 py-24 text-center text-white md:px-12">
        <h2 className="mx-auto max-w-4xl text-5xl uppercase leading-[0.95] md:text-7xl">
          Prêt à casser les codes du design <span className="nb-highlight text-black">lisse</span> ?
        </h2>
        <button className="nb-btn nb-btn-yellow nb-btn-lg mt-10">REJOINDRE BLOCK. — C'EST GRATUIT →</button>
      </section>

      <footer className="grid gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        <div>
          <div className="nb-logo flex items-center gap-2 text-2xl">
            <span className="nb-logo-box">B</span>BLOCK.
          </div>
          <p className="nb-body mt-3 text-sm font-medium">Fait à Marseille, avec des angles droits.</p>
        </div>
        {[
          ["PRODUIT", ["Éditeur", "Templates", "E-commerce", "Changelog"]],
          ["RESSOURCES", ["Blog", "Guides", "Communauté", "Statut"]],
          ["LÉGAL", ["Mentions", "Confidentialité", "CGU", "Contact"]],
        ].map(([t, l]) => (
          <div key={t as string}>
            <p className="mb-3 text-sm">{t}</p>
            <ul className="nb-body space-y-1.5 text-sm font-bold">
              {(l as string[]).map((x) => (
                <li key={x}>
                  <a href="#" className="nb-navlink">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="nb-body text-xs font-bold uppercase md:col-span-4">© 2026 BLOCK. — Design system « Neo Brutal »</p>
      </footer>
    </div>
  );
}
