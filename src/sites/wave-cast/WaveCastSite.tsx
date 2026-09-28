import { useState } from "react";

import { img } from "../../lib/img";
import "./wave-cast.css";

const episodes = [
  { n: "142", title: "Construire un produit sans levée de fonds", guest: "Camille Aubert", role: "Fondatrice de Halo", duration: "48 min", date: "23 sept.", tags: ["Entrepreneuriat", "Bootstrapping"], image: "1573497019940-1c28c88b4f3e" },
  { n: "141", title: "L'avenir du travail asynchrone", guest: "Karim Belaïd", role: "COO de Vela", duration: "36 min", date: "16 sept.", tags: ["Remote", "Management"], image: "1507003211169-0a1dd7228f2d" },
  { n: "140", title: "Design systems : mythe ou nécessité ?", guest: "Léa Fontaine", role: "VP Design, Nimbus", duration: "52 min", date: "9 sept.", tags: ["Design", "Produit"], image: "1494790108377-be9c29b29330" },
  { n: "139", title: "Recruter ses 10 premiers employés", guest: "Olivier Garnier", role: "DSI, Meridian", duration: "44 min", date: "2 sept.", tags: ["RH", "Scale-up"], image: "1519085360753-af0119f7cbe7" },
  { n: "138", title: "Écrire pour penser : le pouvoir du mémo", guest: "Inès Garnier", role: "Autrice", duration: "39 min", date: "26 août", tags: ["Écriture", "Culture"], image: "1524504388940-b1c1722653e1" },
];

const shows = [
  { name: "Wavecast", desc: "Les coulisses de ceux qui construisent", eps: 142, image: "1590602847861-f357a9332bbc", tint: "violet" },
  { name: "Signal Faible", desc: "Tech, société et futurs possibles", eps: 68, image: "1478737270239-2f02b77fc618", tint: "coral" },
  { name: "Minuit Pile", desc: "Histoires vraies, racontées la nuit", eps: 94, image: "1511671782779-c97d3d27a1d4", tint: "violet" },
  { name: "Le Studio", desc: "Musique, production et création sonore", eps: 51, image: "1598488035139-bdbb2231ce04", tint: "coral" },
];

const chapters = [
  ["00:00", "Introduction"],
  ["03:12", "Le déclic : quitter son CDI"],
  ["11:40", "Les 1 000 premiers clients"],
  ["24:05", "Dire non aux investisseurs"],
  ["35:52", "Rentable en 18 mois"],
  ["44:10", "Conseils pour se lancer"],
];

function Wave({ n = 80, progress = 0.35, className = "", seed = 1 }: { n?: number; progress?: number; className?: string; seed?: number }) {
  return (
    <div className={`wc-wave ${className}`}>
      {Array.from({ length: n }).map((_, i) => {
        const h = 18 + Math.abs(Math.sin(i * 0.45 + seed) * 55) + Math.abs(Math.cos(i * 1.7 + seed)) * 27;
        return <span key={i} className={i / n < progress ? "wc-played" : ""} style={{ height: `${Math.min(100, h)}%` }} />;
      })}
    </div>
  );
}

export default function WaveCastSite() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [speed, setSpeed] = useState("1×");
  const featured = episodes[0];

  return (
    <div className="wc-root min-h-full">
      <div className="wc-glow" aria-hidden="true" />

      <header className="wc-border-b wc-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="wc-logo flex items-center gap-2.5">
            <span className="wc-logo-mark">
              <i />
              <i />
              <i />
              <i />
            </span>
            Wavecast
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            {["Épisodes", "Émissions", "Invités", "Premium", "À propos"].map((l) => (
              <a key={l} href="#" className="wc-link">
                {l}
              </a>
            ))}
          </nav>
          <button className="wc-btn">S'abonner</button>
        </div>
      </header>

      {/* Hero / featured */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="wc-eyebrow mb-5">Nouvel épisode · chaque mardi</p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Des conversations qui <span className="wc-grad">changent de perspective.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/60">
            Chaque semaine, une heure avec celles et ceux qui construisent des entreprises, des produits et des idées. Sans langue de bois, sans pub intrusive.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Apple Podcasts", "Spotify", "Deezer", "RSS"].map((p) => (
              <a key={p} href="#" className="wc-platform">
                {p}
              </a>
            ))}
          </div>
          <div className="mt-10 flex gap-10">
            {[
              ["2,1 M", "écoutes / mois"],
              ["142", "épisodes"],
              ["4,9 ★", "12 400 avis"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="wc-grad text-3xl font-bold">{v}</p>
                <p className="text-xs text-white/45">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wc-card wc-featured p-6">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={img(featured.image, 900, 620)} alt={featured.guest} className="aspect-[3/2] w-full object-cover" />
            <div className="wc-photo-shade absolute inset-0" />
            <span className="wc-badge absolute left-4 top-4">ÉP. {featured.n}</span>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs text-white/70">avec {featured.guest} · {featured.role}</p>
              <p className="mt-1 text-2xl font-bold leading-tight">{featured.title}</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4">
            <button className="wc-play wc-play-lg" onClick={() => setPlaying(playing === featured.n ? null : featured.n)} aria-label="Lecture">
              {playing === featured.n ? "❚❚" : "▶"}
            </button>
            <div className="flex-1">
              <Wave n={70} progress={playing === featured.n ? 0.42 : 0.18} className={`h-14 ${playing === featured.n ? "wc-wave-live" : ""}`} />
              <div className="mt-1.5 flex justify-between text-[11px] text-white/45">
                <span>{playing === featured.n ? "20:14" : "08:40"}</span>
                <span>{featured.duration}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-white/50">
            <div className="flex gap-4">
              <span>⟲ 15 s</span>
              <span>⟳ 30 s</span>
              <button onClick={() => setSpeed(speed === "1×" ? "1,5×" : speed === "1,5×" ? "2×" : "1×")} className="wc-speed">
                {speed}
              </button>
            </div>
            <span>♡ 3 204 · ↗ Partager</span>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="wc-eyebrow mb-2">Derniers épisodes</p>
            <h2 className="text-3xl font-bold">À écouter cette semaine</h2>
          </div>
          <div className="flex gap-2 text-xs">
            {["Tous", "Entrepreneuriat", "Design", "Management", "Culture"].map((t, i) => (
              <span key={t} className={`wc-chip ${i === 0 ? "wc-chip-on" : ""}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {episodes.map((e, i) => {
            const on = playing === e.n;
            return (
              <article key={e.n} className={`wc-card wc-ep grid items-center gap-5 p-4 md:grid-cols-[auto_72px_1fr_220px_auto] ${on ? "wc-ep-on" : ""}`}>
                <button className="wc-play" onClick={() => setPlaying(on ? null : e.n)} aria-label="Lecture">
                  {on ? "❚❚" : "▶"}
                </button>
                <img src={img(e.image, 150, 150)} alt={e.guest} className="h-[72px] w-[72px] rounded-xl object-cover max-md:hidden" />
                <div className="min-w-0">
                  <p className="text-xs text-white/45">
                    Épisode {e.n} · {e.date} · {e.duration}
                  </p>
                  <h3 className="mt-0.5 truncate text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-white/55">
                    avec {e.guest}, {e.role}
                  </p>
                </div>
                <Wave n={40} seed={i + 2} progress={on ? 0.5 : 0} className={`h-10 max-md:hidden ${on ? "wc-wave-live" : ""}`} />
                <div className="flex flex-wrap gap-1.5 md:flex-col md:items-end">
                  {e.tags.map((t) => (
                    <span key={t} className="wc-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <button className="wc-btn wc-btn-ghost">Voir les 142 épisodes</button>
        </div>
      </section>

      {/* Chapters / transcript */}
      <section className="wc-border-y wc-soft">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="wc-eyebrow mb-3">Fonctionnalités</p>
            <h2 className="text-4xl font-bold leading-tight">
              Chapitres, transcriptions, <span className="wc-grad">recherche plein texte.</span>
            </h2>
            <p className="mt-4 text-white/60">Retrouvez la phrase exacte que vous avez entendue en courant. Chaque épisode est transcrit, chapitré et consultable en 12 langues.</p>
            <div className="mt-8 space-y-1">
              {chapters.map(([t, c], i) => (
                <div key={t} className={`wc-chapter flex items-center gap-4 px-4 py-2.5 ${i === 2 ? "wc-chapter-on" : ""}`}>
                  <span className="font-mono text-xs text-white/45">{t}</span>
                  <span className="flex-1 text-sm">{c}</span>
                  {i === 2 && <span className="wc-grad text-xs font-semibold">EN COURS</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="wc-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Transcription · Ép. 142</p>
              <span className="wc-chip">⌕ « clients »</span>
            </div>
            <div className="mt-5 space-y-5 text-[15px] leading-relaxed">
              {[
                ["Julien", "11:40", "Et ces premiers clients, tu les as trouvés comment, concrètement ?"],
                ["Camille", "11:46", "En les appelant un par un. Littéralement. J'avais une liste de 300 cabinets médicaux et je passais mes matinées au téléphone. Les 1 000 premiers clients, c'est de l'artisanat."],
                ["Julien", "12:31", "Pas de publicité du tout ?"],
                ["Camille", "12:34", "Zéro euro pendant un an. Le bouche-à-oreille entre soignants a fait tout le reste."],
              ].map(([who, t, txt]) => (
                <div key={t} className="flex gap-4">
                  <img src={img(who === "Camille" ? featured.image : "1500648767791-00dcc994a43e", 60, 60)} alt="" className="h-8 w-8 shrink-0 rounded-full object-cover" />
                  <div>
                    <p className="text-xs text-white/45">
                      <span className="font-semibold text-white/80">{who}</span> · {t}
                    </p>
                    <p className="mt-1 text-white/80">
                      {txt.split(/(clients)/).map((part, k) =>
                        part === "clients" ? (
                          <mark key={k} className="wc-mark">
                            {part}
                          </mark>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shows */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="wc-eyebrow mb-2">Le réseau</p>
        <h2 className="mb-10 text-3xl font-bold">Nos émissions</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shows.map((s) => (
            <article key={s.name} className="group">
              <div className={`wc-cover wc-cover-${s.tint} relative overflow-hidden rounded-2xl`}>
                <img src={img(s.image, 500, 500)} alt="" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
                <p className="absolute bottom-4 left-4 right-4 text-2xl font-extrabold leading-none">{s.name}</p>
                <button className="wc-play absolute right-3 top-3 scale-90 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">▶</button>
              </div>
              <p className="mt-3 text-sm text-white/60">{s.desc}</p>
              <p className="text-xs text-white/40">{s.eps} épisodes</p>
            </article>
          ))}
        </div>
      </section>

      {/* Hosts */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="wc-card grid items-center gap-10 overflow-hidden p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div className="flex gap-4">
            {["1500648767791-00dcc994a43e", "1529626455594-4ff0802cfb7e"].map((h, i) => (
              <img key={h} src={img(h, 400, 520)} alt="" className={`wc-host aspect-[4/5.2] w-1/2 rounded-2xl object-cover ${i === 1 ? "mt-10" : ""}`} />
            ))}
          </div>
          <div>
            <p className="wc-eyebrow mb-3">Au micro</p>
            <h2 className="text-4xl font-bold">Julien Moreau & Salomé Ricci</h2>
            <p className="mt-4 leading-relaxed text-white/60">
              Ancien journaliste à France Culture pour l'un, fondatrice de deux start-ups pour l'autre. Ils animent Wavecast depuis 2021 depuis un petit studio de la Croix-Rousse, à Lyon.
            </p>
            <blockquote className="wc-quote mt-8">« On ne cherche pas des réponses toutes faites. On cherche les bonnes questions. »</blockquote>
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="wc-premium relative overflow-hidden p-10 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="wc-eyebrow mb-3 !text-white/70">Wavecast+</p>
              <h2 className="text-4xl font-bold">Sans pub. Un jour plus tôt. Des bonus chaque mois.</h2>
              <ul className="mt-6 grid gap-2 text-white/85 sm:grid-cols-2">
                {["Épisodes sans publicité", "Accès anticipé le lundi", "Épisodes bonus mensuels", "Communauté Discord privée"].map((x) => (
                  <li key={x}>✦ {x}</li>
                ))}
              </ul>
            </div>
            <div className="wc-card p-6 text-center">
              <p className="text-sm text-white/60">À partir de</p>
              <p className="mt-1 text-5xl font-bold">4,99 €</p>
              <p className="text-sm text-white/60">par mois · sans engagement</p>
              <button className="wc-btn mt-6 w-full">Essayer 30 jours gratuits</button>
            </div>
          </div>
          <Wave n={120} progress={1} className="wc-premium-wave absolute inset-x-0 bottom-0 h-20" />
        </div>
      </section>

      <footer className="wc-border-t px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <div className="wc-logo flex items-center gap-2.5">
              <span className="wc-logo-mark">
                <i />
                <i />
                <i />
                <i />
              </span>
              Wavecast
            </div>
            <p className="mt-3 text-sm text-white/45">Un réseau de podcasts indépendant, produit à Lyon.</p>
          </div>
          {[
            ["Écouter", ["Épisodes", "Émissions", "Playlists", "RSS"]],
            ["Wavecast", ["À propos", "Proposer un invité", "Annonceurs", "Presse"]],
            ["Aide", ["Wavecast+", "Contact", "Confidentialité", "CGU"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="wc-eyebrow mb-3">{t}</p>
              <ul className="space-y-2 text-sm text-white/60">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="wc-link">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-white/35">© 2026 Wavecast — design system « Wave Cast »</p>
      </footer>
    </div>
  );
}
