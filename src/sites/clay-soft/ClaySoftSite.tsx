import { useState } from "react";

import { img } from "../../lib/img";
import "./clay-soft.css";

const moods = [
  { emoji: "😌", label: "Serein·e", color: "#c8f0de", reco: "Gratitude du soir", dur: "6 min" },
  { emoji: "😵‍💫", label: "Débordé·e", color: "#ffd9c7", reco: "Respiration carrée 4-4-4-4", dur: "5 min" },
  { emoji: "😴", label: "Fatigué·e", color: "#d9d6ff", reco: "Scan corporel pour dormir", dur: "18 min" },
  { emoji: "😟", label: "Anxieux·se", color: "#ffd6e8", reco: "Ancrage des 5 sens", dur: "8 min" },
  { emoji: "🙂", label: "Motivé·e", color: "#fff1b8", reco: "Intention du matin", dur: "4 min" },
];

const sessions = [
  { title: "Lever de soleil intérieur", cat: "Matin", dur: "7 min", image: "1506126613408-eca07ce68773", color: "#ffd9c7" },
  { title: "Forêt apaisante", cat: "Sons", dur: "45 min", image: "1441974231531-c6227db76b6e", color: "#c8f0de" },
  { title: "Relâcher les épaules", cat: "Corps", dur: "10 min", image: "1544367567-0f2fcb009e0b", color: "#ffd6e8" },
  { title: "Vagues du soir", cat: "Sommeil", dur: "25 min", image: "1507525428034-b723cf961d3e", color: "#d9d6ff" },
  { title: "Respirer en groupe", cat: "Live", dur: "15 min", image: "1545205597-3d9d02c29597", color: "#fff1b8" },
  { title: "Brume des montagnes", cat: "Focus", dur: "12 min", image: "1470071459604-3b5ec3a7fe05", color: "#c8f0de" },
];

const programs = [
  { title: "7 jours pour mieux dormir", lessons: 7, progress: 4, color: "#d9d6ff", icon: "🌙" },
  { title: "Anxiété : les bases", lessons: 10, progress: 2, color: "#ffd6e8", icon: "🫧" },
  { title: "Méditer en 5 minutes", lessons: 5, progress: 5, color: "#c8f0de", icon: "🌱" },
];

const experts = [
  { name: "Dr Aurélie Mercier", role: "Psychologue clinicienne", image: "1573497019940-1c28c88b4f3e" },
  { name: "Yanis Haddad", role: "Sophrologue", image: "1507003211169-0a1dd7228f2d" },
  { name: "Maëlle Kerboul", role: "Professeure de yoga nidra", image: "1544005313-94ddf0286df2" },
];

const testimonials = [
  { text: "Je m'endors en moins de 15 minutes depuis que j'écoute « Vagues du soir ». Mon mari aussi, du coup 😅", name: "Claire, 38 ans", image: "1487412720507-e7ab37603c6f" },
  { text: "La check-in du matin est devenue mon petit rituel avec le café. 3 minutes, et la journée démarre autrement.", name: "Malik, 27 ans", image: "1527980965255-d3b416303d12" },
  { text: "Enfin une app qui ne me culpabilise pas quand j'oublie un jour. Tout est doux, même les notifications.", name: "Jeanne, 45 ans", image: "1580489944761-15a19d654956" },
];

export default function ClaySoftSite() {
  const [mood, setMood] = useState(1);
  const m = moods[mood];

  return (
    <div className="cs-root min-h-full">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="cs-logo flex items-center gap-2.5">
          <span className="cs-logo-blob" />
          Câlme
        </div>
        <nav className="cs-nav hidden items-center gap-1 rounded-full p-1.5 text-sm font-semibold md:flex">
          {["Séances", "Programmes", "Sommeil", "Experts", "Tarifs"].map((l, i) => (
            <a key={l} href="#" className={`rounded-full px-4 py-2 ${i === 0 ? "cs-nav-active" : "cs-link"}`}>
              {l}
            </a>
          ))}
        </nav>
        <button className="cs-btn cs-btn-dark">Ouvrir l'app</button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="cs-chip mb-6 inline-flex items-center gap-2">
            <span className="cs-chip-dot" /> 2 millions de respirations partagées ce mois-ci
          </span>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#3d3145] md:text-[4.2rem]">
            Un moment de calme, <span className="cs-soft-text">tout en douceur.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6b5b73]">
            Câlme t'accompagne avec des exercices de respiration, de méditation et des histoires pour dormir, pensés avec des psychologues pour ton quotidien.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="cs-btn cs-btn-primary">Commencer gratuitement</button>
            <button className="cs-btn flex items-center gap-2">
              <span className="cs-play">▶</span> Essayer une séance
            </button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-[#6b5b73]">
            <span>⭐ 4,9 App Store</span>
            <span>🏆 Prix Bien-être 2026</span>
            <span>🇫🇷 Conçu à Nantes</span>
          </div>
        </div>

        <div className="relative flex min-h-[460px] items-center justify-center">
          <div className="cs-breath-wrap">
            <div className="cs-breath-ring" />
            <div className="cs-breath">
              <span className="cs-breath-in">Inspire…</span>
              <span className="cs-breath-out">Expire…</span>
            </div>
          </div>
          <div className="cs-card cs-float absolute left-0 top-4 w-48 p-4">
            <p className="text-xs font-semibold text-[#9a8aa3]">Sommeil cette nuit</p>
            <p className="mt-1 text-2xl font-extrabold text-[#3d3145]">7 h 42</p>
            <div className="mt-2 flex h-10 items-end gap-1">
              {[40, 60, 35, 80, 70, 90, 65].map((h, i) => (
                <span key={i} className="cs-sleep-bar flex-1" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="cs-card cs-float-2 absolute bottom-6 right-0 flex items-center gap-3 p-3 pr-5">
            <img src={img("1506126613408-eca07ce68773", 120, 120)} alt="" className="cs-blob-img h-12 w-12 object-cover" />
            <div>
              <p className="text-sm font-bold text-[#3d3145]">Lever de soleil intérieur</p>
              <p className="text-xs text-[#9a8aa3]">En cours · 3:12 / 7:00</p>
            </div>
          </div>
          <div className="cs-card cs-float absolute right-6 top-0 px-4 py-3 text-sm font-bold text-[#3d3145]">🔥 21 jours de suite</div>
        </div>
      </section>

      {/* Mood */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="cs-panel p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#3d3145] md:text-4xl">Comment te sens-tu, là, maintenant ?</h2>
            <p className="mt-3 text-[#6b5b73]">Choisis une humeur, Câlme te propose la séance qui va avec.</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {moods.map((x, i) => (
              <button
                key={x.label}
                onClick={() => setMood(i)}
                className={`cs-mood ${mood === i ? "cs-mood-active" : ""}`}
                style={{ background: x.color }}
              >
                <span className="text-4xl">{x.emoji}</span>
                <span className="mt-1 text-sm font-bold text-[#3d3145]">{x.label}</span>
              </button>
            ))}
          </div>
          <div className="cs-reco mx-auto mt-10 flex max-w-xl items-center gap-5 p-5" style={{ background: m.color }}>
            <span className="cs-play cs-play-lg">▶</span>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6b5b73]">Recommandé pour toi</p>
              <p className="text-xl font-extrabold text-[#3d3145]">{m.reco}</p>
            </div>
            <span className="rounded-full bg-white/70 px-3 py-1 text-sm font-bold text-[#3d3145]">{m.dur}</span>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="cs-eyebrow">Bibliothèque</p>
            <h2 className="mt-2 text-4xl font-extrabold text-[#3d3145]">Plus de 1 200 séances douces</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Tout", "Sommeil", "Anxiété", "Focus", "Corps", "Enfants"].map((c, i) => (
              <span key={c} className={`cs-tab ${i === 0 ? "cs-tab-active" : ""}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((s, i) => (
            <article key={s.title} className="cs-card cs-session p-4" style={{ background: s.color }}>
              <div className="relative">
                <img
                  src={img(s.image, 600, 420)}
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover"
                  style={{ borderRadius: ["42% 58% 38% 62% / 45% 40% 60% 55%", "30px 30px 60px 30px", "58% 42% 55% 45% / 40% 55% 45% 60%"][i % 3] }}
                />
                <span className="cs-play absolute bottom-3 right-3">▶</span>
              </div>
              <div className="flex items-center justify-between px-1 pb-1 pt-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6b5b73]">{s.cat}</p>
                  <p className="mt-0.5 text-lg font-extrabold text-[#3d3145]">{s.title}</p>
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-[#3d3145]">{s.dur}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="cs-eyebrow">Programmes</p>
          <h2 className="mt-2 text-4xl font-extrabold leading-tight text-[#3d3145]">Des petits pas, jour après jour.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6b5b73]">
            Des parcours de 5 à 21 jours, construits avec des psychologues et des sophrologues, pour installer de nouvelles habitudes sans pression.
          </p>
          <button className="cs-btn cs-btn-primary mt-8">Voir les 38 programmes</button>
        </div>
        <div className="space-y-5">
          {programs.map((p) => (
            <div key={p.title} className="cs-card flex items-center gap-5 p-5">
              <span className="cs-icon-blob text-2xl" style={{ background: p.color }}>
                {p.icon}
              </span>
              <div className="flex-1">
                <p className="font-extrabold text-[#3d3145]">{p.title}</p>
                <div className="cs-track mt-2.5 h-3">
                  <div className="cs-fill h-full" style={{ width: `${(p.progress / p.lessons) * 100}%`, background: p.color }} />
                </div>
              </div>
              <span className="text-sm font-bold text-[#6b5b73]">
                {p.progress}/{p.lessons}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["−32 %", "de stress perçu après 4 semaines", "#ffd6e8"],
            ["+47 min", "de sommeil en moyenne par nuit", "#d9d6ff"],
            ["9 / 10", "utilisateurs se sentent plus calmes dès la 1re séance", "#c8f0de"],
          ].map(([v, l, c]) => (
            <div key={v} className="cs-card p-8 text-center" style={{ background: c }}>
              <p className="text-5xl font-extrabold text-[#3d3145]">{v}</p>
              <p className="mt-3 font-semibold text-[#6b5b73]">{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#9a8aa3]">Étude menée avec l'Université de Nantes auprès de 1 240 participant·es, 2025.</p>
      </section>

      {/* Experts */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="cs-eyebrow">Nos voix</p>
          <h2 className="mt-2 text-4xl font-extrabold text-[#3d3145]">Des experts bienveillants</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experts.map((e, i) => (
            <div key={e.name} className="text-center">
              <div className="cs-portrait mx-auto" style={{ background: ["#ffd9c7", "#c8f0de", "#d9d6ff"][i] }}>
                <img src={img(e.image, 400, 400)} alt={e.name} className="h-full w-full object-cover" />
              </div>
              <p className="mt-5 text-lg font-extrabold text-[#3d3145]">{e.name}</p>
              <p className="text-sm font-semibold text-[#9a8aa3]">{e.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="cs-card flex flex-col p-7">
              <span className="text-4xl leading-none text-[#e5b3cf]">“</span>
              <blockquote className="flex-1 text-[15px] font-semibold leading-relaxed text-[#3d3145]">{t.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm font-bold text-[#6b5b73]">
                <img src={img(t.image, 96, 96)} alt="" className="cs-blob-img h-11 w-11 object-cover" />
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="cs-panel grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="cs-eyebrow">Câlme Plus</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#3d3145]">Tout Câlme, sans limite.</h2>
            <ul className="mt-6 space-y-3 font-semibold text-[#6b5b73]">
              {["1 200+ séances et histoires", "Programmes guidés illimités", "Mode hors-ligne", "Sons pour dormir en boucle", "Jusqu'à 6 profils avec Famille"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="cs-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="cs-plan cs-plan-active p-5">
              <div className="flex items-center justify-between">
                <p className="font-extrabold text-[#3d3145]">Annuel</p>
                <span className="rounded-full bg-[#c8f0de] px-3 py-0.5 text-xs font-bold text-[#2f7a57]">−58 %</span>
              </div>
              <p className="mt-1 text-3xl font-extrabold text-[#3d3145]">
                49,99 € <span className="text-sm font-semibold text-[#9a8aa3]">/ an · soit 4,17 €/mois</span>
              </p>
            </div>
            <div className="cs-plan p-5">
              <p className="font-extrabold text-[#3d3145]">Mensuel</p>
              <p className="mt-1 text-3xl font-extrabold text-[#3d3145]">
                9,99 € <span className="text-sm font-semibold text-[#9a8aa3]">/ mois</span>
              </p>
            </div>
            <button className="cs-btn cs-btn-primary mt-2">Essayer 14 jours gratuits</button>
            <p className="text-center text-xs text-[#9a8aa3]">Annulable à tout moment en 2 clics.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="cs-cta relative overflow-hidden p-10 text-center md:p-16">
          <div className="cs-deco cs-deco-1" />
          <div className="cs-deco cs-deco-2" />
          <h2 className="relative text-4xl font-extrabold text-[#3d3145] md:text-5xl">Prends trois minutes pour toi.</h2>
          <p className="relative mx-auto mt-4 max-w-md text-lg text-[#6b5b73]">Ta première respiration guidée est à un clic. Aucune carte bancaire demandée.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <button className="cs-btn cs-btn-dark"> App Store</button>
            <button className="cs-btn cs-btn-dark">▶ Google Play</button>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10">
        <div className="cs-panel grid gap-8 p-8 md:grid-cols-4">
          <div>
            <div className="cs-logo flex items-center gap-2.5">
              <span className="cs-logo-blob" />
              Câlme
            </div>
            <p className="mt-3 text-sm text-[#6b5b73]">Une respiration à la fois, depuis 2021.</p>
          </div>
          {[
            ["Découvrir", ["Séances", "Programmes", "Sommeil", "Enfants"]],
            ["Câlme", ["Notre équipe", "Experts", "Recherche", "Carrières"]],
            ["Aide", ["FAQ", "Contact", "Confidentialité", "CGU"]],
          ].map(([t, links]) => (
            <div key={t as string}>
              <p className="mb-3 font-extrabold text-[#3d3145]">{t}</p>
              <ul className="space-y-2 text-sm text-[#6b5b73]">
                {(links as string[]).map((l) => (
                  <li key={l}>
                    <a href="#" className="cs-link">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#9a8aa3]">© 2026 Câlme — design system « Clay Soft »</p>
      </footer>
    </div>
  );
}
