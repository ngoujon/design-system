import { useState } from "react";

import { img } from "../../lib/img";
import "./craft-paper.css";

const categories = [
  { icon: "🏺", label: "Céramique", count: 214 },
  { icon: "🪵", label: "Bois", count: 132 },
  { icon: "🧶", label: "Textile", count: 187 },
  { icon: "🍯", label: "Épicerie", count: 96 },
  { icon: "🕯️", label: "Bougies", count: 58 },
  { icon: "👜", label: "Cuir", count: 71 },
];

const products = [
  { name: "Tasses en grès brut, lot de 2", maker: "Poterie de Léon", place: "Dieulefit (26)", price: 38, image: "1610701596007-11502861dcfa", tag: "Pièce unique" },
  { name: "Miel de châtaignier, 500 g", maker: "Miel des Coteaux", place: "Ardèche (07)", price: 12.5, image: "1558642452-9d2a7deb7f62", tag: "Récolte 2026" },
  { name: "Bonnet en laine mérinos", maker: "Maille & Moi", place: "Lozère (48)", price: 45, image: "1576871337632-b9aef4c17ab9", tag: "" },
  { name: "Portefeuille cuir tanné végétal", maker: "Sellerie Ribaud", place: "Millau (12)", price: 69, image: "1627123424574-724758594e93", tag: "Gravure offerte" },
  { name: "Bougie cire de colza, figue", maker: "Lueurs d'Argile", place: "Nantes (44)", price: 24, image: "1602874801007-bd458bb1b8b6", tag: "" },
  { name: "Savons saponifiés à froid ×3", maker: "La Savonnerie du Pré", place: "Drôme (26)", price: 18, image: "1600857544200-b2f666a9a2ec", tag: "Bio" },
  { name: "Assiettes plates émaillées", maker: "Atelier Céladon", place: "Vallauris (06)", price: 29, image: "1578749556568-bc2c40e68b61", tag: "" },
  { name: "Tourte de seigle au levain", maker: "Fournil des Halles", place: "Lyon (69)", price: 7.8, image: "1509440159596-0249088772ff", tag: "Retrait sur place" },
];

const markets = [
  { day: "04", month: "OCT", city: "Lyon", place: "Place Carnot", hours: "9h – 18h", makers: 42 },
  { day: "12", month: "OCT", city: "Annecy", place: "Halle aux Grains", hours: "10h – 19h", makers: 28 },
  { day: "25", month: "OCT", city: "Grenoble", place: "Parc Paul Mistral", hours: "9h – 17h", makers: 35 },
  { day: "08", month: "NOV", city: "Valence", place: "Esplanade du Champ de Mars", hours: "10h – 18h", makers: 31 },
];

const reviews = [
  { text: "Les tasses sont arrivées emballées dans du papier journal et une petite carte écrite à la main. J'ai fondu.", name: "Hélène", city: "Bordeaux", rot: -2 },
  { text: "Le miel de châtaignier est incroyable. On sent que ce n'est pas industriel. Déjà recommandé !", name: "Bastien", city: "Rennes", rot: 1.5 },
  { text: "J'ai pu discuter directement avec l'artisan pour personnaliser la gravure. Service humain, vraiment.", name: "Nora", city: "Lille", rot: -1 },
];

function price(p: number) {
  return p.toFixed(2).replace(".", ",") + " €";
}

export default function CraftPaperSite() {
  const [cart, setCart] = useState<string[]>([]);
  const [liked, setLiked] = useState<string[]>(["Miel de châtaignier, 500 g"]);

  return (
    <div className="cp-root min-h-full">
      <div className="cp-ribbon px-6 py-2 text-center text-sm">
        ✂ Livraison offerte dès 60 € · Chaque colis est emballé à la main, sans plastique ✂
      </div>

      <header className="cp-border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="cp-seal">AM</span>
            <div>
              <p className="cp-hand text-3xl leading-none">Atelier Marché</p>
              <p className="text-xs italic text-[#7a6552]">artisans & producteurs d'ici</p>
            </div>
          </div>
          <nav className="hidden gap-8 md:flex">
            {["Boutique", "Artisans", "Marchés", "Ateliers", "Notre histoire"].map((l) => (
              <a key={l} href="#" className="cp-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="cp-search hidden px-4 py-2 text-sm italic text-[#9a8470] lg:block">Rechercher un savoir-faire…</span>
            <button className="cp-btn relative">
              Panier
              {cart.length > 0 && <span className="cp-count">{cart.length}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="cp-stamp mb-6 w-fit">Fait main depuis 2016</p>
          <h1 className="cp-hand text-6xl leading-[0.95] md:text-7xl">
            Le savoir-faire, <span className="cp-scribble">à portée</span> de main.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            Plus de 380 artisans et petits producteurs de la région vendent ici leurs créations, sans intermédiaire. Chaque achat soutient un atelier, une ferme, un fournil.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="cp-btn cp-btn-primary">Explorer la boutique</button>
            <button className="cp-btn">Trouver un marché près de chez moi</button>
          </div>
          <p className="cp-hand mt-8 flex items-center gap-2 text-2xl text-[#b5652f]">
            <svg width="60" height="30" viewBox="0 0 60 30" aria-hidden="true">
              <path d="M2 20 C 15 5, 35 30, 55 10" stroke="#b5652f" strokeWidth="2" fill="none" />
              <path d="M48 6 L56 10 L50 17" stroke="#b5652f" strokeWidth="2" fill="none" />
            </svg>
            92 % des colis arrivent en 48 h !
          </p>
        </div>
        <div className="relative h-[520px]">
          <figure className="cp-polaroid absolute left-2 top-4 w-64 -rotate-6">
            <span className="cp-tape" />
            <img src={img("1493106641515-6b5631de4bb9", 500, 560)} alt="Mains sur un tour de potier" className="aspect-[5/6] w-full object-cover" />
            <figcaption className="cp-hand mt-2 text-center text-xl">Léon, au tour</figcaption>
          </figure>
          <figure className="cp-polaroid absolute right-0 top-0 w-60 rotate-3">
            <span className="cp-tape cp-tape-r" />
            <img src={img("1533900298318-6b8da08a523e", 500, 500)} alt="Marché couvert" className="aspect-square w-full object-cover" />
            <figcaption className="cp-hand mt-2 text-center text-xl">Marché de Carnot</figcaption>
          </figure>
          <figure className="cp-polaroid absolute bottom-0 left-24 w-72 rotate-2">
            <span className="cp-tape" />
            <img src={img("1584992236310-6edddc08acff", 600, 420)} alt="Pelotes de laine" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="cp-hand mt-2 text-center text-xl">Nouvelles laines teintes 🧶</figcaption>
          </figure>
          <span className="cp-stamp cp-stamp-round absolute bottom-24 right-4 rotate-12">
            100 %
            <br />
            local
          </span>
        </div>
      </section>

      {/* Categories */}
      <section className="cp-border-y">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-6 py-8 md:grid-cols-6">
          {categories.map((c) => (
            <a key={c.label} href="#" className="cp-cat group flex flex-col items-center gap-2 py-3 text-center">
              <span className="cp-cat-icon text-3xl">{c.icon}</span>
              <span className="cp-hand text-2xl leading-none">{c.label}</span>
              <span className="text-xs italic text-[#9a8470]">{c.count} créations</span>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="cp-stamp mb-3 w-fit -rotate-2">Sélection de la semaine</p>
            <h2 className="cp-hand text-5xl">Nos coups de cœur</h2>
          </div>
          <a href="#" className="cp-link italic">
            Voir les 758 créations →
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const inCart = cart.includes(p.name);
            const isLiked = liked.includes(p.name);
            return (
              <article key={p.name} className="cp-product group" style={{ transform: `rotate(${[-0.8, 0.6, -0.4, 0.9][i % 4]}deg)` }}>
                <div className="relative overflow-hidden">
                  <img src={img(p.image, 500, 560)} alt={p.name} className="aspect-[5/6] w-full object-cover transition duration-500 group-hover:scale-105" />
                  {p.tag && <span className="cp-label absolute left-3 top-3">{p.tag}</span>}
                  <button
                    onClick={() => setLiked(isLiked ? liked.filter((x) => x !== p.name) : [...liked, p.name])}
                    className="cp-heart absolute right-3 top-3"
                    aria-label="Ajouter aux favoris"
                  >
                    {isLiked ? "♥" : "♡"}
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs italic text-[#9a8470]">
                    {p.maker} · {p.place}
                  </p>
                  <h3 className="mt-1 text-[17px] leading-snug">{p.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="cp-hand text-3xl text-[#b5652f]">{price(p.price)}</span>
                    <button
                      onClick={() => setCart(inCart ? cart.filter((x) => x !== p.name) : [...cart, p.name])}
                      className={`cp-btn cp-btn-sm ${inCart ? "cp-btn-primary" : ""}`}
                    >
                      {inCart ? "✓ Ajouté" : "+ Panier"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Meet the maker */}
      <section className="cp-kraft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="relative">
            <img src={img("1606722590583-6951b5ea92ad", 800, 900)} alt="Artisan dans son atelier" className="cp-framed aspect-[8/9] w-full object-cover" />
            <div className="cp-note absolute -bottom-8 -right-4 w-64 rotate-3 p-5 max-md:right-2">
              <p className="cp-hand text-2xl leading-tight">« Un bon objet, c'est celui qu'on transmet. »</p>
              <p className="mt-2 text-sm italic">— Armand, dinandier</p>
            </div>
          </div>
          <div>
            <p className="cp-stamp mb-4 w-fit rotate-2">Portrait d'artisan</p>
            <h2 className="cp-hand text-5xl leading-none">Armand Ribaud, dinandier depuis 41 ans</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Dans son atelier de Millau, Armand martèle le cuivre comme son grand-père avant lui. Casseroles, bassines à confiture, pichets : chaque pièce demande entre 6 et 20 heures de travail.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Depuis qu'il vend sur Atelier Marché, il a pris un apprenti. « Le métier ne mourra pas avec moi », dit-il en souriant.
            </p>
            <div className="mt-8 flex gap-8">
              {[
                ["41", "ans de métier"],
                ["1 200+", "pièces vendues"],
                ["4,9 ★", "sur 318 avis"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="cp-hand text-4xl text-[#b5652f]">{v}</p>
                  <p className="text-sm italic">{l}</p>
                </div>
              ))}
            </div>
            <button className="cp-btn mt-8">Visiter son atelier →</button>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="cp-hand text-5xl">Prochains marchés</h2>
          <p className="mt-2 italic text-[#7a6552]">Venez rencontrer les artisans en chair et en os (et goûter le miel).</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {markets.map((m) => (
            <div key={m.city} className="cp-ticket flex items-center gap-6 p-5">
              <div className="cp-date shrink-0">
                <span className="cp-hand text-4xl leading-none">{m.day}</span>
                <span className="text-xs tracking-widest">{m.month}</span>
              </div>
              <div className="flex-1">
                <p className="cp-hand text-3xl leading-none">{m.city}</p>
                <p className="mt-1 text-sm italic">
                  {m.place} · {m.hours}
                </p>
              </div>
              <span className="cp-stamp cp-stamp-sm rotate-[-4deg]">{m.makers} artisans</span>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section className="cp-border-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            ["1", "Choisissez", "Des créations uniques, avec le nom et l'histoire de celui ou celle qui les a faites."],
            ["2", "L'artisan emballe", "À la main, dans du papier recyclé, avec un petit mot. Parfois un échantillon."],
            ["3", "Recevez & gardez", "Des objets faits pour durer, réparables, et garantis 2 ans par l'atelier."],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-5">
              <span className="cp-num">{n}</span>
              <div>
                <h3 className="cp-hand text-3xl leading-none">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="cp-hand mb-12 text-center text-5xl">Petits mots de clients</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="cp-note relative p-7" style={{ transform: `rotate(${r.rot}deg)` }}>
              <span className="cp-pin" />
              <p className="text-[#b5652f]">★★★★★</p>
              <blockquote className="cp-hand mt-3 text-2xl leading-snug">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm italic">
                — {r.name}, {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Newsletter postcard */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="cp-postcard grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
          <div className="md:border-r md:border-dashed md:border-[#4a3728]/30 md:pr-8">
            <h2 className="cp-hand text-5xl leading-none">La gazette du marché</h2>
            <p className="mt-4 leading-relaxed">
              Une lettre par mois, écrite par nos artisans : nouveautés, recettes de saison, dates des marchés et un portrait. Promis, pas plus.
            </p>
            <form className="mt-6 flex gap-2 max-sm:flex-col" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="votre@adresse.fr" className="cp-input flex-1" />
              <button className="cp-btn cp-btn-primary">S'abonner</button>
            </form>
          </div>
          <div className="relative flex flex-col items-end">
            <div className="cp-postage">
              <img src={img("1565193566173-7a0ee3dbe261", 200, 240)} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="cp-postmark">
              ATELIER
              <br />
              MARCHÉ
              <br />
              2026
            </div>
            <div className="mt-auto w-full space-y-4 pt-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border-b border-[#4a3728]/30" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="cp-border-t">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <p className="cp-hand text-3xl">Atelier Marché</p>
            <p className="mt-2 text-sm italic">Coopérative d'artisans · SCIC fondée à Lyon en 2016</p>
          </div>
          {[
            ["La boutique", ["Céramique", "Bois", "Textile", "Épicerie fine"]],
            ["Artisans", ["Vendre sur Atelier Marché", "Charte qualité", "Ateliers & stages"]],
            ["Aide", ["Livraison", "Retours", "Contact", "Mentions légales"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="cp-hand mb-2 text-2xl">{t}</p>
              <ul className="space-y-1.5 text-sm">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="cp-link">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pb-8 text-center text-xs italic text-[#7a6552]">© 2026 Atelier Marché — design system « Craft Paper »</p>
      </footer>
    </div>
  );
}
