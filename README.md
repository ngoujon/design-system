# Design Systems Gallery

A web app for browsing design system inspirations (2026): a sidebar on the
left lists the available design systems, and the main area displays a full
fake website built with the selected design system.

- Collapsible sidebar (toggle button at the top of the sidebar, or a
  floating button when it is hidden)
- 20 demo design systems, each with its own visual style and site purpose
  (SaaS, shop, promo, audio, dashboard, portfolio, gaming, real estate,
  etc.) — see `src/data/designSystems.ts` for the full list with their
  categories.

## Local development

```bash
npm install
npm run dev
```

## Adding a design system

1. Create a folder in `src/sites/<id>/` containing the fake site component
   and its dedicated CSS.
2. Add it to `src/data/designSystems.ts` (id, name, tagline, colors,
   component).

The `/site/<id>` route and the sidebar entry are generated automatically
from this list.
