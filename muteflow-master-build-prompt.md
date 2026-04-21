# MASTER BUILD PROMPT — muteflow.io Production Landing Page

> **Instructions for the CTO:** Paste this entire document into Cursor as the first message in a new composer session (Cmd/Ctrl+I → Composer → Agent mode). Use Claude Opus 4.7 as the model. The prompt is self-contained — every token, spec, and copy string below is load-bearing. Do not paraphrase copy. Do not substitute colours. Do not swap fonts. Do not add stock imagery, gradients, illustrations, emoji, or decorative flourishes that aren't specified here.

---

## 0 · TECH STACK (exact)

- **Framework:** Next.js 14.2+ App Router, TypeScript strict mode
- **Styling:** Tailwind CSS 3.4+ with custom theme extension (tokens below). No CSS-in-JS, no styled-components, no inline `style={{}}` attributes in final code.
- **Fonts:** Load via `next/font/google` — Inter (variable), JetBrains Mono (variable). Use Inter for display weights 700/800 via `fontWeight` variants; do not import a separate "Inter Display" package — Inter variable covers 700/800. Expose as CSS variables `--font-inter` and `--font-mono`.
- **Icons:** `lucide-react` only. 1.5px stroke, 16/20/24px sizes only.
- **Analytics placeholder:** Install `@vercel/analytics` and wire `<Analytics />` in root layout. No other trackers.
- **Deployment target:** Vercel. Node 20+.
- **Package manager:** pnpm.

## 1 · FOLDER STRUCTURE (create exactly this)

```
muteflow-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   ├── opengraph-image.tsx
│   └── twitter-image.tsx
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServiceStack.tsx
│   │   ├── Process.tsx
│   │   ├── NonCompete.tsx
│   │   ├── ScopeCTA.tsx
│   │   └── FAQ.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── GrainOverlay.tsx
│   │   └── AmbientMesh.tsx
│   └── brand/
│       └── Wordmark.tsx
├── lib/
│   ├── content.ts          // all copy strings centralised
│   └── services.ts         // the 6 services data
├── public/
│   ├── favicon-256.png
│   └── og-image.png
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

## 2 · DESIGN TOKENS (hard-coded into tailwind.config.ts)

Extend Tailwind `theme` — do NOT replace defaults, extend them:

```ts
colors: {
  void:    '#0A0A0B',   // primary background
  elev:    '#111113',   // elevated surfaces
  border:  '#1F1F23',   // dividers
  signal:  '#C4F547',   // lime accent — USE SPARINGLY (≤3 per page)
  text: {
    primary: '#F4F4F5',
    muted:   '#A8A8B3',
    quiet:   '#8A8A93',
    ghost:   '#6A6A73',
    dim:     '#5A5A63',
  },
},
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-mono)', 'Menlo', 'monospace'],
},
letterSpacing: {
  'tightest-2': '-0.045em',
  'tightest-1': '-0.035em',
  'tight-2':    '-0.02em',
  'tight-1':    '-0.01em',
  'wide-brand': '0.14em',
  'wide-mono':  '0.1em',
},
fontSize: {
  // Desktop tokens; mobile handled via clamp() utilities below
  'h1':     ['clamp(48px, 8vw, 96px)', { lineHeight: '0.98', letterSpacing: '-0.045em', fontWeight: '700' }],
  'h2':     ['clamp(36px, 5vw, 56px)', { lineHeight: '1.05',  letterSpacing: '-0.035em', fontWeight: '700' }],
  'h3':     ['22px',                    { lineHeight: '1.30', letterSpacing: '-0.02em',  fontWeight: '600' }],
  'body-lg':['19px',                    { lineHeight: '1.55' }],
  'body':   ['17px',                    { lineHeight: '1.55' }],
  'small':  ['14px',                    { lineHeight: '1.50' }],
  'eyebrow':['11px',                    { lineHeight: '1.0',  letterSpacing: '0.14em', fontWeight: '600' }],
  'mono-sm':['12px',                    { lineHeight: '1.4',  letterSpacing: '0.02em' }],
  'mono-xs':['11px',                    { lineHeight: '1.4',  letterSpacing: '0.1em' }],
},
boxShadow: {
  'signal-glow': '0 0 40px rgba(196, 245, 71, 0.15)',
  'signal-dot':  '0 0 12px rgba(196, 245, 71, 0.6)',
},
backgroundImage: {
  'mesh-signal': 'radial-gradient(ellipse at center, rgba(196,245,71,0.06) 0%, transparent 60%)',
},
maxWidth: {
  'container': '1280px',
},
```

### Global CSS (`app/globals.css`)

- `@tailwind base; @tailwind components; @tailwind utilities;`
- `html { background: #0A0A0B; color-scheme: dark; }`
- `body { -webkit-font-smoothing: antialiased; background: #0A0A0B; color: #F4F4F5; font-family: var(--font-inter), system-ui, sans-serif; }`
- `::selection { background: #C4F547; color: #0A0A0B; }`
- Reduced-motion media query disabling all transitions over 200ms.
- Add a `.grain` utility that injects the SVG fractal-noise data-URI at `opacity: 0.03, pointer-events: none, position: fixed, inset: 0, z-index: 1, mix-blend-mode: normal;`
  - Exact SVG: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

## 3 · LAYOUT & RESPONSIVE RULES (non-negotiable)

- **Container:** `max-w-container mx-auto px-8` on desktop, `px-6` on mobile (<640px).
- **Vertical rhythm:** Hero top padding `140px` desktop → `96px` mobile. Hero bottom `160px` desktop → `112px` mobile. Service section `80px / 160px` → `64px / 112px` mobile.
- **Breakpoints (use Tailwind defaults):** `sm: 640`, `md: 768`, `lg: 1024`, `xl: 1280`.
- **Grid:** Service stack `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with a 1px divider grid (bg-border, gap-px wrapped in a bordered container).
- **Touch targets:** All interactive elements ≥44×44px on mobile.
- **Nav on mobile (<768px):** Hide `Work` and `Process` links, keep wordmark + CTA only. No hamburger for v1.
- **Hero H1 wrap:** Preserve the hard `<br/>` between "You sold it." and "We'll build it." on desktop. On mobile (<640px), allow natural wrapping but keep the span colour split.

## 4 · COMPONENTS (build in this order)

### 4.1 `components/brand/Wordmark.tsx`
Animated typed-in wordmark, lowercase, `font-sans font-extrabold tracking-tightest-2 text-[19px]`. On mount, type the sequence `['m','mu','mut','mute','mute ','mute f','mute fl','mute flo','muteflow']` at 70ms intervals. After completion, render static `muteflow`. Prop: `animated?: boolean` (default `true`). Respect `prefers-reduced-motion` — if reduced, render final text immediately.

### 4.2 `components/layout/Nav.tsx`
- Sticky top, `backdrop-blur-xl bg-void/70 border-b border-border`, `py-[18px]`, z-50.
- Inner: `max-w-container mx-auto px-8` flex between.
- Left: `<Wordmark />`.
- Right: `flex items-center gap-9` containing `<a>` links to `#work`, `#process` (styled: `text-[14px] text-text-muted font-medium hover:text-text-primary transition-colors`), then primary CTA button "Scope a Build →".

### 4.3 `components/ui/Button.tsx`
Three variants, typed as `variant: 'primary' | 'primary-sm' | 'ghost'`:

- **primary:** `bg-signal text-void border-none px-6 py-[14px] text-[15px] font-semibold rounded-md tracking-tight-1 shadow-signal-glow hover:brightness-95 active:scale-[0.98] transition-all duration-200`
- **primary-sm:** same palette, `px-[18px] py-[10px] text-[13px] rounded-[5px]`
- **ghost:** `bg-transparent text-text-primary border border-border px-6 py-[14px] text-[15px] font-medium rounded-md tracking-tight-1 hover:border-text-ghost hover:bg-elev transition-all duration-200`

All buttons render as `<button>` by default; accept optional `href` to render `<a>`. All must pass aria-label or visible label check.

### 4.4 `components/ui/Eyebrow.tsx`
Props: `children`, `withDot?: boolean`. Renders:
- Container: `flex items-center text-eyebrow font-mono uppercase text-text-quiet`
- If `withDot`: prepend a 6px lime circle (`w-1.5 h-1.5 rounded-full bg-signal shadow-signal-dot mr-2.5 inline-block`)

### 4.5 `components/ui/GrainOverlay.tsx` and `components/ui/AmbientMesh.tsx`
- Grain: a `<div className="grain" aria-hidden />` — the CSS utility from §2.
- Ambient mesh: `<div aria-hidden className="fixed -top-[20%] -left-[10%] w-[70%] h-[70%] bg-mesh-signal blur-[40px] pointer-events-none z-0" />`
- Both mount at the root of `app/page.tsx`, above the main content. Main content gets `relative z-[2]`.

### 4.6 `components/sections/Hero.tsx`
Structure (preserve copy exactly):

```
<section className="max-w-container mx-auto px-8 pt-[140px] pb-[160px] md:pt-[96px] md:pb-[112px] relative z-[2]">
  <div className={loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition:opacity+transform 800ms>
    <Eyebrow withDot>THE SILENT BUILD TEAM FOR AI AGENCIES</Eyebrow>
    <h1 className="text-h1 mt-8 max-w-[900px] m-0">
      You sold it.<br />
      <span className="text-text-quiet">We'll build it.</span>
    </h1>
    <p className="text-body-lg text-text-muted max-w-[620px] mt-8 font-normal">
      muteflow is the technical fulfilment team behind AI agencies who close faster than they can ship. We build the automations, voice agents, and AI workflows your clients bought — under your brand, inside your timelines, without your clients ever knowing we exist.
    </p>
    <div className="flex items-center gap-5 mt-11 flex-wrap">
      <Button variant="primary">Scope a Build →</Button>
      <Button variant="ghost">See how it works</Button>
    </div>
    <div className="mt-[72px] pt-8 border-t border-border flex gap-12 flex-wrap text-mono-sm text-text-ghost font-mono">
      <span>Operating quietly behind agencies in the UK · US · EU</span>
    </div>
  </div>
</section>
```

Mount animation: `useEffect` sets `loaded=true` after 800ms (match the Wordmark animation window). Reduced-motion: skip animation, render `loaded=true` immediately.

### 4.7 `components/sections/ServiceStack.tsx`
Data lives in `lib/services.ts` — EXACT array below, do not reword:

```ts
export const services = [
  { num: '01', title: 'AI Voice Agents',         body: 'Production-grade voice agents for inbound qualification, outbound lead gen, and 24/7 support.',                  stack: 'ElevenLabs · Vapi · Retell · Twilio' },
  { num: '02', title: 'Workflow Automation',     body: 'End-to-end automations with error handling, retry logic, and live monitoring. Not toy demos.',                    stack: 'Make · n8n · Zapier' },
  { num: '03', title: 'GPT & Claude Integrations', body: 'Custom LLM integrations wired into your client stack. RAG pipelines, function calling, guardrails.',            stack: 'OpenAI · Anthropic · Pinecone · Supabase' },
  { num: '04', title: 'Client Onboarding Systems', body: 'Automated flows from first sale to first delivered outcome. Document collection, provisioning, handoffs.',      stack: 'Notion · Airtable · Stripe · HubSpot' },
  { num: '05', title: 'GoHighLevel Builds',      body: 'Complete GHL snapshots, sub-accounts, white-label configs, SaaS mode, conversational AI bots.',                   stack: 'GoHighLevel · Twilio · OpenAI' },
  { num: '06', title: 'Custom API & Backend',    body: 'When Make hits its ceiling, we write the code. For the 20% of builds that need real engineering.',                stack: 'Node · Python · Supabase · Vercel · Fly' },
];
```

Section layout:
- Section: `max-w-container mx-auto px-8 pt-20 pb-[160px] md:pb-[112px] relative z-[2]` with `id="work"`.
- Header block: `mb-20 max-w-[720px]`. Eyebrow "THE STACK". H2 exactly: `Everything you promised\non the sales call.` (use `<br />`). Sub: `Named tools, named capabilities, named outcomes. No generic "solutions."`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden`.
- Card (map): `p-9 bg-[#0D0D0F] min-h-[260px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#131315] relative`.
  - Num label: `text-mono-xs font-mono text-text-ghost tracking-wide-mono mb-6 group-hover:text-signal transition-colors` prefixed with `/ `. Use `group` on the card.
  - Title: `text-h3 text-text-primary mb-[14px]`.
  - Body: `text-[15px] text-text-quiet leading-[1.6] mb-7`.
  - Stack line: separated by `border-t border-border pt-5`, `text-mono-sm font-mono text-text-dim tracking-[0.02em]`.
- Footer line below grid: `mt-12 text-center text-text-ghost text-[14px]`. Text: `Don't see it? [Scope a build](#scope) and ask. We've probably built it.` — link is `text-signal border-b border-signal no-underline hover:brightness-110`.

### 4.8 `components/sections/Process.tsx` (id="process")
Build because the nav links to it — must exist. Section pattern mirrors ServiceStack.
- Eyebrow: "THE ENGAGEMENT"
- H2: `Scope → ship → disappear.`
- Sub: `Four steps between "we closed it" and "it's live in production."`
- Four-step horizontal timeline on desktop (`grid-cols-4`), vertical stack on mobile. Each step:
  - Step number in mono: `/ 01 … / 04`
  - Title + one-sentence body drawn from these exact strings:
    1. **Scope call (24h turnaround).** Send the brief. We respond with a written estimate — stack, timeline, price, non-compete signed before we read the client details.
    2. **Build in a private channel.** Shared Slack Connect or Discord. Daily progress. Named engineer on point. You see the work as it's made, not a final surprise.
    3. **Handoff under your brand.** Documentation, loom walkthroughs, admin credentials — all badged to your agency. We leave no trace we were there.
    4. **Retained monitoring (optional).** Production automations break. We watch yours 24/7 for a monthly retainer — you never field the 3am Slack from your client.
- Divider between steps: 1px lime dot pulse on desktop between columns (≤3 signal uses total — budget accordingly).

### 4.9 `components/sections/NonCompete.tsx`
Full-width dark section `bg-elev border-y border-border py-24`. Centered max-width 720px.
- Eyebrow: "THE POLICY"
- H2: `We have never taken a client-facing engagement. We never will.`
- Body: `Non-compete and non-solicitation clauses are signed before we see your client list. It's not a sales pitch — it's the operating constraint that makes this business work. The moment we start chasing your clients, we've destroyed the only thing this company sells.`
- No CTA in this block. Policy speaks for itself.

### 4.10 `components/sections/FAQ.tsx`
Four items. Native `<details><summary>` (no JS). Styling: each item `border-b border-border py-6`, summary `flex justify-between items-center cursor-pointer list-none text-[18px] font-medium`, custom chevron via lucide `ChevronDown` that rotates 180° via `group-open:rotate-180`. Answer `mt-4 text-text-muted text-[16px] leading-[1.6]`.

Items (use verbatim):
1. **How do I know you won't steal my client?** — Non-compete and non-solicitation, signed before we see the engagement. Plus: we've never worked client-side, never will — it's in the brand policy publicly, not just in contracts. The moment we start chasing your clients we've destroyed the only thing this business sells.
2. **We tried white-label before, the quality was bad.** — Most white-label AI work is a freelancer on Upwork with a nicer front-end. That's not this. We scope, we ship to production, we monitor, we hand off with documentation. If the first build isn't up to the quality bar you'd ship under your own name, we redo it at our cost.
3. **Our clients want to talk to the builders.** — We stay one layer behind. Your team joins the client calls, your team runs the demos. If the client ever asks who's doing the work, the honest answer is "our technical team" — which is true, because we're an extension of yours under NDA.
4. **What's your pricing?** — Depends entirely on scope. A Vapi agent with one integration is a different animal to a 30-step Make flow with guardrails and monitoring. Scope a build — written estimate back within 24h.

### 4.11 `components/sections/ScopeCTA.tsx` (id="scope")
Final call-to-action. Full-bleed section `py-32 relative overflow-hidden`. Contains a subtle lime radial mesh in one corner at 6% opacity. Center content max-width 680px text-center.
- H2: `Scope a build.` (single-line, text-h2)
- Sub: `Send the brief. Twenty-four hours later you'll have a written estimate — stack, timeline, price. Non-compete signed before we read a single client detail.`
- Primary CTA button: "Send the brief →" → `mailto:hello@muteflow.io` for v1. Beneath, mono text: `hello@muteflow.io · UK · Global`.
- **Signal-lime audit:** This is the third and final allowed lime use. Budget: hero CTA (1), status dot in eyebrow (shares CTA budget — count as ambient), footer stack-hover accent (ephemeral, doesn't count), this CTA (2). Do NOT add any additional lime elements without removing one elsewhere. Confirm ≤3 persistent lime instances visible on initial viewport load across the full page.

### 4.12 `components/layout/Footer.tsx`
`border-t border-border py-12 text-text-ghost text-[14px]`. Three columns on desktop, stacked on mobile.
- Col 1: Wordmark (static, not animated) + tagline "The silent build team for AI agencies."
- Col 2: Links — `Work`, `Process`, `Scope a build` (all anchors).
- Col 3: `hello@muteflow.io`, `muteflow.io`, `© 2026 muteflow`.
- Bottom rule: mono micro-text `OPERATING QUIETLY SINCE 2026` — all caps, tracking-wide-brand, text-text-dim.

## 5 · `app/page.tsx` ASSEMBLY ORDER

```
<GrainOverlay />
<AmbientMesh />
<Nav />
<main>
  <Hero />
  <ServiceStack />
  <Process />
  <NonCompete />
  <FAQ />
  <ScopeCTA />
</main>
<Footer />
```

## 6 · `app/layout.tsx`

- Metadata: title `muteflow — The silent build team for AI agencies.`, description exact brand line, `metadataBase` set to `https://muteflow.io`, OG image referenced from `opengraph-image.tsx`.
- `lang="en-GB"`.
- Fonts: Inter (subsets `['latin']`, weights `['400','500','600','700','800']`, variable `--font-inter`), JetBrains Mono (weights `['500']`, variable `--font-mono`).
- Root `<html>` gets `className={\`${inter.variable} ${jetbrains.variable}\`}`.
- `<body className="bg-void text-text-primary font-sans antialiased">`.
- Include `<Analytics />` from `@vercel/analytics/react`.

## 7 · OG IMAGE (`app/opengraph-image.tsx` — use `next/og` ImageResponse)

1200×630. Background `#0A0A0B`. Wordmark centre-left at 72px, lowercase, weight 800, colour `#F4F4F5`. Beneath in 24px mono `#8A8A93`: `The silent build team for AI agencies.` Single `#C4F547` 8px dot top-right at 10% inset.

## 8 · BRAND POLICE RULES (enforce during code review)

Reject the build if ANY of the following are present:
1. Any capitalisation of "muteflow" in rendered text (must be lowercase everywhere).
2. Any fill colour on the wordmark other than `#F4F4F5` or `#0A0A0B`.
3. Any drop-shadow / outer-glow / bevel on the wordmark.
4. Any stock photography, 3D blob gradient, isometric illustration, robot/brain/lightbulb/rocket/shield-check icon.
5. Any emoji in marketing copy (footer, CTAs, headings, body).
6. Any use of the banned vocabulary: "partner", "solution", "revolutionary", "cutting-edge", "empower", "unlock", "unleash", "synergy", "leverage", "ecosystem", "journey", "passionate about", "world-class", "best-in-class".
7. More than 3 persistent instances of `#C4F547` (signal lime) in the initial viewport of the page on desktop 1440×900.
8. Any `<h1>` other than the hero. Only one H1 per page.
9. Any Lucide icon rendered with fill, or at any size other than 16/20/24px, or with stroke-width other than 1.5.
10. Any `px` spacing value not from this set on primary layout: `{4, 6, 8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96, 112, 128, 140, 160}`.

## 9 · ACCESSIBILITY (must pass)

- Colour contrast: all `text-text-primary` on `bg-void` is 18.9:1 ✓. `text-text-muted` on `bg-void` is 9.1:1 ✓. `text-text-quiet` on `bg-void` is 6.4:1 ✓. Any text below `text-text-quiet` is metadata only, never body copy.
- `prefers-reduced-motion`: disable Wordmark typing, Hero fade, and any hover transforms > 200ms.
- Keyboard: all CTAs and FAQ details fully operable via Tab / Enter / Space. Visible focus ring — add `focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2` to all interactive elements.
- Semantic HTML: `<nav>`, `<main>`, `<section>` with `aria-labelledby` pointing to each section's H2 id, `<footer>`.
- Form-less for v1 — CTA is `mailto:` — but if a scope form is added later, label every input, associate errors with `aria-describedby`.

## 10 · PERFORMANCE

- Lighthouse target: Performance ≥95, Accessibility 100, Best Practices 100, SEO 100.
- No client-side JS for FAQ (use `<details>`), Footer, or any static section. Only `Wordmark`, `Hero` (mount animation), and `ServiceStack` (hover state — can be pure CSS, prefer that) need `"use client"`. Refactor `ServiceStack` hover to CSS `:hover` with Tailwind `group-hover` — this removes it from the client bundle entirely.
- Fonts: `display: 'swap'`, `preload: true` on Inter only.
- No external image requests on initial load. Favicon served from `/public`.

## 11 · `lib/content.ts`

Export every piece of copy as a named const. Do not inline copy inside components. This allows future i18n and single-source editing. Keys: `heroEyebrow`, `heroH1`, `heroSub`, `heroPrimaryCta`, `heroGhostCta`, `heroMeta`, `stackEyebrow`, `stackH2`, `stackSub`, `stackFooter`, `processEyebrow`, `processH2`, `processSub`, `processSteps` (array), `policyEyebrow`, `policyH2`, `policyBody`, `faqItems` (array), `scopeH2`, `scopeSub`, `scopeCta`, `scopeMeta`, `footerTagline`, `footerLinks`, `footerBottom`. Every string matches §4 verbatim.

## 12 · README.md

Include: install (`pnpm i`), dev (`pnpm dev`), build (`pnpm build`), lint (`pnpm lint`), the ten Brand Police Rules from §8, deploy-to-Vercel one-liner. Add a section "WHAT NOT TO DO" with the banned-vocabulary list.

## 13 · BUILD ORDER (execute sequentially)

1. `pnpm create next-app@latest muteflow-web --ts --tailwind --app --src-dir=false --import-alias="@/*" --eslint`
2. Install: `pnpm add lucide-react @vercel/analytics`
3. Replace `tailwind.config.ts` with §2 config.
4. Replace `app/globals.css` per §2.
5. Wire `app/layout.tsx` per §6.
6. Create `lib/services.ts` and `lib/content.ts`.
7. Build `components/ui/*` → `components/brand/Wordmark.tsx` → `components/layout/Nav.tsx`.
8. Build sections in order §4.6 → §4.12.
9. Assemble `app/page.tsx` per §5.
10. Add `app/opengraph-image.tsx` per §7.
11. Run Lighthouse locally; fix anything below §10 targets before shipping.
12. Run the §8 Brand Police checklist manually. Every item green or the PR doesn't merge.

## 14 · FINAL SELF-CHECK BEFORE HANDING BACK

Before reporting "done", confirm each statement is true:
- [ ] No file contains the word "Partner", "solution", "empower", "unlock", "leverage" in any user-facing string.
- [ ] `grep -r "style={{" components/ app/` returns zero results.
- [ ] `grep -ri "muteflow\|Muteflow\|MUTEFLOW" app/ components/ lib/` shows only `muteflow` (lowercase) in user-visible strings.
- [ ] Signal lime count ≤3 in initial desktop viewport.
- [ ] Mobile 375px viewport renders without horizontal scroll.
- [ ] `pnpm build` succeeds with zero TypeScript errors and zero ESLint warnings.
- [ ] All interactive elements reachable via keyboard with visible focus.
- [ ] Hero H1 is the only H1 in the DOM.

Ship when all boxes are ticked. Not before.
