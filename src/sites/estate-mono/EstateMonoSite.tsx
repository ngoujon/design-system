import "./estate-mono.css";

const listings = [
  { name: "Villa Belvédère", place: "Cap Ferrat", price: "4 200 000 €", specs: "6 pièces · 380 m²" },
  { name: "Loft Marceau", place: "Paris 16e", price: "1 850 000 €", specs: "3 pièces · 145 m²" },
  { name: "Domaine des Pins", place: "Saint-Tropez", price: "6 900 000 €", specs: "8 pièces · 520 m²" },
];

export default function EstateMonoSite() {
  return (
    <div className="em-root min-h-full">
      <header className="em-border-b flex items-center justify-between px-8 py-6">
        <div className="em-logo">MAISON</div>
        <nav className="hidden gap-8 text-xs uppercase tracking-widest md:flex">
          <a href="#" className="em-link">Propriétés</a>
          <a href="#" className="em-link">Estimer</a>
          <a href="#" className="em-link">Agence</a>
        </nav>
        <button className="em-btn">Prendre rendez-vous</button>
      </header>

      <section className="em-hero flex flex-col items-start justify-end px-8 pb-16 pt-40">
        <p className="em-eyebrow mb-3">Biens d'exception</p>
        <h1 className="max-w-2xl text-5xl font-light leading-tight md:text-6xl">
          L'adresse que vous cherchiez sans le savoir.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-light">Sélection actuelle</h2>
          <a href="#" className="em-link text-xs uppercase tracking-widest">Toutes les propriétés →</a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {listings.map((l) => (
            <div key={l.name}>
              <div className="em-photo mb-4" />
              <p className="text-lg">{l.name}</p>
              <p className="text-sm text-black/50">{l.place}</p>
              <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 text-sm">
                <span>{l.specs}</span>
                <span className="font-medium">{l.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="em-band px-8 py-20 text-center">
        <p className="mx-auto max-w-xl text-2xl font-light leading-relaxed">
          Depuis 1998, nous accompagnons une clientèle exigeante dans
          l'acquisition de biens rares.
        </p>
      </section>

      <footer className="em-border-t flex items-center justify-between px-8 py-6 text-xs uppercase tracking-widest text-black/50">
        <p>© 2026 Maison — design system « Estate Mono »</p>
        <p>Paris · Londres · Genève</p>
      </footer>
    </div>
  );
}
