import { useState } from "react";

import { img } from "../../lib/img";
import "./zine-riot.css";

const days = [
  {
    day: "VEN 12 JUIN",
    color: "#ff2fc2",
    acts: [
      { name: "NEON WOLF", genre: "post-punk", time: "23:40", image: "1463453091185-61582044d556", head: true },
      { name: "acid.mp3", genre: "acid house", time: "22:10", image: "1534528741775-53994a69daeb" },
      { name: "KURA", genre: "noise pop", time: "20:30", image: "1517841905240-472988babdf9" },
    ],
  },
  {
    day: "SAM 13 JUIN",
    color: "#3b5eff",
    acts: [
      { name: "DJ SPLICE", genre: "breakbeat", time: "00:30", image: "1544723795-3fb6469f5b39", head: true },
      { name: "Riot Girls", genre: "riot grrrl", time: "22:45", image: "1502685104226-ee32379fefbe" },
      { name: "MONO/POLY", genre: "synth-punk", time: "21:00", image: "1539571696357-5a69c17a67c6" },
    ],
  },
  {
    day: "DIM 14 JUIN",
    color: "#111",
    acts: [
      { name: "THE STATIC", genre: "garage rock", time: "22:00", image: "1506794778202-cad84cf45f1d", head: true },
      { name: "glitch;", genre: "hyperpop", time: "20:20", image: "1531746020798-e6953c6e8e04" },
      { name: "VOID CHOIR", genre: "drone / chorale", time: "18:40", image: "1487412720507-e7ab37603c6f" },
    ],
  },
];

const tickets = [
  { name: "PASS 1 JOUR", price: "39 €", desc: "Ven, sam ou dim. Accès 3 scènes.", rot: -3, color: "#fff", soldout: false },
  { name: "PASS 3 JOURS", price: "89 €", desc: "Le week-end entier + camping.", rot: 2, color: "#ff2fc2", soldout: false, hot: true },
  { name: "PASS ÉARLY", price: "69 €", desc: "Tarif réduit des 500 premiers.", rot: -1, color: "#3b5eff", soldout: true },
];

const photos = ["1501386761578-eac5c94b800a", "1493225457124-a3eb161ffa5f", "1514525253161-7a46d19cd819", "1459749411175-04bf5292ceea", "1492684223066-81342ee5ff30", "1429962714451-bb934ecdc4ec"];

const faqs = [
  ["ON PEUT CAMPER ?", "Oui ! Le camping ouvre jeudi 18h, inclus dans le pass 3 jours. Ramène ta tente, on fournit les douches (tièdes, désolé)."],
  ["C'EST ACCESSIBLE PMR ?", "Plateformes surélevées devant chaque scène, toilettes adaptées, navette depuis la gare. Écris-nous pour tout besoin spécifique."],
  ["ET SI J'AI MOINS DE 18 ANS ?", "Entrée libre avec un adulte jusqu'à 16 ans. Les 16-18 ans viennent avec une autorisation parentale."],
];

function Ransom({ text }: { text: string }) {
  const styles = ["zr-r1", "zr-r2", "zr-r3", "zr-r4", "zr-r5"];
  return (
    <span className="zr-ransom" aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className={`zr-letter ${styles[(i * 7 + 3) % styles.length]}`} style={{ transform: `rotate(${((i * 37) % 13) - 6}deg)` }} aria-hidden="true">
          {c}
        </span>
      ))}
    </span>
  );
}

export default function ZineRiotSite() {
  const [day, setDay] = useState(0);
  const [faq, setFaq] = useState(0);
  const d = days[day];

  return (
    <div className="zr-root min-h-full">
      <div className="zr-halftone" aria-hidden="true" />

      <header className="relative z-20 flex items-center justify-between px-6 py-5">
        <div className="zr-logo">
          CHAOS<span className="text-[#ff2fc2]">//</span>26
        </div>
        <nav className="hidden gap-6 text-sm uppercase md:flex">
          {["Line-up", "Billets", "Infos", "Photos", "Presse"].map((l) => (
            <a key={l} href="#" className="zr-link">
              {l}
            </a>
          ))}
        </nav>
        <button className="zr-ticket">BILLETS →</button>
      </header>

      {/* Hero collage */}
      <section className="relative z-10 overflow-hidden px-6 pb-20 pt-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative">
            <p className="zr-sticker mb-6 w-fit">★ 3 JOURS ★ 3 SCÈNES ★ 27 GROUPES ★</p>
            <h1 className="zr-title whitespace-nowrap text-[4.2rem] md:text-[6.5rem] xl:text-[7.5rem]">
              <Ransom text="CHAOS" />
            </h1>
            <p className="zr-tag mt-3 text-4xl md:text-6xl">FESTIVAL 2026</p>
            <p className="zr-scribble mt-6 text-2xl">12 → 14 juin · Friche du Nord, Lille ↘</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="zr-ticket zr-ticket-lg">RÉSERVER MA PLACE →</button>
              <button className="zr-btn-pink">VOIR LE LINE-UP</button>
            </div>
          </div>
          <div className="relative h-[520px]">
            <figure className="zr-cut zr-cut-1 absolute left-4 top-0 w-64">
              <img src={img("1493225457124-a3eb161ffa5f", 500, 620)} alt="" className="zr-duo-pink aspect-[5/6] w-full object-cover" />
            </figure>
            <figure className="zr-cut zr-cut-2 absolute right-0 top-20 w-60">
              <img src={img("1459749411175-04bf5292ceea", 500, 500)} alt="" className="zr-duo-blue aspect-square w-full object-cover" />
            </figure>
            <figure className="zr-cut zr-cut-3 absolute bottom-0 left-16 w-72">
              <img src={img("1501386761578-eac5c94b800a", 600, 420)} alt="" className="zr-bw aspect-[10/7] w-full object-cover" />
            </figure>
            <span className="zr-tape absolute left-44 top-2" />
            <span className="zr-tape zr-tape-2 absolute right-16 top-16" />
            <span className="zr-badge-round absolute bottom-24 right-4">
              SOLD
              <br />
              OUT
              <br />
              <small>(presque)</small>
            </span>
            <span className="zr-scribble zr-arrow absolute -left-6 top-56 text-xl">← c'était l'an dernier !!</span>
          </div>
        </div>
        <div className="zr-shape zr-shape-1" />
        <div className="zr-shape zr-shape-2" />
        <div className="zr-shape zr-shape-3" />
      </section>

      <section className="zr-marquee-wrap relative z-10 py-4">
        <div className="zr-marquee">
          {"BRUYANT ✹ SATURÉ ✹ VIVANT ✹ SANS FILTRE ✹ DIY OR DIE ✹ ".repeat(4)}
        </div>
      </section>

      {/* Line-up */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="zr-title text-6xl md:text-7xl">LINE-UP</h2>
            <div className="flex flex-wrap gap-3">
              {days.map((x, i) => (
                <button key={x.day} onClick={() => setDay(i)} className={`zr-day-btn ${day === i ? "zr-day-on" : ""}`} style={{ transform: `rotate(${[-2, 1.5, -1][i]}deg)` }}>
                  {x.day}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {d.acts.map((a, i) => (
              <article key={a.name} className={`zr-card zr-rot-${i}`}>
                <div className="relative overflow-hidden border-b-[3px] border-black">
                  <img src={img(a.image, 600, 640)} alt={a.name} className={`${i % 2 ? "zr-duo-blue" : "zr-duo-pink"} aspect-[15/16] w-full object-cover`} />
                  {a.head && <span className="zr-sticker absolute left-3 top-3">TÊTE D'AFFICHE</span>}
                  <span className="zr-time absolute bottom-3 right-3">{a.time}</span>
                </div>
                <div className="p-4">
                  <p className="text-3xl uppercase leading-none">{a.name}</p>
                  <p className="zr-type mt-2 text-sm">{a.genre} · scène {["BÉTON", "HANGAR", "CAVE"][i]}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="zr-type mt-10 text-center">+ 18 autres groupes, DJ sets jusqu'à 6h, performances, zine-fair et tatoueurs flash.</p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="zr-xerox relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]">
          <div className="zr-paper relative p-8">
            <span className="zr-tape absolute -top-3 left-10" />
            <p className="zr-scribble text-3xl text-[#ff2fc2]">manifeste n°4</p>
            <p className="zr-type mt-4 text-[15px] leading-relaxed">
              CHAOS n'a pas de sponsor boisson géante, pas de carré VIP, pas de bracelet cashless à 2 € de frais. CHAOS, c'est 400 bénévoles, une friche industrielle, trois scènes bricolées et l'envie de faire du bruit ensemble.
              <br />
              <br />
              Ici on photocopie les flyers, on répare les amplis au scotch, on écoute les groupes qu'on ne connaît pas encore. Et on repart avec des acouphènes et des ami·es.
            </p>
            <p className="zr-scribble mt-4 text-right text-2xl">— le collectif ♥</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["400", "bénévoles"],
              ["12 000", "festivalier·es"],
              ["27", "groupes"],
              ["0", "carré VIP"],
            ].map(([v, l], i) => (
              <div key={l} className="zr-stat" style={{ background: ["#ff2fc2", "#3b5eff", "#fff", "#111"][i], color: i === 3 ? "#f4e94c" : i === 2 ? "#111" : "#fff", transform: `rotate(${[-3, 2, 1.5, -2][i]}deg)` }}>
                <p className="text-5xl">{v}</p>
                <p className="zr-type text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="zr-title mb-12 text-6xl md:text-7xl">BILLETS</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {tickets.map((t) => (
              <div key={t.name} className="zr-tix relative" style={{ background: t.color, transform: `rotate(${t.rot}deg)`, color: t.color === "#fff" ? "#111" : "#fff" }}>
                <div className="flex items-start justify-between p-6">
                  <div>
                    <p className="zr-type text-xs">ADMIT ONE ✹ N° 0{Math.abs(t.rot)}4271</p>
                    <p className="mt-2 text-2xl">{t.name}</p>
                    <p className="zr-type mt-1 text-sm">{t.desc}</p>
                  </div>
                  <p className="shrink-0 whitespace-nowrap text-3xl">{t.price}</p>
                </div>
                <div className="zr-perf" />
                <div className="flex items-center justify-between p-6">
                  <span className="zr-barcode" />
                  <button className="zr-ticket" disabled={t.soldout}>
                    {t.soldout ? "ÉPUISÉ" : "ACHETER"}
                  </button>
                </div>
                {t.soldout && <span className="zr-stamp">SOLD OUT</span>}
                {t.hot && <span className="zr-sticker absolute -top-4 right-4 !bg-[#f4e94c] !text-black">LE + VENDU</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="zr-title text-5xl md:text-6xl">CHAOS//25</h2>
            <p className="zr-scribble text-2xl">souvenirs flous ↓</p>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {photos.map((p, i) => (
              <figure key={p} className="zr-polaroid" style={{ transform: `rotate(${[-3, 2, -1.5, 3, -2, 1][i]}deg)` }}>
                <img src={img(p, 500, 420)} alt="" className={`${["zr-bw", "zr-duo-pink", "zr-bw", "zr-duo-blue", "zr-bw", "zr-duo-pink"][i]} aspect-[5/4.2] w-full object-cover`} />
                <figcaption className="zr-scribble mt-2 text-center text-lg">{["le pogo", "fumigènes !!", "scène béton", "3h du mat", "confettis", "la foule"][i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Infos + FAQ */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="zr-card zr-rot-2 p-7">
            <h3 className="text-4xl">INFOS PRATIQUES</h3>
            <dl className="zr-type mt-6 space-y-4 text-[15px]">
              {[
                ["LIEU", "Friche du Nord, 12 rue de la Brasserie, Lille"],
                ["HORAIRES", "Ven 18h → 6h · Sam 14h → 6h · Dim 14h → minuit"],
                ["ACCÈS", "Métro Fives (ligne 1) · Navette gratuite depuis Lille-Flandres"],
                ["PAIEMENT", "CB & espèces. Pas de cashless, pas de frais cachés."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <dt className="w-24 shrink-0 font-bold text-[#ff2fc2]">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-4">
            <h3 className="zr-title text-5xl">FAQ</h3>
            {faqs.map(([q, a], i) => (
              <div key={q} className="zr-card" style={{ transform: `rotate(${[1, -1, 0.5][i]}deg)` }}>
                <button onClick={() => setFaq(faq === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-4 text-left text-lg">
                  {q}
                  <span className="text-2xl text-[#ff2fc2]">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="zr-type px-5 pb-5 text-sm leading-relaxed">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 px-6 py-20 text-center">
        <h2 className="zr-title text-5xl md:text-7xl">PRÊT À CRIER ?</h2>
        <p className="zr-type mx-auto mt-4 max-w-md">Reçois le fanzine numérique : annonces du line-up, playlists et places à gagner.</p>
        <form className="mx-auto mt-8 flex max-w-lg gap-3 max-sm:flex-col" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="ton@email.punk" className="zr-input flex-1" />
          <button className="zr-ticket zr-ticket-lg">JE M'INSCRIS</button>
        </form>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {["RADIO BÉTON", "LA FRICHE", "DISQUAIRE DU COIN", "ZINE-O-RAMA", "VILLE DE LILLE"].map((s, i) => (
            <span key={s} className="zr-partner" style={{ transform: `rotate(${[-2, 3, -1, 2, -3][i]}deg)` }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t-4 border-black bg-black px-6 py-8 text-xs uppercase text-[#f4e94c]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 CHAOS FEST — design system « Zine Riot »</p>
          <p>#chaos26 · insta · tiktok · bandcamp</p>
          <p>Licences 2-1087423 / 3-1087424</p>
        </div>
      </footer>
    </div>
  );
}
