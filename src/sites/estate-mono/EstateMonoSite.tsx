import { useState } from "react";

import { img } from "../../lib/img";
import "./estate-mono.css";

const listings = [
  { ref: "MA-2041", name: "Villa Belvédère", place: "Saint-Jean-Cap-Ferrat", price: "4 200 000 €", specs: ["6 pièces", "380 m²", "Terrain 2 100 m²"], image: "1613977257363-707ba9348227", type: "Villa", status: "Exclusivité" },
  { ref: "MA-2037", name: "Loft Marceau", place: "Paris 16e", price: "1 850 000 €", specs: ["3 pièces", "145 m²", "4e étage"], image: "1600607687939-ce8a6c25118c", type: "Appartement", status: "" },
  { ref: "MA-2033", name: "Domaine des Pins", place: "Saint-Tropez", price: "6 900 000 €", specs: ["8 pièces", "520 m²", "Piscine"], image: "1580587771525-78b9dba3b914", type: "Villa", status: "Nouveau" },
  { ref: "MA-2029", name: "Maison Lumière", place: "Arcachon", price: "2 350 000 €", specs: ["5 pièces", "240 m²", "Vue bassin"], image: "1600585154340-be6161a56a0c", type: "Maison", status: "" },
  { ref: "MA-2024", name: "Pavillon Moderne", place: "Neuilly-sur-Seine", price: "3 100 000 €", specs: ["7 pièces", "310 m²", "Jardin"], image: "1600596542815-ffad4c1539a9", type: "Maison", status: "Sous offre" },
  { ref: "MA-2019", name: "Appartement Haussmann", place: "Paris 8e", price: "2 780 000 €", specs: ["5 pièces", "198 m²", "Balcon filant"], image: "1600210492486-724fe5c67fb0", type: "Appartement", status: "" },
];

const gallery = ["1613490493576-7fde63acd811", "1618221195710-dd6b41faaea6", "1616486338812-3dadae4b4ace", "1600566753190-17f0baa2a6c3"];

const team = [
  { name: "Antoine de Varenne", role: "Fondateur · Paris Ouest", image: "1560250097-0b93528c311a" },
  { name: "Isabelle Roux", role: "Directrice · Côte d'Azur", image: "1508214751196-bcfd4ca60f91" },
  { name: "Mathieu Lefèvre", role: "Conseiller · Bassin d'Arcachon", image: "1519085360753-af0119f7cbe7" },
  { name: "Clara Benhamou", role: "Conseillère · Paris Centre", image: "1573497019940-1c28c88b4f3e" },
];

const districts = [
  { name: "Paris 16e", price: "12 480 €/m²", trend: "+1,8 %", image: "1487958449943-2429e8be8625" },
  { name: "Cap Ferrat", price: "21 900 €/m²", trend: "+4,2 %", image: "1512917774080-9991f1c4c750" },
  { name: "Neuilly", price: "11 350 €/m²", trend: "−0,6 %", image: "1479839672679-a46483c0e7c8" },
];

const journal = [
  { cat: "Marché", title: "Prix du luxe parisien : le retour des acheteurs internationaux", date: "22 septembre 2026" },
  { cat: "Architecture", title: "Les villas modernistes de la Riviera, un patrimoine recherché", date: "9 septembre 2026" },
  { cat: "Conseil", title: "Vendre en off-market : discrétion, méthode et bonnes pratiques", date: "28 août 2026" },
];

export default function EstateMonoSite() {
  const [type, setType] = useState("Tous");
  const [photo, setPhoto] = useState(0);
  const shown = listings.filter((l) => type === "Tous" || l.type === type);

  return (
    <div className="em-root min-h-full">
      <header className="em-header sticky top-0 z-30">
        <div className="flex items-center justify-between px-8 py-5">
          <nav className="hidden flex-1 gap-8 text-[11px] uppercase tracking-[0.25em] md:flex">
            {["Acheter", "Vendre", "Estimer"].map((l) => (
              <a key={l} href="#" className="em-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="em-logo text-center">
            MAISON
            <span className="block text-[9px] tracking-[0.5em] text-[#8a8a8a]">IMMOBILIER D'EXCEPTION</span>
          </div>
          <div className="flex flex-1 items-center justify-end gap-6">
            <a href="#" className="em-link hidden text-[11px] uppercase tracking-[0.25em] lg:block">
              +33 1 99 00 21 21
            </a>
            <button className="em-btn">Rendez-vous</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[620px] overflow-hidden">
        <img src={img("1613490493576-7fde63acd811", 2000, 1300)} alt="Villa contemporaine" className="em-photo absolute inset-0 h-full w-full object-cover" />
        <div className="em-hero-shade absolute inset-0" />
        <div className="relative flex h-full flex-col justify-end px-8 pb-12 text-[#fafafa]">
          <p className="em-eyebrow mb-4 text-[#d9d9d9]">Biens d'exception · Paris · Riviera · Atlantique</p>
          <h1 className="em-serif max-w-3xl text-6xl leading-[1.02] md:text-8xl">L'adresse que vous cherchiez sans le savoir.</h1>
          <div className="em-search mt-12 grid max-w-4xl grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            {[
              ["Localisation", "Paris, Cap Ferrat, Arcachon…"],
              ["Type de bien", "Villa, appartement"],
              ["Budget", "1 M€ — 5 M€"],
            ].map(([l, v]) => (
              <div key={l} className="em-search-cell px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a8a8a]">{l}</p>
                <p className="mt-1 text-sm text-[#1a1a1a]">{v}</p>
              </div>
            ))}
            <button className="em-search-btn px-8 text-[11px] uppercase tracking-[0.25em]">Rechercher</button>
          </div>
        </div>
        <p className="absolute bottom-12 right-8 hidden text-right text-[11px] uppercase tracking-[0.25em] text-[#d9d9d9] md:block">
          Villa Belvédère
          <br />
          Saint-Jean-Cap-Ferrat
        </p>
      </section>

      {/* Stats */}
      <section className="em-border-b">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-8 md:grid-cols-4">
          {[
            ["1994", "Fondée à Paris"],
            ["312", "Biens vendus en 2025"],
            ["4,1 Md€", "Volume de transactions"],
            ["7", "Agences en France"],
          ].map(([v, l], i) => (
            <div key={l} className={`py-12 text-center ${i > 0 ? "md:border-l md:border-[#e2e2e2]" : ""}`}>
              <p className="em-serif text-4xl">{v}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="em-eyebrow mb-3">Sélection</p>
            <h2 className="em-serif text-5xl">Propriétés à la vente</h2>
          </div>
          <div className="flex gap-6 text-[11px] uppercase tracking-[0.25em]">
            {["Tous", "Villa", "Maison", "Appartement"].map((t) => (
              <button key={t} onClick={() => setType(t)} className={`em-filter ${type === t ? "em-filter-active" : ""}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((l) => (
            <article key={l.ref} className="em-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img src={img(l.image, 900, 1100)} alt={l.name} className="em-photo aspect-[4/5] w-full object-cover transition duration-[1.2s] group-hover:scale-105" />
                {l.status && <span className="em-tag absolute left-4 top-4">{l.status}</span>}
                <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.25em] text-white/80">Réf. {l.ref}</span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#8a8a8a]">{l.place}</p>
                  <h3 className="em-serif mt-2 text-3xl">{l.name}</h3>
                </div>
                <p className="shrink-0 pt-1 text-sm">{l.price}</p>
              </div>
              <p className="mt-3 flex flex-wrap gap-x-3 text-sm text-[#6a6a6a]">
                {l.specs.map((s, i) => (
                  <span key={s}>
                    {i > 0 && <span className="mr-3 text-[#c4c4c4]">—</span>}
                    {s}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <button className="em-btn">Voir les 48 propriétés</button>
        </div>
      </section>

      {/* Quote band */}
      <section className="em-band px-8 py-28 text-center">
        <p className="em-eyebrow mb-8 text-[#8a8a8a]">Notre conviction</p>
        <blockquote className="em-serif mx-auto max-w-4xl text-4xl italic leading-snug md:text-5xl">
          « Une maison ne se vend pas. Elle se transmet, d'une histoire à une autre. »
        </blockquote>
        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#8a8a8a]">Antoine de Varenne, fondateur</p>
      </section>

      {/* Property of the month */}
      <section className="mx-auto grid max-w-7xl gap-12 px-8 py-28 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="overflow-hidden">
            <img key={photo} src={img(gallery[photo], 1400, 950)} alt="" className="em-photo em-fade aspect-[3/2] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <button key={g} onClick={() => setPhoto(i)} className={`em-thumb ${photo === i ? "em-thumb-active" : ""}`}>
                <img src={img(g, 300, 200)} alt="" className="em-photo aspect-[3/2] w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="em-eyebrow mb-4">Propriété du mois</p>
          <h2 className="em-serif text-5xl leading-tight">Villa Horizon, Èze</h2>
          <p className="mt-6 leading-relaxed text-[#4a4a4a]">
            Suspendue entre ciel et Méditerranée, cette villa d'architecte signée en 2019 déploie 420 m² de volumes épurés sur un terrain paysager de 3 000 m². Piscine à débordement, pool-house, cave à vin et vue imprenable sur la baie.
          </p>
          <dl className="em-specs mt-10 grid grid-cols-2">
            {[
              ["Surface", "420 m²"],
              ["Chambres", "5 suites"],
              ["Terrain", "3 000 m²"],
              ["DPE", "B"],
              ["Année", "2019"],
              ["Prix", "8 450 000 €"],
            ].map(([k, v]) => (
              <div key={k} className="py-4">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-[#8a8a8a]">{k}</dt>
                <dd className="em-serif mt-1 text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="em-btn em-btn-dark">Demander une visite privée</button>
            <button className="em-btn">Brochure PDF</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="em-border-y">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            ["I", "Acquérir", "Un accès à des biens off-market, une recherche confidentielle et une négociation menée pour vous."],
            ["II", "Vendre", "Photographie d'architecte, film, diffusion ciblée auprès d'une clientèle internationale qualifiée."],
            ["III", "Estimer", "Une estimation argumentée sous 72 heures, fondée sur 30 ans de transactions comparables."],
          ].map(([n, t, d], i) => (
            <div key={t} className={`px-8 py-16 ${i > 0 ? "md:border-l md:border-[#e2e2e2]" : ""}`}>
              <p className="em-serif text-2xl text-[#8a8a8a]">{n}</p>
              <h3 className="em-serif mt-6 text-4xl">{t}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-[#4a4a4a]">{d}</p>
              <a href="#" className="em-link mt-8 inline-block text-[11px] uppercase tracking-[0.25em]">
                En savoir plus —
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Districts */}
      <section className="mx-auto max-w-7xl px-8 py-28">
        <p className="em-eyebrow mb-3">Observatoire des prix · T3 2026</p>
        <h2 className="em-serif mb-14 text-5xl">Nos quartiers</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {districts.map((d) => (
            <div key={d.name} className="group relative overflow-hidden">
              <img src={img(d.image, 800, 1000)} alt={d.name} className="em-photo aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="em-hero-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#fafafa]">
                <h3 className="em-serif text-4xl">{d.name}</h3>
                <div className="mt-3 flex justify-between border-t border-white/30 pt-3 text-sm">
                  <span>Prix moyen · {d.price}</span>
                  <span>{d.trend} / an</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="em-soft px-8 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <h2 className="em-serif text-5xl">L'équipe</h2>
            <p className="max-w-md text-[#4a4a4a]">Vingt-deux conseillers, sept agences, une seule exigence : la discrétion.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {team.map((t) => (
              <div key={t.name}>
                <img src={img(t.image, 600, 760)} alt={t.name} className="em-photo aspect-[4/5] w-full object-cover" />
                <p className="em-serif mt-4 text-2xl">{t.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a]">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="em-serif text-5xl">Le Journal</h2>
          <a href="#" className="em-link text-[11px] uppercase tracking-[0.25em]">
            Tous les articles —
          </a>
        </div>
        <div className="em-divide">
          {journal.map((j) => (
            <a key={j.title} href="#" className="em-row grid items-baseline gap-4 py-8 md:grid-cols-[160px_1fr_200px]">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8a8a8a]">{j.cat}</span>
              <span className="em-serif text-3xl">{j.title}</span>
              <span className="text-sm text-[#8a8a8a] md:text-right">{j.date}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Estimate */}
      <section className="em-band">
        <div className="mx-auto grid max-w-7xl gap-12 px-8 py-24 md:grid-cols-2">
          <div>
            <p className="em-eyebrow mb-4 text-[#8a8a8a]">Estimation confidentielle</p>
            <h2 className="em-serif text-5xl leading-tight">Que vaut votre bien aujourd'hui ?</h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#b5b5b5]">Un conseiller vous rappelle sous 24 heures. Votre demande reste strictement confidentielle.</p>
          </div>
          <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
            {["Adresse du bien", "Surface habitable", "Votre e-mail"].map((l) => (
              <label key={l} className="block">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8a8a8a]">{l}</span>
                <input className="em-input mt-2" />
              </label>
            ))}
            <button className="em-btn em-btn-light mt-2 w-fit">Recevoir mon estimation</button>
          </form>
        </div>
      </section>

      <footer className="px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="em-logo">MAISON</div>
          {[
            ["Paris", "12 avenue Victor Hugo, 75116"],
            ["Côte d'Azur", "4 avenue Denis Séméria, 06230"],
            ["Atlantique", "18 boulevard de la Plage, 33120"],
          ].map(([c, a]) => (
            <div key={c}>
              <p className="text-[11px] uppercase tracking-[0.25em]">{c}</p>
              <p className="mt-2 text-sm text-[#6a6a6a]">{a}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#e2e2e2] pt-6 text-[11px] uppercase tracking-[0.2em] text-[#8a8a8a] md:flex-row">
          <p>© 2026 Maison Immobilier — design system « Estate Mono »</p>
          <p>Carte T n° CPI 7501 2026 000 000 123</p>
        </div>
      </footer>
    </div>
  );
}
