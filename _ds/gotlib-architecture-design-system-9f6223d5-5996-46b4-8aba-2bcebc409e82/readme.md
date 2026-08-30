# גוטליב אדריכלים / Gotlib Architecture — Design System

An architecture studio in Modi'in Illit (שד' בית שמאי 27), led by מרדכי גוטליב, with 20+ years of
practice. It plans and designs **public and institutional buildings**: day-care centres (מעונות יום),
public buildings (מבני ציבור), synagogues (בתי כנסת) and private homes (בניה פרטית). Clients are
municipalities and local councils, religious councils, educational and cultural institutions,
community organisations and private families — mostly in the Israeli haredi/religious public sector.
The studio positions itself around "אדריכלות אסטרטגית" (strategic architecture): programming and
needs analysis first, feasibility and building-rights checks second, then detailed design, permitting,
and site supervision to handover.

Everything in this system is **Hebrew and RTL first**. Latin appears only as small eyebrow labels and
numerals.

## Sources used

| Source | What was taken from it |
| --- | --- |
| https://gotlib.biz/ (WordPress + Elementor, Hebrew RTL) | Site structure, every piece of copy, section order, component inventory, nav, contact details |
| https://gotlib.biz/about/ | About copy and the five-step work process |
| `uploads/לוגו גוטליב אדריכלים-02.png` → `assets/logo-full-navy.png` | Primary lockup; exact navy `#233C53` and taupe `#C8BEB0` |
| `uploads/לוגו גוטליב אדריכלים-01.png` → `assets/logo-mark-taupe.png` | Mark only, taupe |
| `uploads/חתימה-לסטטוס.png` (+ " - עותק") → `assets/logo-full-on-navy.png` | Reversed lockup on navy; email-signature / status usage |
| `uploads/צילום מסך 2023-12-05 092654.png` → `assets/logo-mark-badge-navy.png` | Square navy badge of the mark (favicon / avatar use) |
| Site credit | Site was designed and built by סטודיו איילים ופרסום הדס (ayalim-studio.co.il) |

**What could NOT be read.** The site's stylesheets, fonts and photography sit behind a cross-origin
boundary this environment cannot fetch, so no CSS values, no font files and no project photography
were imported. Colours are sampled from the supplied logo PNGs; typography is a documented
substitution; layout, spacing, motion and states below are a coherent system *inferred* from the
site's structure, copy and brand mark — not copied from its CSS. Treat every number as a proposal
until you confirm it. See "Open questions".

## Content fundamentals

**Voice.** First-person plural, always: "אנו מתמחים", "אנחנו מלווים", "מאחורינו שורה ארוכה". The
studio speaks as a team, never as an individual, and never in the third person. The reader is
addressed in plural second person: "יש לכם חזון אדריכלי שתרצו להגשים?", "בואו נכיר", "תאמו עכשיו".

**Register.** Professional, warm, concrete. Claims are backed by specifics rather than adjectives —
"למעלה מ-20 שנות נסיון", "מהשרטוט הראשון ועד למסירת המוצרים המוגמרים", "פיקוח עליון באופן סדיר".
Occasional colloquial warmth is allowed and is part of the voice: "מחוץ לקופסה זה בדיוק הקומפורט זון
שלנו", "ליווי אישי, אבל עד הסוף!". Professional vocabulary is used without dumbing down: פרוגרמה,
תב"ע, זכויות בנייה, היתר, פיקוח עליון.

**Sentence shape.** Long, comma-and-dash sentences with an en dash for the payoff: "תכנון נכון,
אדריכלות אסטרטגית ממוקדת והתנהלות מחושבת – מביאים תוצאה מושלמת". Hero copy is the exception: two
short verb-first lines, "מעצבים חזון. / בונים קהילה."

**CTAs** are invitations, not commands: "בואו נכיר", "מעניין אותי", "למידע נוסף", "לפרויקטים נבחרים",
"הצטרפו ללקוחותינו המרוצים". Every one carries a trailing "←".

**Testimonials** run long and stay specific (classrooms, playground, kitchenette, acoustics, the
lettering on the ארון קודש) and are attributed by role and place, often without a full name:
"מנהלת מרכז קהילתי, צפון הארץ". Do not trim them into one-liners.

**Latin** is used only as decorative eyebrow labels above Hebrew headings: About Us, Our projects,
Why us?, Our Clients, Recommend Us. Never as body copy.

**Casing / punctuation.** Latin eyebrows are set uppercase by CSS. Contact details are prefixed with
a taupe "//" marker: `//  08-9766670`. Numbers stay Latin digits; process steps are zero-padded
(01–05). Phone is written 08-9766670.

**No emoji. Ever.** No exclamation stacking (one "!" appears in the whole site), no ALL-CAPS Hebrew,
no ampersands in Hebrew, no "this, not that" constructions.

## Visual foundations

**Colour.** Two brand colours and nothing else: navy `#233C53` (all headings, all primary fills,
the wordmark) and taupe `#C8BEB0` (rules, eyebrows, arrows, frames, the mark). Deep navy `#152D47`
is the darkest band (footer, hero ground). Neutrals are warm-white page ground `#FBFAF8`, white
cards, and grey ink for body text. There is no third accent, no semantic red/green/amber in the
brand — if a form needs an error state, use navy with a taupe underline rather than inventing red.
The site's `theme-color` meta is `#3E3E63`, a purple that appears nowhere else; it is treated as a
CMS leftover and is **not** part of the palette.

**Type.** Hebrew display in a geometric grotesque (Heebo here), bold-to-black, tight (1.08–1.18),
never letter-spaced. Hebrew body in a humanist sans (Assistant here) at 17px/1.75 — generous
leading, comfortable for long RTL paragraphs. Latin eyebrows in a thin geometric face (Jost here),
uppercase, `.22em` tracking — the only tracked type in the system. Process numerals are thin Latin
at 44px. Type does the work that icons would do elsewhere.

**Layout.** 1240px container, fluid gutter (20→64px), 32px grid gap, sections 64→128px tall.
Grids are plain: four service tiles, three project tiles, three why-us items per row, six client
logos per row. Content blocks cap at ~720–900px so Hebrew lines stay readable. The header is sticky,
88px, translucent (`--glass-header` + 12px blur) — the only blurred surface in the system, and the
only fixed element besides the site's own accessibility widget.

**Backgrounds.** Alternating bands: warm off-white → white → navy → taupe tint. No gradients as
decoration; the only gradients are photo scrims (navy 28–62%, plus a bottom-up scrim for text over
images). No patterns, no textures, no hand-drawn illustration, no full-bleed decorative art. The one
graphic motif is the logo's **drawn frame**: a 1px taupe rectangle offset ~10px from its content,
echoing the two panels of the mark (`Frame`).

**Imagery.** Architectural photography and renders — interiors and exteriors of public buildings,
cool daylight, straight-on or one-point perspective, no filters, no grain, no warm Instagram grade.
Ratios: 16/9 hero, 4/3 project tiles, 3/4 portrait insets. **No photography shipped with this
system**; `Media` and the kits render a taupe placeholder instead. Ask the studio for renders.

**Corners and borders.** Square. `--radius-0` is the default everywhere: buttons, cards, image
frames, inputs. Radius exists only for the round phone/accessibility chips and the square-with-frame
badge. Borders are 1px taupe hairlines; a 2px navy or taupe top-border marks a testimonial card.

**Cards.** White, square, no border, soft navy-tinted shadow (`--shadow-card`), lifting to
`--shadow-card-hover` with the image zooming 4.5% over 520ms. Service tiles invert: navy/photo
ground, inset taupe frame, white title, on-navy arrow link. Nothing is ever a rounded pill with a
coloured left border.

**Shadows.** Two levels, both cool navy at 4–12% — never black, never coloured, never a glow. Plus a
1px header shadow. Elevation is not used to signal hierarchy; whitespace and rules do that.

**Motion.** Quiet. 140ms for colour, 240ms for UI state, 520ms for image zoom, 700ms for a
scroll-reveal (fade + 16px rise). `cubic-bezier(.4,0,.2,1)` standard, `(.16,1,.3,1)` for anything
travelling. No bounce, no spring, no scale-up entrance, no parallax, no autoplaying carousel motion
beyond a slow testimonial slide.

**States.** Hover: navy fills darken to `#152D47`; outline buttons fill navy and flip text to white;
taupe accents darken to `#8D8271`; links go from navy to taupe with an underline growing in;
arrows travel 6px toward the RTL reading direction; card images zoom, cards lift; client logos go
from greyscale-72% to full colour. Press: 1.5% shrink, no colour change. Focus: 2px taupe-600 ring
at 2px offset (the brand has no blue focus ring — never use the browser default). Disabled: 40%
opacity, no cursor.

**Transparency and blur** appear exactly twice: the sticky header and photo scrims. Nothing else is
translucent; there is no glassmorphism.

## Iconography

**The brand has no icon set, and that is deliberate.** Across the whole site there is not one
pictogram: services, why-us items, process steps and contact details are all set in type. The
recurring "icons" are typographic:

- **"←"** — the arrow on every CTA and read-more link (RTL, so it points left). Set in the Latin face.
- **"//"** — a taupe double-slash marker before each contact detail.
- **01–05** — thin Latin numerals for the process steps.
- **✓** — inside the consent checkbox, the only glyph used as a symbol.
- **The mark** — the G/C monogram, used as a watermark, a badge and a favicon (`assets/`).

No icon font, no SVG sprite, no Lucide/Heroicons/Font Awesome, **no emoji**. If a future screen truly
needs pictograms, raise it with the studio first; do not import an icon library into this brand on
your own initiative. Two client logos (`Coat_of_arms_of_Immanuel.svg`, municipal crests) exist on the
site as raster/SVG client marks, but they are third-party marks, not brand iconography, and were not
copyable from here.

Assets shipped: `assets/logo-full-navy.png`, `assets/logo-full-on-navy.png`,
`assets/logo-mark-taupe.png` (+ a trimmed, transparent `logo-mark-taupe-trimmed.png` and `logo-full-reversed.png` derived from them), `assets/logo-mark-badge-navy.png`. No photography, no client logos, no
illustrations — the sources for those were not reachable.

## Font substitution (needs confirmation)

No font binaries were provided and the site's webfont files were not reachable, so all three
families are **Google Fonts substitutions**:

| Role | Substitute | Standing in for |
| --- | --- | --- |
| `--font-display` | **Heebo** 300–800 | The logo's geometric Hebrew wordmark and site headings |
| `--font-body` | **Assistant** 300–700 | Hebrew running text |
| `--font-latin` | **Jost** 200–400 | The thin Latin "GOTLIB Architecture" line, eyebrows, numerals |

Please send the studio's real font files (or the names used in the Elementor theme) and this becomes
exact.

## Components

Built from the inventory the live site actually defines. Grouped by concern under `components/`.

**`components/core/`** — `Button`, `ArrowLink`, `Eyebrow`, `SectionHeading`, `Logo`, `Frame`, `Media`
**`components/cards/`** — `ServiceCard`, `ProjectCard`, `TestimonialCard`, `FeatureItem`, `ProcessStep`, `ClientLogo`
**`components/forms/`** — `TextField`, `TextArea`, `Checkbox`, `ContactLine`
**`components/navigation/`** — `SiteHeader`, `SiteFooter`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions** (no direct counterpart on the site, added because the kits need them):
`Frame` — formalises the logo's drawn-rectangle motif as a layout device; `Media` — a photography
holder with the taupe placeholder, needed because no imagery shipped; `Logo` — a thin wrapper so the
correct lockup variant is picked instead of hand-written `<img>` tags.

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `surfaces.css`, `motion.css`, `base.css`
- `guidelines/` — 20 foundation specimen cards (Colors, Type, Spacing, Surfaces, Motion, Brand)
- `components/` — the four groups listed above
- `ui_kits/website/` — interactive RTL recreation of gotlib.biz (`index.html`, `Shell.jsx`, `Home.jsx`, `About.jsx`, `Projects.jsx`, `ContactBand.jsx`, `README.md`)
- `assets/` — the four logo files
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent-Skills entry point

No slide template was supplied, so no sample slides were authored.

## Open questions

1. Real font files (or theme font names).
2. Project photography and renders, plus client logo files.
3. Confirm the taupe/navy pair is the whole palette and `#3E3E63` is indeed a leftover.
4. Confirm the inferred spacing, radius (square everywhere), shadow and motion values against the
   live CSS, or send a CSS export / Figma file so they can be made exact.
