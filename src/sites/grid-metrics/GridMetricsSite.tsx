import { useMemo, useState } from "react";

import { img } from "../../lib/img";
import "./grid-metrics.css";

type Range = "7J" | "30J" | "90J" | "1A";

function series(n: number, seed: number, base: number, vol: number) {
  const out: number[] = [];
  let v = base;
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    v += ((s / 233280) - 0.45) * vol;
    out.push(Math.max(base * 0.4, v));
  }
  return out;
}

function Spark({ data, up }: { data: number[]; up: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((d, i) => `${(i / (data.length - 1)) * 100},${28 - ((d - min) / (max - min || 1)) * 26}`).join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-8 w-24">
      <polyline points={pts} fill="none" stroke={up ? "#4ade80" : "#f87171"} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const kpis = [
  { label: "Volume 24h", value: "4 218 940 €", delta: "+3,12 %", up: true, seed: 3 },
  { label: "Comptes actifs", value: "18 204", delta: "+0,84 %", up: true, seed: 7 },
  { label: "Latence p95", value: "112 ms", delta: "−4,20 %", up: true, seed: 11 },
  { label: "Taux d'échec", value: "0,031 %", delta: "+0,008 pt", up: false, seed: 19 },
  { label: "Solde de trésorerie", value: "86,4 M€", delta: "+1,06 %", up: true, seed: 23 },
];

const txs = [
  { id: "TX-88213", time: "14:32:08", cp: "Nordis SA", acc: "FR76 3000 •••• 4471", type: "SEPA Inst.", amount: 12400, status: "Réglé" },
  { id: "TX-88214", time: "14:31:52", cp: "Vantage Ltd", acc: "GB29 NWBK •••• 2290", type: "SWIFT", amount: -3120.5, status: "En cours" },
  { id: "TX-88215", time: "14:31:17", cp: "Halo Health", acc: "FR76 1027 •••• 5583", type: "SEPA", amount: 890, status: "Réglé" },
  { id: "TX-88216", time: "14:30:44", cp: "Meridian Group", acc: "DE89 3704 •••• 1027", type: "SEPA Inst.", amount: 45200, status: "Réglé" },
  { id: "TX-88217", time: "14:30:02", cp: "Cirrus Cloud", acc: "NL91 ABNA •••• 7730", type: "Carte", amount: -18.99, status: "Rejeté" },
  { id: "TX-88218", time: "14:29:41", cp: "Keystone Capital", acc: "FR76 3000 •••• 0912", type: "SWIFT", amount: -210000, status: "En revue" },
  { id: "TX-88219", time: "14:29:13", cp: "Altura Energie", acc: "ES91 2100 •••• 3321", type: "SEPA", amount: 7840.2, status: "Réglé" },
  { id: "TX-88220", time: "14:28:55", cp: "Orbit Labs", acc: "FR76 1820 •••• 6654", type: "Prélèvement", amount: -1290, status: "Réglé" },
  { id: "TX-88221", time: "14:28:19", cp: "Prism Media", acc: "IT60 X054 •••• 8810", type: "SEPA Inst.", amount: 3560, status: "En cours" },
];

const fx = [
  ["EUR/USD", "1,0842", "+0,12 %", true],
  ["EUR/GBP", "0,8531", "−0,08 %", false],
  ["EUR/CHF", "0,9417", "+0,03 %", true],
  ["EUR/JPY", "162,38", "+0,41 %", true],
  ["BTC/EUR", "58 412", "−1,24 %", false],
  ["EUR/CAD", "1,4718", "+0,09 %", true],
] as const;

const countries = [
  ["France", 41.2, "1 738 204 €"],
  ["Allemagne", 22.8, "961 920 €"],
  ["Royaume-Uni", 14.1, "594 870 €"],
  ["Espagne", 9.6, "405 020 €"],
  ["Pays-Bas", 7.4, "312 200 €"],
  ["Autres", 4.9, "206 726 €"],
] as const;

const activity = [
  { who: "Camille A.", what: "a approuvé le virement TX-88198", t: "2 min", avatar: "1573497019940-1c28c88b4f3e" },
  { who: "Système", what: "Rapprochement bancaire terminé (4 812 lignes)", t: "9 min", avatar: "" },
  { who: "Julien M.", what: "a exporté le rapport « Trésorerie T3 »", t: "21 min", avatar: "1500648767791-00dcc994a43e" },
  { who: "Aïcha D.", what: "a ajouté un bénéficiaire (Vantage Ltd)", t: "34 min", avatar: "1531746020798-e6953c6e8e04" },
];

const statusClass: Record<string, string> = {
  Réglé: "gm-pill-green",
  "En cours": "gm-pill-blue",
  "En revue": "gm-pill-amber",
  Rejeté: "gm-pill-red",
};

function fmt(n: number) {
  const s = Math.abs(n).toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${n >= 0 ? "+" : "−"}${s} €`;
}

export default function GridMetricsSite() {
  const [range, setRange] = useState<Range>("30J");
  const [status, setStatus] = useState("Tous");
  const n = { "7J": 28, "30J": 30, "90J": 45, "1A": 52 }[range];
  const inflow = useMemo(() => series(n, n * 3 + 1, 100, 14), [n]);
  const outflow = useMemo(() => series(n, n * 7 + 5, 70, 10), [n]);
  const max = Math.max(...inflow, ...outflow) * 1.1;
  const toPath = (d: number[]) => d.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (d.length - 1)) * 1000},${300 - (v / max) * 300}`).join(" ");
  const bars = useMemo(() => series(24, 42, 60, 18), []);
  const rows = txs.filter((t) => status === "Tous" || t.status === status);

  return (
    <div className="gm-root min-h-full">
      <div className="grid min-h-full grid-cols-[220px_1fr] max-lg:grid-cols-1">
        {/* Sidebar */}
        <aside className="gm-side max-lg:hidden">
          <div className="gm-border-b flex items-center gap-2 px-5 py-4">
            <span className="gm-logo-mark" />
            <span className="gm-logo">Ledger.io</span>
          </div>
          <div className="px-3 py-4">
            <p className="gm-th px-2 pb-2">Espace</p>
            <div className="gm-select mb-5 flex items-center justify-between px-2.5 py-2 text-sm">
              <span>Nordis Treasury</span>
              <span className="text-white/30">⌄</span>
            </div>
            <p className="gm-th px-2 pb-2">Pilotage</p>
            {[
              ["▦", "Vue d'ensemble", true],
              ["⇄", "Transactions", false],
              ["◷", "Trésorerie", false],
              ["◫", "Comptes", false],
              ["⚑", "Alertes", false],
            ].map(([i, l, a]) => (
              <a key={l as string} href="#" className={`gm-nav ${a ? "gm-nav-active" : ""}`}>
                <span className="w-4 text-center font-mono">{i}</span>
                {l}
                {l === "Alertes" && <span className="gm-count ml-auto">3</span>}
              </a>
            ))}
            <p className="gm-th mt-5 px-2 pb-2">Données</p>
            {[
              ["≡", "Rapports"],
              ["{}", "API & Webhooks"],
              ["⚙", "Paramètres"],
            ].map(([i, l]) => (
              <a key={l} href="#" className="gm-nav">
                <span className="w-4 text-center font-mono text-[11px]">{i}</span>
                {l}
              </a>
            ))}
          </div>
          <div className="gm-border-t mt-auto px-5 py-4">
            <p className="gm-th">Quota API</p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="gm-bar h-full w-[64%]" />
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-white/45">642 118 / 1 000 000</p>
          </div>
        </aside>

        <div className="min-w-0">
          {/* Topbar */}
          <header className="gm-border-b gm-top sticky top-0 z-20 flex items-center gap-4 px-6 py-3">
            <div className="text-sm">
              <span className="text-white/40">Pilotage / </span>
              <span>Vue d'ensemble</span>
            </div>
            <div className="gm-search ml-6 hidden flex-1 items-center gap-2 px-3 py-1.5 text-sm text-white/35 md:flex">
              ⌕ Rechercher une transaction, un IBAN, un compte…
              <span className="gm-kbd ml-auto">⌘K</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span className="gm-live hidden items-center gap-2 font-mono text-[11px] sm:flex">
                <span className="gm-live-dot" /> LIVE · 14:32:11 CET
              </span>
              <button className="gm-btn">+ Nouveau virement</button>
              <img src={img("1560250097-0b93528c311a", 64, 64)} alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/15" />
            </div>
          </header>

          {/* FX ticker */}
          <div className="gm-border-b gm-ticker overflow-hidden">
            <div className="gm-ticker-track flex w-max gap-8 px-6 py-2 font-mono text-[11px]">
              {[...fx, ...fx, ...fx].map(([p, v, d, up], i) => (
                <span key={i} className="flex gap-2">
                  <span className="text-white/45">{p}</span>
                  <span>{v}</span>
                  <span className={up ? "gm-up" : "gm-down"}>{d}</span>
                </span>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <section className="gm-bg-grid grid gap-px sm:grid-cols-2 xl:grid-cols-5">
            {kpis.map((k) => (
              <div key={k.label} className="gm-panel px-5 py-4">
                <div className="flex items-start justify-between">
                  <p className="gm-th">{k.label}</p>
                  <span className="text-[10px] text-white/25">ⓘ</span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[22px] font-semibold tracking-tight">{k.value}</p>
                    <p className={`mt-0.5 font-mono text-xs ${k.up ? "gm-up" : "gm-down"}`}>
                      {k.up ? "▲" : "▼"} {k.delta} <span className="text-white/30">vs hier</span>
                    </p>
                  </div>
                  <Spark data={series(20, k.seed, 50, 8)} up={k.up} />
                </div>
              </div>
            ))}
          </section>

          {/* Main chart + donut */}
          <section className="gm-bg-grid grid gap-px xl:grid-cols-[2fr_1fr]">
            <div className="gm-panel px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="gm-th">Flux de trésorerie</p>
                  <p className="mt-1 font-mono text-lg font-semibold">
                    +12 482 310,44 € <span className="gm-up text-xs font-normal">▲ 6,8 %</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-white/50">
                    <span className="h-2 w-2 rounded-sm bg-[#3b82f6]" /> Entrées
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/50">
                    <span className="h-2 w-2 rounded-sm bg-[#64748b]" /> Sorties
                  </span>
                  <div className="gm-seg flex">
                    {(["7J", "30J", "90J", "1A"] as Range[]).map((r) => (
                      <button key={r} onClick={() => setRange(r)} className={range === r ? "gm-seg-active" : ""}>
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mt-4 h-[260px]">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {["15 M", "10 M", "5 M", "0"].map((l) => (
                    <div key={l} className="flex items-center gap-2">
                      <span className="w-8 text-right font-mono text-[10px] text-white/30">{l}</span>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 left-10 h-full w-[calc(100%-2.5rem)]">
                  <defs>
                    <linearGradient id="gm-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#3b82f6" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${toPath(inflow)} L1000,300 L0,300 Z`} fill="url(#gm-area)" />
                  <path d={toPath(inflow)} fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <path d={toPath(outflow)} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <line x1="720" x2="720" y1="0" y2="300" stroke="rgba(255,255,255,0.25)" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="gm-tooltip absolute left-[68%] top-6 px-3 py-2 font-mono text-[11px]">
                  <p className="text-white/45">17 sept. 2026</p>
                  <p>
                    <span className="text-[#3b82f6]">■</span> 11 204 118 €
                  </p>
                  <p>
                    <span className="text-[#64748b]">■</span> 7 480 902 €
                  </p>
                </div>
              </div>
              <div className="ml-10 mt-2 flex justify-between font-mono text-[10px] text-white/30">
                {["1 sept.", "8 sept.", "15 sept.", "22 sept.", "28 sept."].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>

            <div className="gm-panel px-5 py-4">
              <p className="gm-th">Répartition des soldes</p>
              <div className="mt-4 flex items-center gap-6">
                <svg viewBox="0 0 42 42" className="h-36 w-36 -rotate-90">
                  {[
                    [48, "#3b82f6", 0],
                    [24, "#1d4ed8", 48],
                    [16, "#60a5fa", 72],
                    [12, "#334155", 88],
                  ].map(([v, c, o]) => (
                    <circle key={c as string} cx="21" cy="21" r="15.9" fill="none" stroke={c as string} strokeWidth="5" strokeDasharray={`${v} ${100 - (v as number)}`} strokeDashoffset={-(o as number)} />
                  ))}
                </svg>
                <div className="flex-1 space-y-2.5 text-xs">
                  {[
                    ["EUR", "48 %", "#3b82f6"],
                    ["USD", "24 %", "#1d4ed8"],
                    ["GBP", "16 %", "#60a5fa"],
                    ["CHF", "12 %", "#334155"],
                  ].map(([c, v, col]) => (
                    <div key={c} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm" style={{ background: col }} />
                      <span className="text-white/60">{c}</span>
                      <span className="ml-auto font-mono">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gm-border-t mt-5 pt-4">
                <p className="gm-th mb-3">Volume horaire (24 h)</p>
                <div className="flex h-20 items-end gap-[3px]">
                  {bars.map((b, i) => (
                    <div key={i} className="gm-bar flex-1 rounded-t-[2px]" style={{ height: `${(b / Math.max(...bars)) * 100}%`, opacity: i === 14 ? 1 : 0.75 }} />
                  ))}
                </div>
                <div className="mt-1 flex justify-between font-mono text-[10px] text-white/30">
                  <span>00h</span>
                  <span>12h</span>
                  <span>23h</span>
                </div>
              </div>
            </div>
          </section>

          {/* Transactions */}
          <section className="gm-bg-grid grid gap-px">
            <div className="gm-panel">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold">Transactions récentes</p>
                  <span className="gm-pill gm-pill-gray font-mono">{rows.length}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {["Tous", "Réglé", "En cours", "En revue", "Rejeté"].map((s) => (
                    <button key={s} onClick={() => setStatus(s)} className={`gm-filter ${status === s ? "gm-filter-active" : ""}`}>
                      {s}
                    </button>
                  ))}
                  <button className="gm-btn-ghost">⤓ Export CSV</button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="gm-table w-full min-w-[820px] text-left text-sm">
                  <thead>
                    <tr>
                      {["ID", "Heure", "Contrepartie", "Compte", "Type", "Montant", "Statut"].map((h) => (
                        <th key={h} className={`gm-th px-5 py-2.5 ${h === "Montant" ? "text-right" : ""}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id}>
                        <td className="px-5 py-2.5 font-mono text-xs text-[#60a5fa]">{r.id}</td>
                        <td className="px-5 py-2.5 font-mono text-xs text-white/50">{r.time}</td>
                        <td className="px-5 py-2.5">{r.cp}</td>
                        <td className="px-5 py-2.5 font-mono text-xs text-white/50">{r.acc}</td>
                        <td className="px-5 py-2.5 text-white/60">{r.type}</td>
                        <td className={`px-5 py-2.5 text-right font-mono ${r.amount >= 0 ? "gm-up" : "gm-down"}`}>{fmt(r.amount)}</td>
                        <td className="px-5 py-2.5">
                          <span className={`gm-pill ${statusClass[r.status]}`}>{r.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="gm-border-t flex items-center justify-between px-5 py-2.5 font-mono text-[11px] text-white/40">
                <span>Affichage 1–{rows.length} sur 48 212</span>
                <span className="flex gap-1">
                  {["‹", "1", "2", "3", "…", "5357", "›"].map((p, i) => (
                    <span key={i} className={`gm-page ${p === "1" ? "gm-page-active" : ""}`}>
                      {p}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </section>

          {/* Bottom row */}
          <section className="gm-bg-grid grid gap-px lg:grid-cols-3">
            <div className="gm-panel px-5 py-4">
              <p className="gm-th mb-3">Volume par pays</p>
              <div className="space-y-2.5">
                {countries.map(([c, p, v]) => (
                  <div key={c} className="text-xs">
                    <div className="mb-1 flex justify-between">
                      <span className="text-white/70">{c}</span>
                      <span className="font-mono text-white/50">
                        {v} · {p.toString().replace(".", ",")} %
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div className="gm-bar h-full rounded-full" style={{ width: `${p * 2.2}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="gm-panel px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="gm-th">Alertes</p>
                <span className="gm-pill gm-pill-red">3 ouvertes</span>
              </div>
              {[
                ["red", "Virement > 200 k€ en attente de double validation", "TX-88218 · il y a 3 min"],
                ["amber", "Solde GBP sous le seuil de 2 M£", "Compte GB-OPS · il y a 1 h"],
                ["amber", "Taux d'échec cartes +0,008 pt", "Acquéreur Adyen · il y a 2 h"],
                ["green", "Certificat API renouvelé", "api.ledger.io · hier"],
              ].map(([c, t, m]) => (
                <div key={t} className="gm-alert flex gap-3 py-2.5">
                  <span className={`gm-alert-dot gm-alert-${c}`} />
                  <div>
                    <p className="text-[13px]">{t}</p>
                    <p className="font-mono text-[11px] text-white/35">{m}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="gm-panel px-5 py-4">
              <p className="gm-th mb-3">Activité de l'équipe</p>
              {activity.map((a) => (
                <div key={a.what} className="gm-alert flex items-center gap-3 py-2.5">
                  {a.avatar ? (
                    <img src={img(a.avatar, 56, 56)} alt="" className="h-7 w-7 rounded-full object-cover" />
                  ) : (
                    <span className="gm-logo-mark !h-7 !w-7 !rounded-full" />
                  )}
                  <p className="flex-1 text-[13px] leading-snug">
                    <span className="font-medium">{a.who}</span> <span className="text-white/55">{a.what}</span>
                  </p>
                  <span className="font-mono text-[11px] text-white/35">{a.t}</span>
                </div>
              ))}
            </div>
          </section>

          <footer className="gm-border-t flex flex-wrap items-center justify-between gap-3 px-6 py-3 font-mono text-[11px] text-white/35">
            <span className="flex items-center gap-2">
              <span className="gm-live-dot" /> Tous les systèmes opérationnels · API v4.12.0 · eu-west-3
            </span>
            <span>© 2026 Ledger.io — design system « Grid Metrics »</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
