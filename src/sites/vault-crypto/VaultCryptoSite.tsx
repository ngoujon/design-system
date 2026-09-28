import { useMemo, useState } from "react";

import { img } from "../../lib/img";
import "./vault-crypto.css";

type Asset = { symbol: string; name: string; price: number; change: number; cap: string; vol: string; color: string; seed: number };

const assets: Asset[] = [
  { symbol: "BTC", name: "Bitcoin", price: 58240.12, change: 2.41, cap: "1 148 Md€", vol: "28,4 Md€", color: "#f7931a", seed: 3 },
  { symbol: "ETH", name: "Ethereum", price: 3180.55, change: 1.12, cap: "382 Md€", vol: "14,1 Md€", color: "#8c8cff", seed: 9 },
  { symbol: "SOL", name: "Solana", price: 142.9, change: -0.84, cap: "66 Md€", vol: "3,2 Md€", color: "#14f195", seed: 14 },
  { symbol: "USDC", name: "USD Coin", price: 0.92, change: 0.01, cap: "31 Md€", vol: "6,8 Md€", color: "#2775ca", seed: 21 },
  { symbol: "XRP", name: "XRP", price: 0.54, change: -2.37, cap: "30 Md€", vol: "1,9 Md€", color: "#c9d1e0", seed: 27 },
  { symbol: "ADA", name: "Cardano", price: 0.41, change: 4.86, cap: "14 Md€", vol: "0,6 Md€", color: "#3468d1", seed: 33 },
  { symbol: "DOT", name: "Polkadot", price: 5.82, change: -1.05, cap: "8 Md€", vol: "0,3 Md€", color: "#e6007a", seed: 41 },
];

function walk(n: number, seed: number, drift = 0.02) {
  const out: number[] = [];
  let v = 100;
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    v *= 1 + (s / 233280 - 0.5 + drift) * 0.06;
    out.push(v);
  }
  return out;
}

function Spark({ seed, up }: { seed: number; up: boolean }) {
  const d = walk(24, seed, up ? 0.08 : -0.08);
  const min = Math.min(...d);
  const max = Math.max(...d);
  const pts = d.map((v, i) => `${(i / 23) * 100},${30 - ((v - min) / (max - min)) * 28}`).join(" ");
  return (
    <svg viewBox="0 0 100 32" className="h-8 w-28" preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke={up ? "#4ade80" : "#f87171"} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function eur(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: n < 1 ? 4 : 2 }) + " €";
}

export default function VaultCryptoSite() {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState("1500");
  const [tab, setTab] = useState("Populaires");
  const candles = useMemo(() => {
    const out: { o: number; c: number; h: number; l: number }[] = [];
    let s = 7;
    let p = 56000;
    for (let i = 0; i < 42; i++) {
      s = (s * 9301 + 49297) % 233280;
      const r = s / 233280;
      const o = p;
      const c = p * (1 + (r - 0.46) * 0.025);
      out.push({ o, c, h: Math.max(o, c) * (1 + r * 0.006), l: Math.min(o, c) * (1 - (1 - r) * 0.006) });
      p = c;
    }
    return out;
  }, []);
  const cMin = Math.min(...candles.map((c) => c.l));
  const cMax = Math.max(...candles.map((c) => c.h));
  const y = (v: number) => 200 - ((v - cMin) / (cMax - cMin)) * 190;

  const list = tab === "Hausses" ? [...assets].sort((a, b) => b.change - a.change) : tab === "Baisses" ? [...assets].sort((a, b) => a.change - b.change) : assets;
  const btc = Number(amount.replace(",", ".")) / assets[0].price || 0;

  return (
    <div className="vc-root min-h-full">
      <div className="vc-glow" aria-hidden="true" />

      <div className="vc-ticker vc-border-b overflow-hidden">
        <div className="vc-ticker-track flex w-max gap-8 px-6 py-2 font-mono text-xs">
          {[...assets, ...assets].map((a, i) => (
            <span key={i} className="flex gap-2">
              <span className="text-white/50">{a.symbol}/EUR</span>
              <span>{eur(a.price)}</span>
              <span className={a.change >= 0 ? "vc-up" : "vc-down"}>
                {a.change >= 0 ? "+" : ""}
                {a.change.toFixed(2).replace(".", ",")} %
              </span>
            </span>
          ))}
        </div>
      </div>

      <header className="vc-border-b vc-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="vc-logo flex items-center gap-2.5">
            <span className="vc-logo-mark" />
            Vault
          </div>
          <nav className="hidden gap-7 text-sm lg:flex">
            {["Marchés", "Trader", "Earn", "Carte Vault", "Sécurité", "Institutionnels"].map((l) => (
              <a key={l} href="#" className="vc-link">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="vc-link hidden text-sm sm:block">
              Connexion
            </a>
            <button className="vc-btn vc-btn-solid">Ouvrir un compte</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="vc-eyebrow mb-6 w-fit">🔒 Enregistré PSAN auprès de l'AMF · E2026-104</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-[4rem]">
            Le coffre-fort de <span className="vc-accent">vos actifs numériques.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/55">
            Achetez, vendez et stockez plus de 240 crypto-actifs avec la liquidité d'une plateforme institutionnelle et la sécurité d'une banque suisse. 98 % des fonds en stockage à froid.
          </p>
          <form className="mt-8 flex max-w-md gap-2 max-sm:flex-col" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Votre adresse e-mail" className="vc-input flex-1" />
            <button className="vc-btn vc-btn-solid px-6">Commencer</button>
          </form>
          <div className="mt-8 flex flex-wrap gap-8 text-sm">
            {[
              ["2,4 M", "clients en Europe"],
              ["18 Md€", "volume trimestriel"],
              ["0,10 %", "frais de trading"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="vc-accent font-mono text-2xl font-semibold">{v}</p>
                <p className="text-white/45">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trade panel */}
        <div className="vc-panel overflow-hidden">
          <div className="vc-border-b flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="vc-coin" style={{ background: "#f7931a" }}>₿</span>
              <div>
                <p className="font-semibold text-white">BTC / EUR</p>
                <p className="font-mono text-xs text-white/45">Bitcoin</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-xl font-semibold text-white">58 240,12 €</p>
              <p className="vc-up font-mono text-xs">+1 372,40 (+2,41 %)</p>
            </div>
          </div>
          <div className="px-5 pt-4">
            <div className="mb-2 flex gap-1 font-mono text-[11px]">
              {["1H", "4H", "1J", "1S", "1M", "1A"].map((t, i) => (
                <span key={t} className={`vc-tf ${i === 2 ? "vc-tf-on" : ""}`}>
                  {t}
                </span>
              ))}
            </div>
            <svg viewBox="0 0 420 200" className="h-48 w-full" preserveAspectRatio="none">
              {[40, 90, 140].map((g) => (
                <line key={g} x1="0" x2="420" y1={g} y2={g} stroke="rgba(255,255,255,0.05)" />
              ))}
              {candles.map((c, i) => {
                const x = i * 10 + 5;
                const up = c.c >= c.o;
                const col = up ? "#4ade80" : "#f87171";
                return (
                  <g key={i}>
                    <line x1={x} x2={x} y1={y(c.h)} y2={y(c.l)} stroke={col} strokeWidth="1" />
                    <rect x={x - 3} width="6" y={y(Math.max(c.o, c.c))} height={Math.max(1.5, Math.abs(y(c.o) - y(c.c)))} fill={col} />
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="vc-border-t mt-2 grid gap-4 p-5 sm:grid-cols-[1fr_auto]">
            <div>
              <div className="vc-seg mb-4 grid grid-cols-2">
                <button onClick={() => setSide("buy")} className={side === "buy" ? "vc-seg-buy" : ""}>
                  Acheter
                </button>
                <button onClick={() => setSide("sell")} className={side === "sell" ? "vc-seg-sell" : ""}>
                  Vendre
                </button>
              </div>
              <label className="block text-xs text-white/45">Montant</label>
              <div className="vc-field mt-1 flex items-center">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className="flex-1 bg-transparent font-mono text-lg text-white outline-none" />
                <span className="font-mono text-sm text-white/50">EUR</span>
              </div>
              <div className="mt-2 flex gap-1.5">
                {["100", "500", "1500", "5000"].map((v) => (
                  <button key={v} onClick={() => setAmount(v)} className="vc-quick">
                    {v} €
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 sm:w-48">
              <div className="font-mono text-xs text-white/45">
                Vous recevez
                <p className="mt-1 text-base text-white">≈ {btc.toFixed(6).replace(".", ",")} BTC</p>
                <p className="mt-1">Frais : {(Number(amount) * 0.001 || 0).toFixed(2).replace(".", ",")} €</p>
              </div>
              <button className={`vc-btn w-full ${side === "buy" ? "vc-btn-solid" : "vc-btn-sell"}`}>{side === "buy" ? "Acheter du BTC" : "Vendre du BTC"}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="vc-eyebrow mb-3 w-fit">Marchés en direct</p>
            <h2 className="text-3xl font-semibold text-white">Les prix du moment</h2>
          </div>
          <div className="flex gap-2 text-sm">
            {["Populaires", "Hausses", "Baisses", "Nouveautés"].map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`vc-tab ${tab === t ? "vc-tab-on" : ""}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="vc-panel overflow-x-auto">
          <table className="vc-table w-full min-w-[820px] text-sm">
            <thead>
              <tr>
                {["#", "Actif", "Prix", "24 h", "7 jours", "Capitalisation", "Volume 24 h", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-white/40">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((a, i) => (
                <tr key={a.symbol}>
                  <td className="px-5 py-3.5 font-mono text-white/40">{i + 1}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="vc-coin vc-coin-sm" style={{ background: a.color }}>
                        {a.symbol[0]}
                      </span>
                      <span className="font-medium text-white">{a.name}</span>
                      <span className="font-mono text-xs text-white/40">{a.symbol}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-white">{eur(a.price)}</td>
                  <td className={`px-5 py-3.5 font-mono ${a.change >= 0 ? "vc-up" : "vc-down"}`}>
                    {a.change >= 0 ? "▲" : "▼"} {Math.abs(a.change).toFixed(2).replace(".", ",")} %
                  </td>
                  <td className="px-5 py-3.5">
                    <Spark seed={a.seed} up={a.change >= 0} />
                  </td>
                  <td className="px-5 py-3.5 font-mono text-white/70">{a.cap}</td>
                  <td className="px-5 py-3.5 font-mono text-white/70">{a.vol}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="vc-btn vc-btn-sm">Trader</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Security */}
      <section className="vc-border-y relative overflow-hidden">
        <img src={img("1639322537228-f710d846310a", 1800, 900)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="vc-sec-shade absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="vc-eyebrow mb-4 w-fit">Sécurité</p>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Conçu comme un <span className="vc-accent">coffre-fort.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/55">Vos clés sont réparties entre trois data centers souterrains en Suisse et en Islande. Aucune personne, pas même nous, ne peut déplacer seule vos fonds.</p>
            <div className="vc-panel mt-8 flex items-center gap-4 p-5">
              <div className="vc-ring">
                <span>98 %</span>
              </div>
              <div>
                <p className="font-semibold text-white">des actifs en stockage à froid</p>
                <p className="text-sm text-white/50">Preuve de réserves publiée chaque mois · dernier audit : 01/09/2026</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["⛓", "MPC multi-signature", "Signature distribuée 3-sur-5, sans clé unique."],
              ["🛡", "Assurance 250 M€", "Couverture Lloyd's contre le vol et le piratage."],
              ["🔑", "Passkeys & 2FA", "Connexion sans mot de passe, clés matérielles FIDO2."],
              ["📜", "Audits trimestriels", "Certifié SOC 2 Type II et ISO 27001 par Deloitte."],
            ].map(([i, t, d]) => (
              <div key={t} className="vc-panel p-6">
                <span className="vc-icon">{i}</span>
                <p className="mt-4 font-semibold text-white">{t}</p>
                <p className="mt-1 text-sm text-white/50">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <img src={img("1642790106117-e829e14a795f", 900, 700)} alt="Application Vault" className="vc-photo aspect-[9/7] w-full rounded-2xl object-cover" />
            <div className="vc-panel vc-float absolute -bottom-6 -right-4 w-60 p-4 max-md:right-2">
              <p className="text-xs text-white/45">Portefeuille</p>
              <p className="font-mono text-2xl font-semibold text-white">24 318,50 €</p>
              <p className="vc-up font-mono text-xs">+612,04 € aujourd'hui</p>
              <div className="mt-3 flex h-2 overflow-hidden rounded-full">
                <span style={{ width: "54%", background: "#f7931a" }} />
                <span style={{ width: "28%", background: "#8c8cff" }} />
                <span style={{ width: "18%", background: "#14f195" }} />
              </div>
            </div>
          </div>
          <div>
            <p className="vc-eyebrow mb-4 w-fit">Vault Earn</p>
            <h2 className="text-4xl font-semibold text-white">Faites travailler vos actifs.</h2>
            <p className="mt-4 text-white/55">Staking flexible, sans période de blocage. Les récompenses sont versées chaque jour.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["ETH", "3,8 %", "#8c8cff"],
                ["SOL", "6,4 %", "#14f195"],
                ["DOT", "11,2 %", "#e6007a"],
              ].map(([s, apy, c]) => (
                <div key={s} className="vc-panel p-5">
                  <span className="vc-coin vc-coin-sm" style={{ background: c }}>
                    {s[0]}
                  </span>
                  <p className="mt-4 font-mono text-xs text-white/45">{s} · APY</p>
                  <p className="vc-accent font-mono text-3xl font-semibold">{apy}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/35">Rendements indicatifs, variables et non garantis. Investir comporte un risque de perte en capital.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { q: "Interface ultra-claire, frais transparents, et un support qui répond en français en 4 minutes. Enfin.", n: "Thomas Leroy", r: "Investisseur particulier", a: "1500648767791-00dcc994a43e" },
            { q: "Nous gérons la trésorerie crypto de notre fonds sur Vault Institutionnel. Le reporting comptable est impeccable.", n: "Nadia Benali", r: "CFO, Kairo Capital", a: "1573497019940-1c28c88b4f3e" },
            { q: "La preuve de réserves mensuelle, c'est ce qui m'a fait changer de plateforme après 2022.", n: "Hugo Martin", r: "Développeur", a: "1547425260-76bcadfb4f2c" },
          ].map((t) => (
            <figure key={t.n} className="vc-panel p-6">
              <p className="vc-accent text-sm">★★★★★</p>
              <blockquote className="mt-3 text-white/80">« {t.q} »</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={img(t.a, 80, 80)} alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" />
                <div className="text-sm">
                  <p className="font-medium text-white">{t.n}</p>
                  <p className="text-white/45">{t.r}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="vc-cta relative overflow-hidden px-8 py-16 text-center">
          <h2 className="relative text-4xl font-semibold text-white md:text-5xl">
            Ouvrez votre coffre en <span className="vc-accent">3 minutes.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/55">Vérification d'identité instantanée. 10 € de BTC offerts pour votre premier dépôt.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <button className="vc-btn vc-btn-solid px-8">Créer mon compte</button>
            <button className="vc-btn px-8">Télécharger l'app</button>
          </div>
        </div>
      </section>

      <footer className="vc-border-t px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="vc-logo flex items-center gap-2.5">
              <span className="vc-logo-mark" />
              Vault
            </div>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/40">
              Vault SAS, prestataire de services sur actifs numériques enregistré auprès de l'AMF. Les crypto-actifs sont volatils ; investissez uniquement ce que vous êtes prêt·e à perdre.
            </p>
          </div>
          {[
            ["Produits", ["Trader", "Earn", "Carte Vault", "API"]],
            ["Entreprise", ["À propos", "Sécurité", "Preuve de réserves", "Carrières"]],
            ["Support", ["Centre d'aide", "Frais", "Statut", "Mentions légales"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="mb-3 text-sm font-medium text-white">{t}</p>
              <ul className="space-y-2 text-sm">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="vc-link">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-7xl font-mono text-xs text-white/30">© 2026 Vault — design system « Vault Crypto »</p>
      </footer>
    </div>
  );
}
