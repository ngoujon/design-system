import { lazy, type ComponentType } from "react";

const AtelierCreamSite = lazy(() => import("../sites/atelier-cream/AtelierCreamSite"));
const AuroraGlassSite = lazy(() => import("../sites/aurora-glass/AuroraGlassSite"));
const BlobPopSite = lazy(() => import("../sites/blob-pop/BlobPopSite"));
const ClaySoftSite = lazy(() => import("../sites/clay-soft/ClaySoftSite"));
const CraftPaperSite = lazy(() => import("../sites/craft-paper/CraftPaperSite"));
const EstateMonoSite = lazy(() => import("../sites/estate-mono/EstateMonoSite"));
const FluentCorpSite = lazy(() => import("../sites/fluent-corp/FluentCorpSite"));
const GridMetricsSite = lazy(() => import("../sites/grid-metrics/GridMetricsSite"));
const HudCyberSite = lazy(() => import("../sites/hud-cyber/HudCyberSite"));
const NeoBrutalSite = lazy(() => import("../sites/neo-brutal/NeoBrutalSite"));
const NeonTideSite = lazy(() => import("../sites/neon-tide/NeonTideSite"));
const NoirCoutureSite = lazy(() => import("../sites/noir-couture/NoirCoutureSite"));
const QuietEditorialSite = lazy(() => import("../sites/quiet-editorial/QuietEditorialSite"));
const StreetBlockSite = lazy(() => import("../sites/street-block/StreetBlockSite"));
const SwissAxisSite = lazy(() => import("../sites/swiss-axis/SwissAxisSite"));
const TerminalHackSite = lazy(() => import("../sites/terminal-hack/TerminalHackSite"));
const TerraBioticSite = lazy(() => import("../sites/terra-biotic/TerraBioticSite"));
const VaultCryptoSite = lazy(() => import("../sites/vault-crypto/VaultCryptoSite"));
const WaveCastSite = lazy(() => import("../sites/wave-cast/WaveCastSite"));
const ZineRiotSite = lazy(() => import("../sites/zine-riot/ZineRiotSite"));

export interface DesignSystem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  swatch: [string, string];
  component: ComponentType;
  prompt: string;
}

export const designSystems: DesignSystem[] = [
  {
    id: "aurora-glass",
    name: "Aurora Glass",
    tagline: "Glassmorphism & dégradés lumineux",
    category: "SaaS",
    swatch: ["#7c5cff", "#22d1ee"],
    component: AuroraGlassSite,
    prompt:
      "Applique le design system « Aurora Glass » à mon interface : fond très sombre (#0b0b14) avec une « aurore » de dégradés violet (#7c5cff), cyan (#22d1ee) et rose flouté en arrière-plan. Les panneaux sont translucides (fond blanc à 6% d'opacité, bordure blanche à 12%, backdrop-blur important) avec des coins très arrondis (20-24px) et une ombre portée douce et profonde. Typographie Inter, titres en dégradé de texte (violet→cyan→rose). Boutons en pilule, un en dégradé clair sur fond sombre, l'autre en verre translucide. Ambiance générale : SaaS premium, futuriste, aérien, feutré. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "neo-brutal",
    name: "Neo Brutal",
    tagline: "Neubrutalisme, bordures franches",
    category: "Promotionnel",
    swatch: ["#fff200", "#111111"],
    component: NeoBrutalSite,
    prompt:
      "Applique le design system « Neo Brutal » (néobrutalisme) à mon interface : fond clair cassé, couleurs plates et saturées (jaune #fff200, noir #111111, et des accents violet/corail/vert menthe), aucun dégradé. Bordures épaisses de 3-4px en noir sur tous les éléments, ombres portées dures décalées (pas de flou, ex: 6px 6px 0 #111111) qui se réduisent au clic pour un effet « pressé ». Typographie très grasse et en majuscules (type Archivo Black / Helvetica Black), aucun arrondi ou arrondis minimes. Boutons rectangulaires avec bordure noire épaisse. Ambiance : direct, brut, mémorable, anti-lissage. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "quiet-editorial",
    name: "Quiet Editorial",
    tagline: "Minimalisme éditorial, serif généreux",
    category: "Journal / Blog",
    swatch: ["#f2efe9", "#1c1c1c"],
    component: QuietEditorialSite,
    prompt:
      "Applique le design system « Quiet Editorial » à mon interface : fond crème (#f2efe9), texte encre (#1c1c1c), typographie serif généreuse (Georgia/Playfair) pour les titres et sans-serif discrète (Inter) pour le reste. Grille éditoriale large avec beaucoup d'espace blanc, séparateurs fins (1px, opacité 10-15%) plutôt que des cartes ou des ombres. Labels « eyebrow » en majuscules, petite taille, tracking large (0.15-0.2em), couleur atténuée. Aucune couleur vive, aucun bouton arrondi flashy : les liens sont soulignés au survol. Ambiance : retenue, lenteur, luxe discret façon revue papier. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "terminal-hack",
    name: "Terminal Hack",
    tagline: "Monospace, terminal vert sur noir",
    category: "Dev tool / CLI",
    swatch: ["#0a0e0a", "#4ade80"],
    component: TerminalHackSite,
    prompt:
      "Applique le design system « Terminal Hack » à mon interface : fond quasi noir (#0a0e0a), texte vert terminal (#c9f7c9) et accent vert vif (#4ade80), police monospace uniquement (JetBrains Mono / Fira Code). Éléments encadrés de fines bordures vertes semi-transparentes, boutons rectangulaires avec libellés façon commande shell (ex: « $ npx init »). Simule une fenêtre de terminal avec une barre de titre à 3 points colorés (rouge/jaune/vert) pour présenter le contenu clé. Ambiance : outil développeur, CLI-first, hacker discret, zéro fioriture graphique. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "zine-riot",
    name: "Zine Riot",
    tagline: "Collage maximaliste, couleurs criardes",
    category: "Événementiel",
    swatch: ["#f4e94c", "#ff2fc2"],
    component: ZineRiotSite,
    prompt:
      "Applique le design system « Zine Riot » à mon interface : fond jaune acide (#f4e94c), accents rose fluo (#ff2fc2) et bleu électrique (#3b5eff), typographie noire très grasse en majuscules (Archivo Black). Éléments légèrement pivotés (rotate -2° à 3°), autocollants/badges en pilule avec bordure noire, ombres portées dures façon collage. Ajoute un bandeau défilant (marquee) en texte répété pour le dynamisme. Superpose quelques formes géométriques (cercles, rectangles) en arrière-plan comme des stickers. Ambiance : zine punk, festival, maximaliste, énergique, volontairement bruyant visuellement. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "clay-soft",
    name: "Clay Soft",
    tagline: "Claymorphism pastel, formes arrondies",
    category: "App bien-être",
    swatch: ["#ffb4c6", "#d6e0ff"],
    component: ClaySoftSite,
    prompt:
      "Applique le design system « Clay Soft » (claymorphism) à mon interface : dégradé de fond pastel doux (rose #fbeff5 vers lavande #eef1fb), formes organiques asymétriques (border-radius du type 42% 58% 65% 35%) évoquant de la pâte à modeler. Ombres à la fois internes (highlight clair en haut) et externes (douce, colorée) pour un effet 3D mat, jamais dur. Typographie ronde et amicale (Nunito), boutons en pilule avec ombre colorée portée, icônes dans des « blobs » pastel. Ambiance : app de bien-être/méditation, douce, rassurante, tactile. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "noir-couture",
    name: "Noir Couture",
    tagline: "Noir & or, serif éditorial",
    category: "Boutique de luxe",
    swatch: ["#0d0d0d", "#d4af37"],
    component: NoirCoutureSite,
    prompt:
      "Applique le design system « Noir Couture » à mon interface : fond noir profond (#0d0d0d), texte ivoire (#f2ede6), accent or unique (#d4af37) utilisé avec parcimonie (liens, bordures de boutons, labels). Typographie serif élégante (Georgia/Playfair) pour les titres, navigation en petites majuscules très espacées (tracking 0.2em). Boutons fins avec simple bordure dorée (pas de remplissage sauf au survol). Grilles produits très épurées, sans ombre, avec beaucoup de noir autour de chaque visuel. Ambiance : haute couture, minimalisme luxueux, exclusif, feutré. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "grid-metrics",
    name: "Grid Metrics",
    tagline: "Grille de données dense, monospace",
    category: "Dashboard fintech",
    swatch: ["#0b0e14", "#3b82f6"],
    component: GridMetricsSite,
    prompt:
      "Applique le design system « Grid Metrics » à mon interface : fond bleu nuit très sombre (#0b0e14), panneaux légèrement plus clairs (#0f131b) séparés par des lignes de grille fines (1px, blanc à 8%). Chiffres et données en police monospace, valeurs positives en vert (#4ade80) et négatives en rouge (#f87171). Barres de graphique en dégradé bleu (#3b82f6 → #1d4ed8), tableaux denses avec lignes de séparation fines et badges de statut en pilule discrets. Typographie Inter pour les libellés, très petite taille en majuscules pour les en-têtes de colonnes. Ambiance : dashboard fintech professionnel, dense en information, précis, sans fioriture. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "terra-biotic",
    name: "Terra Biotic",
    tagline: "Organique, tons terre",
    category: "Marque éco-responsable",
    swatch: ["#4a6741", "#f5f1e6"],
    component: TerraBioticSite,
    prompt:
      "Applique le design system « Terra Biotic » à mon interface : fond sable chaud (#f5f1e6), vert mousse profond en accent (#4a6741), textes en vert-brun foncé (#2f3b2a). Formes organiques et arrondies (border-radius élevé et asymétrique façon galet), icônes en forme de feuille. Cartes blanches avec ombre douce verdâtre très légère, chips arrondies pour les labels. Typographie Inter, chaleureuse mais lisible. Ambiance : marque éco-responsable, naturelle, régénérative, apaisante, jamais criarde. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "neon-tide",
    name: "Neon Tide",
    tagline: "Vaporwave, néons & horizon grille",
    category: "Streaming audio",
    swatch: ["#00f0ff", "#ff5fa2"],
    component: NeonTideSite,
    prompt:
      "Applique le design system « Neon Tide » (vaporwave/synthwave) à mon interface : fond en dégradé profond violet-magenta (#1a0b2e → #4a1259), un « soleil » en dégradé rose (#ff9ecb → #ff2f7e) et une grille de sol en perspective cyan (#00f0ff) façon horizon rétro-futuriste. Titres en dégradé de texte cyan→rose→jaune avec léger glow. Boutons en pilule avec bordure ou remplissage néon, barres de visualisation audio (waveform) en dégradé cyan/rose. Typographie Poppins/Inter. Ambiance : nuit électrique, rétro 80s numérique, musique, énergie nocturne. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "swiss-axis",
    name: "Swiss Axis",
    tagline: "Grille suisse stricte, rouge/noir/blanc",
    category: "Portfolio d'architecture",
    swatch: ["#111111", "#cc3333"],
    component: SwissAxisSite,
    prompt:
      "Applique le design system « Swiss Axis » (style suisse international) à mon interface : fond blanc pur, texte noir (#111111), un unique accent rouge (#cc3333) pour les numéros et éléments clés. Grille stricte avec bordures fines noires de 1px délimitant chaque section (colonnes, séparateurs horizontaux), aucune ombre, aucun arrondi. Typographie Helvetica Neue, gros numéros d'index en rouge, navigation en petites majuscules espacées. Alignement rigoureux sur une grille visible. Ambiance : rigueur éditoriale suisse, architecture, intemporel, sans ornement. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "blob-pop",
    name: "Blob Pop",
    tagline: "3D ludique, formes rebondies",
    category: "App mobile productivité",
    swatch: ["#ffd166", "#ff6b6b"],
    component: BlobPopSite,
    prompt:
      "Applique le design system « Blob Pop » à mon interface : fond crème clair (#fff9f0), grands blobs colorés en arrière-plan (jaune #ffd166, turquoise #a0e7e5) en formes organiques arrondies. Palette de couleurs bonbon vives (jaune, corail #ff6b6b, turquoise), typographie ronde et épaisse façon Baloo 2. Boutons en pilule avec une ombre portée solide et épaisse façon « bouton pressable » (box-shadow plat de 4-6px, translation au clic), icônes dans des formes de blob. Coins très arrondis partout (16-42px). Ambiance : app mobile ludique, motivante, pop, familiale. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "estate-mono",
    name: "Estate Mono",
    tagline: "Monochrome, photographie architecturale",
    category: "Agence immobilière",
    swatch: ["#1a1a1a", "#bfbfbf"],
    component: EstateMonoSite,
    prompt:
      "Applique le design system « Estate Mono » à mon interface : palette strictement monochrome (blanc cassé #fafafa, noir #1a1a1a, gris moyens), photographies en niveaux de gris ou désaturées. Typographie serif (Georgia) pour les titres, sans-serif fine pour la navigation en majuscules espacées. Boutons fins avec simple bordure noire (pas de remplissage), grandes zones de respiration entre les sections, bandeaux plein écran en noir pour les citations. Aucune couleur vive. Ambiance : immobilier haut de gamme, intemporel, sobre, architectural. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "street-block",
    name: "Street Block",
    tagline: "Typographie XXL, grille produits",
    category: "Boutique streetwear",
    swatch: ["#111111", "#ff5a1f"],
    component: StreetBlockSite,
    prompt:
      "Applique le design system « Street Block » à mon interface : fond blanc, noir (#111111) et un unique accent orange sécurité (#ff5a1f). Typographie sans-serif très grasse en majuscules à l'échelle XXL pour les titres (Helvetica Neue Black), bordures noires épaisses de 2-3px. Bandeau défilant (marquee) en fond orange annonçant les drops/promotions. Grille produits dense avec visuels en damier, boutons rectangulaires contrastés (noir/orange). Ambiance : streetwear, édition limitée, urbain, direct, énergique. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "wave-cast",
    name: "Wave Cast",
    tagline: "Sombre, waveform audio",
    category: "Plateforme podcast",
    swatch: ["#8b5cf6", "#f97362"],
    component: WaveCastSite,
    prompt:
      "Applique le design system « Wave Cast » à mon interface : fond sombre prune (#17151f), accents en dégradé violet (#8b5cf6) vers corail (#f97362). Boutons de lecture ronds en dégradé, visualisations de formes d'onde audio (barres verticales fines en dégradé) partout où c'est pertinent. Cartes d'épisodes/éléments avec fond légèrement plus clair que le fond général (blanc à 4%), typographie Inter, labels « eyebrow » en majuscules espacées et atténuées. Ambiance : plateforme audio/podcast, feutrée, immersive, orientée contenu. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "fluent-corp",
    name: "Fluent Corp",
    tagline: "Cartes propres, bleu corporate",
    category: "SaaS B2B entreprise",
    swatch: ["#635bff", "#0a2540"],
    component: FluentCorpSite,
    prompt:
      "Applique le design system « Fluent Corp » à mon interface : fond blanc, texte bleu marine foncé (#0a2540) et texte secondaire gris-bleu (#425466), accent indigo (#635bff) pour les actions principales. Cartes avec bordure fine grise (#e6ebf1), coins arrondis modérés (8-12px) et ombre légère. Chips/badges arrondis en fond indigo clair. Typographie Inter, mise en page propre façon SaaS d'entreprise (Stripe-like) : beaucoup de blanc, sections bien délimitées, logos clients alignés en une ligne discrète. Ambiance : B2B, confiance, sérieux, professionnel mais moderne. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "craft-paper",
    name: "Craft Paper",
    tagline: "Texture papier, manuscrit chaleureux",
    category: "Marketplace artisanat",
    swatch: ["#f3e9d8", "#b5652f"],
    component: CraftPaperSite,
    prompt:
      "Applique le design system « Craft Paper » à mon interface : fond parchemin chaud (#f3e9d8) avec une texture papier subtile (grain léger), accent terracotta (#b5652f), texte brun foncé (#4a3728). Titres en police manuscrite chaleureuse (façon Bradley Hand), corps de texte en serif classique (Georgia). Badges en pointillés façon tampon, légèrement pivotés. Boutons arrondis avec bordure épaisse. Ambiance : artisanat, fait main, marché local, chaleureux et authentique. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "hud-cyber",
    name: "HUD Cyber",
    tagline: "Néons cyan/magenta, angles coupés",
    category: "Plateforme gaming",
    swatch: ["#00f0ff", "#ff2fc2"],
    component: HudCyberSite,
    prompt:
      "Applique le design system « HUD Cyber » à mon interface : fond quasi noir (#05060a), néons cyan (#00f0ff) et magenta (#ff2fc2) en accents et dégradés de texte/boutons. Panneaux et boutons avec des coins coupés en biseau (clip-path polygon) façon interface de jeu vidéo (HUD), bordures fines lumineuses semi-transparentes. Typographie futuriste anguleuse pour les titres (Orbitron), monospace pour les données techniques. Ambiance : gaming, esport, sci-fi, énergique et technologique. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "atelier-cream",
    name: "Atelier Cream",
    tagline: "Crème minimal, chaleureux",
    category: "Portfolio freelance",
    swatch: ["#fbf7ef", "#2e2a25"],
    component: AtelierCreamSite,
    prompt:
      "Applique le design system « Atelier Cream » à mon interface : fond crème doux (#fbf7ef), texte brun foncé chaleureux (#2e2a25), accents gris-vert discrets. Typographie Inter, mise en page minimaliste avec beaucoup d'espace, listes séparées par de fines lignes horizontales plutôt que des cartes. Boutons en pilule : un plein foncé, un avec simple bordure claire. Badges de statut discrets en pilule pastel. Ambiance : portfolio personnel/freelance, chaleureux, minimal, humain, sans prétention. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
  {
    id: "vault-crypto",
    name: "Vault Crypto",
    tagline: "Navy sombre, accents data",
    category: "Trading crypto",
    swatch: ["#060814", "#4ade80"],
    component: VaultCryptoSite,
    prompt:
      "Applique le design system « Vault Crypto » à mon interface : fond bleu-noir très profond (#060814), texte gris clair (#e4e7f0), accents en dégradé vert (#4ade80) vers cyan (#22d3ee) utilisés pour les valeurs positives, actions principales et titres en dégradé de texte. Valeurs négatives en rouge corail (#f87171). Tableaux de marché avec lignes fines, symboles en monospace, graphiques en barres dégradées vert/cyan. Boutons avec bordure fine ou remplissage en dégradé, badges eyebrow avec bordure verte semi-transparente. Ambiance : trading crypto, sécurité, précision, sobre et high-tech. Utilise ce style pour repenser l'interface suivante : [décris ton produit].",
  },
];
