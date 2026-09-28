import "./neon-tide.css";

const tracks = [
  { title: "Midnight Drive", artist: "SYNTHIA", time: "3:42" },
  { title: "Neon Rain", artist: "Pulse Dept.", time: "4:10" },
  { title: "Chrome Heart", artist: "VHS Ghost", time: "2:58" },
];

export default function NeonTideSite() {
  return (
    <div className="nt-root min-h-full">
      <div className="nt-grid-floor" aria-hidden="true" />
      <div className="nt-sun" aria-hidden="true" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6">
        <div className="nt-logo">TIDE</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#" className="nt-link">Découvrir</a>
          <a href="#" className="nt-link">Playlists</a>
          <a href="#" className="nt-link">Radio</a>
        </nav>
        <button className="nt-btn">Écouter gratuitement</button>
      </header>

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="nt-title text-6xl md:text-7xl">TIDE</h1>
        <p className="mt-4 text-lg text-white/70">
          Le son des nuits électriques. Streaming illimité, sans coupure.
        </p>
        <button className="nt-btn nt-btn-solid mt-8">▶ Lancer la radio</button>
      </section>

      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-20">
        <div className="nt-player">
          <div className="flex items-center gap-4 border-b border-white/10 px-5 py-4">
            <div className="nt-cover" />
            <div>
              <p className="text-sm font-semibold">Midnight Drive</p>
              <p className="text-xs text-white/50">SYNTHIA</p>
            </div>
          </div>
          <div className="flex items-end gap-[3px] px-5 py-6">
            {[30, 60, 45, 80, 55, 90, 40, 70, 50, 85, 35, 65, 95, 45, 60, 30, 75, 50, 40, 80].map((h, i) => (
              <div key={i} className="nt-wave" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-20">
        <p className="nt-eyebrow mb-4">Tendance cette semaine</p>
        <div className="nt-tracklist">
          {tracks.map((t, i) => (
            <div key={t.title} className="nt-track">
              <span className="nt-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <p className="text-sm font-medium">{t.title}</p>
                <p className="text-xs text-white/50">{t.artist}</p>
              </div>
              <span className="text-xs text-white/40">{t.time}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        © 2026 TIDE — design system « Neon Tide »
      </footer>
    </div>
  );
}
