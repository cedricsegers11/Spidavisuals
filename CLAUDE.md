# Spida Visuals — Project Instructies

## Project Overzicht

**Spida Visuals** is een Nederlandse video- en motion studio. De website is een replica/herinterpretatie van [spidavisuals.nl](https://spidavisuals.nl) met een eigen editing-thema visuele laag bovenop het originele design en content.

**Taal:** Altijd Nederlands (nl) in alle gebruikersgerichte teksten.
**Stack:** Vanilla HTML + CSS + JavaScript. Geen frameworks, geen build tools, geen npm. Externe styles in `styles.css`, scripts in `script.js`.
**Referentie:** Bij twijfel over content, knoppen, structuur — kijk hoe spidavisuals.nl het doet en volg dat. De content moet letterlijk overeenkomen.

---

## Bestandsstructuur

```
/
├── index.html          # Homepage (hero, diensten, werk, proces, over, faq, cta)
├── diensten.html       # Volledige diensten pagina (alle 7 services)
├── werk.html           # Volledig portfolio (alle videos, met platform filters)
├── contact.html        # Contact / offerte aanvragen pagina met formulier
├── admin.html          # Admin paneel (alleen Spida, eigen wachtwoord-flow) — aanvragen, afgehandeld, chats, bezoekers, stats. Niet gelinkt vanaf UI; toegang via direct URL admin.html
├── privacy.html        # Privacyverklaring (AVG-conform, gelinkt in footer)
├── voorwaarden.html    # Algemene voorwaarden (gelinkt in footer)
├── 404.html            # Custom 404 pagina (Netlify pakt deze automatisch op)
├── _redirects          # Netlify redirects (oude paden → nieuwe pagina's)
├── robots.txt          # Crawler instructies (block admin)
├── sitemap.xml         # Public sitemap voor Google
├── favicon.svg         # Browser tab icoon (witte S op zwart)
├── og-image.svg        # Social media preview image (1200×630)
├── styles.css          # Alle styling — gedeeld over alle pagina's
├── script.js           # JS — gedeeld over alle pagina's (defensief: checkt of elementen bestaan)
├── CLAUDE.md           # Dit bestand
└── .claude/
    ├── settings.json
    └── agents/
        ├── research.md
        ├── code-reviewer.md
        └── qa.md
```

---

## Design Systeem

### Kleuren — gebruik ALTIJD CSS variabelen, nooit hardcoded hex

**Cinematic black & white palette** — past bij het Spida logo (witte 's' met diagonale light flares op pure zwart). De variabele namen `--teal*` zijn behouden voor compatibiliteit maar bevatten nu **wit**.

```css
/* Achtergronden — pure zwart */
--ink:      #000000   /* Pagina achtergrond */
--ink-2:    #08080a   /* Section dark / cards */
--ink-3:    #101012   /* Diepere card hover / form fields */
--ink-4:    #1a1a1d   /* Focus state */

/* Lijnen */
--line:        rgba(255,255,255,0.08)
--line-strong: rgba(255,255,255,0.16)

/* Accent — wit (vroeger teal, naam blijft) */
--teal:        #ffffff   /* Primaire CTA, accenten, italic em in titels */
--teal-bright: #ffffff   /* Hover state primaire knop */
--teal-deep:   #cfcfd2   /* Gradient stop, dieptes */
--teal-glow:   rgba(255,255,255,0.32)
--teal-soft:   rgba(255,255,255,0.06)

/* Tekst */
--text:   #ffffff   /* Primaire tekst */
--text-2: #b8b8bc   /* Subtekst, body paragrafen */
--text-3: #727275   /* Mute, labels, mono cijfers */
--text-4: #404043   /* Placeholders, deep mute */
```

**Italic em in titels** krijgen een chrome/silver gradient i.p.v. een vlakke kleur:
```css
em {
  background: linear-gradient(180deg, #ffffff 0%, #9c9ca0 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 0 18px rgba(255,255,255,0.2));
}
```

**Hero light flares** — diagonale lichtstrepen die het logo nabootsen, via `.hero::before` en `.hero::after` met `linear-gradient(115deg, ...)` en `mix-blend-mode: screen`.

### Typografie

Drie families — exact zoals spidavisuals.nl:

```css
--font-display: 'Fraunces', 'Times New Roman', serif    /* Titels, italic em, blockquotes */
--font-body:    'Manrope', -apple-system, sans-serif    /* Body, knoppen, inputs */
--font-mono:    'JetBrains Mono', monospace             /* Cijfers, labels, eyebrows, timecodes */
```

**Regels:**
- Alle h1/h2/h3 → `font-family: var(--font-display)`, `font-weight: 400` of `500` (geen 700+)
- Italic woorden in titels (zoals *alle*, *moois*, *match?*) → `<em>` element met `color: var(--teal)`, `font-style: italic`
- Eyebrow labels (`01 / Diensten`), step nummers (`STAP 01`), timecodes, status messages → `font-family: var(--font-mono)` + uppercase + letter-spacing
- Body / knoppen / inputs → `font-family: var(--font-body)`

### Knoppen

```css
.btn {
  padding: 13px 22px;
  border-radius: var(--r-sm);   /* 6px */
  font-weight: 600;
  font-size: 14px;
}
.btn-primary { background: var(--teal); color: var(--ink); }
.btn-primary:hover { background: var(--teal-bright); transform: translateY(-2px); }
.btn-ghost { border: 1px solid var(--line-strong); color: var(--text); }
.btn-ghost:hover { border-color: var(--teal); color: var(--teal); background: var(--teal-soft); }
.btn-large { padding: 16px 28px; font-size: 15px; }
```

### Border radius schaal

```css
--r-sm: 6px    /* knoppen, kleine pills, inputs */
--r-md: 12px   /* cards, service tiles, work items */
--r-lg: 20px   /* grote panels, modal-achtige containers, contact form wrap */
```

### Editing-thema visuele elementen

Het site is voor een video studio — de visuele laag verwijst overal subtiel naar editing software:

- **Live timecode ticker** in hero (`00:00:08:14` formaat, mono font, JS-driven)
- **REC indicator** (rode pulserende dot) bij timecode
- **Video timeline visualisatie** met gekleurde clips (V1·Hook, V2·B-Roll, V3·Cut, V4·Out) en rode playhead
- **Mono cijfers** voor alle nummers, step indicaties, percentages
- **Comment-syntax labels** (`// VERZENDEN...`, `// E-MAIL`, `// LOCATIE`) voor form en list labels
- **Play-icoontje** (▶) op portfolio kaartjes — verschijnt op hover als teal cirkel
- **Scrub bar** animatie op service cards (teal verticale lijn aan de zijkant op hover)

Behoud deze stijl bij nieuwe componenten.

---

## Pagina structuur

### index.html

| Sectie | ID | Beschrijving |
|--------|----|--------------|
| Nav | `#nav` | Sticky, blur, logo links + 6 nav links + "Offerte aanvragen" CTA rechts |
| Hero | `.hero` | Timecode strip → titel "Visuele content die je merk laat *opvallen*" → sub → "Wij maken [rotator]\|" → 2 knoppen → editing timeline visual → marquee onderaan |
| Diensten | `#services` | 5 cards in bento grid (4 cols, 2 rows): TikTok&Reels groot links (2×2), 4 kleine rechts. "Alle diensten bekijken" → diensten.html |
| Tarieven | `#tarieven` | Verticale prijslijst met 3 items: 20× Shorts/Reels (€150), Vlog edit (€75–€200), Bedrijfsvideo (€35–€100). CTA-strook onderaan: "Vraag offerte aan" → contact.html. Hover schuift de hele rij naar rechts (zelfde stijl als proces sectie) |
| Werk | `#work` | 8 work items uit portfolio (gefilterd op platform). Elk item heeft decoratieve `work-bg` content. "Volledig portfolio" → werk.html |
| Reviews | `#reviews` | 5 review cards in 6-col grid (3 + 2 layout). Reviews-head heeft rating-summary tegel rechts (5.0/5, sterren, totaal aantal) |
| Proces | `#process` | 6 stappen in 3-col grid met timecode-achtige `STAP 01` labels en tijdsindicatie |
| Over | `#about` | 2-col: copy + 4 kernwaarden links, "Klinkt als een *match?*" CTA card rechts |
| CTA | `#contact` | Sectie met "Laten we iets *maken.*" → 2 knoppen (Start je project / mail) |

Sectie nummering eyebrow labels: 01 Diensten, 02 Tarieven, 03 Werk, 04 Reviews, 05 Proces, 06 Over, 07 Contact.
| Footer | `.footer` | 4-col: brand + diensten + studio + contact, met KvK/BTW onderaan |

### diensten.html

- Page-hero met breadcrumb `Home / ● 01 — Diensten`
- Titel: "Eén studio, *alle* formats."
- Volledige services grid met 7 services + 1 CTA tile (Iets anders in gedachten?)
- Langere beschrijvingen dan op homepage
- CTA-sectie onderaan

### contact.html

- Page-hero "Klaar om iets *moois* te maken?"
- 2-col layout: contact info links (e-mail, locatie, reactietijd, social) + formulier rechts
- Formulier velden: Naam, Bedrijf, E-mail, Type project (select), Budget range (select), Deadline, Bericht, Hoe gevonden (select)
- JS handler in `script.js` toont status zonder echte verzending (placeholder)

---

## Routing regels — knoppen & links

**Belangrijk:** Bepaalde knoppen leiden ALTIJD naar bepaalde pagina's. Verander deze nooit zonder dat Cedric dat vraagt.

| Knop tekst | Linkt naar |
|------------|-----------|
| Offerte aanvragen | `contact.html` |
| Start een project | `contact.html` |
| Start je project | `contact.html` |
| Laten we praten | `contact.html` |
| Laten we stap één zetten | `contact.html` |
| Volledig portfolio | `werk.html` |
| Contact (nav) | `contact.html` |
| Verstuur aanvraag | `contact.html` (form submit) |
| Alle diensten bekijken | `diensten.html` |
| Bekijk ons werk | `#work` (anchor op homepage) |
| Home | `index.html` |
| Diensten | `diensten.html` |
| Werk / Proces / Over / FAQ | `index.html#section` (cross-page anchor) |
| KGB Customs (work item) | `https://www.tiktok.com/@kbgcustomz` (extern, target=_blank) |

**Geen modals** — alle "open een formulier" knoppen leiden naar `contact.html` als aparte pagina. De gebruiker wil expliciet geen popup-modal.

---

## Schrijfregels voor Code

### DO
- Gebruik altijd CSS-variabelen (`var(--teal)`, niet `#1FD1A8`)
- Schrijf Nederlandse teksten voor alle gebruikersinterfaces
- Italic teal woorden in titels via `<em>` element (NIET via inline color of style)
- Mono font voor cijfers, labels, timecodes, eyebrows, status messages
- Defensieve JS: check `if (element)` voordat je listeners bindt — `script.js` wordt op 3 pagina's geladen, niet alle elementen bestaan overal
- Werk Cross-page anchors via `index.html#sectionId` op niet-home pagina's
- Voor nieuwe servicekaarten/work items: hou je aan dezelfde markup conventies (`data-num`, `<ul><li>` voor tags, `data-color` voor work items)
- Hou content letterlijk gelijk aan spidavisuals.nl tenzij anders gevraagd

### DON'T
- Geen externe CSS-frameworks (geen Tailwind, geen Bootstrap)
- Geen npm, geen build tools
- Geen Engelse teksten in de UI (technische cijfers/labels zoals `REC`, `V1`, `9:16` mogen wel)
- Geen modals voor contact/offerte — altijd `contact.html` linken
- Geen paarse/oranje/magenta accenten — uitsluitend de teal/mint palette
- Geen inline `style=""` voor kleur of layout (alleen voor truly one-off zoals `--c1`/`--c2` data attributes via JS)
- Geen contact form die ECHT iets verstuurt zonder dat Cedric dat heeft ingeregeld — het is nu een placeholder die alleen status toont

---

## Externe Dependencies (CDN)

```html
<!-- Google Fonts: Fraunces + JetBrains Mono + Manrope -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Geen andere externe dependencies. Geen analytics, geen tracking, geen JS libraries.

---

## Subagenten — Wanneer te gebruiken

| Agent | Gebruik wanneer |
|-------|----------------|
| `research` | Iets uitzoeken dat meerdere zoekacties vereist (CSS specs, accessibility patterns, font behavior) zonder de hoofdcontext vol te gooien |
| `code-reviewer` | Na het schrijven of aanpassen van JavaScript-logica (rotator, modal, form handler) — laat een onbevooroordeeld review doen |
| `qa` | Wanneer een interactie getest moet worden (form-validatie, navigation flow, responsive breakpoints) |

**Patroon voor niet-triviale wijzigingen:**
1. Schrijf/bewerk de code
2. Spawn `code-reviewer` subagent → lees rapport → verwerk fixes
3. Spawn `qa` subagent indien interactief → lees testresultaten → verwerk als nodig

Voor pure content/styling tweaks: subagenten zijn overkill, doe het direct.

---

## Design Principes

- **Cinematisch, donker, kalm** — donker palette met één teal accent. Geen felle of warme kleuren.
- **Editing-thema subtiel** — timecodes, mono cijfers, video timeline, REC indicator. Niet overdrijven — geen bordeel van clapperboards en filmrollen.
- **Nederlandse directheid** — korte zinnen, duidelijke CTA's, geen marketing-bullshit. Spida richt zich op merken die "verder willen".
- **Mobile-first responsive** — alles moet op telefoon werken. Hamburger menu, bento grid → single column, etc.
- **Accessibility** — alle knoppen zijn `<a>` of `<button>`, semantische HTML (`<main>`, `<section>`, `<article>`, `<details>`), aria-labels op icon-only buttons, focus states.
- **Volg het origineel** — content, titel-tekst, FAQ vragen, knop-teksten zijn 1-op-1 over te nemen van spidavisuals.nl. Eigen toevoeging is alleen de visuele stijl (editing thema) en de modal-vrij navigatie naar aparte pagina's.

---

## Toekomstplannen (context voor beslissingen)

- Contact formulier nu placeholder (toont alleen status) — kan later naar EmailJS of een echte backend
- Geen analytics nu — bij behoefte: minimale fingerprint-vrije optie (Plausible, Umami)
- Werk-portfolio is nu 3 items hardcoded — kan groeien naar een aparte `werk.html` pagina als er meer projecten komen
- Video thumbnails nu kleurgradients — vervangen door echte stills/posters wanneer assets beschikbaar zijn
- Logo `<span class="logo-mark">` is nu pseudo-element met play-vorm — kan vervangen door echt SVG logo wanneer er een definitieve versie is
