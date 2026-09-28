import "./swiss-axis.css";

const projects = [
  { n: "01", name: "Maison Verrière", place: "Lausanne, 2025" },
  { n: "02", name: "Tour Méridien", place: "Genève, 2024" },
  { n: "03", name: "Pavillon Blanc", place: "Zurich, 2026" },
  { n: "04", name: "Bibliothèque Nord", place: "Bâle, 2023" },
];

export default function SwissAxisSite() {
  return (
    <div className="sa-root min-h-full">
      <header className="sa-border-b grid grid-cols-3 items-center px-6 py-5">
        <div className="sa-logo">AXIS</div>
        <nav className="flex justify-center gap-8 text-xs uppercase tracking-widest">
          <a href="#" className="sa-link">Projets</a>
          <a href="#" className="sa-link">Studio</a>
          <a href="#" className="sa-link">Contact</a>
        </nav>
        <p className="text-right text-xs uppercase tracking-widest text-black/50">
          Établi 2011
        </p>
      </header>

      <section className="sa-border-b grid md:grid-cols-[1fr_2fr]">
        <div className="sa-border-r flex items-center px-6 py-16">
          <p className="sa-index">N° 26</p>
        </div>
        <div className="px-6 py-16">
          <h1 className="text-6xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            Architecture
            <br />
            au service
            <br />
            du vide.
          </h1>
        </div>
      </section>

      <section className="sa-border-b grid divide-y divide-black md:grid-cols-2 md:divide-x md:divide-y-0">
        {projects.map((p) => (
          <div key={p.n} className="flex items-center gap-6 px-6 py-10">
            <span className="sa-index-sm">{p.n}</span>
            <div className="sa-thumb" />
            <div>
              <p className="text-lg font-medium">{p.name}</p>
              <p className="text-xs uppercase tracking-widest text-black/50">{p.place}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-3">
        <div className="sa-border-r px-6 py-16">
          <p className="text-xs uppercase tracking-widest text-black/50">Philosophie</p>
        </div>
        <div className="sa-border-r px-6 py-16 md:col-span-2">
          <p className="max-w-xl text-2xl leading-snug">
            Nous concevons des structures où la lumière, la matière brute et
            la grille rigoureuse s'accordent sans ornement superflu.
          </p>
        </div>
      </section>

      <footer className="sa-border-t flex items-center justify-between px-6 py-6 text-xs uppercase tracking-widest text-black/50">
        <p>© 2026 AXIS Studio</p>
        <p>Design system « Swiss Axis »</p>
      </footer>
    </div>
  );
}
