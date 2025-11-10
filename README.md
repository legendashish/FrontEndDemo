# referu.ai

Vite + React + Tailwind CSS web app.

## Prerequisites

- Node.js 18.x
- npm 9+

## Scripts

- `npm run dev` — start the dev server (default http://localhost:5173)
- `npm run build` — type-check and build production bundle to `dist/`
- `npm run preview` — locally preview the built `dist/`

## Development

1. Install
   ```bash
   npm install
   ```
2. Run
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
npm run preview
```

Artifacts are emitted to `dist/`.

## Deploy

- **Netlify**
  - Build command: `npm run build`
  - Publish directory: `dist`

- **Vercel**
  - Framework preset: Vite
  - Build command: `npm run build`
  - Output directory: `dist`

- **Static hosting** (any provider)
  - Upload the contents of `dist/`.

## Tech Stack

- React 18
- Vite 5 (Node 18 compatible)
- Tailwind CSS 3
