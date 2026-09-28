import "./hud-cyber.css";

const games = [
  { name: "VOIDRUNNER", tag: "Battle Royale", players: "142K en ligne" },
  { name: "STEEL PACT", tag: "Tactique 5v5", players: "88K en ligne" },
  { name: "ECHO/ZERO", tag: "MMO Sci-Fi", players: "210K en ligne" },
];

export default function HudCyberSite() {
  return (
    <div className="hc-root min-h-full">
      <header className="hc-border-b flex items-center justify-between px-6 py-4">
        <div className="hc-logo">NEXUS</div>
        <nav className="hidden gap-6 text-xs uppercase tracking-widest md:flex">
          <a href="#" className="hc-link">Jeux</a>
          <a href="#" className="hc-link">Esport</a>
          <a href="#" className="hc-link">Classements</a>
        </nav>
        <button className="hc-btn">SE CONNECTER</button>
      </header>

      <section className="hc-hero relative px-6 py-20 text-center">
        <p className="hc-tag mx-auto mb-6 w-fit">// SAISON 04 — LIVE</p>
        <h1 className="hc-title text-6xl md:text-7xl">NEXUS PLATFORM</h1>
        <p className="mx-auto mt-6 max-w-xl text-white/60">
          Rejoins 4 millions de joueurs sur l'écosystème gaming nouvelle
          génération.
        </p>
        <button className="hc-btn hc-btn-solid mt-8">JOUER MAINTENANT</button>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {games.map((g) => (
            <div key={g.name} className="hc-card">
              <div className="hc-thumb" />
              <div className="p-4">
                <p className="hc-title text-lg">{g.name}</p>
                <p className="text-xs text-white/50">{g.tag}</p>
                <p className="hc-players mt-3 text-xs">{g.players}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hc-border-t grid divide-x divide-cyan-500/20 px-6 py-10 text-center md:grid-cols-3">
        <div>
          <p className="hc-title text-3xl">4.2M</p>
          <p className="text-xs uppercase tracking-widest text-white/40">Joueurs actifs</p>
        </div>
        <div>
          <p className="hc-title text-3xl">1,200+</p>
          <p className="text-xs uppercase tracking-widest text-white/40">Tournois/an</p>
        </div>
        <div>
          <p className="hc-title text-3xl">99.98%</p>
          <p className="text-xs uppercase tracking-widest text-white/40">Uptime serveurs</p>
        </div>
      </section>

      <footer className="hc-border-t px-6 py-6 text-center text-xs text-white/30">
        © 2026 NEXUS — design system « HUD Cyber »
      </footer>
    </div>
  );
}
