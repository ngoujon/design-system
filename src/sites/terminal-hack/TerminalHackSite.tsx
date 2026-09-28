import { useState } from "react";

import { img } from "../../lib/img";
import "./terminal-hack.css";

const ascii = String.raw`
 ██████╗  ██████╗  ██████╗ ████████╗
 ██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
 ██████╔╝██║   ██║██║   ██║   ██║
 ██╔══██╗██║   ██║██║   ██║   ██║
 ██║  ██║╚██████╔╝╚██████╔╝   ██║
 ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝`;

const install: Record<string, string> = {
  npm: "npx root@latest init my-app",
  brew: "brew install rootsh/tap/root",
  curl: "curl -fsSL https://root.sh/install | sh",
  cargo: "cargo install root-cli --locked",
};

const session = [
  { p: true, t: "root init my-app --template edge-api" },
  { p: false, t: "✓ workspace bootstrapped in 0.41s", c: "ok" },
  { p: false, t: "✓ 3 dépendances installées (lockfile vérifié)", c: "ok" },
  { p: true, t: "root dev" },
  { p: false, t: "→ http://localhost:4000  ·  hot reload actif", c: "dim" },
  { p: true, t: "root deploy --edge --regions all" },
  { p: false, t: "⠿ build   ████████████████████ 100%  1.2s", c: "dim" },
  { p: false, t: "✓ 42 régions synchronisées · p95 18ms", c: "ok" },
  { p: false, t: "✓ https://my-app.root.run", c: "link" },
];

const features = [
  { flag: "--fast", title: "Cold start < 20ms", desc: "Runtime compilé en Rust, snapshots V8 pré-chauffés, zéro overhead au démarrage." },
  { flag: "--secure", title: "Sandbox isolée", desc: "Chaque process tourne dans son propre jail réseau. Permissions explicites, rien par défaut." },
  { flag: "--open", title: "100 % open source", desc: "Licence MIT. Le cœur du runtime est auditable, forkable, à toi." },
  { flag: "--edge", title: "42 régions", desc: "Déploie au plus près de tes utilisateurs avec une seule commande." },
  { flag: "--logs", title: "Logs en streaming", desc: "`root logs --tail` : filtre, grep, jq. Tout reste dans ton terminal." },
  { flag: "--offline", title: "Offline-first", desc: "Cache global des dépendances, builds reproductibles sans réseau." },
];

const bench = [
  { name: "root", ms: 18, hl: true },
  { name: "deno deploy", ms: 34 },
  { name: "cf workers", ms: 29 },
  { name: "lambda@edge", ms: 142 },
  { name: "vercel fn", ms: 96 },
];

const changelog = [
  { hash: "a3f9c21", tag: "v3.2.0", msg: "feat(deploy): support multi-régions en une commande", date: "il y a 2 jours", author: "k.moreau" },
  { hash: "7be04d8", tag: "", msg: "perf(runtime): cold start -38% via snapshots pré-chauffés", date: "il y a 5 jours", author: "a.diallo" },
  { hash: "c10e7f3", tag: "", msg: "fix(cli): `root logs` respecte NO_COLOR", date: "il y a 1 semaine", author: "t.nguyen" },
  { hash: "e44a9b0", tag: "v3.1.4", msg: "feat(secrets): chiffrement age par défaut", date: "il y a 2 semaines", author: "k.moreau" },
  { hash: "91d2f6a", tag: "", msg: "docs: guide de migration depuis Docker Compose", date: "il y a 3 semaines", author: "l.fontaine" },
];

const contributors = ["1539571696357-5a69c17a67c6", "1534528741775-53994a69daeb", "1506794778202-cad84cf45f1d", "1531746020798-e6953c6e8e04", "1500648767791-00dcc994a43e", "1544005313-94ddf0286df2", "1527980965255-d3b416303d12", "1517841905240-472988babdf9", "1547425260-76bcadfb4f2c", "1529626455594-4ff0802cfb7e", "1463453091185-61582044d556", "1488426862026-3ee34a7d66df"];

const quotes = [
  { user: "@mfrancois", name: "Mathilde François", role: "SRE @ Vantage", text: "On a remplacé 400 lignes de YAML par un `root.toml` de 12 lignes. Je ne reviendrai jamais en arrière.", avatar: "1438761681033-6461ffad8d80" },
  { user: "@kaz_dev", name: "Kazuo Tanaka", role: "Staff eng @ Orbit", text: "Premier outil d'infra dont je lis le changelog avec plaisir. Et `root logs --tail | jq` est magique.", avatar: "1507003211169-0a1dd7228f2d" },
];

export default function TerminalHackSite() {
  const [tab, setTab] = useState("npm");
  const [copied, setCopied] = useState(false);

  return (
    <div className="th-root min-h-full">
      <div className="th-crt" aria-hidden="true" />

      <a href="#" className="th-banner th-border-b block px-6 py-2 text-center text-xs">
        <span className="th-accent">[NEW]</span> root v3.2.0 — déploiement multi-régions en une commande. <span className="underline">lire le changelog →</span>
      </a>

      <header className="th-border-b th-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="th-logo">
            root<span className="th-dim">@shell</span>:~$<span className="th-caret">▌</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            {["./docs", "./changelog", "./pricing", "./blog"].map((l) => (
              <a key={l} href="#" className="th-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="th-btn hidden sm:inline-flex">
              ★ 24.8k
            </a>
            <button className="th-btn th-btn-solid">./install.sh</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <pre className="th-ascii mb-8 text-[9px] leading-[1.15] sm:text-[11px]">{ascii}</pre>
          <p className="th-tag mb-6 w-fit">[ v3.2.0 — build stable · MIT ]</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Déploie ton infra
            <br />
            <span className="th-accent">en une commande_</span>
          </h1>
          <p className="th-dim mt-6 max-w-lg text-[15px] leading-relaxed">
            root est un runtime CLI-first pour builder, tester et déployer des APIs et des workers au plus près de tes utilisateurs — sans jamais quitter ton terminal. Pas de dashboard. Pas de YAML. Juste des commandes.
          </p>

          <div className="th-install mt-8">
            <div className="th-border-b flex text-xs">
              {Object.keys(install).map((k) => (
                <button key={k} onClick={() => setTab(k)} className={`th-tab ${tab === k ? "th-tab-on" : ""}`}>
                  {k}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <code>
                <span className="th-accent">$</span> {install[tab]}
              </code>
              <button
                onClick={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="th-copy shrink-0"
              >
                {copied ? "✓ copié" : "copier"}
              </button>
            </div>
          </div>
        </div>

        <div className="th-window">
          <div className="th-window-bar">
            <span className="th-dot" style={{ background: "#ff5f56" }} />
            <span className="th-dot" style={{ background: "#ffbd2e" }} />
            <span className="th-dot" style={{ background: "#27c93f" }} />
            <span className="th-dim ml-3 text-xs">zsh — ~/code/my-app — 96×28</span>
          </div>
          <div className="p-5 text-[13px] leading-relaxed">
            {session.map((l, i) => (
              <p key={i} className={`th-line ${l.c ? `th-${l.c}` : ""}`} style={{ animationDelay: `${i * 0.45}s` }}>
                {l.p && (
                  <span className="th-prompt">
                    ➜ <span className="th-cyan">my-app</span> <span className="th-dim">git:(</span>
                    <span className="th-red">main</span>
                    <span className="th-dim">)</span>{" "}
                  </span>
                )}
                {l.t}
              </p>
            ))}
            <p className="th-line" style={{ animationDelay: `${session.length * 0.45}s` }}>
              <span className="th-prompt">➜ </span>
              <span className="th-caret">▌</span>
            </p>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="th-border-y">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm">
          <span className="th-dim"># utilisé en prod par</span>
          {["vantage", "orbit", "nordis", "halo.health", "meridian", "kairo"].map((l) => (
            <span key={l} className="th-dim">
              ./{l}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="th-dim mb-2 text-sm">$ root --help</p>
        <h2 className="mb-10 text-3xl font-bold">
          FLAGS<span className="th-accent">:</span>
        </h2>
        <div className="grid gap-px border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.2)] md:grid-cols-3">
          {features.map((f) => (
            <div key={f.flag} className="th-card p-6">
              <span className="th-tag mb-4 inline-block">{f.flag}</span>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="th-dim mt-2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Config + bench */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <div className="th-window">
          <div className="th-window-bar">
            <span className="th-dot" style={{ background: "#ff5f56" }} />
            <span className="th-dot" style={{ background: "#ffbd2e" }} />
            <span className="th-dot" style={{ background: "#27c93f" }} />
            <span className="th-dim ml-3 text-xs">root.toml</span>
          </div>
          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
            <span className="th-dim">{"# 12 lignes. C'est tout.\n"}</span>
            <span className="th-cyan">[app]</span>
            {"\n"}name = <span className="th-yellow">"my-app"</span>
            {"\n"}runtime = <span className="th-yellow">"edge@3"</span>
            {"\n\n"}
            <span className="th-cyan">[deploy]</span>
            {"\n"}regions = [<span className="th-yellow">"all"</span>]{"\n"}min_instances = <span className="th-accent">0</span>
            {"\n"}max_instances = <span className="th-accent">200</span>
            {"\n\n"}
            <span className="th-cyan">[secrets]</span>
            {"\n"}DATABASE_URL = {"{"} from = <span className="th-yellow">"vault"</span> {"}"}
            {"\n"}STRIPE_KEY = {"{"} from = <span className="th-yellow">"env"</span> {"}"}
          </pre>
        </div>
        <div className="th-window">
          <div className="th-window-bar">
            <span className="th-dot" style={{ background: "#ff5f56" }} />
            <span className="th-dot" style={{ background: "#ffbd2e" }} />
            <span className="th-dot" style={{ background: "#27c93f" }} />
            <span className="th-dim ml-3 text-xs">root bench --cold-start</span>
          </div>
          <div className="p-5 text-[13px]">
            <p className="th-dim mb-4">cold start p50 (ms) · 10 000 invocations · eu-west</p>
            {bench.map((b) => (
              <div key={b.name} className="mb-2 grid grid-cols-[110px_1fr_48px] items-center gap-3">
                <span className={b.hl ? "th-accent" : ""}>{b.name}</span>
                <span className={b.hl ? "th-accent" : "th-dim"}>{"█".repeat(Math.max(1, Math.round(b.ms / 5)))}</span>
                <span className="text-right">{b.ms}</span>
              </div>
            ))}
            <p className="th-ok mt-4">✓ root est 1.6× plus rapide que le suivant</p>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="th-border-t mx-auto max-w-6xl px-6 py-20">
        <p className="th-dim mb-2 text-sm">$ git log --oneline --decorate -5</p>
        <h2 className="mb-8 text-3xl font-bold">
          CHANGELOG<span className="th-accent">:</span>
        </h2>
        <div className="space-y-1 text-sm">
          {changelog.map((c) => (
            <div key={c.hash} className="th-log grid gap-3 px-3 py-2 md:grid-cols-[80px_1fr_110px_170px]">
              <span className="th-yellow">{c.hash}</span>
              <span>
                {c.tag && <span className="th-tag-inline mr-2">(tag: {c.tag})</span>}
                {c.msg}
              </span>
              <span className="th-dim max-md:hidden">{c.author}</span>
              <span className="th-dim md:text-right">{c.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="th-border-t mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="th-dim mb-2 text-sm">$ gh repo view rootsh/root</p>
            <h2 className="text-3xl font-bold">
              OPEN SOURCE<span className="th-accent">:</span>
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                ["24.8k", "stars"],
                ["612", "contributeurs"],
                ["1.2M", "installs/mois"],
              ].map(([v, l]) => (
                <div key={l} className="th-card-b p-4">
                  <p className="th-accent text-2xl font-bold">{v}</p>
                  <p className="th-dim text-xs">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {contributors.map((c) => (
                <img key={c} src={img(c, 64, 64)} alt="" className="th-avatar h-9 w-9 object-cover" />
              ))}
              <span className="th-card-b flex h-9 items-center px-2 text-xs">+600</span>
            </div>
          </div>
          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.user} className="th-card-b p-5">
                <div className="flex items-center gap-3">
                  <img src={img(q.avatar, 80, 80)} alt="" className="th-avatar h-10 w-10 object-cover" />
                  <div className="text-sm">
                    <p>
                      {q.name} <span className="th-dim">{q.user}</span>
                    </p>
                    <p className="th-dim text-xs">{q.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed">
                  <span className="th-dim">&gt; </span>
                  {q.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="th-border-t mx-auto max-w-6xl px-6 py-20">
        <p className="th-dim mb-2 text-sm">$ root pricing --compare</p>
        <h2 className="mb-8 text-3xl font-bold">
          PRICING<span className="th-accent">:</span>
        </h2>
        <div className="th-table overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr>
                {["", "hobby", "pro", "team"].map((h) => (
                  <th key={h} className="px-4 py-3 font-normal uppercase">
                    {h ? <span className={h === "pro" ? "th-accent" : ""}>{h}</span> : <span className="th-dim">plan</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["prix", "0 €", "20 € / mois", "sur devis"],
                ["requêtes", "1M / mois", "50M / mois", "illimité"],
                ["régions", "3", "42", "42 + dédiées"],
                ["logs", "24 h", "30 jours", "1 an"],
                ["support", "discord", "email < 24h", "slack partagé"],
              ].map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "th-dim" : ""} ${i === 2 ? "th-accent" : ""}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="th-btn th-btn-solid">$ root login</button>
          <button className="th-btn">$ root contact --sales</button>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={img("1526374965328-7f61d4dc18c5", 1600, 600)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="th-cta-shade absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="th-dim text-sm"># prêt ?</p>
          <h2 className="mt-3 text-4xl font-bold">
            <span className="th-accent">$</span> npx root init<span className="th-caret">▌</span>
          </h2>
          <p className="th-dim mx-auto mt-4 max-w-md">Gratuit pour toujours sur le plan hobby. Pas de carte bancaire. Pas de dashboard à apprendre.</p>
        </div>
      </section>

      <footer className="th-border-t px-6 py-10 text-xs">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <p className="th-logo">root</p>
            <p className="th-dim mt-2">made with ♥ and too much coffee in Lyon</p>
          </div>
          {[
            ["docs/", ["quickstart.md", "cli-reference.md", "root-toml.md"]],
            ["community/", ["github", "discord", "rss"]],
            ["legal/", ["LICENSE", "privacy.txt", "security.txt"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="th-accent mb-2">{t}</p>
              <ul className="space-y-1">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="th-link">
                      ├── {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="th-dim mx-auto mt-10 flex max-w-6xl items-center justify-between">
          <p>© 2026 root — design system « Terminal Hack »</p>
          <p>
            exit <span className="th-accent">0</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
