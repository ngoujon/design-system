import { img } from "../../lib/img";
import "./quiet-editorial.css";

const nav = ["Essais", "Entretiens", "Objets", "Lieux", "Archives"];

const secondary = [
  { cat: "Lieux", title: "Une maison de brume dans les Cévennes", author: "Claire Dumas", read: "12 min", image: "1500534314209-a25ddb2bd429" },
  { cat: "Objets", title: "La céramique de Saori Ueda, ou l'éloge de l'imperfection", author: "Paul Arnaud", read: "8 min", image: "1565193566173-7a0ee3dbe261" },
  { cat: "Entretien", title: "« Je dessine des pages comme on dessine des pièces »", author: "Léna Morel", read: "15 min", image: "1438761681033-6461ffad8d80" },
];

const essays = [
  { n: "01", title: "La lenteur comme méthode", excerpt: "Pourquoi les interfaces les plus mémorables de 2026 ralentissent le regard au lieu de le capter.", author: "Jeanne Lestrade", date: "22 sept." },
  { n: "02", title: "Le blanc n'est pas vide", excerpt: "Redonner du poids à l'espace négatif dans les systèmes de design contemporains.", author: "Hugo Martel", date: "15 sept." },
  { n: "03", title: "Typographie, matière première", excerpt: "Une conversation avec trois studios qui construisent leur identité autour d'une seule police.", author: "Léna Morel", date: "8 sept." },
  { n: "04", title: "Contre la notification", excerpt: "Petit manifeste pour des produits numériques qui savent se taire.", author: "Samuel Oyelaran", date: "1 sept." },
];

const objects = [
  { name: "Tasses en grès, lot de deux", maker: "Atelier Hiro, Kyoto", price: "64 €", image: "1610701596007-11502861dcfa" },
  { name: "Carnet relié à la main", maker: "Papeterie Sève, Paris", price: "38 €", image: "1512820790803-83ca734da794" },
  { name: "Bougie « Cèdre & encre »", maker: "Maison Laine, Lyon", price: "42 €", image: "1602874801007-bd458bb1b8b6" },
];

const contributors = [
  { name: "Jeanne Lestrade", role: "Rédactrice en chef", image: "1508214751196-bcfd4ca60f91" },
  { name: "Hugo Martel", role: "Essayiste", image: "1472099645785-5658abf4ff4e" },
  { name: "Léna Morel", role: "Grand reporter", image: "1544005313-94ddf0286df2" },
  { name: "Samuel Oyelaran", role: "Critique", image: "1507003211169-0a1dd7228f2d" },
];

export default function QuietEditorialSite() {
  return (
    <div className="qe-root min-h-full">
      {/* Masthead */}
      <div className="qe-container flex items-center justify-between py-3 text-xs text-black/50">
        <span>Lundi 28 septembre 2026</span>
        <span className="hidden md:inline">Numéro 14 — Automne</span>
        <span className="flex gap-6">
          <a href="#" className="qe-link">
            Se connecter
          </a>
          <a href="#" className="qe-link text-black">
            S'abonner
          </a>
        </span>
      </div>
      <header className="qe-container qe-border-t qe-border-b py-10 text-center">
        <p className="qe-eyebrow mb-3">Revue trimestrielle de design & de culture</p>
        <h1 className="qe-masthead">Marge</h1>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm">
          {nav.map((item) => (
            <a key={item} href="#" className="qe-link">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Lead */}
      <section className="qe-container grid gap-12 py-16 md:grid-cols-[1.35fr_1fr]">
        <figure>
          <img src={img("1481627834876-b7833e8f5570", 1400, 1000)} alt="Bibliothèque ancienne" className="qe-photo aspect-[7/5] w-full object-cover" />
          <figcaption className="mt-3 text-xs text-black/45">Bibliothèque du couvent des Minimes, Toulouse. Photographie : Anna Keller pour Marge.</figcaption>
        </figure>
        <div className="flex flex-col justify-center">
          <p className="qe-eyebrow mb-5">À la une — Essai</p>
          <h2 className="qe-serif text-5xl leading-[1.08]">L'art discret de ne rien ajouter de trop</h2>
          <p className="qe-lede mt-6">
            Comment trois maisons d'édition, un studio de typographie et une architecte ont appris à dire moins pour être entendus davantage. Un long format sur la discipline visuelle et le courage de laisser respirer une page.
          </p>
          <p className="mt-6 text-sm text-black/55">
            Par <span className="text-black">Jeanne Lestrade</span> · 24 minutes de lecture
          </p>
          <a href="#" className="qe-link mt-8 inline-block w-fit text-sm">
            Lire l'essai →
          </a>
        </div>
      </section>

      {/* Secondary */}
      <section className="qe-container qe-border-t grid gap-10 py-16 md:grid-cols-3">
        {secondary.map((s) => (
          <article key={s.title} className="group">
            <div className="overflow-hidden">
              <img src={img(s.image, 700, 520)} alt="" className="qe-photo aspect-[4/3] w-full object-cover transition duration-[1.2s] group-hover:scale-[1.03]" />
            </div>
            <p className="qe-eyebrow mb-3 mt-6">{s.cat}</p>
            <h3 className="qe-serif text-2xl leading-snug group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{s.title}</h3>
            <p className="mt-3 text-sm text-black/55">
              {s.author} · {s.read}
            </p>
          </article>
        ))}
      </section>

      {/* Excerpt */}
      <section className="qe-border-t qe-border-b qe-paper">
        <div className="qe-container grid gap-12 py-24 md:grid-cols-[220px_1fr_220px]">
          <aside className="text-sm text-black/55 max-md:order-2">
            <p className="qe-eyebrow mb-4">Extrait</p>
            <p>Tiré de l'essai « La lenteur comme méthode », paru dans le numéro 14.</p>
          </aside>
          <article className="qe-body mx-auto max-w-[620px]">
            <p className="qe-dropcap">
              Il existe une forme de politesse dans les objets qui ne réclament rien. Une chaise qui n'exige pas qu'on la remarque, un livre dont la mise en page s'efface derrière le texte, une application qui attend patiemment qu'on revienne vers elle. Cette politesse, nous l'avons largement oubliée.
            </p>
            <p>
              Depuis une décennie, les produits numériques rivalisent de stratégies pour capter l'attention : notifications, pastilles rouges, défilement infini. Nous avons appris à mesurer la réussite d'une interface au temps qu'on y passe, rarement à la qualité de ce temps.
            </p>
            <blockquote className="qe-pull">« Ralentir le regard, ce n'est pas perdre l'utilisateur. C'est lui rendre la main. »</blockquote>
            <p>
              Les studios que nous avons rencontrés partagent une conviction : la retenue n'est pas un manque d'ambition. Elle est au contraire l'ambition la plus difficile — celle de choisir, d'éliminer, d'assumer le vide comme une matière.
            </p>
          </article>
          <aside className="text-sm text-black/55">
            <p className="qe-eyebrow mb-4">Dans ce numéro</p>
            <ol className="space-y-3">
              {["La lenteur comme méthode", "Le blanc n'est pas vide", "Une maison de brume", "Contre la notification"].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="qe-num-sm">{String(i + 1).padStart(2, "0")}</span>
                  <a href="#" className="qe-link text-black/70">
                    {t}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* Essays list */}
      <section className="qe-container py-20">
        <div className="mb-10 flex items-end justify-between">
          <p className="qe-eyebrow">Derniers essais</p>
          <a href="#" className="qe-link text-sm">
            Tous les essais →
          </a>
        </div>
        <div className="qe-divide">
          {essays.map((a) => (
            <article key={a.n} className="qe-row grid gap-4 py-8 md:grid-cols-[80px_1fr_180px]">
              <span className="qe-num">{a.n}</span>
              <div>
                <h3 className="qe-serif text-3xl">{a.title}</h3>
                <p className="qe-lede mt-2 max-w-xl text-base">{a.excerpt}</p>
              </div>
              <div className="text-sm text-black/55 md:text-right">
                <p>{a.author}</p>
                <p>{a.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full-bleed photo */}
      <section className="relative">
        <img src={img("1473580044384-7ba9967e16a0", 2000, 900)} alt="Dunes" className="qe-photo h-[70vh] min-h-[420px] w-full object-cover" />
        <p className="qe-container mt-3 text-xs text-black/45">« Le désert est un livre dont chaque page est blanche. » — Portfolio de Malik Benali, p. 64.</p>
      </section>

      {/* Objects */}
      <section className="qe-container py-24">
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div>
            <p className="qe-eyebrow mb-4">La boutique</p>
            <h2 className="qe-serif text-4xl">Objets choisis</h2>
          </div>
          <p className="qe-lede self-end text-base">Chaque saison, la rédaction sélectionne quelques objets fabriqués lentement, par des gens qui prennent le temps.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {objects.map((o) => (
            <article key={o.name}>
              <img src={img(o.image, 700, 860)} alt={o.name} className="qe-photo aspect-[7/8.6] w-full object-cover" />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="qe-serif text-xl">{o.name}</h3>
                <span className="text-sm">{o.price}</span>
              </div>
              <p className="mt-1 text-sm text-black/55">{o.maker}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contributors */}
      <section className="qe-container qe-border-t py-20">
        <p className="qe-eyebrow mb-10">Contributeurs de ce numéro</p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {contributors.map((c) => (
            <div key={c.name}>
              <img src={img(c.image, 400, 500)} alt={c.name} className="qe-portrait aspect-[4/5] w-full object-cover" />
              <p className="qe-serif mt-4 text-lg">{c.name}</p>
              <p className="text-sm text-black/55">{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="qe-container qe-border-t grid gap-12 py-24 md:grid-cols-2">
        <div>
          <p className="qe-eyebrow mb-5">Abonnement</p>
          <h2 className="qe-serif text-5xl leading-tight">Quatre numéros par an. Un essai par semaine. Rien de plus.</h2>
        </div>
        <div className="qe-divide">
          {[
            ["Numérique", "Tous les essais en ligne, les archives depuis 2019", "6 € / mois"],
            ["Papier + numérique", "Quatre numéros de 180 pages livrés chez vous", "68 € / an"],
            ["Mécène", "L'édition papier, un tirage signé et notre gratitude", "150 € / an"],
          ].map(([t, d, p]) => (
            <div key={t} className="flex items-baseline justify-between gap-6 py-6">
              <div>
                <p className="qe-serif text-2xl">{t}</p>
                <p className="mt-1 text-sm text-black/55">{d}</p>
              </div>
              <a href="#" className="qe-link shrink-0 text-sm">
                {p} →
              </a>
            </div>
          ))}
          <form className="flex items-center gap-0 pt-8" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Recevoir la lettre du dimanche — vous@exemple.com" className="qe-input w-full" />
            <button type="submit" className="qe-link shrink-0 text-sm">
              S'inscrire →
            </button>
          </form>
        </div>
      </section>

      <footer className="qe-container qe-border-t py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="qe-serif text-3xl">Marge</p>
            <p className="mt-2 max-w-xs text-sm text-black/55">Revue indépendante, éditée à Paris depuis 2019. ISSN 2804-1177.</p>
          </div>
          {[
            ["Revue", ["Numéros", "Archives", "Contributeurs"]],
            ["Maison", ["À propos", "Points de vente", "Presse"]],
            ["Aide", ["Abonnement", "Contact", "Mentions légales"]],
          ].map(([t, l]) => (
            <div key={t as string} className="text-sm">
              <p className="qe-eyebrow mb-3">{t}</p>
              <ul className="space-y-2">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="qe-link text-black/70">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-black/45">© 2026 Marge — Design system « Quiet Editorial »</p>
      </footer>
    </div>
  );
}
