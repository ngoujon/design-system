import "./terminal-hack.css";

const commands = [
  { cmd: "root init --project", out: "✓ workspace bootstrapped in 0.4s" },
  { cmd: "root deploy --edge", out: "✓ 42 régions synchronisées" },
  { cmd: "root logs --tail", out: "→ streaming en temps réel..." },
];

const features = [
  { flag: "--fast", title: "Cold start < 20ms", desc: "Runtime compilé, zéro overhead au démarrage." },
  { flag: "--secure", title: "Sandbox isolée", desc: "Chaque process tourne dans son propre jail réseau." },
  { flag: "--open", title: "100% open source", desc: "Le cœur du runtime est auditable, forkable, à toi." },
];

export default function TerminalHackSite() {
  return (
    <div className="th-root min-h-full">
      <header className="th-border-b flex items-center justify-between px-6 py-4">
        <div className="th-logo">root@shell:~$</div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#" className="th-link">docs</a>
          <a href="#" className="th-link">changelog</a>
          <a href="#" className="th-link">github</a>
        </nav>
        <button className="th-btn">./install.sh</button>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="th-tag mx-auto mb-6 w-fit">[ v3.2.0 — build stable ]</p>
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Déploie ton infra
          <br />
          <span className="th-cursor">en une commande_</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl th-dim text-lg">
          root est un runtime CLI-first pour builder, tester et déployer sans
          jamais quitter ton terminal.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="th-btn th-btn-solid">$ npx root init</button>
          <button className="th-btn">voir la doc →</button>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="th-window">
          <div className="th-window-bar">
            <span className="th-dot" style={{ background: "#ff5f56" }} />
            <span className="th-dot" style={{ background: "#ffbd2e" }} />
            <span className="th-dot" style={{ background: "#27c93f" }} />
            <span className="ml-3 text-xs th-dim">session — root</span>
          </div>
          <div className="p-5 text-sm leading-relaxed">
            {commands.map((c) => (
              <div key={c.cmd} className="mb-3">
                <p><span className="th-prompt">➜ </span>{c.cmd}</p>
                <p className="th-dim">{c.out}</p>
              </div>
            ))}
            <p><span className="th-prompt">➜ </span><span className="th-cursor">_</span></p>
          </div>
        </div>
      </section>

      <section className="th-border-t mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.flag} className="th-card p-6">
              <span className="th-tag mb-3 inline-block">{f.flag}</span>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm th-dim">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="th-border-t px-6 py-8 text-xs th-dim">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p>© 2026 root — design system « Terminal Hack »</p>
          <p>exit 0</p>
        </div>
      </footer>
    </div>
  );
}
