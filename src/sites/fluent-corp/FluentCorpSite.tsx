import "./fluent-corp.css";

const features = [
  { title: "Gouvernance centralisée", desc: "Gérez les accès, rôles et audits depuis une seule console." },
  { title: "Conformité intégrée", desc: "SOC 2, RGPD et ISO 27001 pris en charge nativement." },
  { title: "Intégrations natives", desc: "Connectez votre SI existant en quelques clics, sans code." },
];

const logos = ["ACME Corp", "Nordis", "Vantage", "Cirrus", "Meridian"];

export default function FluentCorpSite() {
  return (
    <div className="fc-root min-h-full">
      <header className="fc-border-b flex items-center justify-between px-6 py-4">
        <div className="fc-logo">Corda</div>
        <nav className="hidden gap-6 text-sm text-[#425466] md:flex">
          <a href="#" className="fc-link">Produit</a>
          <a href="#" className="fc-link">Solutions</a>
          <a href="#" className="fc-link">Sécurité</a>
          <a href="#" className="fc-link">Tarifs</a>
        </nav>
        <div className="flex gap-3">
          <button className="fc-btn fc-btn-ghost">Se connecter</button>
          <button className="fc-btn fc-btn-primary">Demander une démo</button>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <span className="fc-chip mx-auto mb-6 w-fit">Nouveau — Corda pour l'IT</span>
        <h1 className="text-5xl font-semibold leading-tight text-[#0a2540] md:text-6xl">
          La plateforme de gestion
          <br />
          pour entreprises exigeantes
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#425466]">
          Corda centralise l'identité, la facturation et la conformité de
          vos équipes à l'échelle.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="fc-btn fc-btn-primary">Démarrer l'essai</button>
          <button className="fc-btn fc-btn-ghost">Parler à un expert</button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="fc-panel h-72 md:h-96" />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <p className="mb-8 text-center text-xs uppercase tracking-widest text-[#8792a2]">
          Utilisé par des équipes IT dans le monde entier
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#8792a2]">
          {logos.map((l) => (
            <span key={l} className="text-sm font-semibold">{l}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="fc-card p-6">
              <div className="fc-icon mb-4" />
              <h3 className="text-lg font-semibold text-[#0a2540]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#425466]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="fc-border-t px-6 py-8 text-xs text-[#8792a2]">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p>© 2026 Corda Inc. — design system « Fluent Corp »</p>
          <div className="flex gap-6">
            <a href="#" className="fc-link">Confidentialité</a>
            <a href="#" className="fc-link">Statut</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
