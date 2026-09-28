import "./grid-metrics.css";

const kpis = [
  { label: "Volume 24h", value: "€4.2M", delta: "+3.1%", up: true },
  { label: "Comptes actifs", value: "18 204", delta: "+0.8%", up: true },
  { label: "Latence moyenne", value: "112ms", delta: "-4.2%", up: true },
  { label: "Taux d'échec", value: "0.03%", delta: "+0.01%", up: false },
];

const rows = [
  { id: "TX-88213", account: "ACC-4471", amount: "+€12,400.00", status: "Réglé" },
  { id: "TX-88214", account: "ACC-2290", amount: "-€3,120.50", status: "En cours" },
  { id: "TX-88215", account: "ACC-5583", amount: "+€890.00", status: "Réglé" },
  { id: "TX-88216", account: "ACC-1027", amount: "+€45,200.00", status: "Réglé" },
];

export default function GridMetricsSite() {
  return (
    <div className="gm-root min-h-full">
      <header className="gm-border-b flex items-center justify-between px-6 py-4">
        <div className="gm-logo">Ledger.io</div>
        <nav className="hidden gap-6 text-sm text-white/60 md:flex">
          <a href="#" className="gm-link">Vue d'ensemble</a>
          <a href="#" className="gm-link">Transactions</a>
          <a href="#" className="gm-link">Rapports</a>
          <a href="#" className="gm-link">API</a>
        </nav>
        <button className="gm-btn">+ Nouveau virement</button>
      </header>

      <section className="grid gap-px gm-bg-grid md:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="gm-panel px-6 py-6">
            <p className="text-xs uppercase tracking-wide text-white/40">{k.label}</p>
            <p className="mt-2 font-mono text-2xl font-semibold">{k.value}</p>
            <p className={`mt-1 text-xs font-mono ${k.up ? "gm-up" : "gm-down"}`}>
              {k.delta}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-px gm-bg-grid md:grid-cols-3">
        <div className="gm-panel px-6 py-6 md:col-span-2">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/40">
            Flux net — 30 jours
          </p>
          <div className="flex h-40 items-end gap-1.5">
            {[40, 55, 35, 70, 60, 80, 65, 90, 75, 95, 85, 100, 70, 60].map((h, i) => (
              <div
                key={i}
                className="gm-bar flex-1"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="gm-panel px-6 py-6">
          <p className="mb-4 text-xs uppercase tracking-wide text-white/40">
            Répartition
          </p>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between"><span className="text-white/60">Virements</span><span>62%</span></div>
            <div className="flex justify-between"><span className="text-white/60">Cartes</span><span>28%</span></div>
            <div className="flex justify-between"><span className="text-white/60">Autres</span><span>10%</span></div>
          </div>
        </div>
      </section>

      <section className="gm-panel px-6 py-6">
        <p className="mb-4 text-xs uppercase tracking-wide text-white/40">
          Dernières transactions
        </p>
        <table className="w-full font-mono text-sm">
          <thead>
            <tr className="gm-border-b text-left text-white/40">
              <th className="pb-2 font-normal">ID</th>
              <th className="pb-2 font-normal">Compte</th>
              <th className="pb-2 font-normal">Montant</th>
              <th className="pb-2 font-normal">Statut</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="gm-row-border">
                <td className="py-2.5 text-white/70">{r.id}</td>
                <td className="py-2.5 text-white/70">{r.account}</td>
                <td className={`py-2.5 ${r.amount.startsWith("+") ? "gm-up" : "gm-down"}`}>
                  {r.amount}
                </td>
                <td className="py-2.5">
                  <span className={`gm-badge ${r.status === "Réglé" ? "gm-badge-ok" : "gm-badge-pending"}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="gm-border-t px-6 py-6 text-xs text-white/30">
        © 2026 Ledger.io — design system « Grid Metrics »
      </footer>
    </div>
  );
}
