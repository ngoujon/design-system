import "./neo-brutal.css";

const nav = ["PRODUIT", "TARIFS", "BLOG", "EQUIPE"];

const features = [
  { title: "RAPIDE", desc: "Zéro fioriture. Chargement en moins de 100ms.", tag: "01" },
  { title: "HONNÊTE", desc: "Ce que tu vois, c'est ce que tu obtiens. Point.", tag: "02" },
  { title: "TENACE", desc: "Fonctionne même quand tout le reste plante.", tag: "03" },
];

const stats = [
  { value: "12K+", label: "équipes actives" },
  { value: "4.9/5", label: "note moyenne" },
  { value: "99.9%", label: "uptime" },
];

export default function NeoBrutalSite() {
  return (
    <div className="nb-root min-h-full">
      <header className="nb-border-b flex items-center justify-between px-6 py-4">
        <div className="nb-logo text-2xl">BLOCK.</div>
        <nav className="hidden gap-6 text-sm font-bold md:flex">
          {nav.map((item) => (
            <a key={item} href="#" className="nb-navlink">
              {item}
            </a>
          ))}
        </nav>
        <button className="nb-btn nb-btn-yellow">S'INSCRIRE →</button>
      </header>

      <section className="nb-border-b grid gap-0 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 px-6 py-16 md:px-12">
          <span className="nb-chip w-fit">★ NOUVEAU DROP 2026</span>
          <h1 className="text-6xl font-black uppercase leading-[0.95] md:text-7xl">
            Arrête de
            <br />
            <span className="nb-highlight">lisser</span> ton
            <br />
            produit.
          </h1>
          <p className="max-w-md text-lg font-medium text-black/70">
            BLOCK. est l'outil qui garde ses angles droits pendant que les
            autres arrondissent tout. Brut, direct, mémorable.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="nb-btn nb-btn-black">COMMENCER →</button>
            <button className="nb-btn nb-btn-white">VOIR LA DEMO</button>
          </div>
        </div>
        <div className="nb-border-l flex items-center justify-center bg-[#fff200] p-10">
          <div className="nb-card w-full max-w-sm bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-black uppercase">Dashboard</span>
              <span className="h-3 w-3 rounded-full bg-black" />
            </div>
            <div className="space-y-3">
              <div className="nb-bar h-8 w-full bg-[#ff5c5c]" />
              <div className="nb-bar h-8 w-3/4 bg-[#6ee7b7]" />
              <div className="nb-bar h-8 w-1/2 bg-[#7c5cff]" />
            </div>
          </div>
        </div>
      </section>

      <section className="nb-border-b grid divide-y-4 divide-black md:grid-cols-3 md:divide-x-4 md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-10 text-center">
            <p className="text-4xl font-black">{s.value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-black/60">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <section className="nb-border-b px-6 py-16 md:px-12">
        <h2 className="mb-10 text-4xl font-black uppercase">
          Pourquoi BLOCK. ?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="nb-card bg-white p-6">
              <span className="text-sm font-black text-black/30">{f.tag}</span>
              <h3 className="mt-2 text-2xl font-black uppercase">{f.title}</h3>
              <p className="mt-2 text-sm font-medium text-black/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nb-border-b bg-[#7c5cff] px-6 py-16 text-white md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-lg text-4xl font-black uppercase leading-tight">
            Prêt à casser les codes du design lisse ?
          </h2>
          <button className="nb-btn nb-btn-yellow shrink-0">
            REJOINDRE BLOCK. →
          </button>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 px-6 py-8 text-xs font-bold uppercase md:flex-row md:px-12">
        <p>© 2026 BLOCK. — Design system « Neo Brutal »</p>
        <div className="flex gap-6">
          <a href="#" className="nb-navlink">
            Mentions
          </a>
          <a href="#" className="nb-navlink">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
