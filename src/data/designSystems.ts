import type { ComponentType } from "react";

import AuroraGlassSite from "../sites/aurora-glass/AuroraGlassSite";
import NeoBrutalSite from "../sites/neo-brutal/NeoBrutalSite";
import QuietEditorialSite from "../sites/quiet-editorial/QuietEditorialSite";

export interface DesignSystem {
  id: string;
  name: string;
  tagline: string;
  year: string;
  swatch: [string, string];
  component: ComponentType;
}

export const designSystems: DesignSystem[] = [
  {
    id: "aurora-glass",
    name: "Aurora Glass",
    tagline: "Glassmorphism & degrades lumineux",
    year: "2026",
    swatch: ["#7c5cff", "#22d1ee"],
    component: AuroraGlassSite,
  },
  {
    id: "neo-brutal",
    name: "Neo Brutal",
    tagline: "Neubrutalisme, bordures franches",
    year: "2026",
    swatch: ["#fff200", "#111111"],
    component: NeoBrutalSite,
  },
  {
    id: "quiet-editorial",
    name: "Quiet Editorial",
    tagline: "Minimalisme éditorial, serif généreux",
    year: "2026",
    swatch: ["#f2efe9", "#1c1c1c"],
    component: QuietEditorialSite,
  },
];
