import { useState } from "react";

import { img } from "../../lib/img";
import "./swiss-axis.css";

const projects = [
  { n: "01", name: "Maison Verrière", place: "Lausanne", year: "2025", type: "Habitation", area: "420 m²", status: "Livré", image: "1487958449943-2429e8be8625" },
  { n: "02", name: "Tour Méridien", place: "Genève", year: "2024", type: "Bureaux", area: "18 600 m²", status: "Livré", image: "1481026469463-66327c86e544" },
  { n: "03", name: "Pavillon Blanc", place: "Zurich", year: "2026", type: "Culturel", area: "2 100 m²", status: "Chantier", image: "1524230572899-a752b3835840" },
  { n: "04", name: "Bibliothèque Nord", place: "Bâle", year: "2023", type: "Public", area: "6 800 m²", status: "Livré", image: "1493397212122-2b85dda8106b" },
  { n: "05", name: "Logements Rhône", place: "Sion", year: "2026", type: "Habitation", area: "9 400 m²", status: "Études", image: "1479839672679-a46483c0e7c8" },
  { n: "06", name: "Halle Industrielle", place: "Winterthour", year: "2022", type: "Réhabilitation", area: "12 000 m²", status: "Livré", image: "1497366811353-6870744d04b2" },
];

const awards = [
  ["2025", "Prix Meret Oppenheim", "Maison Verrière"],
  ["2024", "Swiss Architectural Award — Finaliste", "Tour Méridien"],
  ["2023", "Distinction Romande d'Architecture", "Bibliothèque Nord"],
  ["2021", "Best Architects 22 — Gold", "Halle Industrielle"],
];

const team = [
  { name: "Luca Brenner", role: "Associé fondateur", image: "1519085360753-af0119f7cbe7" },
  { name: "Anna Keller", role: "Associée", image: "1438761681033-6461ffad8d80" },
  { name: "Marc Dufour", role: "Chef de projet", image: "1506794778202-cad84cf45f1d" },
  { name: "Sara Nguyen", role: "Architecte", image: "1488426862026-3ee34a7d66df" },
];

export default function SwissAxisSite() {
  const [hover, setHover] = useState(0);
  const [view, setView] = useState<"liste" | "grille">("liste");

  return (
    <div className="sa-root min-h-full">
      <header className="sa-border-b sa-grid12 sticky top-0 z-30 bg-white">
        <div className="sa-cell col-span-3 flex items-center py-5">
          <span className="sa-logo">AXIS</span>
          <span className="sa-square ml-2" />
        </div>
        <nav className="sa-cell col-span-6 flex items-center gap-8 py-5 text-[11px] uppercase tracking-[0.2em] max-md:hidden">
          {["Projets", "Studio", "Publications", "Contact"].map((l, i) => (
            <a key={l} href="#" className="sa-link">
              <span className="sa-red mr-1">{String(i + 1).padStart(2, "0")}</span>
              {l}
            </a>
          ))}
        </nav>
        <p className="sa-cell col-span-3 flex items-center justify-end py-5 text-right text-[11px] uppercase tracking-[0.2em] text-black/50 max-md:col-span-9">
          Lausanne — Zurich · Établi 2011
        </p>
      </header>

      {/* Hero */}
      <section className="sa-border-b grid md:grid-cols-12">
        <div className="sa-border-r flex flex-col justify-between px-6 py-8 md:col-span-3">
          <p className="sa-index">N° 26</p>
          <div className="mt-10 space-y-1 text-[11px] uppercase tracking-[0.2em] text-black/50">
            <p>Index des projets</p>
            <p>Automne 2026</p>
          </div>
        </div>
        <div className="sa-border-r px-6 py-8 md:col-span-5">
          <h1 className="sa-h1">
            Architecture
            <br />
            au service
            <br />
            du vide.
          </h1>
          <p className="mt-10 max-w-sm text-[15px] leading-relaxed text-black/70">
            AXIS est un bureau d'architecture de 34 personnes. Nous concevons des bâtiments publics, des logements et des lieux de travail où la lumière et la structure font l'essentiel du travail.
          </p>
        </div>
        <div className="relative md:col-span-4">
          <img src={img(projects[2].image, 900, 1100)} alt="Pavillon Blanc" className="sa-photo h-full min-h-[420px] w-full object-cover" />
          <p className="absolute bottom-0 left-0 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">03</span> Pavillon Blanc, Zurich
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="sa-border-b grid grid-cols-2 md:grid-cols-4">
        {[
          ["148", "Projets réalisés"],
          ["34", "Collaborateurs"],
          ["12", "Prix et distinctions"],
          ["2", "Ateliers"],
        ].map(([v, l], i) => (
          <div key={l} className={`px-6 py-8 ${i < 3 ? "sa-border-r" : ""}`}>
            <p className="sa-num">{v}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-black/50">{l}</p>
          </div>
        ))}
      </section>

      {/* Project index */}
      <section className="sa-border-b">
        <div className="sa-border-b flex items-center justify-between px-6 py-4">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">A.</span> Index des projets — {projects.length} / 148
          </p>
          <div className="flex text-[11px] uppercase tracking-[0.2em]">
            {(["liste", "grille"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`sa-toggle ${view === v ? "sa-toggle-on" : ""}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {view === "liste" ? (
          <div className="grid md:grid-cols-12">
            <div className="sa-border-r md:col-span-8">
              <div className="sa-row sa-row-head grid grid-cols-[48px_1.4fr_1fr_1fr_80px] px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-black/45 max-md:grid-cols-[40px_1fr_70px]">
                <span>N°</span>
                <span>Projet</span>
                <span className="max-md:hidden">Lieu</span>
                <span className="max-md:hidden">Programme</span>
                <span className="text-right">Année</span>
              </div>
              {projects.map((p, i) => (
                <div
                  key={p.n}
                  onMouseEnter={() => setHover(i)}
                  className={`sa-row grid cursor-pointer grid-cols-[48px_1.4fr_1fr_1fr_80px] items-baseline px-6 py-5 max-md:grid-cols-[40px_1fr_70px] ${hover === i ? "sa-row-on" : ""}`}
                >
                  <span className="sa-red text-sm font-bold">{p.n}</span>
                  <span className="text-2xl font-medium tracking-tight">{p.name}</span>
                  <span className="text-sm max-md:hidden">{p.place}</span>
                  <span className="text-sm max-md:hidden">{p.type}</span>
                  <span className="text-right text-sm">{p.year}</span>
                </div>
              ))}
            </div>
            <div className="relative md:col-span-4 max-md:hidden">
              <img key={hover} src={img(projects[hover].image, 800, 1000)} alt="" className="sa-photo sa-fade absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 bg-white text-[11px] uppercase tracking-[0.2em]">
                <p className="sa-border-t sa-border-r px-4 py-3">
                  Surface
                  <br />
                  <span className="text-base normal-case tracking-normal">{projects[hover].area}</span>
                </p>
                <p className="sa-border-t px-4 py-3">
                  Statut
                  <br />
                  <span className="sa-red text-base normal-case tracking-normal">{projects[hover].status}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.n} className={`group ${i % 3 !== 2 ? "sa-border-r" : ""} ${i < 3 ? "sa-border-b" : ""}`}>
                <div className="overflow-hidden">
                  <img src={img(p.image, 700, 560)} alt={p.name} className="sa-photo aspect-[5/4] w-full object-cover" />
                </div>
                <div className="flex items-baseline gap-4 px-6 py-4">
                  <span className="sa-red text-sm font-bold">{p.n}</span>
                  <span className="text-lg font-medium">{p.name}</span>
                  <span className="ml-auto text-[11px] uppercase tracking-[0.2em] text-black/50">
                    {p.place}, {p.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Featured project */}
      <section className="sa-border-b grid md:grid-cols-12">
        <div className="sa-border-r px-6 py-10 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">B.</span> Projet en détail
          </p>
        </div>
        <div className="md:col-span-9">
          <img src={img("1493397212122-2b85dda8106b", 1600, 800)} alt="Bibliothèque Nord" className="sa-photo sa-border-b aspect-[2/1] w-full object-cover" />
          <div className="grid md:grid-cols-3">
            <div className="sa-border-r px-6 py-8">
              <p className="sa-index-sm">04</p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight">Bibliothèque Nord, Bâle</h2>
            </div>
            <div className="sa-border-r px-6 py-8 text-[15px] leading-relaxed text-black/75">
              Une enveloppe de lames d'aluminium perforé filtre la lumière du nord et unifie trois bâtiments existants. À l'intérieur, une seule grande salle de lecture sur trois niveaux, sans poteau.
            </div>
            <dl className="px-6 py-8 text-sm">
              {[
                ["Maître d'ouvrage", "Canton de Bâle-Ville"],
                ["Surface", "6 800 m²"],
                ["Coût", "CHF 42 M"],
                ["Photographie", "Anna Keller"],
              ].map(([k, v]) => (
                <div key={k} className="sa-border-b flex justify-between py-2">
                  <dt className="text-black/50">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sa-border-b grid md:grid-cols-12">
        <div className="sa-border-r px-6 py-16 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">C.</span> Philosophie
          </p>
        </div>
        <div className="px-6 py-16 md:col-span-9">
          <p className="max-w-3xl text-3xl leading-snug tracking-tight md:text-4xl">
            Nous concevons des structures où la lumière, la matière brute et la grille rigoureuse s'accordent <span className="sa-red">sans ornement superflu.</span>
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Grille", "Chaque plan part d'une trame de 7,20 m. Elle ordonne la structure, les façades et le mobilier."],
              ["Matière", "Béton, bois, verre. Trois matériaux maximum par projet, laissés visibles et honnêtes."],
              ["Lumière", "Nous dessinons les ombres avant les murs. La lumière naturelle est notre premier matériau."],
            ].map(([t, d], i) => (
              <div key={t}>
                <p className="text-sm font-bold">
                  <span className="sa-red">{i + 1}.</span> {t}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-black/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="sa-border-b grid md:grid-cols-12">
        <div className="sa-border-r px-6 py-10 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">D.</span> Distinctions
          </p>
        </div>
        <div className="md:col-span-9">
          {awards.map(([y, a, p], i) => (
            <div key={a} className={`grid grid-cols-[80px_1fr] px-6 py-5 md:grid-cols-[100px_1fr_1fr] ${i < awards.length - 1 ? "sa-border-b" : ""}`}>
              <span className="sa-red font-bold">{y}</span>
              <span className="text-lg font-medium">{a}</span>
              <span className="text-black/55 max-md:col-start-2">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="sa-border-b grid md:grid-cols-12">
        <div className="sa-border-r px-6 py-10 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em]">
            <span className="sa-red">E.</span> Studio
          </p>
          <p className="mt-6 text-sm text-black/60">34 architectes, ingénieurs et dessinateurs à Lausanne et Zurich.</p>
        </div>
        <div className="grid grid-cols-2 md:col-span-9 md:grid-cols-4">
          {team.map((t, i) => (
            <div key={t.name} className={i < 3 ? "sa-border-r" : ""}>
              <img src={img(t.image, 500, 620)} alt={t.name} className="sa-photo aspect-[5/6.2] w-full object-cover" />
              <div className="sa-border-t px-4 py-3">
                <p className="font-medium">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="grid md:grid-cols-12">
        <div className="sa-border-r bg-[#cc3333] px-6 py-16 text-white md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">F. Contact</p>
          <p className="mt-6 text-5xl font-medium leading-none tracking-tight md:text-6xl">
            Parlons
            <br />
            de votre
            <br />
            projet.
          </p>
        </div>
        <div className="sa-border-r px-6 py-16 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">Lausanne</p>
          <p className="mt-3 text-[15px] leading-relaxed">
            Avenue de Rhodanie 58
            <br />
            1007 Lausanne
            <br />
            +41 21 000 00 00
          </p>
        </div>
        <div className="px-6 py-16 md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">Zurich</p>
          <p className="mt-3 text-[15px] leading-relaxed">
            Hardturmstrasse 161
            <br />
            8005 Zürich
            <br />
            studio@axis-arch.ch
          </p>
        </div>
      </section>

      <footer className="sa-border-t sa-grid12 text-[11px] uppercase tracking-[0.2em] text-black/50">
        <p className="sa-cell col-span-6 py-5">© 2026 AXIS Architectes SA</p>
        <p className="sa-cell col-span-3 py-5 max-md:hidden">Instagram · LinkedIn</p>
        <p className="sa-cell col-span-3 py-5 text-right max-md:col-span-6">Design system « Swiss Axis »</p>
      </footer>
    </div>
  );
}
