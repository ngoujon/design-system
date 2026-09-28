import "./street-block.css";

const drop = [
  { name: "HOODIE 001", price: "€120" },
  { name: "CARGO PANT", price: "€95" },
  { name: "CAP LOGO", price: "€40" },
  { name: "TEE RAW", price: "€55" },
];

export default function StreetBlockSite() {
  return (
    <div className="sb-root min-h-full">
      <div className="sb-marquee-wrap">
        <div className="sb-marquee">
          {"DROP 07 DISPONIBLE MAINTENANT · LIVRAISON 24H · ".repeat(3)}
        </div>
      </div>

      <header className="sb-border-b flex items-center justify-between px-6 py-5">
        <div className="sb-logo">BLOKHAUS</div>
        <nav className="hidden gap-6 text-sm font-black uppercase md:flex">
          <a href="#" className="sb-link">Nouveautés</a>
          <a href="#" className="sb-link">Homme</a>
          <a href="#" className="sb-link">Archive</a>
        </nav>
        <button className="sb-btn">PANIER (0)</button>
      </header>

      <section className="sb-border-b px-6 py-16 text-center">
        <p className="sb-eyebrow mb-4">ÉDITION LIMITÉE — 500 PIÈCES</p>
        <h1 className="sb-title text-7xl md:text-8xl">DROP 07</h1>
        <button className="sb-btn sb-btn-accent mt-8">ACHETER MAINTENANT →</button>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
          {drop.map((d) => (
            <div key={d.name}>
              <div className="sb-photo mb-3" />
              <p className="text-sm font-black uppercase">{d.name}</p>
              <p className="text-sm text-black/60">{d.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sb-border-t sb-border-b bg-black px-6 py-16 text-center text-white">
        <h2 className="text-4xl font-black uppercase">Rejoins le mouvement</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          Inscris-toi pour accéder aux drops en avant-première.
        </p>
        <button className="sb-btn sb-btn-white mt-6">S'INSCRIRE</button>
      </section>

      <footer className="flex items-center justify-between px-6 py-6 text-xs font-black uppercase">
        <p>© 2026 BLOKHAUS — design system « Street Block »</p>
        <p>#blokhaus</p>
      </footer>
    </div>
  );
}
