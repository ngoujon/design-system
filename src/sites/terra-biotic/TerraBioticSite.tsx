import "./terra-biotic.css";

const pillars = [
  { title: "Sourcé localement", desc: "Des matières premières cultivées à moins de 200km de nos ateliers." },
  { title: "Zéro plastique", desc: "Emballages en fibre de champignon et papier ensemencé." },
  { title: "Cycle complet", desc: "Chaque produit revient à la terre en moins de 6 mois." },
];

export default function TerraBioticSite() {
  return (
    <div className="tb-root min-h-full">
      <header className="flex items-center justify-between px-6 py-6">
        <div className="tb-logo">🌱 Terra</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="tb-link">Produits</a>
          <a href="#" className="tb-link">Notre impact</a>
          <a href="#" className="tb-link">Journal</a>
        </nav>
        <button className="tb-btn">La boutique</button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <span className="tb-chip mx-auto mb-6 w-fit">🌿 Certifié régénératif</span>
        <h1 className="text-5xl font-semibold leading-tight text-[#2f3b2a] md:text-6xl">
          Cultivé avec la terre,
          <br />
          pas contre elle.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-[#5a6650]">
          Terra conçoit des objets du quotidien qui régénèrent les sols plutôt
          que de les épuiser.
        </p>
        <button className="tb-btn tb-btn-primary mt-8">Découvrir la gamme</button>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="tb-organic-frame flex h-64 items-center justify-center md:h-80">
          <span className="text-6xl">🍃</span>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold text-[#2f3b2a]">
          Nos engagements
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="tb-card p-6">
              <div className="tb-leaf mb-4" />
              <h3 className="text-lg font-semibold text-[#2f3b2a]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#5a6650]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tb-band px-6 py-16 text-center">
        <p className="mx-auto max-w-xl text-2xl font-medium text-[#f2f0e6]">
          « 40 000 arbres plantés depuis 2024, un pour chaque commande. »
        </p>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-[#5a6650]">
        © 2026 Terra — design system « Terra Biotic »
      </footer>
    </div>
  );
}
