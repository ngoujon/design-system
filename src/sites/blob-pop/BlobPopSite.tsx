import { useState, type ReactNode } from "react";

import { img } from "../../lib/img";
import "./blob-pop.css";

const tasks = [
  { t: "Arroser les plantes 🌿", done: true, c: "#a0e7e5" },
  { t: "Appeler mamie ☎️", done: true, c: "#ffd166" },
  { t: "Finir le deck client", done: false, c: "#ff6b6b" },
  { t: "Yoga 20 min 🧘", done: false, c: "#c3b5ff" },
];

const features = [
  {
    color: "#ffd166",
    icon: "⚡",
    title: "Ajoute en 2 secondes",
    desc: "Tape « dentiste mardi 15h » et Poppy comprend tout seul la date, l'heure et la catégorie.",
  },
  {
    color: "#ff6b6b",
    icon: "🔥",
    title: "Des streaks qui motivent",
    desc: "Chaque jour réussi fait grandir ton blob. 12 jours de suite ? Il gagne un chapeau.",
  },
  {
    color: "#a0e7e5",
    icon: "🤝",
    title: "Partagé avec ta squad",
    desc: "Listes de courses, corvées, projets : tout le monde voit qui fait quoi, en temps réel.",
  },
  {
    color: "#c3b5ff",
    icon: "🌙",
    title: "Mode « souffle »",
    desc: "Une journée trop chargée ? Poppy te propose de décaler en douceur, sans culpabiliser.",
  },
];

const reviews = [
  { name: "Inès, 29 ans", text: "La seule app de to-do que j'ai gardée plus de 3 semaines. Mon blob a 214 jours 🥹", avatar: "1531746020798-e6953c6e8e04", color: "#ffd166", rot: "-2deg" },
  { name: "Théo, 34 ans", text: "On gère les corvées de toute la coloc dessus. Fini les post-its sur le frigo.", avatar: "1539571696357-5a69c17a67c6", color: "#a0e7e5", rot: "1.5deg" },
  { name: "Mireille, 61 ans", text: "Mes petits-enfants m'ont installé Poppy. Maintenant c'est moi qui leur rappelle leurs devoirs !", avatar: "1508214751196-bcfd4ca60f91", color: "#ffb4b4", rot: "-1deg" },
];

const plans = [
  { name: "Poppy", price: "Gratuit", sub: "pour toujours", features: ["Tâches illimitées", "3 listes partagées", "Streaks & blob"], color: "#fff" },
  { name: "Poppy+", price: "3,99 €", sub: "par mois", features: ["Listes illimitées", "Rappels géolocalisés", "Thèmes & chapeaux exclusifs", "Stats détaillées"], color: "#ffd166", featured: true },
  { name: "Famille", price: "6,99 €", sub: "par mois, jusqu'à 6", features: ["Tout Poppy+", "Espace famille", "Récompenses pour les enfants", "Contrôle parental"], color: "#a0e7e5" },
];

const faqs = [
  ["Poppy est-il vraiment gratuit ?", "Oui ! Les fonctionnalités de base sont gratuites, sans pub et sans limite de temps. Poppy+ ajoute des bonus pour les plus motivé·es."],
  ["Mes données sont-elles privées ?", "Tes tâches sont chiffrées et hébergées en France. On ne vend rien à personne, jamais."],
  ["Ça marche sur ordinateur ?", "Poppy est disponible sur iPhone, Android, iPad, Mac et en version web. Tout se synchronise instantanément."],
];

function Blob({ color = "#ffd166", size = 120, mood = "happy", hat = false }: { color?: string; size?: number; mood?: "happy" | "wink"; hat?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className="bp-blob-char" aria-hidden="true">
      {hat && (
        <g>
          <path d="M42 26 L60 2 L78 26 Z" fill="#ff6b6b" stroke="#2b2140" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="60" cy="4" r="5" fill="#ffd166" stroke="#2b2140" strokeWidth="3" />
        </g>
      )}
      <path
        d="M60 20c24 0 44 14 46 40s-14 46-44 46S12 94 14 64 36 20 60 20z"
        fill={color}
        stroke="#2b2140"
        strokeWidth="4"
      />
      <ellipse cx="42" cy="44" rx="10" ry="6" fill="#fff" opacity="0.5" />
      {mood === "happy" ? (
        <>
          <circle cx="46" cy="60" r="5" fill="#2b2140" />
          <circle cx="74" cy="60" r="5" fill="#2b2140" />
        </>
      ) : (
        <>
          <circle cx="46" cy="60" r="5" fill="#2b2140" />
          <path d="M68 60 q6 -5 12 0" stroke="#2b2140" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      )}
      <path d="M50 74 q10 10 20 0" stroke="#2b2140" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="36" cy="72" r="5" fill="#ff6b6b" opacity="0.45" />
      <circle cx="84" cy="72" r="5" fill="#ff6b6b" opacity="0.45" />
    </svg>
  );
}

function Phone({ children, tilt = 0, className = "" }: { children: ReactNode; tilt?: number; className?: string }) {
  return (
    <div className={`bp-phone ${className}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="bp-notch" />
      <div className="bp-screen">{children}</div>
    </div>
  );
}

export default function BlobPopSite() {
  const [list, setList] = useState(tasks);
  const [faq, setFaq] = useState(0);
  const done = list.filter((t) => t.done).length;

  return (
    <div className="bp-root min-h-full">
      <div className="bp-bg-blob bp-bg-1" />
      <div className="bp-bg-blob bp-bg-2" />
      <div className="bp-bg-blob bp-bg-3" />

      <div className="bp-announce relative z-10 px-6 py-2 text-center text-sm font-bold">
        🎉 Poppy vient de passer le cap du million de blobs heureux ! <a href="#" className="underline">Voir la carte →</a>
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="bp-logo flex items-center gap-2">
          <Blob size={40} />
          Poppy
        </div>
        <nav className="hidden gap-8 text-[17px] font-bold md:flex">
          {["Fonctionnalités", "Familles", "Tarifs", "Blog"].map((l) => (
            <a key={l} href="#" className="bp-link">
              {l}
            </a>
          ))}
        </nav>
        <button className="bp-btn bp-btn-coral">Télécharger</button>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 pt-10 md:grid-cols-2">
        <div>
          <span className="bp-pill mb-6 inline-flex items-center gap-2">
            <span className="bp-pill-dot">★</span> App de l'année 2026 · 4,9 sur 128 000 avis
          </span>
          <h1 className="bp-title text-5xl leading-[0.95] md:text-7xl">
            Organise ta vie <span className="bp-underline">sans</span> te prendre la tête.
          </h1>
          <p className="mt-6 max-w-md text-xl leading-snug text-[#5c5470]">
            Poppy transforme tes tâches en petites victoires quotidiennes — et fait grandir un blob tout mignon à chaque fois que tu avances.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bp-btn bp-btn-dark flex items-center gap-3">
              <span className="text-2xl"></span>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-semibold opacity-70">Télécharger sur</span>
                App Store
              </span>
            </button>
            <button className="bp-btn bp-btn-dark flex items-center gap-3">
              <span className="text-xl">▶</span>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-semibold opacity-70">Disponible sur</span>
                Google Play
              </span>
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {["1438761681033-6461ffad8d80", "1500648767791-00dcc994a43e", "1517841905240-472988babdf9", "1463453091185-61582044d556"].map((a) => (
                <img key={a} src={img(a, 80, 80)} alt="" className="h-10 w-10 rounded-full border-[3px] border-[#fff9f0] object-cover" />
              ))}
            </div>
            <p className="text-sm font-semibold text-[#5c5470]">
              <strong className="text-[#2b2140]">1,2 million</strong> de personnes font pousser leur blob
            </p>
          </div>
        </div>

        <div className="relative flex justify-center">
          <Phone tilt={-4}>
            <div className="px-4 pt-8">
              <p className="text-xs font-bold text-[#8a7fa0]">Lundi 28 sept.</p>
              <div className="flex items-center justify-between">
                <p className="bp-title text-2xl">Salut Inès 👋</p>
                <span className="bp-streak">🔥 214</span>
              </div>
              <div className="bp-progress-card mt-4 rounded-[22px] p-4">
                <div className="flex items-center gap-3">
                  <Blob size={54} hat mood="wink" />
                  <div className="flex-1">
                    <p className="text-sm font-bold">
                      {done}/{list.length} victoires aujourd'hui
                    </p>
                    <div className="mt-2 h-3 overflow-hidden rounded-full border-2 border-[#2b2140] bg-white">
                      <div className="h-full bg-[#ff6b6b] transition-all duration-500" style={{ width: `${(done / list.length) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                {list.map((t, i) => (
                  <button
                    key={t.t}
                    onClick={() => setList(list.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))}
                    className="bp-task flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-bold"
                  >
                    <span className="bp-check" style={{ background: t.done ? t.c : "#fff" }}>
                      {t.done ? "✓" : ""}
                    </span>
                    <span className={t.done ? "text-[#a59cb8] line-through" : ""}>{t.t}</span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-center text-[11px] font-semibold text-[#a59cb8]">↑ Touche une tâche pour la cocher</p>
            </div>
            <div className="bp-fab">+</div>
          </Phone>
          <div className="bp-float bp-float-1 absolute left-0 top-10 rounded-3xl px-4 py-3 text-sm font-bold max-md:hidden">
            🎯 Objectif de la semaine atteint !
          </div>
          <div className="bp-float bp-float-2 absolute bottom-16 right-0 flex items-center gap-2 rounded-3xl px-4 py-3 text-sm font-bold max-md:hidden">
            <img src={img("1502685104226-ee32379fefbe", 60, 60)} alt="" className="h-8 w-8 rounded-full object-cover" />
            Léa a fini « Courses » 🛒
          </div>
          <div className="absolute -right-4 top-0 max-md:hidden">
            <Blob size={90} color="#a0e7e5" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bp-marquee relative z-10 overflow-hidden py-4">
        <div className="bp-marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex shrink-0 items-center gap-10 pr-10">
              {["Listes de courses", "Devoirs", "Sport", "Corvées", "Projets pro", "Anniversaires", "Plantes", "Médicaments", "Voyages"].map((w, i) => (
                <span key={w} className="flex items-center gap-10">
                  {w}
                  <span className="bp-marquee-dot" style={{ background: ["#ffd166", "#a0e7e5", "#ff6b6b"][i % 3] }} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="bp-title text-4xl md:text-5xl">Petites tâches, grandes victoires.</h2>
          <p className="mt-4 text-lg text-[#5c5470]">Tout ce qu'il faut pour avancer, rien pour te stresser.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="bp-card p-6" style={{ transform: `rotate(${[-1.5, 1, -0.5, 1.5][i]}deg)` }}>
              <div className="bp-icon mb-5 text-3xl" style={{ background: f.color }}>
                {f.icon}
              </div>
              <h3 className="bp-title text-2xl leading-tight">{f.title}</h3>
              <p className="mt-2 font-medium leading-snug text-[#5c5470]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Streak section */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="bp-streak-card relative rounded-[42px] p-8">
          <div className="flex items-center justify-between">
            <p className="bp-title text-2xl">Septembre 2026</p>
            <span className="bp-streak">🔥 28 jours</span>
          </div>
          <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-bold text-[#8a7fa0]">
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="bp-day"
                style={{
                  background: i < 28 ? ["#ffd166", "#a0e7e5", "#ff6b6b", "#c3b5ff"][i % 4] : "#fff",
                }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <div className="absolute -bottom-10 -right-6">
            <Blob size={110} color="#ffd166" hat />
          </div>
        </div>
        <div>
          <span className="bp-pill mb-5 inline-block">Nouveau · Streaks 2.0</span>
          <h2 className="bp-title text-4xl leading-tight md:text-5xl">Ton blob grandit à chaque jour réussi.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5c5470]">
            Coche au moins une tâche par jour pour garder ta série. À 7 jours, il gagne des joues roses. À 30, un chapeau de fête. À 365… surprise 🎁
          </p>
          <ul className="mt-6 space-y-3 text-lg font-bold">
            {["Jokers pour les jours sans", "Défis entre ami·es", "Badges à collectionner (48 à débloquer)"].map((x, i) => (
              <li key={x} className="flex items-center gap-3">
                <span className="bp-bullet" style={{ background: ["#ffd166", "#a0e7e5", "#ff6b6b"][i] }}>
                  ✓
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Families */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="bp-family grid items-center gap-10 overflow-hidden rounded-[42px] p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
          <div>
            <h2 className="bp-title text-4xl leading-tight text-[#2b2140] md:text-5xl">Et si toute la famille s'y mettait ?</h2>
            <p className="mt-4 text-lg font-medium text-[#2b2140]/75">
              Répartissez les corvées, gagnez des étoiles, échangez-les contre des récompenses que vous choisissez ensemble.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["🧹 Ranger sa chambre · 3★", "🐶 Sortir Pépito · 2★", "📚 Lire 20 min · 2★"].map((c) => (
                <span key={c} className="bp-chip">
                  {c}
                </span>
              ))}
            </div>
            <button className="bp-btn bp-btn-dark mt-8">Essayer Poppy Famille →</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={img("1517841905240-472988babdf9", 500, 640)} alt="" className="bp-photo aspect-[4/5] w-full object-cover" style={{ borderRadius: "42% 58% 45% 55% / 45% 40% 60% 55%" }} />
            <div className="flex flex-col gap-4 pt-10">
              <img src={img("1502685104226-ee32379fefbe", 500, 500)} alt="" className="bp-photo aspect-square w-full object-cover" style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }} />
              <div className="bp-card rotate-2 p-4 text-sm font-bold">
                ⭐ Nina a gagné <span className="text-[#ff6b6b]">une soirée pizza</span> !
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <h2 className="bp-title mb-12 text-center text-4xl md:text-5xl">Ils ont adopté un blob 💛</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="bp-card p-7" style={{ background: r.color, transform: `rotate(${r.rot})` }}>
              <p className="text-lg tracking-widest">★★★★★</p>
              <blockquote className="mt-3 text-xl font-bold leading-snug">« {r.text} »</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 font-bold">
                <img src={img(r.avatar, 90, 90)} alt="" className="h-11 w-11 rounded-full border-[3px] border-[#2b2140] object-cover" />
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <h2 className="bp-title mb-3 text-center text-4xl md:text-5xl">Choisis ta formule</h2>
        <p className="mb-12 text-center text-lg text-[#5c5470]">Essai gratuit de 14 jours sur les formules payantes.</p>
        <div className="grid items-start gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`bp-card relative p-8 ${p.featured ? "md:-translate-y-4" : ""}`} style={{ background: p.color }}>
              {p.featured && <span className="bp-badge absolute -top-4 right-6">⭐ Populaire</span>}
              <p className="bp-title text-2xl">{p.name}</p>
              <p className="bp-title mt-3 text-5xl">{p.price}</p>
              <p className="font-semibold text-[#5c5470]">{p.sub}</p>
              <ul className="mt-6 space-y-2.5 font-bold">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-[#ff6b6b]">●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`bp-btn mt-8 w-full ${p.featured ? "bp-btn-coral" : ""}`}>{p.price === "Gratuit" ? "Télécharger" : "Commencer l'essai"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <h2 className="bp-title mb-8 text-center text-4xl">Des questions ?</h2>
        <div className="space-y-4">
          {faqs.map(([q, a], i) => (
            <div key={q} className="bp-card overflow-hidden">
              <button onClick={() => setFaq(faq === i ? -1 : i)} className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-bold">
                {q}
                <span className="bp-faq-icon" style={{ background: faq === i ? "#ff6b6b" : "#ffd166" }}>
                  {faq === i ? "−" : "+"}
                </span>
              </button>
              {faq === i && <p className="px-6 pb-6 font-medium leading-relaxed text-[#5c5470]">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="bp-cta relative overflow-hidden rounded-[42px] px-8 py-14 text-center">
          <div className="absolute -left-6 -top-6">
            <Blob size={120} color="#ffd166" />
          </div>
          <div className="absolute -bottom-8 -right-4">
            <Blob size={140} color="#a0e7e5" mood="wink" hat />
          </div>
          <h2 className="bp-title relative text-4xl text-white md:text-6xl">Ton blob t'attend.</h2>
          <p className="relative mx-auto mt-4 max-w-md text-lg font-semibold text-white/85">Scanne le code ou télécharge Poppy gratuitement.</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="bp-qr" aria-hidden="true">
              {Array.from({ length: 49 }).map((_, i) => (
                <span key={i} style={{ background: (i * 7 + (i % 5) * 3) % 3 === 0 || [0, 6, 42, 48].includes(i) ? "#2b2140" : "transparent" }} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <button className="bp-btn">  App Store</button>
              <button className="bp-btn">▶ Google Play</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t-[3px] border-[#2b2140] bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 font-bold md:flex-row">
          <div className="bp-logo flex items-center gap-2">
            <Blob size={34} />
            Poppy
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[#5c5470]">
            {["Aide", "Presse", "Carrières", "Confidentialité", "CGU"].map((l) => (
              <a key={l} href="#" className="bp-link">
                {l}
              </a>
            ))}
          </div>
          <p className="text-sm text-[#8a7fa0]">© 2026 Poppy — design system « Blob Pop »</p>
        </div>
      </footer>
    </div>
  );
}
