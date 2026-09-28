# Design Systems Gallery

App web pour parcourir des inspirations de design systems (2026) : une
sidebar à gauche liste les design systems disponibles, la zone principale
affiche un faux site complet construit avec ce design system.

- Sidebar rétractable (bouton en haut de la sidebar, ou bouton flottant
  quand elle est masquée)
- 3 design systems de démo pour l'instant :
  - **Aurora Glass** — glassmorphism, dégradés lumineux
  - **Neo Brutal** — neubrutalisme, bordures franches, ombres portées dures
  - **Quiet Editorial** — minimalisme éditorial, typographie serif

## Développement local

```bash
npm install
npm run dev
```

## Ajouter un design system

1. Créer un dossier dans `src/sites/<id>/` avec le composant du faux site
   et son CSS dédié.
2. L'ajouter dans `src/data/designSystems.ts` (id, nom, tagline, couleurs,
   composant).

La route `/site/<id>` et l'entrée de sidebar sont générées automatiquement
à partir de cette liste.
