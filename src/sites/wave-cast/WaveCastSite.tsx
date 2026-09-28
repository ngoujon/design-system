import "./wave-cast.css";

const episodes = [
  { n: "142", title: "Construire un produit sans levée de fonds", duration: "48 min" },
  { n: "141", title: "L'avenir du travail asynchrone", duration: "36 min" },
  { n: "140", title: "Design systems : mythe ou nécessité ?", duration: "52 min" },
];

export default function WaveCastSite() {
  return (
    <div className="wc-root min-h-full">
      <header className="wc-border-b flex items-center justify-between px-6 py-5">
        <div className="wc-logo">Wavecast</div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#" className="wc-link">Épisodes</a>
          <a href="#" className="wc-link">Invités</a>
          <a href="#" className="wc-link">À propos</a>
        </nav>
        <button className="wc-btn">S'abonner</button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="wc-eyebrow mb-4">Nouvel épisode chaque mardi</p>
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Des conversations qui
          <span className="wc-accent"> changent de fréquence.</span>
        </h1>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button className="wc-play">▶</button>
          <div className="flex items-end gap-[3px]">
            {[20, 40, 65, 30, 80, 45, 60, 35, 90, 50, 25, 70, 40, 55].map((h, i) => (
              <div key={i} className="wc-wave" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <p className="wc-eyebrow mb-4">Derniers épisodes</p>
        <div className="space-y-3">
          {episodes.map((e) => (
            <div key={e.n} className="wc-episode">
              <span className="wc-num">#{e.n}</span>
              <p className="flex-1 text-sm font-medium">{e.title}</p>
              <span className="text-xs text-white/40">{e.duration}</span>
              <button className="wc-play wc-play-sm">▶</button>
            </div>
          ))}
        </div>
      </section>

      <section className="wc-band px-6 py-16 text-center">
        <p className="mx-auto max-w-md text-lg text-white/70">
          Disponible sur Spotify, Apple Podcasts et partout où vous écoutez.
        </p>
      </section>

      <footer className="wc-border-t px-6 py-8 text-center text-xs text-white/40">
        © 2026 Wavecast — design system « Wave Cast »
      </footer>
    </div>
  );
}
