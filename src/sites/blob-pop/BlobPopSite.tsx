import "./blob-pop.css";

const features = [
  { emoji: "✅", title: "Listes rapides", desc: "Ajoute une tâche en tapant, sans jamais lever le doigt du clavier." },
  { emoji: "🔥", title: "Streaks motivants", desc: "Garde ta série active et vois ta constance grandir chaque jour." },
  { emoji: "🤝", title: "Partagé en équipe", desc: "Synchronise tes projets avec toute ta squad en un clic." },
];

export default function BlobPopSite() {
  return (
    <div className="bp-root min-h-full">
      <div className="bp-blob bp-blob-1" />
      <div className="bp-blob bp-blob-2" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6">
        <div className="bp-logo">Poppy</div>
        <nav className="hidden gap-8 text-sm font-bold md:flex">
          <a href="#" className="bp-link">Fonctionnalités</a>
          <a href="#" className="bp-link">Équipes</a>
          <a href="#" className="bp-link">Tarifs</a>
        </nav>
        <button className="bp-btn">Télécharger</button>
      </header>

      <section className="relative z-10 mx-auto max-w-2xl px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold leading-tight text-[#2b2140] md:text-6xl">
          Organise ta vie
          <br />
          sans te prendre la tête.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-[#5c5470]">
          Poppy transforme tes tâches en petites victoires quotidiennes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="bp-btn bp-btn-primary">🍎 App Store</button>
          <button className="bp-btn bp-btn-primary">▶ Google Play</button>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-16">
        <div className="bp-phone-frame mx-auto flex h-80 w-56 items-center justify-center text-5xl">
          📝
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bp-card p-6 text-center">
              <div className="bp-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center text-2xl">
                {f.emoji}
              </div>
              <h3 className="text-lg font-bold text-[#2b2140]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#5c5470]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center text-xs text-[#5c5470]">
        © 2026 Poppy — design system « Blob Pop »
      </footer>
    </div>
  );
}
