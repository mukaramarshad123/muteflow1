# muteflow-web

Production landing page for [muteflow.io](https://muteflow.io).

## Scripts

- `pnpm i` — install dependencies
- `pnpm dev` — local development server
- `pnpm build` — production build
- `pnpm lint` — ESLint

## Deploy

Deploy to Vercel: connect the repository and use the default Next.js preset, or run `vercel` from this directory with the Vercel CLI.

Open Graph and Twitter images are generated with `next/og` (`app/opengraph-image.tsx`, `app/twitter-image.tsx`) using `runtime = "edge"` so `pnpm build` succeeds on Windows (the Node `@vercel/og` path can throw during static generation on some setups).

Favicon is provided as `app/icon.svg` (256×256 mark). Add `public/favicon-256.png` / `public/og-image.png` only if you need static PNG fallbacks outside the dynamic OG routes.

## Brand police (merge checklist)

1. No capitalisation of “muteflow” in rendered text (lowercase only).
2. No fill colour on the wordmark other than `#F4F4F5` or `#0A0A0B`.
3. No drop-shadow, outer-glow, or bevel on the wordmark.
4. No stock photography, 3D blob gradients, isometric illustration, or cliché icons (robot, brain, lightbulb, rocket, shield-check).
5. No emoji in marketing copy (footer, CTAs, headings, body).
6. No banned vocabulary in user-facing strings: “partner”, “solution”, “revolutionary”, “cutting-edge”, “empower”, “unlock”, “unleash”, “synergy”, “leverage”, “ecosystem”, “journey”, “passionate about”, “world-class”, “best-in-class”.
7. At most three persistent uses of signal lime `#C4F547` in the initial desktop viewport (1440×900).
8. Only one `<h1>` on the page (hero only).
9. Lucide icons: no fill, sizes 16 / 20 / 24 px only, stroke width 1.5.
10. Primary layout spacing uses only this pixel set: `{4, 6, 8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96, 112, 128, 140, 160}`.

## What not to do

Avoid the banned vocabulary above in headings, body copy, buttons, and navigation labels. Verbatim client copy that quotes a word for negation (for example “solutions” in scare quotes) is preserved from the master spec.
