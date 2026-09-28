import "./vault-crypto.css";

const assets = [
  { symbol: "BTC", name: "Bitcoin", price: "€58,240.12", change: "+2.4%", up: true },
  { symbol: "ETH", name: "Ethereum", price: "€3,180.55", change: "+1.1%", up: true },
  { symbol: "SOL", name: "Solana", price: "€142.90", change: "-0.8%", up: false },
];

export default function VaultCryptoSite() {
  return (
    <div className="vc-root min-h-full">
      <header className="vc-border-b flex items-center justify-between px-6 py-4">
        <div className="vc-logo">Vault</div>
        <nav className="hidden gap-6 text-sm text-white/50 md:flex">
          <a href="#" className="vc-link">Marchés</a>
          <a href="#" className="vc-link">Trading</a>
          <a href="#" className="vc-link">Sécurité</a>
        </nav>
        <button className="vc-btn">Ouvrir un compte</button>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="vc-eyebrow mx-auto mb-4 w-fit">Trading sécurisé · 24/7</p>
        <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
          Le coffre-fort de
          <span className="vc-accent"> vos actifs numériques</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-white/50">
          Vault combine liquidité institutionnelle et sécurité militaire pour
          protéger votre portefeuille.
        </p>
        <button className="vc-btn vc-btn-solid mt-8">Commencer à trader</button>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="vc-chart flex h-64 items-end gap-1 p-6 md:h-80">
          {[30, 45, 40, 60, 55, 75, 65, 90, 80, 100, 85, 95, 70, 88].map((h, i) => (
            <div key={i} className="vc-bar flex-1" style={{ height: `${h}%` }} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <p className="vc-eyebrow mb-4">Marchés en direct</p>
        <div className="vc-table">
          {assets.map((a) => (
            <div key={a.symbol} className="vc-row">
              <span className="vc-symbol">{a.symbol}</span>
              <span className="flex-1 text-sm text-white/60">{a.name}</span>
              <span className="font-mono text-sm text-white">{a.price}</span>
              <span className={`font-mono text-sm ${a.up ? "vc-up" : "vc-down"}`}>
                {a.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="vc-border-t px-6 py-6 text-center text-xs text-white/30">
        © 2026 Vault — design system « Vault Crypto »
      </footer>
    </div>
  );
}
