import "./zine-riot.css";

const lineup = [
  { day: "VEN 12 JUIN", acts: ["NEON WOLF", "acid.mp3", "KURA"] },
  { day: "SAM 13 JUIN", acts: ["DJ SPLICE", "Riot Girls", "MONO/POLY"] },
  { day: "DIM 14 JUIN", acts: ["THE STATIC", "glitch;", "VOID CHOIR"] },
];

export default function ZineRiotSite() {
  return (
    <div className="zr-root min-h-full">
      <header className="flex items-center justify-between px-6 py-5">
        <div className="zr-logo">CHAOS//26</div>
        <nav className="hidden gap-6 text-sm font-bold uppercase md:flex">
          <a href="#" className="zr-link">Line-up</a>
          <a href="#" className="zr-link">Infos</a>
          <a href="#" className="zr-link">Presse</a>
        </nav>
        <button className="zr-ticket">BILLETS →</button>
      </header>

      <section className="relative overflow-hidden px-6 py-16 text-center">
        <p className="zr-sticker mx-auto mb-6 w-fit">★ 3 JOURS ★ 3 SCÈNES ★</p>
        <h1 className="zr-title text-7xl md:text-9xl">CHAOS</h1>
        <p className="zr-tag mt-2 text-2xl md:text-4xl">FESTIVAL 2026</p>
        <p className="zr-scribble mt-6">12 → 14 juin · Friche du Nord</p>
        <div className="zr-shape zr-shape-1" />
        <div className="zr-shape zr-shape-2" />
        <div className="zr-shape zr-shape-3" />
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {lineup.map((d, i) => (
            <div key={d.day} className={`zr-card zr-rot-${i % 3}`}>
              <p className="zr-day">{d.day}</p>
              <ul className="mt-3 space-y-2">
                {d.acts.map((a) => (
                  <li key={a} className="text-lg font-black uppercase">{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="zr-marquee-wrap py-6">
        <div className="zr-marquee">
          {"BRUYANT · SATURÉ · VIVANT · SANS FILTRE · ".repeat(3)}
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="zr-title text-4xl md:text-5xl">PRÊT À CRIER ?</h2>
        <button className="zr-ticket zr-ticket-lg mt-8">RÉSERVER MA PLACE →</button>
      </section>

      <footer className="border-t-4 border-black px-6 py-6 text-xs font-bold uppercase">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p>© 2026 CHAOS FEST — design system « Zine Riot »</p>
          <p>#chaos26</p>
        </div>
      </footer>
    </div>
  );
}
