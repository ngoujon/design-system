import { useState, type ReactNode } from "react";

import { img } from "../../lib/img";
import "./hud-cyber.css";

const games = [
  { name: "VOIDRUNNER", tag: "Battle Royale", players: "142 318", rating: 9.2, image: "1612287230202-1ff1d85d1bdf", color: "cyan", badge: "SAISON 04" },
  { name: "STEEL PACT", tag: "Tactique 5v5", players: "88 904", rating: 8.8, image: "1534423861386-85a16f5d13fd", color: "magenta", badge: "RANKED" },
  { name: "ECHO/ZERO", tag: "MMO Sci-Fi", players: "210 776", rating: 9.5, image: "1519608487953-e999c86e7455", color: "cyan", badge: "NOUVEAU RAID" },
  { name: "NEON DRIFT", tag: "Course arcade", players: "37 120", rating: 8.4, image: "1511882150382-421056c89033", color: "magenta", badge: "" },
];

const matches = [
  { a: "KRONOS", b: "VOLT//GG", sa: 2, sb: 1, map: "Map 4 · Citadelle", viewers: "184K", live: true, game: "STEEL PACT" },
  { a: "NOVA-7", b: "RIFT", sa: 11, sb: 13, map: "Round 24 · Dock 9", viewers: "96K", live: true, game: "STEEL PACT" },
  { a: "HYDRA", b: "ZENITH", sa: 0, sb: 0, map: "Demain · 20:00 CET", viewers: "—", live: false, game: "VOIDRUNNER" },
];

const leaderboard = [
  { rank: 1, name: "Kaze_", team: "KRONOS", kd: "3.84", win: "71.2", pts: 48210, avatar: "1539571696357-5a69c17a67c6", trend: "=" },
  { rank: 2, name: "nyx.exe", team: "VOLT//GG", kd: "3.51", win: "68.9", pts: 47385, avatar: "1534528741775-53994a69daeb", trend: "▲" },
  { rank: 3, name: "ORBITAL", team: "NOVA-7", kd: "3.22", win: "66.4", pts: 45920, avatar: "1506794778202-cad84cf45f1d", trend: "▼" },
  { rank: 4, name: "Ψ-Lune", team: "RIFT", kd: "3.10", win: "64.0", pts: 44108, avatar: "1529626455594-4ff0802cfb7e", trend: "▲" },
  { rank: 5, name: "drxft", team: "HYDRA", kd: "2.98", win: "63.7", pts: 43550, avatar: "1544723795-3fb6469f5b39", trend: "▲" },
];

const pass = [
  { tier: 1, reward: "Bannière « Grid »", owned: true },
  { tier: 10, reward: "Skin arme Holo-Cyan", owned: true },
  { tier: 25, reward: "Emote « Glitch »", owned: true },
  { tier: 40, reward: "Traînée Magenta", owned: false, current: true },
  { tier: 60, reward: "Tenue Spectre MK-II", owned: false },
  { tier: 100, reward: "Skin légendaire Void", owned: false },
];

const news = [
  { cat: "PATCH 4.2", title: "Refonte du système de recul et 3 nouvelles armes", date: "26.09.2026", image: "1538481199705-c710c4e965fc" },
  { cat: "ESPORT", title: "NEXUS Masters Paris : 1 M€ de cashprize à l'Accor Arena", date: "22.09.2026", image: "1560253023-3ec5d502959f" },
  { cat: "COMMUNAUTÉ", title: "Les plus beaux setups de la saison, sélectionnés par vous", date: "18.09.2026", image: "1616588589676-62b3bd4ff6d2" },
];

function Frame({ children, className = "", tone = "cyan" }: { children: ReactNode; className?: string; tone?: string }) {
  return (
    <div className={`hc-frame hc-frame-${tone} ${className}`}>
      <div className="hc-frame-in h-full">{children}</div>
    </div>
  );
}

function Corners() {
  return (
    <>
      <span className="hc-corner hc-tl" />
      <span className="hc-corner hc-tr" />
      <span className="hc-corner hc-bl" />
      <span className="hc-corner hc-br" />
    </>
  );
}

export default function HudCyberSite() {
  const [active, setActive] = useState(0);
  const g = games[active];

  return (
    <div className="hc-root min-h-full">
      <div className="hc-scan" aria-hidden="true" />

      <div className="hc-sysbar hc-mono flex items-center justify-between px-6 py-1.5 text-[10px]">
        <span>
          <span className="hc-ok">●</span> SERVEURS EU-WEST OPÉRATIONNELS · PING 14ms
        </span>
        <span className="hidden md:inline">4 218 773 JOUEURS CONNECTÉS · SAISON 04 : J-12 · BUILD 4.2.118</span>
      </div>

      <header className="hc-border-b hc-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-3">
            <span className="hc-logo-mark" />
            <span className="hc-logo text-xl">NEXUS</span>
          </div>
          <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-[0.18em] lg:flex">
            {["Jeux", "Esport", "Classements", "Battle Pass", "Boutique"].map((l, i) => (
              <a key={l} href="#" className={`hc-link ${i === 0 ? "hc-link-active" : ""}`}>
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="hc-btn hidden sm:block">S'INSCRIRE</button>
            <button className="hc-btn hc-btn-solid">SE CONNECTER</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img key={g.image} src={img(g.image, 1800, 1000)} alt="" className="hc-hero-img absolute inset-0 h-full w-full object-cover" />
        <div className="hc-hero-shade absolute inset-0" />
        <div className="hc-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="hc-tag mb-5">// À L'AFFICHE — {g.badge || "EN LIGNE"}</p>
            <h1 className="hc-title hc-glitch text-6xl md:text-8xl" data-text={g.name}>
              {g.name}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-[#b9d9e0]">
              {g.tag}. {g.players} joueurs en ce moment. Rejoins l'escouade, grimpe dans le classement et débloque le Battle Pass de la Saison 04.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="hc-btn hc-btn-solid hc-btn-lg">▶ JOUER GRATUITEMENT</button>
              <button className="hc-btn hc-btn-lg">VOIR LE TRAILER</button>
            </div>
            <div className="hc-mono mt-10 flex flex-wrap gap-8 text-xs">
              {[
                ["NOTE", `${g.rating}/10`],
                ["EN LIGNE", g.players],
                ["PLATEFORMES", "PC · PS5 · XBOX"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[#5d7a82]">{k}</p>
                  <p className="mt-1 text-base text-[#00f0ff]">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative self-end">
            <Frame className="p-0">
              <div className="relative p-5">
                <Corners />
                <div className="flex items-center gap-4">
                  <div className="hc-avatar">
                    <img src={img("1539571696357-5a69c17a67c6", 120, 120)} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="hc-mono text-[10px] text-[#5d7a82]">PROFIL JOUEUR</p>
                    <p className="hc-title text-lg">Kaze_</p>
                    <p className="hc-mono text-[11px] text-[#ff2fc2]">RANG : PLATINE III</p>
                  </div>
                  <div className="text-right">
                    <p className="hc-mono text-[10px] text-[#5d7a82]">NIVEAU</p>
                    <p className="hc-title text-3xl text-[#00f0ff]">87</p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="hc-mono flex justify-between text-[10px] text-[#5d7a82]">
                    <span>XP</span>
                    <span>18 420 / 24 000</span>
                  </div>
                  <div className="hc-xp mt-1.5">
                    <div style={{ width: "76%" }} />
                  </div>
                </div>
                <div className="hc-mono mt-5 grid grid-cols-3 gap-3 text-center text-[11px]">
                  {[
                    ["K/D", "3.84"],
                    ["VICTOIRES", "1 204"],
                    ["HEURES", "2 310"],
                  ].map(([k, v]) => (
                    <div key={k} className="hc-stat py-2">
                      <p className="text-[#5d7a82]">{k}</p>
                      <p className="mt-0.5 text-base text-[#e8faff]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Frame>
          </div>
        </div>

        {/* Game selector */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 pb-10 md:grid-cols-4">
          {games.map((x, i) => (
            <button key={x.name} onClick={() => setActive(i)} className={`hc-select text-left ${active === i ? "hc-select-active" : ""}`}>
              <img src={img(x.image, 400, 200)} alt="" className="h-16 w-full object-cover opacity-70" />
              <div className="px-3 py-2">
                <p className="hc-title text-xs">{x.name}</p>
                <p className="hc-mono text-[10px] text-[#5d7a82]">{x.tag}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Countdown */}
      <section className="hc-border-y hc-band">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <p className="hc-title text-sm tracking-[0.2em]">
            FIN DE SAISON 04 <span className="text-[#ff2fc2]">//</span> RÉCOMPENSES CLASSÉES
          </p>
          <div className="flex gap-3">
            {[
              ["12", "JOURS"],
              ["07", "HEURES"],
              ["42", "MIN"],
              ["19", "SEC"],
            ].map(([v, l]) => (
              <div key={l} className="hc-count text-center">
                <p className="hc-title text-2xl text-[#00f0ff]">{v}</p>
                <p className="hc-mono text-[9px] text-[#5d7a82]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="hc-tag mb-2">// CATALOGUE</p>
            <h2 className="hc-title text-4xl">JEUX POPULAIRES</h2>
          </div>
          <a href="#" className="hc-link hc-mono text-xs">
            VOIR LES 64 JEUX →
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((x) => (
            <Frame key={x.name} tone={x.color} className="hc-card-hover">
              <div className="relative">
                <img src={img(x.image, 600, 760)} alt={x.name} className="hc-cover aspect-[4/5] w-full object-cover" />
                <div className="hc-cover-shade absolute inset-0" />
                {x.badge && <span className="hc-badge absolute left-3 top-3">{x.badge}</span>}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="hc-title text-xl">{x.name}</p>
                  <p className="hc-mono text-[11px] text-[#b9d9e0]">{x.tag}</p>
                </div>
              </div>
              <div className="hc-mono flex items-center justify-between px-4 py-3 text-[11px]">
                <span>
                  <span className="hc-ok">●</span> {x.players}
                </span>
                <span className="text-[#ff2fc2]">★ {x.rating}</span>
              </div>
            </Frame>
          ))}
        </div>
      </section>

      {/* Esport */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.4fr_1fr]">
        <Frame tone="magenta">
          <div className="relative">
            <img src={img("1542751371-adc38448a05e", 1200, 680)} alt="Joueur esport" className="aspect-video w-full object-cover" />
            <div className="hc-cover-shade absolute inset-0" />
            <span className="hc-live absolute left-4 top-4">● LIVE</span>
            <span className="hc-mono absolute right-4 top-4 bg-black/60 px-2 py-1 text-[11px]">👁 184 204</span>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div>
                <p className="hc-mono text-[11px] text-[#ff2fc2]">NEXUS MASTERS · DEMI-FINALE</p>
                <p className="hc-title mt-1 text-2xl">KRONOS vs VOLT//GG</p>
              </div>
              <button className="hc-btn hc-btn-solid">REGARDER</button>
            </div>
            <div className="hc-play">▶</div>
          </div>
        </Frame>
        <div className="flex flex-col gap-4">
          <p className="hc-tag">// MATCHS EN COURS</p>
          {matches.map((m) => (
            <Frame key={m.a} tone={m.live ? "cyan" : "dim"}>
              <div className="p-4">
                <div className="hc-mono flex justify-between text-[10px] text-[#5d7a82]">
                  <span>{m.game}</span>
                  {m.live ? <span className="text-[#ff2fc2]">● LIVE · {m.viewers}</span> : <span>À VENIR</span>}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="hc-title text-sm">{m.a}</span>
                  <span className="hc-title text-2xl">
                    <span className={m.sa > m.sb ? "text-[#00f0ff]" : ""}>{m.sa}</span>
                    <span className="mx-2 text-[#5d7a82]">:</span>
                    <span className={m.sb > m.sa ? "text-[#ff2fc2]" : ""}>{m.sb}</span>
                  </span>
                  <span className="hc-title text-sm">{m.b}</span>
                </div>
                <p className="hc-mono mt-2 text-center text-[10px] text-[#5d7a82]">{m.map}</p>
              </div>
            </Frame>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="hc-tag mb-2">// CLASSEMENT MONDIAL</p>
            <h2 className="hc-title text-4xl">TOP JOUEURS</h2>
          </div>
          <div className="hc-mono flex gap-2 text-[11px]">
            {["EUROPE", "MONDE", "AMIS"].map((r, i) => (
              <span key={r} className={`hc-chip ${i === 0 ? "hc-chip-active" : ""}`}>
                {r}
              </span>
            ))}
          </div>
        </div>
        <Frame>
          <div className="overflow-x-auto">
            <table className="hc-table w-full min-w-[720px]">
              <thead>
                <tr>
                  {["#", "JOUEUR", "ÉQUIPE", "K/D", "WIN %", "POINTS", ""].map((h) => (
                    <th key={h} className="hc-mono px-5 py-3 text-left text-[10px] font-normal text-[#5d7a82]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((p) => (
                  <tr key={p.name} className={p.rank === 1 ? "hc-row-top" : ""}>
                    <td className="hc-title px-5 py-3 text-lg">{String(p.rank).padStart(2, "0")}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="hc-avatar hc-avatar-sm">
                          <img src={img(p.avatar, 80, 80)} alt="" className="h-full w-full object-cover" />
                        </div>
                        <span className="text-base font-semibold">{p.name}</span>
                      </div>
                    </td>
                    <td className="hc-mono px-5 py-3 text-xs text-[#b9d9e0]">{p.team}</td>
                    <td className="hc-mono px-5 py-3 text-sm text-[#00f0ff]">{p.kd}</td>
                    <td className="hc-mono px-5 py-3 text-sm">{p.win}</td>
                    <td className="hc-mono px-5 py-3 text-sm">{p.pts.toLocaleString("fr-FR")}</td>
                    <td className={`hc-mono px-5 py-3 text-xs ${p.trend === "▲" ? "hc-ok" : p.trend === "▼" ? "text-[#ff2fc2]" : "text-[#5d7a82]"}`}>{p.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Frame>
      </section>

      {/* Battle pass */}
      <section className="hc-border-y hc-band py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="hc-tag mb-2">// BATTLE PASS S04</p>
              <h2 className="hc-title text-4xl leading-tight">
                PROTOCOLE <span className="hc-grad">SPECTRE</span>
              </h2>
              <p className="mt-4 text-lg text-[#b9d9e0]">100 paliers, 140 récompenses, un skin légendaire animé. Gratuit pour tous, Premium pour les plus déterminés.</p>
              <div className="mt-6 flex gap-3">
                <button className="hc-btn hc-btn-solid">PREMIUM · 9,99 €</button>
                <button className="hc-btn">DÉTAILS</button>
              </div>
            </div>
            <div className="relative">
              <div className="hc-track" />
              <div className="relative grid grid-cols-3 gap-4 md:grid-cols-6">
                {pass.map((p) => (
                  <div key={p.tier} className={`hc-tier ${p.owned ? "hc-tier-owned" : ""} ${p.current ? "hc-tier-current" : ""}`}>
                    <p className="hc-mono text-[10px] text-[#5d7a82]">PALIER</p>
                    <p className="hc-title text-2xl">{p.tier}</p>
                    <div className="hc-reward my-3">{p.owned ? "✓" : p.current ? "◆" : "🔒"}</div>
                    <p className="text-xs leading-tight">{p.reward}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="hc-tag mb-2">// TRANSMISSIONS</p>
        <h2 className="hc-title mb-10 text-4xl">ACTUALITÉS</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <Frame key={n.title} tone="dim" className="hc-card-hover">
              <img src={img(n.image, 700, 400)} alt="" className="hc-cover aspect-[7/4] w-full object-cover" />
              <div className="p-5">
                <div className="hc-mono flex justify-between text-[10px]">
                  <span className="text-[#ff2fc2]">{n.cat}</span>
                  <span className="text-[#5d7a82]">{n.date}</span>
                </div>
                <p className="mt-3 text-lg font-semibold leading-snug">{n.title}</p>
              </div>
            </Frame>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="hc-cta relative overflow-hidden px-8 py-16 text-center">
          <Corners />
          <p className="hc-tag mb-4">// REJOINDRE LE RÉSEAU</p>
          <h2 className="hc-title text-4xl md:text-6xl">
            PRÊT POUR LE <span className="hc-grad">DÉPLOIEMENT</span> ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-[#b9d9e0]">Un compte, 64 jeux, 4 millions de joueurs. Connecte-toi avec Steam, PlayStation ou Xbox.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="hc-btn hc-btn-solid hc-btn-lg">CRÉER MON COMPTE</button>
            <button className="hc-btn hc-btn-lg">REJOINDRE LE DISCORD</button>
          </div>
        </div>
      </section>

      <footer className="hc-border-t">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="hc-logo-mark" />
              <span className="hc-logo text-lg">NEXUS</span>
            </div>
            <p className="hc-mono mt-3 text-[11px] text-[#5d7a82]">NEXUS INTERACTIVE SAS · PARIS · MONTRÉAL · SÉOUL</p>
          </div>
          {[
            ["PLATEFORME", ["Jeux", "Battle Pass", "Boutique", "Téléchargement"]],
            ["ESPORT", ["Calendrier", "Équipes", "Règlement", "Billetterie"]],
            ["SUPPORT", ["Centre d'aide", "Statut serveurs", "Sécurité du compte", "CGU"]],
          ].map(([t, l]) => (
            <div key={t as string}>
              <p className="hc-title mb-3 text-xs tracking-[0.2em] text-[#00f0ff]">{t}</p>
              <ul className="space-y-2 text-sm">
                {(l as string[]).map((x) => (
                  <li key={x}>
                    <a href="#" className="hc-link">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="hc-mono hc-border-t px-6 py-4 text-center text-[10px] text-[#5d7a82]">© 2026 NEXUS — DESIGN SYSTEM « HUD CYBER » · PEGI 16</p>
      </footer>
    </div>
  );
}
