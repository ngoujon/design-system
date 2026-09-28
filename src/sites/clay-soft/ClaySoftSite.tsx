import "./clay-soft.css";

const features = [
  { emoji: "🌙", title: "Rituels du soir", desc: "Des séances courtes pour relâcher la journée." },
  { emoji: "🌬️", title: "Respiration guidée", desc: "Un souffle animé qui suit ton rythme cardiaque." },
  { emoji: "🎧", title: "Sons doux", desc: "Une bibliothèque de textures sonores apaisantes." },
];

export default function ClaySoftSite() {
  return (
    <div className="cs-root min-h-full">
      <header className="flex items-center justify-between px-6 py-6">
        <div className="cs-logo">Câlme</div>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#" className="cs-link">Séances</a>
          <a href="#" className="cs-link">Communauté</a>
          <a href="#" className="cs-link">Histoires</a>
        </nav>
        <button className="cs-btn cs-btn-dark">Ouvrir l'app</button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-5xl font-bold leading-tight text-[#3d3145] md:text-6xl">
          Un moment de calme,
          <br />
          tout en douceur.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-[#6b5b73]">
          Câlme t'accompagne avec des exercices de respiration et de
          méditation pensés pour ton quotidien.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="cs-btn cs-btn-primary">Commencer gratuitement</button>
          <button className="cs-btn cs-btn-ghost">Voir une séance</button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="cs-blob-frame mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
          <span className="text-6xl">🧘</span>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="cs-card p-7 text-center">
              <div className="cs-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center text-2xl">
                {f.emoji}
              </div>
              <h3 className="text-lg font-semibold text-[#3d3145]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#6b5b73]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <div className="cs-card cs-card-accent px-8 py-12">
          <p className="text-2xl font-medium text-[#3d3145]">
            « Trois minutes le matin, et ma journée change complètement. »
          </p>
          <p className="mt-4 text-sm text-[#6b5b73]">— Inès, utilisatrice depuis 2025</p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-[#8d7d94]">
        © 2026 Câlme — design system « Clay Soft »
      </footer>
    </div>
  );
}
