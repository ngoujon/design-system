import "./craft-paper.css";

const stalls = [
  { name: "Poterie de Léon", craft: "Céramique", loc: "Atelier n°4" },
  { name: "Fil & Bois", craft: "Menuiserie", loc: "Atelier n°9" },
  { name: "Miel des Coteaux", craft: "Apiculture", loc: "Atelier n°2" },
];

export default function CraftPaperSite() {
  return (
    <div className="cp-root min-h-full">
      <header className="cp-border-b flex items-center justify-between px-6 py-6">
        <div className="cp-logo">Atelier Marché</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="cp-link">Artisans</a>
          <a href="#" className="cp-link">Marchés</a>
          <a href="#" className="cp-link">Notre histoire</a>
        </nav>
        <button className="cp-btn">Trouver un marché</button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="cp-stamp mx-auto mb-6 w-fit">Fait main depuis 2016</p>
        <h1 className="cp-hand text-6xl md:text-7xl">
          Le savoir-faire, à portée de main.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-[#5c4a3a]">
          Atelier Marché rassemble des centaines d'artisans qui façonnent
          encore chaque objet à la main.
        </p>
        <button className="cp-btn cp-btn-primary mt-8">Découvrir les artisans</button>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="cp-hand mb-8 text-center text-3xl">Cette semaine à l'atelier</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {stalls.map((s) => (
            <div key={s.name} className="cp-card p-6">
              <div className="cp-photo mb-4" />
              <p className="cp-hand text-xl">{s.name}</p>
              <p className="text-sm text-[#8a7361]">{s.craft} · {s.loc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cp-band px-6 py-16 text-center">
        <p className="cp-hand mx-auto max-w-lg text-3xl leading-relaxed">
          « Chaque pièce raconte les mains qui l'ont façonnée. »
        </p>
      </section>

      <footer className="cp-border-t px-6 py-8 text-center text-xs text-[#8a7361]">
        © 2026 Atelier Marché — design system « Craft Paper »
      </footer>
    </div>
  );
}
