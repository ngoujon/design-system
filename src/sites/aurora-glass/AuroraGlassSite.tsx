import { useState } from "react";

import { img } from "../../lib/img";
import "./aurora-glass.css";

const nav = ["Produit", "Solutions", "Intégrations", "Tarifs", "Changelog"];

const logos = ["NIMBUS", "VELA", "ORBIT", "HALO", "PRISM", "KAIRO", "LUMEN"];

const sidebarItems = [
  { icon: "◎", label: "Vue d'ensemble", active: true },
  { icon: "◈", label: "Flux live" },
  { icon: "◇", label: "Espaces" },
  { icon: "△", label: "Automations" },
  { icon: "○", label: "Membres" },
];

const bars = [38, 52, 44, 61, 58, 72, 66, 80, 74, 88, 82, 94];

const bento = [
  {
    title: "Flux temps réel",
    desc: "Chaque modification se propage en 40 ms à toute l'équipe, sur tous les appareils, même hors ligne.",
    icon: "◎",
    span: "md:col-span-2",
    visual: "stream",
  },
  {
    title: "Sécurité adaptative",
    desc: "Un moteur de confiance qui apprend de chaque session pour ajuster les accès.",
    icon: "◈",
    span: "",
    visual: "shield",
  },
  {
    title: "Espaces modulaires",
    desc: "Composez vos tableaux de bord comme des calques de verre superposés.",
    icon: "◇",
    span: "",
    visual: "layers",
  },
  {
    title: "Copilote Auréa",
    desc: "Résumez un fil de 300 messages, générez un rapport hebdo ou préparez un comité en une phrase.",
    icon: "✦",
    span: "md:col-span-2",
    visual: "ai",
  },
];

const steps = [
  { n: "01", title: "Connectez vos outils", desc: "Slack, Notion, Linear, GitHub, Figma : 120+ connecteurs natifs, synchronisés en 3 clics." },
  { n: "02", title: "Composez vos espaces", desc: "Glissez des panneaux, filtrez par équipe, épinglez les métriques qui comptent." },
  { n: "03", title: "Laissez circuler", desc: "Les automations routent l'info au bon endroit. Vos équipes arrêtent de chercher." },
];

const integrations = ["Slack", "Notion", "Figma", "Linear", "GitHub", "Jira", "Drive", "Zoom"];

const testimonials = [
  {
    quote: "Auréa a transformé la façon dont nos équipes distantes collaborent — tout paraît léger, presque impalpable.",
    name: "Léa Fontaine",
    role: "VP Design, Nimbus Labs",
    avatar: "1494790108377-be9c29b29330",
  },
  {
    quote: "On a supprimé quatre outils et deux réunions hebdo. Le tableau de bord live fait le travail à notre place.",
    name: "Karim Belaïd",
    role: "COO, Vela Health",
    avatar: "1507003211169-0a1dd7228f2d",
  },
  {
    quote: "La première app B2B que nos équipes ouvrent le matin par envie, pas par obligation. C'est rare.",
    name: "Sofia Marchetti",
    role: "Head of Ops, Orbit",
    avatar: "1534528741775-53994a69daeb",
  },
];

const plans = [
  {
    name: "Starter",
    monthly: 0,
    desc: "Pour découvrir Auréa en petite équipe.",
    features: ["Jusqu'à 5 membres", "3 espaces", "Historique 30 jours", "Intégrations de base"],
    cta: "Commencer",
  },
  {
    name: "Pro",
    monthly: 18,
    desc: "Pour les équipes qui passent à l'échelle.",
    features: ["Membres illimités", "Espaces illimités", "Copilote Auréa", "Automations avancées", "Support prioritaire"],
    cta: "Essai 14 jours",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    desc: "Sécurité, conformité et accompagnement dédié.",
    features: ["SSO / SCIM", "Hébergement UE", "SLA 99,99 %", "Customer Success dédié"],
    cta: "Parler aux ventes",
  },
];

const faqs = [
  { q: "Auréa remplace-t-il mes outils existants ?", a: "Non : Auréa se superpose à vos outils et les relie. Vous gardez Slack, Notion ou Linear, mais l'information circule enfin entre eux." },
  { q: "Où sont hébergées mes données ?", a: "Par défaut à Francfort et Paris (AWS eu-central-1 / eu-west-3). Les données sont chiffrées au repos (AES-256) et en transit (TLS 1.3)." },
  { q: "Puis-je annuler à tout moment ?", a: "Oui, sans engagement sur les plans mensuels. Vous pouvez exporter l'intégralité de vos espaces en JSON ou CSV." },
  { q: "Proposez-vous des tarifs pour les associations ?", a: "Oui, le plan Pro est offert aux associations et aux établissements d'enseignement. Écrivez-nous." },
];

const footerCols = [
  { title: "Produit", links: ["Fonctionnalités", "Copilote", "Intégrations", "Sécurité", "Changelog"] },
  { title: "Entreprise", links: ["À propos", "Carrières", "Presse", "Partenaires"] },
  { title: "Ressources", links: ["Documentation", "Guides", "Communauté", "Statut"] },
];

function Visual({ kind }: { kind: string }) {
  if (kind === "stream") {
    return (
      <div className="mt-6 space-y-2">
        {[
          { who: "Léa", what: "a mis à jour « Roadmap Q4 »", t: "à l'instant", c: "#a78bfa" },
          { who: "Karim", what: "a commenté « Budget 2027 »", t: "il y a 12 s", c: "#22d1ee" },
          { who: "Sofia", what: "a déplacé 3 cartes vers « Livré »", t: "il y a 40 s", c: "#f472b6" },
        ].map((e) => (
          <div key={e.who} className="ag-glass flex items-center gap-3 rounded-xl px-3 py-2 text-xs">
            <span className="h-2 w-2 rounded-full" style={{ background: e.c, boxShadow: `0 0 10px ${e.c}` }} />
            <span className="font-medium text-white">{e.who}</span>
            <span className="text-white/60">{e.what}</span>
            <span className="ml-auto text-white/40">{e.t}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "shield") {
    return (
      <div className="relative mt-6 flex h-32 items-center justify-center">
        <div className="ag-ring ag-ring-1" />
        <div className="ag-ring ag-ring-2" />
        <div className="ag-icon relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl">◈</div>
      </div>
    );
  }
  if (kind === "layers") {
    return (
      <div className="relative mt-6 h-32">
        <div className="ag-glass absolute left-4 top-6 h-20 w-2/3 rotate-[-6deg] rounded-xl" />
        <div className="ag-glass absolute left-10 top-3 h-20 w-2/3 rotate-[-2deg] rounded-xl" />
        <div className="ag-glass ag-layer-top absolute left-16 top-0 h-20 w-2/3 rounded-xl p-3">
          <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
          <div className="mt-2 h-1.5 w-1/3 rounded-full bg-white/20" />
        </div>
      </div>
    );
  }
  return (
    <div className="ag-glass mt-6 rounded-2xl p-4 text-sm">
      <p className="text-white/50">
        <span className="ag-gradient-text font-semibold">✦ Copilote</span> — Résume les décisions de la semaine
      </p>
      <ul className="mt-3 space-y-1.5 text-white/80">
        <li>• Lancement de la v3.0 validé pour le 14 octobre.</li>
        <li>• Budget marketing Q4 relevé de 12 %.</li>
        <li>• 2 recrutements ouverts côté plateforme.</li>
      </ul>
      <div className="ag-typing mt-3 flex gap-1">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function AuroraGlassSite() {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="ag-root min-h-full text-white">
      <div className="ag-aurora" aria-hidden="true" />
      <div className="ag-noise" aria-hidden="true" />

      <header className="ag-header sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
            <span className="ag-logo">
              <span />
            </span>
            Auréa
          </div>
          <nav className="hidden gap-8 text-sm text-white/65 lg:flex">
            {nav.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-white/70 hover:text-white sm:block">
              Se connecter
            </a>
            <button className="ag-cta rounded-full px-5 py-2 text-sm font-semibold text-neutral-900">
              Essai gratuit
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-20 text-center">
        <a href="#" className="ag-glass mx-auto mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-xs text-white/80">
          <span className="ag-badge rounded-full px-2.5 py-0.5 font-semibold text-white">Nouveau</span>
          Auréa OS 3.0 — le copilote arrive dans vos espaces
          <span className="text-white/50">→</span>
        </a>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-7xl">
          Un espace de travail
          <br />
          <span className="ag-gradient-text">translucide et fluide</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/65">
          Auréa rassemble vos outils, vos équipes et vos données dans des panneaux de verre superposés, pensés pour la clarté et le mouvement.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="ag-cta rounded-full px-7 py-3.5 text-sm font-semibold text-neutral-900">
            Essayer gratuitement
          </button>
          <button className="ag-glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[9px]">▶</span>
            Voir la démo · 2 min
          </button>
        </div>
        <p className="mt-6 text-xs text-white/40">Sans carte bancaire · Installation en 90 secondes · RGPD</p>
      </section>

      {/* Product mockup */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="ag-glass ag-panel ag-mock rounded-[28px] p-2">
          <div className="overflow-hidden rounded-[22px] bg-[#0d0d1a]/70">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <div className="ag-glass mx-auto rounded-md px-16 py-1 text-[11px] text-white/40">app.aurea.io/nimbus/overview</div>
            </div>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1">
              <aside className="border-r border-white/10 p-4 max-md:hidden">
                <div className="mb-5 flex items-center gap-2 text-sm">
                  <img src={img("1560250097-0b93528c311a", 80, 80)} alt="" className="h-7 w-7 rounded-lg object-cover" />
                  <div>
                    <p className="font-medium">Nimbus Labs</p>
                    <p className="text-[10px] text-white/40">48 membres</p>
                  </div>
                </div>
                <ul className="space-y-1 text-[13px]">
                  {sidebarItems.map((s) => (
                    <li
                      key={s.label}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${s.active ? "ag-glass text-white" : "text-white/50"}`}
                    >
                      <span className="text-xs">{s.icon}</span>
                      {s.label}
                    </li>
                  ))}
                </ul>
                <p className="mb-2 mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30">Espaces</p>
                {["Design", "Plateforme", "Growth"].map((e, i) => (
                  <p key={e} className="flex items-center gap-2 px-2.5 py-1.5 text-[13px] text-white/60">
                    <span className="h-2 w-2 rounded-sm" style={{ background: ["#a78bfa", "#22d1ee", "#f472b6"][i] }} />
                    {e}
                  </p>
                ))}
              </aside>
              <div className="p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-white/40">Lundi 28 septembre</p>
                    <p className="text-lg font-semibold">Bonjour Léa ✦</p>
                  </div>
                  <div className="flex -space-x-2">
                    {["1438761681033-6461ffad8d80", "1500648767791-00dcc994a43e", "1544005313-94ddf0286df2", "1506794778202-cad84cf45f1d"].map((a) => (
                      <img key={a} src={img(a, 64, 64)} alt="" className="h-7 w-7 rounded-full border-2 border-[#15152a] object-cover" />
                    ))}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#15152a] bg-white/10 text-[10px]">+44</span>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { k: "Vélocité", v: "94 pts", d: "+12 %" },
                    { k: "Tickets résolus", v: "1 284", d: "+8,4 %" },
                    { k: "Temps de réponse", v: "3 min", d: "−41 %" },
                  ].map((m) => (
                    <div key={m.k} className="ag-glass rounded-2xl p-4">
                      <p className="text-[11px] text-white/45">{m.k}</p>
                      <p className="mt-1 text-2xl font-semibold">{m.v}</p>
                      <p className="mt-1 text-[11px] text-[#5eead4]">{m.d} cette semaine</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-[1.6fr_1fr]">
                  <div className="ag-glass rounded-2xl p-4">
                    <div className="mb-4 flex items-center justify-between text-[11px] text-white/45">
                      <span>Activité — 12 dernières semaines</span>
                      <span className="ag-glass rounded-full px-2 py-0.5">Équipe entière</span>
                    </div>
                    <div className="flex h-32 items-end gap-2">
                      {bars.map((b, i) => (
                        <div key={i} className="ag-bar flex-1 rounded-t-md" style={{ height: `${b}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="ag-glass rounded-2xl p-4">
                    <p className="mb-3 text-[11px] text-white/45">À faire aujourd'hui</p>
                    {["Revue sprint 42", "Point budget Q4", "Onboarding Tom"].map((t, i) => (
                      <label key={t} className="flex items-center gap-2.5 py-1.5 text-[13px]">
                        <span className={`flex h-4 w-4 items-center justify-center rounded-md border border-white/30 text-[9px] ${i === 0 ? "ag-badge border-transparent" : ""}`}>
                          {i === 0 ? "✓" : ""}
                        </span>
                        <span className={i === 0 ? "text-white/40 line-through" : "text-white/80"}>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">
          Adopté par plus de 4 000 équipes ambitieuses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5 text-white/35">
          {logos.map((logo, i) => (
            <span key={logo} className="flex items-center gap-2 text-sm font-semibold tracking-[0.25em]">
              <span className={`inline-block h-3 w-3 ${i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : "rounded-sm"} border border-white/40`} />
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Bento */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#a78bfa]">Fonctionnalités</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tout ce dont votre équipe a besoin, <span className="ag-gradient-text">rien de ce qui l'alourdit.</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {bento.map((f) => (
            <div key={f.title} className={`ag-glass ag-panel ag-hover rounded-3xl p-7 ${f.span}`}>
              <div className="ag-icon mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-lg">{f.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-white/60">{f.desc}</p>
              <Visual kind={f.visual} />
            </div>
          ))}
        </div>
      </section>

      {/* Steps + photo */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#22d1ee]">Comment ça marche</p>
          <h2 className="text-4xl font-semibold tracking-tight">Opérationnel avant votre prochain café.</h2>
          <div className="mt-10 space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="ag-glass flex gap-5 rounded-2xl p-5">
                <span className="ag-gradient-text text-2xl font-semibold">{s.n}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="ag-glass ag-panel overflow-hidden rounded-[28px] p-2">
            <img
              src={img("1522071820081-009f0129c71c", 1000, 1100)}
              alt="Une équipe travaille autour d'une table"
              className="ag-photo h-[480px] w-full rounded-[22px] object-cover"
            />
          </div>
          <div className="ag-glass ag-panel ag-float absolute -bottom-6 -left-6 w-60 rounded-2xl p-4 max-md:left-4">
            <p className="text-[11px] text-white/50">Synchronisation</p>
            <p className="mt-1 text-sm font-semibold">12 outils connectés</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="ag-progress h-full w-4/5 rounded-full" />
            </div>
          </div>
          <div className="ag-glass ag-panel ag-float-2 absolute -right-4 top-8 rounded-2xl px-4 py-3 text-sm max-md:right-4">
            <span className="text-[#5eead4]">●</span> 23 personnes en ligne
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">120+ intégrations, zéro friction.</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/60">Vos outils restent vos outils. Auréa les relie dans un seul flux lisible.</p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((name, i) => (
            <div key={name} className="ag-glass ag-hover flex items-center gap-3 rounded-2xl px-4 py-4 text-left">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
                style={{ background: `linear-gradient(135deg, ${["#7c5cff", "#22d1ee", "#f472b6", "#a78bfa"][i % 4]}55, transparent)` }}
              >
                {name[0]}
              </span>
              <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-[11px] text-white/40">Sync bidirectionnelle</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="ag-glass ag-panel grid gap-8 rounded-3xl px-8 py-12 text-center md:grid-cols-4">
          {[
            ["4 200+", "équipes actives"],
            ["−38 %", "de réunions"],
            ["99,99 %", "de disponibilité"],
            ["4,9 / 5", "sur G2 (1 800 avis)"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="ag-gradient-text text-4xl font-semibold tracking-tight">{v}</p>
              <p className="mt-2 text-sm text-white/50">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold tracking-tight">Ils ne reviendraient pas en arrière.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="ag-glass ag-panel flex flex-col rounded-3xl p-7">
              <div className="mb-4 text-sm tracking-widest text-[#fcd34d]">★★★★★</div>
              <blockquote className="flex-1 text-[15px] leading-relaxed text-white/85">« {t.quote} »</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={img(t.avatar, 96, 96)} alt={t.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white/15" />
                <div className="text-sm">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">Des tarifs aussi limpides que l'interface.</h2>
          <div className="ag-glass mx-auto mt-8 inline-flex rounded-full p-1 text-sm">
            <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 transition ${!yearly ? "bg-white text-neutral-900" : "text-white/60"}`}>
              Mensuel
            </button>
            <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 transition ${yearly ? "bg-white text-neutral-900" : "text-white/60"}`}>
              Annuel <span className={yearly ? "text-[#7c5cff]" : "text-[#5eead4]"}>−20 %</span>
            </button>
          </div>
        </div>
        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`ag-glass ag-panel relative flex flex-col rounded-3xl p-7 ${p.featured ? "ag-featured" : ""}`}>
              {p.featured && (
                <span className="ag-badge absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-semibold">Le plus choisi</span>
              )}
              <p className="text-lg font-semibold">{p.name}</p>
              <p className="mt-1 text-sm text-white/50">{p.desc}</p>
              <p className="mt-6 flex items-end gap-1">
                {p.monthly === null ? (
                  <span className="text-4xl font-semibold">Sur devis</span>
                ) : (
                  <>
                    <span className="text-5xl font-semibold tracking-tight">
                      {p.monthly === 0 ? "0" : yearly ? Math.round(p.monthly * 0.8) : p.monthly} €
                    </span>
                    <span className="mb-1.5 text-sm text-white/50">/ membre / mois</span>
                  </>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-white/75">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="ag-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold ${p.featured ? "ag-cta text-neutral-900" : "ag-glass"}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">Questions fréquentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="ag-glass rounded-2xl">
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-medium"
              >
                {f.q}
                <span className={`text-white/50 transition ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="ag-glass ag-panel ag-cta-panel relative overflow-hidden rounded-[32px] px-8 py-16 text-center">
          <h2 className="relative text-4xl font-semibold tracking-tight md:text-5xl">
            Rendez le travail <span className="ag-gradient-text">plus léger.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/60">Rejoignez 4 200 équipes qui ont retrouvé de la clarté. Gratuit jusqu'à 5 membres.</p>
          <form className="relative mx-auto mt-8 flex max-w-md gap-2 max-sm:flex-col" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="vous@entreprise.com"
              className="ag-glass flex-1 rounded-full px-5 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/30"
            />
            <button className="ag-cta rounded-full px-6 py-3 text-sm font-semibold text-neutral-900">Démarrer</button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 pb-10 pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-semibold">
              <span className="ag-logo">
                <span />
              </span>
              Auréa
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/45">L'espace de travail translucide pour les équipes qui avancent vite. Conçu à Paris.</p>
            <div className="mt-6 flex gap-2">
              {["𝕏", "in", "◐"].map((s) => (
                <a key={s} href="#" className="ag-glass flex h-9 w-9 items-center justify-center rounded-full text-xs text-white/70">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {footerCols.map((c) => (
            <div key={c.title}>
              <p className="mb-4 text-sm font-medium">{c.title}</p>
              <ul className="space-y-2.5 text-sm text-white/45">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white/80">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row">
          <p>© 2026 Auréa SAS — Design system « Aurora Glass »</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4] shadow-[0_0_8px_#5eead4]" /> Tous les systèmes sont opérationnels
          </p>
        </div>
      </footer>
    </div>
  );
}
