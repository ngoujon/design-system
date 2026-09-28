import "./aurora-glass.css";

const nav = ["Produit", "Solutions", "Tarifs", "Ressources"];

const features = [
  {
    title: "Flux temps réel",
    desc: "Synchronisez vos équipes avec des données live, sans latence perceptible.",
    icon: "◎",
  },
  {
    title: "Sécurité adaptive",
    desc: "Un moteur de confiance qui apprend de chaque session pour ajuster les accès.",
    icon: "◈",
  },
  {
    title: "Espaces modulaires",
    desc: "Composez vos tableaux de bord comme des calques de verre superposés.",
    icon: "◇",
  },
];

const logos = ["NIMBUS", "VELA", "ORBIT", "HALO", "PRISM"];

export default function AuroraGlassSite() {
  return (
    <div className="ag-root min-h-full text-white">
      <div className="ag-aurora" aria-hidden="true" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="ag-logo-dot" />
          Auréa
        </div>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          {nav.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <button className="ag-glass rounded-full px-5 py-2 text-sm font-medium">
          Se connecter
        </button>
      </header>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 text-center">
        <span className="ag-glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/80">
          ✦ Nouveau — Auréa OS 3.0
        </span>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Un espace de travail
          <br />
          <span className="ag-gradient-text">translucide et fluide</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Auréa rassemble vos outils dans des panneaux de verre superposés,
          pensés pour la clarté et le mouvement.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="ag-cta rounded-full px-7 py-3 text-sm font-semibold text-neutral-900">
            Essayer gratuitement
          </button>
          <button className="ag-glass rounded-full px-7 py-3 text-sm font-medium">
            Voir la démo
          </button>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16">
        <div className="ag-glass ag-panel rounded-3xl p-2">
          <div className="flex h-72 items-center justify-center rounded-[1.4rem] bg-white/5 text-white/30 md:h-96">
            aperçu du produit
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">
          Adopté par des équipes ambitieuses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/40">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold tracking-widest">
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="ag-glass ag-panel rounded-2xl p-6">
              <div className="ag-icon mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-lg">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="ag-glass ag-panel rounded-3xl px-8 py-12">
          <p className="text-2xl font-medium leading-snug md:text-3xl">
            « Auréa a transformé la façon dont nos équipes distantes
            collaborent — tout paraît léger, presque impalpable. »
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-9 w-9 rounded-full bg-white/20" />
            <div className="text-left text-sm">
              <p className="font-medium">Léa Fontaine</p>
              <p className="text-white/50">VP Design, Nimbus Labs</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© 2026 Auréa Inc. — Design system « Aurora Glass »</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">
              Confidentialité
            </a>
            <a href="#" className="hover:text-white/70">
              Statut
            </a>
            <a href="#" className="hover:text-white/70">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
