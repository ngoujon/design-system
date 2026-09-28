import "./noir-couture.css";

const products = [
  { name: "Manteau Ombre", price: "1 890 €" },
  { name: "Sac Méridien", price: "2 340 €" },
  { name: "Robe Solstice", price: "1 420 €" },
];

export default function NoirCoutureSite() {
  return (
    <div className="nc-root min-h-full">
      <header className="flex items-center justify-between px-8 py-6">
        <button className="nc-icon-btn md:hidden" aria-hidden>☰</button>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          <a href="#" className="nc-link">Femme</a>
          <a href="#" className="nc-link">Homme</a>
          <a href="#" className="nc-link">Maison</a>
        </nav>
        <div className="nc-logo">NOIR.</div>
        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.2em]">
          <a href="#" className="nc-link hidden md:inline">Boutiques</a>
          <a href="#" className="nc-link">Panier (0)</a>
        </div>
      </header>

      <section className="nc-hero flex flex-col items-center justify-center px-6 py-28 text-center">
        <p className="nc-eyebrow mb-4">Collection Automne — Hiver 2026</p>
        <h1 className="nc-serif text-6xl md:text-7xl">L'ombre a sa lumière</h1>
        <button className="nc-btn mt-10">Découvrir la collection</button>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="nc-serif text-3xl">Pièces signature</h2>
          <a href="#" className="nc-link text-xs uppercase tracking-[0.2em]">Tout voir →</a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="nc-product-frame mb-4" />
              <p className="text-sm uppercase tracking-wide">{p.name}</p>
              <p className="nc-price mt-1 text-sm">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nc-band px-8 py-24 text-center">
        <p className="nc-eyebrow mb-4">Savoir-faire</p>
        <h2 className="nc-serif mx-auto max-w-xl text-4xl leading-snug">
          Chaque pièce est façonnée à la main, dans nos ateliers parisiens.
        </h2>
      </section>

      <footer className="border-t border-white/10 px-8 py-10 text-xs uppercase tracking-[0.15em] text-white/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p>© 2026 NOIR. — design system « Noir Couture »</p>
          <div className="flex gap-6">
            <a href="#" className="nc-link">Confidentialité</a>
            <a href="#" className="nc-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
