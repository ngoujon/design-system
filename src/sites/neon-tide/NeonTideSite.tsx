import { useState } from "react";

import { img } from "../../lib/img";
import "./neon-tide.css";

const tracks = [
  { title: "Midnight Drive", artist: "SYNTHIA", album: "Chrome Coast", time: "3:42", cover: "1519608487953-e999c86e7455", plays: "12,4 M" },
  { title: "Neon Rain", artist: "Pulse Dept.", album: "Wet Asphalt", time: "4:10", cover: "1563089145-599997674d42", plays: "8,9 M" },
  { title: "Chrome Heart", artist: "VHS Ghost", album: "Rewind", time: "2:58", cover: "1557672172-298e090bd0f1", plays: "6,1 M" },
  { title: "Palm Static", artist: "Miami 86", album: "Sunset Tapes", time: "3:27", cover: "1620641788421-7a1c342ea42e", plays: "5,7 M" },
  { title: "Laser Lagoon", artist: "Nova Wave", album: "Aqua Grid", time: "4:44", cover: "1614850523459-c2f4c699c52e", plays: "4,2 M" },
];

const playlists = [
  { name: "Outrun Nights", desc: "Pour rouler vite, fenêtres ouvertes.", cover: "1514525253161-7a46d19cd819", count: 84 },
  { name: "Vapor Lounge", desc: "Synthés moelleux et saxophones rêveurs.", cover: "1470225620780-dba8ba36b745", count: 62 },
  { name: "Retro Focus", desc: "Chillwave pour coder jusqu'à l'aube.", cover: "1538481199705-c710c4e965fc", count: 120 },
  { name: "Club 2084", desc: "Darksynth, cyberpunk et basses lourdes.", cover: "1504384308090-c894fdcc538d", count: 75 },
  { name: "Sunset Tapes", desc: "Cassettes perdues d'un été éternel.", cover: "1579546929518-9e396f3cc809", count: 48 },
];

const stations = [
  { name: "TIDE FM 84.6", genre: "Synthwave", listeners: "24 318", now: "SYNTHIA — Midnight Drive" },
  { name: "Neon Pulse", genre: "Darksynth", listeners: "11 902", now: "Carpenter Brut-alist — Turbo" },
  { name: "Lo-Fi Lagoon", genre: "Chillwave", listeners: "38 540", now: "Nova Wave — Laser Lagoon" },
];

const tour = [
  ["17 OCT", "Paris", "La Cigale"],
  ["24 OCT", "Lyon", "Le Transbordeur"],
  ["02 NOV", "Bruxelles", "Ancienne Belgique"],
  ["09 NOV", "Berlin", "Astra Kulturhaus"],
];

const plans = [
  { name: "Free", price: "0 €", perks: ["Radio illimitée", "Avec publicités", "Qualité 160 kbps"] },
  { name: "Tide+", price: "10,99 €", perks: ["Sans pub", "Hors-ligne", "Lossless 24-bit", "Paroles en direct"], hot: true },
  { name: "Duo", price: "14,99 €", perks: ["2 comptes Tide+", "Mix Duo hebdo", "Un seul paiement"] },
  { name: "Famille", price: "17,99 €", perks: ["6 comptes Tide+", "Contrôle parental", "Tide Kids"] },
];

function Wave({ n = 48, playing = true, className = "" }: { n?: number; playing?: boolean; className?: string }) {
  return (
    <div className={`nt-wave ${playing ? "" : "nt-wave-paused"} ${className}`}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ height: `${20 + Math.abs(Math.sin(i * 0.7) * 60) + (i % 5) * 4}%`, animationDelay: `${(i % 12) * -0.1}s` }} />
      ))}
    </div>
  );
}

export default function NeonTideSite() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const t = tracks[current];

  return (
    <div className="nt-root min-h-full">
      {/* Hero */}
      <section className="nt-hero relative overflow-hidden">
        <div className="nt-stars" aria-hidden="true" />
        <div className="nt-sun" aria-hidden="true" />
        <div className="nt-mountains" aria-hidden="true" />
        <div className="nt-grid-floor" aria-hidden="true" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="nt-logo">TIDE</div>
          <nav className="hidden gap-9 text-sm font-medium md:flex">
            {["Découvrir", "Playlists", "Radio", "Artistes", "Premium"].map((l) => (
              <a key={l} href="#" className="nt-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="nt-link hidden text-sm sm:block">
              Connexion
            </a>
            <button className="nt-btn">Essai gratuit</button>
          </div>
        </header>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-72 pt-16 text-center">
          <p className="nt-eyebrow mb-5">▶ Streaming rétro-futuriste · 90 millions de titres</p>
          <h1 className="nt-title text-6xl md:text-[7.5rem]">NIGHT DRIVE</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Le son des nuits électriques. Synthwave, chillwave et darksynth en lossless, sans coupure, jusqu'au lever du soleil.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <button className="nt-btn nt-btn-solid nt-btn-lg">▶ Lancer la radio</button>
            <button className="nt-btn nt-btn-lg">1 mois offert</button>
          </div>
        </div>
      </section>

      {/* Player */}
      <section className="relative z-20 mx-auto -mt-52 max-w-5xl px-6">
        <div className="nt-player grid md:grid-cols-[1fr_1.1fr]">
          <div className="relative p-6">
            <div className="flex items-center gap-5">
              <div className="nt-cover-wrap">
                <img src={img(t.cover, 300, 300)} alt="" className="nt-cover" />
              </div>
              <div className="min-w-0">
                <p className="nt-eyebrow">En écoute</p>
                <p className="mt-1 truncate text-2xl font-bold">{t.title}</p>
                <p className="text-white/60">
                  {t.artist} · <span className="text-white/40">{t.album}</span>
                </p>
              </div>
            </div>
            <Wave n={56} playing={playing} className="mt-6 h-16" />
            <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
              <span>1:27</span>
              <div className="nt-progress flex-1">
                <div style={{ width: "38%" }} />
              </div>
              <span>{t.time}</span>
            </div>
            <div className="mt-5 flex items-center justify-center gap-6">
              <button className="nt-ctrl">⇄</button>
              <button className="nt-ctrl" onClick={() => setCurrent((current + tracks.length - 1) % tracks.length)}>
                ⏮
              </button>
              <button className="nt-play" onClick={() => setPlaying(!playing)} aria-label="Lecture">
                {playing ? "❚❚" : "▶"}
              </button>
              <button className="nt-ctrl" onClick={() => setCurrent((current + 1) % tracks.length)}>
                ⏭
              </button>
              <button className="nt-ctrl">↻</button>
            </div>
          </div>
          <div className="nt-tracklist">
            <div className="flex items-center justify-between px-5 py-4">
              <p className="font-semibold">Top synthwave · cette semaine</p>
              <span className="nt-chip">LOSSLESS</span>
            </div>
            {tracks.map((tr, i) => (
              <button key={tr.title} onClick={() => setCurrent(i)} className={`nt-track w-full text-left ${i === current ? "nt-track-active" : ""}`}>
                <span className="nt-num">{i === current && playing ? <span className="nt-eq"><i /><i /><i /></span> : String(i + 1).padStart(2, "0")}</span>
                <img src={img(tr.cover, 80, 80)} alt="" className="h-10 w-10 rounded-md object-cover" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{tr.title}</span>
                  <span className="block text-xs text-white/50">{tr.artist}</span>
                </span>
                <span className="hidden text-xs text-white/40 sm:block">{tr.plays}</span>
                <span className="text-xs text-white/50">{tr.time}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="nt-eyebrow mb-2">Sélection éditoriale</p>
            <h2 className="nt-h2 text-4xl">Playlists de minuit</h2>
          </div>
          <a href="#" className="nt-link text-sm">
            Tout voir →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {playlists.map((p) => (
            <article key={p.name} className="nt-card group p-3">
              <div className="relative overflow-hidden rounded-xl">
                <img src={img(p.cover, 400, 400)} alt="" className="nt-duotone aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="nt-cover-title">{p.name}</span>
                <button className="nt-mini-play">▶</button>
              </div>
              <p className="mt-3 font-semibold">{p.name}</p>
              <p className="mt-0.5 text-xs leading-snug text-white/50">{p.desc}</p>
              <p className="mt-2 text-[11px] text-[#00f0ff]">{p.count} titres</p>
            </article>
          ))}
        </div>
      </section>

      {/* Radio */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <p className="nt-eyebrow mb-2">En direct</p>
        <h2 className="nt-h2 mb-8 text-4xl">Radios 24/7</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {stations.map((s, i) => (
            <div key={s.name} className="nt-station p-6">
              <div className="flex items-center justify-between">
                <span className="nt-live">● LIVE</span>
                <span className="text-xs text-white/50">👂 {s.listeners}</span>
              </div>
              <p className="nt-station-name mt-5 text-3xl">{s.name}</p>
              <p className="text-sm text-[#ff9ecb]">{s.genre}</p>
              <Wave n={32} className={`mt-5 h-12 ${i === 1 ? "nt-wave-pink" : ""}`} />
              <p className="mt-4 truncate text-sm text-white/60">♪ {s.now}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artist spotlight */}
      <section className="nt-spot relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="nt-artist-frame">
              <img src={img("1534528741775-53994a69daeb", 900, 1000)} alt="SYNTHIA" className="aspect-[9/10] w-full object-cover" />
            </div>
            <span className="nt-verified absolute -right-3 top-6">✓ Artiste vérifiée</span>
          </div>
          <div>
            <p className="nt-eyebrow mb-3">Artiste du mois</p>
            <h2 className="nt-title text-6xl md:text-8xl">SYNTHIA</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Née à Marseille, formée au Conservatoire, révélée sur TIDE en 2024. Son deuxième album <em>Chrome Coast</em> mêle synthés analogiques, voix vocodée et nostalgie des néons de la Croisette.
            </p>
            <div className="mt-8 flex gap-10">
              {[
                ["4,8 M", "auditeurs / mois"],
                ["12", "titres dans Chrome Coast"],
                ["#1", "Synthwave FR"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="nt-grad-text text-3xl font-extrabold">{v}</p>
                  <p className="text-xs text-white/50">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold">Chrome Coast Tour 2026</p>
              <div className="nt-tour">
                {tour.map(([d, c, v]) => (
                  <div key={d} className="flex items-center gap-5 py-3">
                    <span className="nt-date">{d}</span>
                    <span className="flex-1">
                      <span className="font-semibold">{c}</span> <span className="text-white/50">· {v}</span>
                    </span>
                    <button className="nt-btn !px-4 !py-1.5 text-xs">Billets</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["◉", "Lossless 24-bit", "Jusqu'à 192 kHz. Tes synthés méritent mieux qu'un MP3."],
            ["⇣", "Hors-ligne", "10 000 titres dans ta poche, même dans le tunnel."],
            ["♫", "Paroles en direct", "Karaoké synchronisé, en 18 langues."],
            ["◎", "Mix du jour", "6 mixes personnalisés qui évoluent avec toi."],
          ].map(([i, t, d]) => (
            <div key={t} className="nt-card p-6">
              <span className="nt-icon">{i}</span>
              <p className="mt-5 text-lg font-bold">{t}</p>
              <p className="mt-2 text-sm text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center">
          <p className="nt-eyebrow mb-2">Premium</p>
          <h2 className="nt-h2 text-4xl md:text-5xl">Choisis ta fréquence</h2>
          <p className="mt-3 text-white/60">1 mois offert sur toutes les offres. Sans engagement.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div key={p.name} className={`nt-plan flex flex-col p-6 ${p.hot ? "nt-plan-hot" : ""}`}>
              {p.hot && <span className="nt-chip mb-3 w-fit">Le plus populaire</span>}
              <p className="text-2xl font-bold">{p.name}</p>
              <p className="mt-2">
                <span className="nt-grad-text text-4xl font-extrabold">{p.price}</span>
                <span className="text-sm text-white/50"> / mois</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-white/75">
                {p.perks.map((x) => (
                  <li key={x}>✦ {x}</li>
                ))}
              </ul>
              <button className={`nt-btn mt-6 ${p.hot ? "nt-btn-solid" : ""}`}>{p.name === "Free" ? "Écouter" : "Essayer 1 mois"}</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 pb-32 pt-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="nt-logo">TIDE</div>
            <p className="mt-3 max-w-xs text-sm text-white/50">Le streaming des nuits électriques. Disponible sur iOS, Android, desktop, voitures et consoles.</p>
          </div>
          {[
            ["Écouter", ["Web player", "Applications", "Tide pour la voiture"]],
            ["Artistes", ["Tide for Artists", "Distribution", "Merch"]],
            ["Aide", ["Assistance", "Abonnement", "Confidentialité"]],
          ].map(([h, l]) => (
            <div key={h as string}>
              <p className="mb-3 text-sm font-semibold">{h}</p>
              <ul className="space-y-2 text-sm text-white/50">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="nt-link">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs text-white/40">© 2026 TIDE Music SAS — design system « Neon Tide »</p>
      </footer>

      {/* Sticky bottom player */}
      <div className="nt-bottom sticky bottom-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
          <img src={img(t.cover, 80, 80)} alt="" className="h-11 w-11 rounded-md object-cover" />
          <div className="min-w-0 w-40">
            <p className="truncate text-sm font-semibold">{t.title}</p>
            <p className="truncate text-xs text-white/50">{t.artist}</p>
          </div>
          <span className="text-[#ff9ecb]">♥</span>
          <div className="mx-auto flex items-center gap-4">
            <button className="nt-ctrl" onClick={() => setCurrent((current + tracks.length - 1) % tracks.length)}>
              ⏮
            </button>
            <button className="nt-play nt-play-sm" onClick={() => setPlaying(!playing)}>
              {playing ? "❚❚" : "▶"}
            </button>
            <button className="nt-ctrl" onClick={() => setCurrent((current + 1) % tracks.length)}>
              ⏭
            </button>
          </div>
          <Wave n={40} playing={playing} className="hidden h-8 w-64 lg:flex" />
          <span className="hidden text-xs text-white/50 md:block">🔊 ━━━━━━○──</span>
        </div>
      </div>
    </div>
  );
}
