import { useState } from "react";

import { img } from "../../lib/img";
import "./street-block.css";

const drop = [
  { name: "HOODIE 001 — SIGNAL", color: "Orange sécu", price: 120, image: "1509942774463-acf339cf87d5", stock: "12 restants", sizes: ["S", "M", "L", "XL"], sold: [] as string[] },
  { name: "CREW HEAVY 480G", color: "Orange", price: 95, image: "1578587018452-892bacefd3f2", stock: "", sizes: ["S", "M", "L", "XL"], sold: ["S"] },
  { name: "TEE RAW BOX FIT", color: "Noir", price: 55, image: "1618517351616-38fb9c5210c6", stock: "", sizes: ["S", "M", "L", "XL"], sold: [] },
  { name: "CARGO PANT 07", color: "Noir délavé", price: 145, image: "1624378439575-d8705ad7ae80", stock: "Dernières tailles", sizes: ["28", "30", "32", "34"], sold: ["28", "34"] },
  { name: "TRUCKER CAP BLANK", color: "Blanc", price: 40, image: "1588850561407-ed78c282e89b", stock: "", sizes: ["TU"], sold: [] },
  { name: "HOODIE ZIP — FOG", color: "Gris chiné", price: 130, image: "1556821840-3a63f95609a7", stock: "", sizes: ["S", "M", "L", "XL"], sold: ["XL"] },
  { name: "TEE BONES", color: "Noir", price: 60, image: "1503341504253-dff4815485f1", stock: "SOLD OUT", sizes: ["S", "M", "L", "XL"], sold: ["S", "M", "L", "XL"] },
  { name: "RUNNER 07 — AZUR", color: "Bleu / Rose", price: 210, image: "1520256862855-398228c41684", stock: "Raffle", sizes: ["40", "41", "42", "43", "44"], sold: [] },
];

const lookbook = [
  { image: "1523398002811-999ca8dec234", caption: "LOOK 01 — BARBÈS" },
  { image: "1517941823-815bea90d291", caption: "LOOK 02 — CAP BLANK" },
  { image: "1463453091185-61582044d556", caption: "LOOK 03 — WALL" },
  { image: "1544723795-3fb6469f5b39", caption: "LOOK 04 — RED LINE" },
  { image: "1520975954732-35dd22299614", caption: "LOOK 05 — LEATHER" },
];

export default function StreetBlockSite() {
  const [cart, setCart] = useState(0);
  const [size, setSize] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState("TOUT");

  const items = drop.filter((d) => {
    if (filter === "TOUT") return true;
    if (filter === "HAUTS") return /HOODIE|CREW|TEE/.test(d.name);
    if (filter === "BAS") return /CARGO/.test(d.name);
    return /CAP|RUNNER/.test(d.name);
  });

  return (
    <div className="sb-root min-h-full">
      <div className="sb-marquee-wrap">
        <div className="sb-marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              {["DROP 07 DISPONIBLE MAINTENANT", "LIVRAISON 24H PARIS", "RETOURS 30 JOURS", "RAFFLE RUNNER 07 — FIN DIMANCHE 23H59", "500 PIÈCES. PAS UNE DE PLUS."].map((t) => (
                <span key={t} className="mx-6">
                  {t} <span className="sb-star">✱</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <header className="sb-border-b sticky top-0 z-30 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <nav className="hidden flex-1 gap-6 text-sm font-black uppercase md:flex">
            {["Drop 07", "Nouveautés", "Archive", "Raffle"].map((l, i) => (
              <a key={l} href="#" className={`sb-link ${i === 0 ? "sb-link-hot" : ""}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="sb-logo">BLOKHAUS</div>
          <div className="flex flex-1 items-center justify-end gap-3">
            <a href="#" className="sb-link hidden text-sm font-black uppercase sm:block">
              Compte
            </a>
            <button className="sb-btn">PANIER ({cart})</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="sb-border-b grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative flex flex-col justify-between overflow-hidden px-6 py-10">
          <div className="flex items-center justify-between">
            <p className="sb-eyebrow">ÉDITION LIMITÉE — 500 PIÈCES</p>
            <p className="sb-eyebrow">SS/AW 26</p>
          </div>
          <h1 className="sb-title my-10">
            DROP
            <br />
            <span className="sb-outline">07</span>
            <span className="sb-accent">.</span>
          </h1>
          <div>
            <p className="max-w-md text-lg font-medium">
              « SIGNAL » — une capsule de 8 pièces en coton lourd 480 g, teinte orange sécurité. Coupé et cousu à Porto. Numéroté à la main.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="sb-btn sb-btn-accent sb-btn-lg">ACHETER LE DROP →</button>
              <button className="sb-btn sb-btn-white sb-btn-lg">LOOKBOOK</button>
            </div>
            <div className="mt-10 flex gap-2">
              {[
                ["02", "J"],
                ["14", "H"],
                ["37", "MIN"],
              ].map(([v, l]) => (
                <div key={l} className="sb-count">
                  <span className="sb-count-v">{v}</span>
                  <span className="text-[10px] font-black">{l}</span>
                </div>
              ))}
              <p className="ml-3 self-center text-xs font-black uppercase leading-tight">
                Avant la fin
                <br />
                du raffle
              </p>
            </div>
          </div>
        </div>
        <div className="sb-hero-img relative min-h-[560px] overflow-hidden border-black lg:border-l-[3px]">
          <img src={img("1509942774463-acf339cf87d5", 1200, 1500)} alt="Hoodie orange" className="absolute inset-0 h-full w-full object-cover" />
          <span className="sb-sticker absolute right-5 top-5">N° 001/500</span>
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
            <div className="sb-tagbox">
              <p className="text-xs font-black">HOODIE 001 — SIGNAL</p>
              <p className="text-xl font-black">120 €</p>
            </div>
            <button className="sb-btn sb-btn-accent" onClick={() => setCart(cart + 1)}>
              + AJOUTER
            </button>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sb-border-b flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <h2 className="text-3xl font-black uppercase tracking-tight">
          Le drop <span className="text-[#ff5a1f]">({items.length})</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {["TOUT", "HAUTS", "BAS", "ACCESSOIRES"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`sb-filter ${filter === f ? "sb-filter-on" : ""}`}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="sb-grid grid sm:grid-cols-2 lg:grid-cols-4">
        {items.map((d, i) => {
          const soldOut = d.stock === "SOLD OUT";
          return (
            <article key={d.name} className={`sb-cell group ${i % 2 === Math.floor(i / 4) % 2 ? "sb-cell-gray" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={img(d.image, 700, 875)} alt={d.name} className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${soldOut ? "grayscale" : ""}`} />
                {d.stock && <span className={`sb-badge absolute left-3 top-3 ${soldOut ? "sb-badge-black" : ""}`}>{d.stock}</span>}
                <span className="absolute right-3 top-3 text-xs font-black">#{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black uppercase leading-tight">{d.name}</p>
                    <p className="text-xs text-black/55">{d.color}</p>
                  </div>
                  <p className="text-lg font-black">{d.price} €</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.sizes.map((s) => {
                    const out = d.sold.includes(s);
                    return (
                      <button
                        key={s}
                        disabled={out}
                        onClick={() => setSize({ ...size, [d.name]: s })}
                        className={`sb-size ${out ? "sb-size-out" : ""} ${size[d.name] === s ? "sb-size-on" : ""}`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <button disabled={soldOut} onClick={() => setCart(cart + 1)} className={`sb-btn mt-4 w-full ${soldOut ? "sb-btn-disabled" : ""}`}>
                  {soldOut ? "ÉPUISÉ" : d.stock === "Raffle" ? "PARTICIPER AU RAFFLE" : "AJOUTER AU PANIER"}
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* XXL band */}
      <section className="sb-border-b overflow-hidden bg-[#111] py-6">
        <div className="sb-xxl-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="sb-xxl">
              BLOKHAUS <span className="text-[#ff5a1f]">✱</span> SIGNAL <span className="text-[#ff5a1f]">✱</span> DROP 07 <span className="text-[#ff5a1f]">✱</span>&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* Lookbook */}
      <section className="sb-border-b">
        <div className="flex items-end justify-between px-6 pb-4 pt-12">
          <h2 className="sb-h2">LOOKBOOK</h2>
          <p className="text-xs font-black uppercase">Shot à Paris 18e — Photo : Yanis K.</p>
        </div>
        <div className="sb-look flex gap-0 overflow-x-auto">
          {lookbook.map((l) => (
            <figure key={l.image} className="sb-look-item relative shrink-0">
              <img src={img(l.image, 600, 800)} alt="" className="h-[480px] w-[360px] object-cover" />
              <figcaption className="absolute bottom-0 left-0 bg-white px-3 py-2 text-xs font-black">{l.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Raffle + Store */}
      <section className="sb-border-b grid md:grid-cols-2">
        <div className="bg-[#ff5a1f] px-6 py-16 md:px-12">
          <p className="sb-eyebrow mb-4">RAFFLE ✱ RUNNER 07 — AZUR</p>
          <h2 className="sb-h2 leading-[0.85]">
            150 PAIRES.
            <br />
            12 400 INSCRITS.
          </h2>
          <p className="mt-6 max-w-md font-medium">Inscris-toi avant dimanche 23h59. Tirage au sort lundi, paiement sous 24 h pour les gagnants. Une inscription par personne, vérification SMS.</p>
          <form className="mt-8 flex max-w-md flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="E-MAIL" className="sb-input" />
            <div className="flex gap-3">
              <input placeholder="POINTURE (EU)" className="sb-input flex-1" />
              <button className="sb-btn sb-btn-black">JE TENTE →</button>
            </div>
          </form>
        </div>
        <div className="relative min-h-[420px] border-black md:border-l-[3px]">
          <img src={img("1441986300917-64674bd600d8", 1000, 900)} alt="Boutique" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-white p-6 sb-border-t">
            <p className="text-xs font-black uppercase text-[#ff5a1f]">Flagship</p>
            <p className="text-2xl font-black uppercase">48 rue Myrha, Paris 18e</p>
            <p className="text-sm font-medium">Mar — Sam · 12h — 20h · Ouverture spéciale drop : samedi 10h</p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="sb-border-b px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="sb-h2">#BLOKHAUS</h2>
          <a href="#" className="sb-link text-sm font-black uppercase">
            Suivre @blokhaus →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-[3px] bg-black p-[3px] md:grid-cols-6">
          {["1529139574466-a303027c1d8b", "1604644401890-0bd678c83788", "1515886657613-9f3515b0c78f", "1622445275576-721325763afe", "1547447134-cd3f5c716030", "1519501025264-65ba15a82390"].map((p) => (
            <img key={p} src={img(p, 400, 400)} alt="" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="sb-border-b grid divide-y-[3px] divide-black md:grid-cols-4 md:divide-x-[3px] md:divide-y-0">
        {[
          ["LIVRAISON 24H", "Paris & petite couronne. 48 h ailleurs en France."],
          ["RETOURS 30 J", "Gratuits, en point relais ou en boutique."],
          ["FAIT À PORTO", "Ateliers familiaux, coton biologique certifié."],
          ["NUMÉROTÉ", "Chaque pièce a son numéro. Ta pièce, pas une autre."],
        ].map(([t, d]) => (
          <div key={t} className="px-6 py-8">
            <p className="text-lg font-black uppercase">{t}</p>
            <p className="mt-1 text-sm font-medium text-black/60">{d}</p>
          </div>
        ))}
      </section>

      <footer className="bg-[#111] px-6 py-12 text-white">
        <div className="sb-footer-logo">BLOKHAUS</div>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {[
            ["SHOP", ["Drop 07", "Archive", "Gift card"]],
            ["INFOS", ["Livraison", "Retours", "Guide des tailles"]],
            ["BLOKHAUS", ["À propos", "Flagship", "Stockists"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="mb-3 text-sm font-black text-[#ff5a1f]">{t}</p>
              <ul className="space-y-1.5 text-sm font-bold uppercase">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-[#ff5a1f]">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-3 text-sm font-black text-[#ff5a1f]">NEWSLETTER</p>
            <p className="text-sm font-medium text-white/60">Accès aux drops 1 h avant tout le monde.</p>
            <input placeholder="TON E-MAIL" className="sb-input sb-input-dark mt-3 w-full" />
          </div>
        </div>
        <p className="mt-12 text-xs font-black uppercase text-white/50">© 2026 BLOKHAUS — design system « Street Block »</p>
      </footer>
    </div>
  );
}
