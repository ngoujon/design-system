import "./atelier-cream.css";

const work = [
  { name: "Nordis — Identité visuelle", year: "2025" },
  { name: "Halo — App mobile", year: "2024" },
  { name: "Verre — Site e-commerce", year: "2024" },
];

export default function AtelierCreamSite() {
  return (
    <div className="ac-root min-h-full">
      <header className="flex items-center justify-between px-6 py-6">
        <div className="ac-logo">Hugo Vasseur</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="ac-link">Travaux</a>
          <a href="#" className="ac-link">À propos</a>
          <a href="#" className="ac-link">Contact</a>
        </nav>
        <span className="ac-status">Disponible en octobre</span>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl font-medium leading-snug text-[#2e2a25] md:text-5xl">
          Designer produit indépendant, basé à Lyon — je conçois des
          interfaces qui font gagner du temps.
        </h1>
        <div className="mt-8 flex gap-4">
          <button className="ac-btn ac-btn-primary">Voir mes travaux</button>
          <button className="ac-btn">Me contacter</button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <p className="ac-eyebrow mb-6">Sélection de projets</p>
        <div className="ac-divide">
          {work.map((w) => (
            <div key={w.name} className="flex items-center justify-between py-5">
              <p className="text-lg text-[#2e2a25]">{w.name}</p>
              <span className="text-sm text-[#8a8072]">{w.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <div className="ac-card p-8">
          <p className="text-lg leading-relaxed text-[#2e2a25]">
            « J'ai travaillé avec des équipes produit chez Nordis, Halo et
            Verre, toujours avec la même obsession : la clarté avant
            l'esthétique. »
          </p>
        </div>
      </section>

      <footer className="border-t border-[#e0d8c8] px-6 py-8 text-xs text-[#8a8072]">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <p>© 2026 Hugo Vasseur — design system « Atelier Cream »</p>
          <p>hello@hugovasseur.com</p>
        </div>
      </footer>
    </div>
  );
}
