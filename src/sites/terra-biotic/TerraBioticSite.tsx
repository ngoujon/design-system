import { useState } from "react";

import { img } from "../../lib/img";
import "./terra-biotic.css";

const products = [
  { name: "Savon de sol vivant", sub: "Argile verte & ortie · 110 g", price: "9,50 €", image: "1600857544200-b2f666a9a2ec", tag: "Best-seller", rating: 4.9, reviews: 1284 },
  { name: "Sérum racine", sub: "Huile de chanvre & calendula · 30 ml", price: "32 €", image: "1608571423902-eed4a5ad8108", tag: "Nouveau", rating: 4.8, reviews: 312 },
  { name: "Tasses d'argile locale", sub: "Grès de Puisaye · lot de 4", price: "48 €", image: "1590422749897-47036da0b0ff", tag: "", rating: 4.9, reviews: 206 },
  { name: "Kit pousses d'intérieur", sub: "6 semences anciennes + terreau", price: "24 €", image: "1466692476868-aef1dfb1e735", tag: "Zéro déchet", rating: 4.7, reviews: 540 },
];

const journey = [
  { step: "01", title: "La ferme", desc: "Nos 38 fermes partenaires pratiquent l'agriculture régénératrice : couverts végétaux, zéro labour, haies.", image: "1523348837708-15d4a09cfac2" },
  { step: "02", title: "L'atelier", desc: "Transformation à froid dans notre atelier solaire de la Drôme. Aucun ingrédient de synthèse.", image: "1416879595882-3373a0480b5b" },
  { step: "03", title: "Chez vous", desc: "Livré dans du papier ensemencé : plantez l'emballage, il fleurit en trois semaines.", image: "1501004318641-b39e6451bec6" },
];

const impacts = [
  { icon: "🌱", value: "12 480 m²", label: "de sols régénérés cette année", progress: 78 },
  { icon: "💧", value: "3,2 M L", label: "d'eau économisés vs. conventionnel", progress: 64 },
  { icon: "🍃", value: "−71 %", label: "d'émissions CO₂ par produit", progress: 71 },
];

const farmers = [
  { name: "Bernard Chaix", farm: "Ferme des Trois Chênes, Drôme", crop: "Ortie, calendula", image: "1472099645785-5658abf4ff4e" },
  { name: "Élodie Marchal", farm: "Les Jardins du Vercors", crop: "Chanvre, lavande", image: "1508214751196-bcfd4ca60f91" },
  { name: "Youssef Amrani", farm: "Domaine de la Gervanne", crop: "Argile, plantes sauvages", image: "1507003211169-0a1dd7228f2d" },
];

const articles = [
  { cat: "Sol", title: "Pourquoi un sol vivant stocke trois fois plus de carbone", read: "7 min", image: "1542601906990-b4d3fb778b09" },
  { cat: "Recette", title: "Fabriquer son baume à lèvres avec 3 ingrédients", read: "4 min", image: "1485955900006-10f4d324d411" },
  { cat: "Terrain", title: "Une journée de récolte chez Élodie, dans le Vercors", read: "9 min", image: "1500382017468-9049fed747ef" },
];

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z" fill="currentColor" opacity="0.9" />
      <path d="M5 19C9 14 12 11 17 7" stroke="#f5f1e6" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function TerraBioticSite() {
  const [refill, setRefill] = useState(true);

  return (
    <div className="tb-root min-h-full">
      <div className="tb-announce px-6 py-2 text-center text-sm">
        🌿 Pour chaque commande, nous plantons un arbre avec Reforest'Action · <a href="#" className="underline">Voir notre forêt (18 240 arbres)</a>
      </div>

      <header className="tb-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="tb-logo flex items-center gap-2">
            <span className="tb-logo-mark">
              <Leaf className="h-5 w-5 text-[#f5f1e6]" />
            </span>
            Terra
          </div>
          <nav className="hidden gap-8 text-[15px] md:flex">
            {["Soins", "Maison", "Jardin", "Notre impact", "Journal"].map((l) => (
              <a key={l} href="#" className="tb-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-[#5a6650] sm:inline">Compte</span>
            <button className="tb-btn">Panier · 2</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="tb-chip mb-6 inline-flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[#4a6741]" /> Certifié régénératif · B Corp 2025
          </span>
          <h1 className="tb-display text-5xl leading-[1.02] md:text-7xl">
            Cultivé avec la terre, <em>pas contre elle.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#5a6650]">
            Terra conçoit des soins et des objets du quotidien qui régénèrent les sols plutôt que de les épuiser. Des ingrédients cultivés à moins de 200 km, des emballages qui se plantent.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="tb-btn tb-btn-lg">Découvrir la boutique</button>
            <button className="tb-btn tb-btn-ghost tb-btn-lg">Notre impact →</button>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["1573497019940-1c28c88b4f3e", "1527980965255-d3b416303d12", "1580489944761-15a19d654956"].map((a) => (
                <img key={a} src={img(a, 80, 80)} alt="" className="h-10 w-10 rounded-full border-2 border-[#f5f1e6] object-cover" />
              ))}
            </div>
            <p className="text-sm text-[#5a6650]">
              <strong className="text-[#2f3b2a]">★ 4,9/5</strong> · 18 000 clientes et clients conquis
            </p>
          </div>
        </div>
        <div className="relative h-[540px]">
          <div className="tb-blob absolute left-16 top-10" />
          <div className="tb-pebble tb-pebble-a absolute right-0 top-0 h-[400px] w-[330px] overflow-hidden">
            <img src={img("1542601906990-b4d3fb778b09", 700, 840)} alt="Mains tenant de la terre" className="h-full w-full object-cover" />
          </div>
          <div className="tb-pebble tb-pebble-b absolute bottom-0 left-0 h-[260px] w-[260px] overflow-hidden">
            <img src={img("1608571423902-eed4a5ad8108", 520, 520)} alt="Sérum" className="h-full w-full object-cover" />
          </div>
          <div className="tb-card tb-float absolute bottom-16 right-6 w-56 p-4">
            <div className="flex items-center gap-2">
              <span className="tb-leaf-icon">
                <Leaf className="h-4 w-4 text-[#4a6741]" />
              </span>
              <p className="text-xs font-medium text-[#5a6650]">Ce mois-ci</p>
            </div>
            <p className="tb-display mt-2 text-3xl">1 240 m²</p>
            <p className="text-xs text-[#5a6650]">de sol régénéré grâce à vous</p>
          </div>
        </div>
      </section>

      {/* Labels */}
      <section className="tb-band">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm text-[#2f3b2a]">
          {["🌍 B Corp certifiée", "🌿 Cosmos Organic", "🐝 1 % for the Planet", "♻️ Emballages compostables", "🇫🇷 Fabriqué dans la Drôme"].map((l) => (
            <span key={l} className="font-medium">
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="tb-eyebrow mb-3">Les essentiels</p>
            <h2 className="tb-display text-4xl md:text-5xl">Nos best-sellers</h2>
          </div>
          <div className="flex gap-2">
            {["Tout", "Soins", "Maison", "Jardin"].map((c, i) => (
              <span key={c} className={`tb-chip cursor-pointer ${i === 0 ? "tb-chip-on" : ""}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <article key={p.name} className="tb-card tb-product group p-3">
              <div className="relative overflow-hidden" style={{ borderRadius: ["48% 52% 30px 30px / 40% 40% 30px 30px", "30px", "30px 30px 48% 52% / 30px 30px 40% 40%", "30px"][i] }}>
                <img src={img(p.image, 600, 640)} alt={p.name} className="aspect-[15/16] w-full object-cover transition duration-700 group-hover:scale-105" />
                {p.tag && <span className="tb-chip tb-chip-sm absolute left-3 top-3">{p.tag}</span>}
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center gap-1 text-xs text-[#5a6650]">
                  <span className="text-[#c4953a]">★</span> {p.rating} · {p.reviews} avis
                </div>
                <h3 className="mt-1 text-lg font-semibold text-[#2f3b2a]">{p.name}</h3>
                <p className="text-sm text-[#5a6650]">{p.sub}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="tb-display text-xl">{p.price}</span>
                  <button className="tb-add">+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="tb-soft py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="tb-eyebrow mb-3">De la terre à votre salle de bain</p>
            <h2 className="tb-display text-4xl md:text-5xl">Un cycle, pas une chaîne.</h2>
          </div>
          <div className="relative grid gap-10 md:grid-cols-3">
            <svg className="tb-path absolute left-0 right-0 top-24 hidden h-24 w-full md:block" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M80 60 C 250 -10, 380 110, 500 50 S 780 -10, 920 60" stroke="#4a6741" strokeWidth="2" strokeDasharray="6 8" fill="none" />
            </svg>
            {journey.map((j, i) => (
              <div key={j.step} className="relative text-center">
                <div className={`tb-pebble mx-auto h-52 w-52 overflow-hidden tb-pebble-${["a", "b", "c"][i]}`}>
                  <img src={img(j.image, 420, 420)} alt={j.title} className="h-full w-full object-cover" />
                </div>
                <span className="tb-step">{j.step}</span>
                <h3 className="tb-display mt-3 text-2xl">{j.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-[#5a6650]">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="tb-eyebrow mb-3">Rapport d'impact 2026</p>
            <h2 className="tb-display text-4xl leading-tight md:text-5xl">Nos chiffres, sans greenwashing.</h2>
            <p className="mt-5 leading-relaxed text-[#5a6650]">Chaque année, un organisme indépendant (Sylvestre Conseil) audite notre impact. Voici où nous en sommes par rapport à nos objectifs 2027.</p>
            <a href="#" className="tb-link mt-6 inline-block font-medium">
              Télécharger le rapport complet (PDF, 4 Mo) →
            </a>
          </div>
          <div className="space-y-4">
            {impacts.map((m) => (
              <div key={m.label} className="tb-card flex items-center gap-5 p-5">
                <span className="tb-leaf-icon tb-leaf-lg text-2xl">{m.icon}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="tb-display text-2xl">{m.value}</p>
                    <p className="text-xs text-[#5a6650]">{m.progress} % de l'objectif</p>
                  </div>
                  <p className="text-sm text-[#5a6650]">{m.label}</p>
                  <div className="tb-bar mt-3">
                    <div style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmers */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <p className="tb-eyebrow mb-3">Nos partenaires</p>
        <h2 className="tb-display mb-12 text-4xl md:text-5xl">Les mains derrière Terra</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {farmers.map((f) => (
            <div key={f.name} className="tb-card overflow-hidden">
              <img src={img(f.image, 600, 520)} alt={f.name} className="aspect-[6/5.2] w-full object-cover" />
              <div className="p-5">
                <p className="text-lg font-semibold text-[#2f3b2a]">{f.name}</p>
                <p className="text-sm text-[#5a6650]">{f.farm}</p>
                <span className="tb-chip tb-chip-sm mt-3 inline-flex items-center gap-1">
                  <Leaf className="h-3 w-3 text-[#4a6741]" /> {f.crop}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Refill */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="tb-refill grid items-center gap-10 overflow-hidden p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="tb-eyebrow mb-3 !text-[#cfe0c3]">Programme recharge</p>
            <h2 className="tb-display text-4xl text-[#f5f1e6] md:text-5xl">Un flacon pour la vie.</h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#dfe8d6]">Recevez vos recharges en sachet compostable tous les 2 mois. −20 % sur chaque recharge, livraison offerte, pause quand vous voulez.</p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => setRefill(!refill)} className={`tb-switch ${refill ? "tb-switch-on" : ""}`} aria-label="Activer la recharge">
                <span />
              </button>
              <span className="text-sm text-[#f5f1e6]">{refill ? "Recharge automatique activée · 25,60 €" : "Achat unique · 32 €"}</span>
            </div>
            <button className="tb-btn tb-btn-light tb-btn-lg mt-8">S'abonner aux recharges</button>
          </div>
          <div className="relative flex justify-center">
            <div className="tb-pebble tb-pebble-c h-80 w-72 overflow-hidden">
              <img src={img("1485955900006-10f4d324d411", 600, 680)} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="tb-display text-4xl">Le Journal</h2>
          <a href="#" className="tb-link text-sm font-medium">
            Tous les articles →
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group">
              <div className="overflow-hidden rounded-[28px]">
                <img src={img(a.image, 700, 480)} alt="" className="aspect-[7/4.8] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <span className="tb-chip tb-chip-sm mt-5 inline-block">{a.cat}</span>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-[#2f3b2a]">{a.title}</h3>
              <p className="mt-1 text-sm text-[#5a6650]">{a.read} de lecture</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="tb-footer">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="tb-logo flex items-center gap-2 text-[#f5f1e6]">
              <span className="tb-logo-mark tb-logo-mark-light">
                <Leaf className="h-5 w-5 text-[#4a6741]" />
              </span>
              Terra
            </div>
            <p className="mt-4 max-w-xs text-sm text-[#cfe0c3]">Des objets qui rendent à la terre plus qu'ils ne lui prennent. Crest, Drôme, depuis 2019.</p>
          </div>
          {[
            ["Boutique", ["Soins", "Maison", "Jardin", "Coffrets"]],
            ["Terra", ["Notre impact", "Nos fermes", "Carrières", "Presse"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="mb-3 font-semibold text-[#f5f1e6]">{t}</p>
              <ul className="space-y-2 text-sm text-[#cfe0c3]">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-white">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-3 font-semibold text-[#f5f1e6]">La lettre de saison</p>
            <p className="text-sm text-[#cfe0c3]">4 lettres par an, au rythme des saisons. Et −10 % sur votre première commande.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="votre@email.fr" className="tb-input flex-1" />
              <button className="tb-btn tb-btn-light">OK</button>
            </form>
          </div>
        </div>
        <p className="border-t border-white/10 py-6 text-center text-xs text-[#cfe0c3]">© 2026 Terra — design system « Terra Biotic »</p>
      </footer>
    </div>
  );
}
