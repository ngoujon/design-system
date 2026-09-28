import "./quiet-editorial.css";

const nav = ["Journal", "Studio", "Objets", "À propos"];

const articles = [
  {
    n: "01",
    title: "La lenteur comme méthode",
    excerpt:
      "Pourquoi les interfaces les plus mémorables de 2026 ralentissent le regard au lieu de le capter.",
  },
  {
    n: "02",
    title: "Le blanc n'est pas vide",
    excerpt:
      "Redonner du poids à l'espace négatif dans les systèmes de design contemporains.",
  },
  {
    n: "03",
    title: "Typographie, matière première",
    excerpt:
      "Une conversation avec trois studios qui construisent leur identité autour d'une seule police.",
  },
];

export default function QuietEditorialSite() {
  return (
    <div className="qe-root min-h-full">
      <header className="qe-container flex items-center justify-between py-8">
        <div className="qe-serif text-xl tracking-tight">Marge</div>
        <nav className="hidden gap-10 text-sm md:flex">
          {nav.map((item) => (
            <a key={item} href="#" className="qe-link">
              {item}
            </a>
          ))}
        </nav>
        <a href="#" className="qe-link text-sm">
          S'abonner
        </a>
      </header>

      <section className="qe-container qe-border-t py-20">
        <p className="qe-eyebrow mb-6">Numéro 14 — Automne 2026</p>
        <h1 className="qe-serif max-w-3xl text-6xl leading-[1.05] md:text-7xl">
          L'art discret de ne rien ajouter de trop.
        </h1>
        <p className="qe-lede mt-8 max-w-xl">
          Marge est un journal sur les systèmes de design qui choisissent la
          retenue : une grille, une police, une couleur d'accent — et rien
          d'autre.
        </p>
      </section>

      <section className="qe-container qe-border-t grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="qe-frame" />
        <div className="flex flex-col justify-center">
          <p className="qe-eyebrow mb-4">À la une</p>
          <h2 className="qe-serif text-4xl leading-tight">
            Comment trois marques ont appris à dire moins pour être entendues
            davantage
          </h2>
          <p className="qe-lede mt-4">
            Un entretien long format sur la discipline visuelle, la
            typographie comme voix, et le courage de laisser respirer une
            page.
          </p>
          <a href="#" className="qe-link mt-6 inline-block text-sm">
            Lire l'article →
          </a>
        </div>
      </section>

      <section className="qe-container qe-border-t py-16">
        <p className="qe-eyebrow mb-10">Derniers essais</p>
        <div className="qe-divide">
          {articles.map((a) => (
            <article key={a.n} className="grid gap-4 py-8 md:grid-cols-[80px_1fr_auto]">
              <span className="qe-num">{a.n}</span>
              <div>
                <h3 className="qe-serif text-2xl">{a.title}</h3>
                <p className="qe-lede mt-2 max-w-lg text-base">{a.excerpt}</p>
              </div>
              <a href="#" className="qe-link self-start text-sm">
                Lire →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="qe-container qe-border-t py-20 text-center">
        <h2 className="qe-serif mx-auto max-w-lg text-4xl">
          Recevez un essai par semaine. Rien de plus.
        </h2>
        <form className="mx-auto mt-8 flex max-w-sm items-center gap-0 qe-border-b">
          <input
            type="email"
            placeholder="vous@exemple.com"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-black/40"
          />
          <button type="button" className="qe-link shrink-0 text-sm">
            S'abonner →
          </button>
        </form>
      </section>

      <footer className="qe-container qe-border-t flex flex-col items-center justify-between gap-4 py-10 text-xs text-black/50 md:flex-row">
        <p>© 2026 Marge — Design system « Quiet Editorial »</p>
        <div className="flex gap-6">
          <a href="#" className="qe-link">
            Mentions légales
          </a>
          <a href="#" className="qe-link">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
