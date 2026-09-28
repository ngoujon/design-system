import { useState } from "react";

import { img } from "../../lib/img";
import "./noir-couture.css";

const products = [
  { name: "Manteau Ombre", mat: "Laine vierge & cachemire", price: "1 890 €", image: "1554412933-514a83d2f3c8", alt: "1539109136881-3be0616acf4b", tag: "Nouveauté" },
  { name: "Perfecto Nocturne", mat: "Cuir d'agneau plongé", price: "2 340 €", image: "1551028719-00167b16eac5", alt: "1520975954732-35dd22299614", tag: "" },
  { name: "Robe Solstice", mat: "Crêpe de soie, épaules nues", price: "1 420 €", image: "1566174053879-31528523f8ae", alt: "1509631179647-0177331693ae", tag: "Édition limitée" },
  { name: "Sac Méridien", mat: "Cuir grainé, fermoir or 18 ct", price: "2 650 €", image: "1590874103328-eac38a683ce7", alt: "1584917865442-de89df76afd3", tag: "" },
];

const jewels = [
  { name: "Bague Éclipse", desc: "Or blanc, diamant taille brillant 1,2 ct", price: "12 800 €", image: "1605100804763-247f67b3557e" },
  { name: "Créoles Aube", desc: "Or jaune 18 carats, finition martelée", price: "3 450 €", image: "1617038220319-276d3cfab638" },
  { name: "Montre Heure Bleue", desc: "Boîtier or rose 38 mm, bracelet alligator", price: "9 900 €", image: "1524592094714-0f0654e20314" },
];

const boutiques = [
  ["Paris", "29 avenue Montaigne", "Lun – Sam · 10h – 19h"],
  ["Milan", "Via della Spiga, 18", "Lun – Sam · 10h – 19h30"],
  ["Tokyo", "Omotesandō 5-2-1", "Tous les jours · 11h – 20h"],
  ["New York", "712 Madison Avenue", "Lun – Sam · 10h – 18h"],
];

export default function NoirCoutureSite() {
  const [cart, setCart] = useState(0);
  const [cat, setCat] = useState("Femme");

  return (
    <div className="nc-root min-h-full">
      <div className="nc-announce py-2 text-center text-[10px] uppercase tracking-[0.35em]">
        Livraison et retours offerts · Emballage signature · Retrait en boutique sous 2 h
      </div>

      <header className="nc-header sticky top-0 z-30">
        <div className="grid grid-cols-3 items-center px-8 py-6">
          <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.25em] md:flex">
            {["Femme", "Homme", "Joaillerie", "Maison"].map((l) => (
              <button key={l} onClick={() => setCat(l)} className={`nc-link ${cat === l ? "nc-link-active" : ""}`}>
                {l}
              </button>
            ))}
          </nav>
          <div className="nc-logo col-start-2 text-center">NOIR.</div>
          <div className="flex items-center justify-end gap-6 text-[11px] uppercase tracking-[0.25em]">
            <a href="#" className="nc-link hidden lg:inline">
              Rechercher
            </a>
            <a href="#" className="nc-link hidden md:inline">
              Boutiques
            </a>
            <a href="#" className="nc-link">
              Panier ({cart})
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative grid md:grid-cols-2">
        <div className="relative h-[86vh] min-h-[600px] overflow-hidden">
          <img src={img("1554412933-514a83d2f3c8", 1200, 1600)} alt="" className="nc-editorial nc-zoom h-full w-full object-cover" />
        </div>
        <div className="relative h-[86vh] min-h-[600px] overflow-hidden max-md:hidden">
          <img src={img("1487222477894-8943e31ef7b2", 1200, 1600)} alt="" className="nc-editorial nc-zoom h-full w-full object-cover" />
        </div>
        <div className="nc-hero-shade pointer-events-none absolute inset-x-0 top-0 h-[86vh] min-h-[600px]" />
        <div className="absolute inset-x-0 top-0 flex h-[86vh] min-h-[600px] flex-col items-center justify-end pb-20 text-center">
          <p className="nc-eyebrow mb-5">Collection Automne — Hiver 2026</p>
          <h1 className="nc-serif text-6xl leading-none md:text-8xl">
            L'ombre a
            <br />
            <em className="nc-italic">sa lumière</em>
          </h1>
          <div className="mt-10 flex gap-4">
            <button className="nc-btn">Découvrir la collection</button>
            <button className="nc-btn nc-btn-ghost">Voir le film</button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-8 py-32 text-center">
        <span className="nc-rule mx-auto mb-10 block" />
        <p className="nc-serif text-3xl leading-relaxed md:text-4xl">
          Une garde-robe pensée comme une <em className="nc-italic nc-gold">nuit parisienne</em> : des lignes nettes, des matières rares, et cette part de mystère qui ne se dévoile qu'à la lumière.
        </p>
        <p className="nc-eyebrow mt-10">Élise Moreau-Vasse, directrice artistique</p>
      </section>

      {/* Products */}
      <section className="px-8 pb-32">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="nc-serif text-4xl">
            La collection <em className="nc-italic">{cat}</em>
          </h2>
          <a href="#" className="nc-link text-[11px] uppercase tracking-[0.25em]">
            Voir les 86 pièces
          </a>
        </div>
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="nc-product group">
              <div className="nc-frame relative overflow-hidden">
                <img src={img(p.image, 700, 933)} alt={p.name} className="nc-product-img aspect-[3/4] w-full object-cover" />
                <img src={img(p.alt, 700, 933)} alt="" className="nc-product-alt absolute inset-0 aspect-[3/4] w-full object-cover" />
                {p.tag && <span className="nc-tag absolute left-4 top-4">{p.tag}</span>}
                <button onClick={() => setCart(cart + 1)} className="nc-quick absolute inset-x-4 bottom-4">
                  Ajouter au panier
                </button>
              </div>
              <div className="mt-6 text-center">
                <h3 className="nc-serif text-xl">{p.name}</h3>
                <p className="mt-1 text-xs text-[#9a948b]">{p.mat}</p>
                <p className="nc-gold mt-3 text-sm tracking-[0.12em]">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Campaign */}
      <section className="relative">
        <img src={img("1509631179647-0177331693ae", 2000, 1100)} alt="" className="nc-editorial h-[80vh] min-h-[520px] w-full object-cover" />
        <div className="nc-campaign-shade absolute inset-0" />
        <div className="absolute inset-0 flex items-center px-8 md:px-24">
          <div className="max-w-lg">
            <p className="nc-eyebrow mb-6">La campagne</p>
            <h2 className="nc-serif text-5xl leading-tight md:text-6xl">
              Minuit,
              <br />
              <em className="nc-italic">rue Cambon</em>
            </h2>
            <p className="mt-6 leading-relaxed text-[#cfc8bd]">Photographiée par Inès Valadier dans les salons d'un hôtel particulier du 1er arrondissement, la campagne célèbre la silhouette NOIR. dans l'intimité d'une nuit sans fin.</p>
            <button className="nc-btn mt-10">Explorer la campagne</button>
          </div>
        </div>
      </section>

      {/* Jewellery */}
      <section className="px-8 py-32">
        <div className="mb-16 text-center">
          <p className="nc-eyebrow mb-4">Haute joaillerie</p>
          <h2 className="nc-serif text-5xl">
            Les éclats <em className="nc-italic">de la nuit</em>
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {jewels.map((j) => (
            <article key={j.name} className="group text-center">
              <div className="nc-jewel overflow-hidden">
                <img src={img(j.image, 700, 800)} alt={j.name} className="nc-jewel-img aspect-[7/8] w-full object-cover transition duration-[1.5s] group-hover:scale-105" />
              </div>
              <h3 className="nc-serif mt-8 text-2xl">{j.name}</h3>
              <p className="mt-2 text-sm text-[#9a948b]">{j.desc}</p>
              <p className="nc-gold mt-3 text-sm tracking-[0.12em]">{j.price}</p>
              <a href="#" className="nc-link mt-5 inline-block text-[10px] uppercase tracking-[0.3em]">
                Prendre rendez-vous
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="nc-border-y grid md:grid-cols-2">
        <div className="relative min-h-[560px] overflow-hidden">
          <img src={img("1558769132-cb1aea458c5e", 1200, 1200)} alt="Atelier" className="nc-editorial absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-10 py-20 md:px-20">
          <p className="nc-eyebrow mb-6">Savoir-faire</p>
          <h2 className="nc-serif text-5xl leading-tight">
            Quarante heures <em className="nc-italic">pour un manteau</em>
          </h2>
          <p className="mt-6 leading-relaxed text-[#cfc8bd]">
            Chaque pièce est coupée, assemblée et finie à la main dans nos ateliers du Marais par vingt-deux artisans. Les boutons sont en corne véritable, les doublures en soie de Lyon, les coutures surpiquées au fil d'or.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              ["1987", "Fondation"],
              ["22", "Artisans"],
              ["40 h", "Par manteau"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="nc-serif nc-gold text-4xl">{v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#9a948b]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutiques */}
      <section className="px-8 py-32">
        <div className="mx-auto max-w-5xl">
          <p className="nc-eyebrow mb-4 text-center">Nos maisons</p>
          <h2 className="nc-serif mb-16 text-center text-5xl">Boutiques</h2>
          <div className="nc-divide">
            {boutiques.map(([c, a, h]) => (
              <div key={c} className="nc-row grid items-baseline gap-2 py-7 md:grid-cols-[1fr_1.5fr_1fr_auto]">
                <p className="nc-serif text-3xl">{c}</p>
                <p className="text-sm text-[#cfc8bd]">{a}</p>
                <p className="text-xs text-[#9a948b]">{h}</p>
                <a href="#" className="nc-link text-[10px] uppercase tracking-[0.3em]">
                  Itinéraire →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="nc-border-y px-8 py-24 text-center">
        <p className="nc-eyebrow mb-4">Le Cercle NOIR.</p>
        <h2 className="nc-serif text-4xl">
          Accès privé aux <em className="nc-italic">avant-premières</em>
        </h2>
        <form className="mx-auto mt-10 flex max-w-md items-end gap-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Votre adresse e-mail" className="nc-input flex-1" />
          <button className="nc-btn shrink-0">S'inscrire</button>
        </form>
      </section>

      <footer className="px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="nc-logo">NOIR.</div>
          {[
            ["Services", ["Rendez-vous privé", "Retouches", "Gravure", "Emballage cadeau"]],
            ["La Maison", ["Histoire", "Savoir-faire", "Engagements", "Carrières"]],
            ["Aide", ["Livraison", "Retours", "Entretien", "Contact"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="nc-eyebrow mb-4">{t}</p>
              <ul className="space-y-2.5 text-sm text-[#9a948b]">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="nc-link normal-case tracking-normal">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-[#6f6a62] md:flex-row">
          <p>© 2026 NOIR. Paris — Design system « Noir Couture »</p>
          <p>France (EUR €) · Français</p>
        </div>
      </footer>
    </div>
  );
}
