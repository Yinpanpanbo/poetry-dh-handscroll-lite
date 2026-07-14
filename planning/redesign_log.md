# Poetry Digital Humanities — Redesign Log

> Living record for the group project. Update this file whenever a design or implementation decision changes.

## 2026-07-14 — Presentation-focused simplification

### Reason

Group review found the complete exhibition too long to explain in a course presentation. The full version was first preserved as both the annotated tag and archive branch `full-exhibition-v1`; simplification then began on the separate branch `simplified-presentation`.

### New scope

- Keep one opening question, one six-stop bilingual handscroll, three interpretive views, four front-end technique cards, and compact credits.
- Remove the grammar map, reception-history gallery, material workshop, audio and other long-form chapters from the presentation path.
- Share `style.css` and `app.js` between English and Chinese pages; select language data from the document `lang` value.
- Reduce the Pages artifact to two HTML files, one stylesheet, one script and one original SVG.
- Do not push or replace the current public full-version deployment before group review.

### Verification

- `node --check app.js`: passed.
- Local Chrome desktop 1440×1000 and mobile 390×844 captures: passed visual inspection.
- Chrome DevTools Protocol simulation: six scenes and six buttons; hero state opens; stop 06 selects “Remain” and reports `06 / 06`; Boundary updates the note; range input moves the handscroll; English and Chinese load one shared script; document overflow is 0.
- Updated screenshot-led product and presentation documents now follow the shorter page architecture.

## 2026-07-14 — Poet context and useful reading links

User review found the technical section culturally abrupt and rejected the final project-description block as inappropriate public-facing content. A new portrait-led Wang Wei section now follows the technical cards, connecting his roles as poet, painter, musician and statesman to the poem's movement from natural detail to human presence. The image is Li Ying's later Qing-dynasty portrait (public domain); the page explicitly states that it is not a Tang-life likeness.

The former method/deployment credits were replaced by four genuine reading routes: the primary poem on Wikisource, Wang Wei's biography and poems at Poetry Foundation, the open Chinese Text Project record, and the Wikimedia Commons portrait record. English and Chinese pages carry equivalent content. The local Pages workflow now includes the portrait asset.

## 2026-07-14 — Remove the visible technology chapter

The four-card front-end chapter was removed from both public pages after user review. Technology remains fully available in the repository source and presentation-support document, but it is no longer presented as cultural content to visitors. Navigation now follows Handscroll → Wang Wei → Further Reading. This lighter public version is prepared for a separate public GitHub repository so group members can inspect and reuse the code directly.

## 2026-07-13 — Project reset and design decision

### Objective

Create a polished, presentation-first Digital Humanities webpage about Chinese classical poetry for an English-taught introductory HTML/CSS course. The site should feel authored and calm, while remaining easy to explain from source code.

### Research distilled

| Reference | Adopted lesson |
| --- | --- |
| Poetry Foundation | Let typography and whitespace keep the poem central. |
| Poetry Archive | Audio is a deliberate reading aid, never autoplay. |
| Walt Whitman Archive | Pair a primary text with concise scholarly context. |
| The Pudding | Use scroll-triggered storytelling, not decoration for its own sake. |
| Future Library | Use darkness, restraint and ritual-like pacing for atmosphere. |

Links: https://www.poetryfoundation.org/ · https://poetryarchive.org/ · https://whitmanarchive.org/ · https://pudding.cool/ · https://www.futurelibrary.no/

### Selected art direction — *Nocturne / Luminous Archive*

- **Mood:** a quiet night reading room; moonlight, paper and distant sound.
- **Palette:** midnight indigo `#070b18`, deep blue `#111b35`, parchment `#eee7d8`, moonlight `#f6e5b8`, silver-blue `#9cb7d8`.
- **Type:** a high-contrast serif face for poetry, a restrained sans-serif face for navigation and metadata.
- **Layout:** full-screen opening → featured close reading → sound layer → visual pattern / archive cards → project credits.
- **Motion:** slow CSS light breathing, sparse moving stars, reveal-on-scroll, and small hover responses. Respect `prefers-reduced-motion`.

### Technology decision

Use a dependency-free static site:

```text
index.html    semantic document and content
style.css     visual system, responsive layout, animation
app.js        poem switcher, reveal observer, soundscape control, menu state
data.js       retained source data from the original analytical prototype
```

No framework, build tool, canvas, or animation library is required. Browser-native Web Audio supplies an optional generated ambient layer, so there is no unlicensed media download and no autoplay.

### Scope locked for v1

- Three Tang poems: *On the Stork Tower*, *A Night Mooring by Maple Bridge*, and *Thoughts on a Quiet Night*.
- One featured poem reader with concise close-reading annotations.
- An optional ambient soundscape control, visual meter cards, and an imagery constellation.
- English interface copy with Chinese primary texts and translated excerpts.

### Acceptance checklist

- [x] Works by opening `index.html`; no install/build step.
- [x] Readable at desktop and mobile widths.
- [x] Has keyboard-visible controls and reduced-motion fallback.
- [x] Audio does not start until a visitor chooses it.
- [x] The page explains a recognisable Digital Humanities method, not only visual style.

## Implementation status

- [x] Existing prototype inspected.
- [x] Visual research completed.
- [x] Art direction and technology framework confirmed.
- [x] Interface rebuilt.
- [x] Responsive and interaction checks completed.


## 2026-07-13 — Nocturne rebuild completed and verified

### Reason

The previous hanging-scroll prototype did not implement the latest locked reader journey or the required navigation, poem switching and optional audio. It also overstated several historical and metrical claims.

### Files changed

- `index.html`: rebuilt as an English-interface semantic reading room with four anchored chapters.
- `style.css`: implemented the luminous-archive system, responsive layouts, visible focus and reduced-motion behavior; removed all network dependencies.
- `data.js`: made the three poem records the shared content source and corrected scholarly framing. 《静夜思》 is treated as 古绝 rather than forced into a regulated template; uncertain dates/places are qualified; variant text is acknowledged.
- `app.js`: added accessible tabs, synchronized tone grids, mobile menu, reveal behavior, imagery nodes and user-initiated Web Audio.
- `planning/screenshots/`: stored final Chrome evidence at 1440×1000 and 390×844.

### How it was checked

- `node --check app.js` and `node --check data.js`: passed.
- Opened `index.html` directly with local Google Chrome using `file://`; resource performance list was empty (offline/dependency-free).
- Chrome desktop screenshot: `planning/screenshots/desktop-1440x1000.png`.
- Chrome mobile screenshot: `planning/screenshots/mobile-390x844.png`; measured horizontal overflow: `0px`.
- Chrome DevTools Protocol interaction simulation: all three tabs selected the correct poem and rebuilt four meter rows; navigation moved to `#patterns`; audio changed `aria-pressed` false → true → false, enabled the volume control only while active, and updated its label; mobile menu opened with matching ARIA state.
- Confirmed no autoplay: the AudioContext is created only inside the sound button click handler.

### Scope note

This remains a deliberately small, human-annotated teaching dataset: 3 poems, 12 lines and 68 characters. Pingshui rhyme categories are presented as a later analytical lens, not as proof of the poets' composition process.

## 2026-07-13 — Culture-first theme exploration

### Reason

The nocturne direction was set aside for a warmer, culture-first experience in which poetry acts as an entry point into geography, cities, objects, institutions and historical imagination. Content expansion is paused until a visual direction is selected.

### Prototype delivered

A separate, non-destructive prototype was added at `prototypes/theme-preview.html`; the completed v1 page remains unchanged. Four switchable directions are included:

1. 青绿江山 — mineral-green landscape, scroll-like space and literati vision.
2. 金碧长安 — Tang mural colour, cosmopolitan capital and Silk Road energy.
3. 永恒之城 — Roman stone, bronze-red civic memory and epic scale.
4. 环球剧场 — Shakespearean parchment, forest green, quill and theatrical introspection.

Only a hero and one cultural fragment are designed by intention. Chrome desktop (1440×1000) and mobile (390×844) preview captures are stored beside the prototype. The page uses only local HTML/CSS/JS and does not modify the current production entry page.

## 2026-07-13 — Theme exploration v2 after critique

The first theme gallery reused one presentation-like hero template too heavily. It was rejected as insufficiently distinctive and too close to slides. The landscape, Tang and Roman directions now have theme-specific spatial systems plus a new interactive cultural explorer below the hero.

- Landscape: scroll marginalia, layered depth, river route and geographic reading nodes.
- Tang: replaced the orange-red field with lapis/stone-blue, cinnabar, mud-gold and ivory; added a Chang'an ward-grid and Silk Road cultural navigation.
- Rome: added monumental arch structure, inscription indexing, road/Forum/Mediterranean nodes and archaeological catalogue styling.
- Interaction: four hotspots and previous/next controls update a theme-specific cultural argument; switching themes updates both the visual system and the explorer dataset.

Validated JavaScript syntax and rendered updated Chrome previews at 1440×1000 and 390×844 as `prototypes/theme-preview-v2-*.png`.

## 2026-07-13 — Independent aesthetic review: v2 rejected

An independent aesthetic-director Agent reviewed all four theme prototypes. The v2 gallery is not approved: despite stronger styling, every direction still shares the same hero, hotspot tour, insight card and fragment grid, so culture is reduced to palette and symbols.

### Required structural reset

- Tang: a Chang'an twelve-double-hour city operating system; ward navigation, morning drum, markets, Qujiang and night curfew. Remove palace silhouette, gold dashboard grid and generic cards.
- Landscape: a genuinely horizontal handscroll with unrolling, pauses, return viewing, colophons and scene-based evidence. Remove modern hotspots, Mediterranean node and generic stamped poem card.
- Rome: downward archaeological excavation through strata, fragments, rubbings and public/private voices. Remove decorative columns, SPQR ornament and map tour.
- Shakespeare: cue-driven theatre with entrances, exits, voice, audience sightlines and edition comparison. Remove the giant quill and literary-cover styling.

### New approval gate

No theme will be presented as a candidate until it has a unique DOM/interaction structure, a culture-specific state change within two viewports, separate mobile navigation, reduced-motion support, and a second review by the aesthetic-director Agent. The next implementation starts with only the Tang first screen and one ward-crossing sequence; other themes follow the same review process but do not reuse its structure.

## 2026-07-13 — Four independent v3 prototypes approved

Four structurally independent pages were implemented under `prototypes/v3/`: Tang uses a time-governed Chang'an ward system and object evidence chain; Landscape uses a draggable horizontal handscroll and three interpretive lenses; Rome uses vertical archaeological strata and accumulating evidence; Shakespeare uses Globe cues, actor blocking, voices and textual witnesses.

After an initial conditional review, all academic, interaction and mobile blockers were corrected. Final aesthetic-director status: **PASS for all four**. Chrome desktop/mobile and grayscale review evidence is stored in `prototypes/v3/review/`. Tang's final mobile city viewport was additionally verified through Chrome DevTools Protocol: its scrollable viewport measured narrower than its 650px map, and `scrollLeft` changed from 0 to 197 while East Market, West Market and Mingde Gate remained present.

The neutral review entry is `prototypes/v3/index.html`. These remain partial cultural prototypes; full content development waits for user selection.

## 2026-07-13 — Independent style studies after scope correction

The user clarified that this phase is not a multi-theme website or a set of complete page concepts. Four independent, intentionally incompatible visual moments were therefore created under `prototypes/style-studies/`: Tang mural dance, a mineral-colour landscape handscroll, a Roman domed light/inscription space, and a Globe theatre stage moment. They share no navigation, component system or interaction architecture.

Each single-file study was rendered in local Chrome at 1440×1000; captures are in `prototypes/style-studies/review/`. The independent aesthetic-director review returned PASS for all four: each was identifiable within five seconds through composition, colour and material rather than labels alone, and none retained the earlier presentation-template structure.

## 2026-07-13 — Museum-object reset for Rome and Shakespeare

The user found the abstract Rome and Shakespeare studies insufficiently identifiable and referenced the Henan Museum website as a possible future museum direction. Its useful lesson was not copied layout but object-led exhibition identity: a concrete collection object anchors the field while title, date, material and surface texture act as curatorial support.

Rome now centres The Met's public-domain marble portrait bust of Gaius/Caligula (37–41 CE, object 248851). Shakespeare now centres The Met's public-domain 1827 print `William Shakespeare` (object 708343). Both local assets and visible source labels were added. Updated Chrome captures are `prototypes/style-studies/review/rome-v2.png` and `shakespeare-v2.png`; independent aesthetic review returned PASS for both.

## 2026-07-13 — Rome style study v4 approved

The bright CSS-architecture attempt was rejected by aesthetic review as theme-park geometry: false arches, oversized checkerboard and weak structural proportion. It was not shown as an approved candidate.

The approved v4 removes invented architecture and centres a real public-domain Roman mosaic floor panel (2nd century CE, The Met object 253565). The mosaic's tesserae, illusionistic geometry and central figure now carry the Roman identity; a light travertine exhibition field, restrained Latin inscription and object label remain secondary. Final Chrome capture: `prototypes/style-studies/review/rome-v4.png`. Independent aesthetic status: PASS.

## 2026-07-13 — Shareable theme-review report

Aesthetic and museum-product Agents independently proposed complete-page directions for the four approved style studies, then cross-reviewed each other's recommendations. The resulting illustrated group-decision report is available as both Markdown and an 11-page PDF under `planning/theme-review/`. It includes one labelled screenshot per theme, future museum-style content modules, the role of poetry as a cultural entry point, interaction and evidence requirements, implementation risks, a comparison matrix and final recommendations. The PDF was built locally with Pandoc/XeLaTeX and visually sampled across the title, all theme pages and comparison pages; Chinese text, images and pagination rendered correctly.

## 2026-07-13 — Final theme selected: 青绿江山手卷

The group selected **青绿江山手卷 / Mineral Landscape Handscroll** as the final direction. Tang, Rome and Shakespeare will not be expanded further; their studies remain only as decision-process records.

### Direction now locked

- The webpage itself behaves like an unfolding handscroll rather than a conventional stacked landing page.
- Poetry is the route through the scroll, connecting imagery to geography, travel, mineral pigments, painting methods and colophons.
- The primary experience is slow horizontal viewing with meaningful pauses and the ability to return and compare.
- The main path remains readable and restrained; historical geography, painting technique and research uncertainty appear as optional knowledge layers.
- Mobile receives a deliberately segmented journey rather than a compressed 5,000px desktop scroll.

### Product scope guardrails

- Begin with one poem or one tightly related text group; do not build a general poetry anthology.
- Every visual or historical claim must connect to a cited image, text edition, place or research source.
- At most one active prompt appears in a viewport; controls do not enter the painted image field.
- Avoid generic red seals, decorative ancient-style borders, flat polygon mountains, map hotspots and strong parallax.
- The next phase must settle the poem/text corpus and evidence sources before full visual production.

## 2026-07-13 — Production rebuild: 山居秋暝青绿手卷

The production entry page was rebuilt after the group selected the handscroll direction. Its structure follows a museum-style curatorial journey without copying the referenced Henan Museum layout: vertical entry room → horizontal continuous handscroll → cultural-context evidence → pigment object/display → curatorial colophon → return to the scroll head.

### Content and evidence

- Core text: Wang Wei's 《山居秋暝》, organised into six sensory stops.
- A single high-resolution public-domain complete image of Wang Ximeng's 《千里江山图》 forms the continuous picture field; the page explicitly states that this Northern Song work is a cross-media viewing reference, not a historical illustration of the Tang poem.
- Three real interpretive lenses now change stop-specific content: poem/sensory reading, visible painting structure, and research boundary.
- The cultural-context bridge completes one verifiable chain from “王孙自可留” to the received reading of 《楚辞·招隐士》, with a direct Wikisource check link and qualified wording. Two unverified object directions are visibly marked as future research rather than exhibits.
- The material section uses a real CC0 azurite specimen image. CSS colour layers are explicitly described as visual concepts, not a reconstruction or universal pigment procedure.

### Review and verification

- Independent aesthetic-director final review: PASS.
- Museum product-designer final review: PASS.
- `node --check app.js`: passed.
- Local Chrome `file://` resources: no external runtime requests.
- Chrome interaction simulation verified: visible unroll state; continuous 9,600px picture field; horizontal scrolling to all six stops; progress 01→06; stop-specific lens content and ARIA state; pigment layers and ARIA state; mobile menu open/close; mobile document overflow 0.
- Final screenshots: `planning/screenshots/handscroll-final-desktop.png`, `planning/screenshots/handscroll-final-mobile.png`, and the exhibition review capture `planning/screenshots/handscroll-v2-exhibition.png`.

## 2026-07-13 — Typography and readability audit

The aesthetic-director and museum product-designer independently audited desktop and mobile type sizing. Both identified the same issue: the display hierarchy was sound, but 7–9px research labels, sources and controls had become decorative texture while mobile section titles remained too large.

A unified responsive type-token system was added. Body and interpretive text now sits at 15–16px; evidence labels and sources at 11–14px; controls and navigation have readable type plus 44px minimum touch targets; section titles were reduced relative to the main title; mobile display and material titles were constrained; source links gained underlines; future-research objects no longer use parent opacity. Final desktop/mobile captures are `planning/screenshots/type-audit-desktop.png` and `type-audit-mobile.png`. Final aesthetic typography review: PASS. Final product readability review: PASS.

## 2026-07-14 — Content logic, deployment and course documentation

Two additional roles joined the review: a classical-poetry scholar and a museum content designer. Together with independent visual and product reviewers, they replaced the post-scroll collection of loosely related items with one explainable argument: **how a seemingly empty autumn mountain is gradually sensed, inhabited and judged worthy of staying in**.

### Content logic now frozen

- Six visual stops are explicitly nested under the regulated verse's four couplets.
- A syntax map shows environment → sensory space → traces of people → decision.
- 《招隐士》 explains the closing textual echo; 《鹿柴》 and 《竹里馆》 provide a small same-author comparison; Su Shi's colophon explains the later reception history of reading Wang Wei through painting.
- The mineral and handscroll section is now a separate translation workshop explaining the website's medium, not evidence for the Tang poem.
- Evidence labels are unified as A primary text, B textual analysis/received interpretation, C reception history and D curatorial translation.
- The final answer is textually bounded: people/traces and natural sounds coexist without displacing one another.

Final joint review: poetry PASS; content design PASS; visual review PASS; product review PASS.

### Deployment

A GitHub Pages Actions workflow and `DEPLOYMENT.md` were added. The 15MB source handscroll was converted to a 1.1MB, 16,000px-wide WebP. The deploy artifact contains only production code, three required image assets and the theme-review PDF (about 5.5MB total). YAML, local references and browser loading were checked.

### Course and product documents

Teacher PPTs on XML and TEI were inspected. The report-support document therefore explains structured meaning, editorial transparency, evidence layers and one-source/multiple-view presentation in accessible language rather than computer-science implementation detail. A separate screenshot-led product manual documents every interaction.

- `docs/网页辅助汇报说明.md` and `.pdf` — 11 pages.
- `docs/产品功能使用说明.md` and `.pdf` — 11 pages.
- Final screenshots are under `docs/images/`.

## 2026-07-14 — English-first bilingual edition and original autumn handscroll

### Reason

The project is for an English-taught group course, so the public entry now needs an English information hierarchy while keeping the Chinese poem visible and inspectable. The previous use of *A Thousand Li of Rivers and Mountains* also risked making a famous Northern Song painting appear to be the real subject or a historical illustration of Wang Wei.

### Implementation

- `index.html` is now the English-first course entry; `zh.html` preserves the Chinese interface, and the two pages cross-link.
- Every handscroll stop presents the Chinese primary text vertically beside an original project translation in English. Translation boundaries for `empty`, `downriver`, and especially `Wangsun` are made explicit.
- `assets/handscroll/autumn-mountain-scroll.svg` is a new 9,600px original digital handscroll built from the poem sequence: rain, moon, spring, bamboo, returning workers, lotus, boat, open valley, and the possibility of remaining. No production page or deployment file now loads *A Thousand Li*.
- `style-en.css` gives the English interface its own title scale, line length, card layout, mobile stacking, and bilingual verse hierarchy. Chinese verse remains the exhibit; English translation acts as the interpretive channel.
- `app-en.js` contains six English stop records and preserves the same wheel, drag, keyboard, range, lens, material, menu, and ARIA behaviors as the Chinese edition.
- GitHub Pages now publishes both language pages, both scripts, both stylesheets, the original SVG, the CC0 azurite image, and the existing theme-decision PDF.
- The report-support and product-manual Markdown/PDF files were updated with the English entry, project translation, original image boundary, and nine new Chrome screenshots.

### Review and verification

- Bilingual poetry editor: approved the project translation after retaining `Wangsun` as a cultural term and strengthening `Bamboo resounds`.
- English typography reviewer: approved an independent English typographic scope and the exhibit/translation hierarchy.
- Final museum-product review: PASS after the Chinese verse contrast correction.
- Final aesthetic review: PASS; the continuous rain-to-valley composition is recognisable as a handscroll rather than a slide or card collage.
- Local Chrome at 1440×1000 and 390×844 loaded only local production resources. All images had non-zero natural width; mobile document overflow was 0.
- Chrome interaction simulation reached `CLOSING · 06 / 06` on desktop and mobile, updated the research note to `Wangsun remains open`, toggled all three material layers, opened the mobile menu with matching ARIA state, and followed both language links.
- Computed mobile styles confirmed Chinese `vertical-rl`, English `horizontal-tb`, and dark-ink Chinese verse with a pale-silk halo.
- Final evidence screenshots are `planning/screenshots/english-*.png` and `docs/images/01` through `09`.
- `docs/网页辅助汇报说明.pdf` is 12 pages; `docs/产品功能使用说明.pdf` is 11 pages. Cover, middle, and ending pages were rendered and visually checked.

- Final audio acceptance: Chrome reported no autoplay (`aria-pressed=false`, zero `speak` calls); first activation changed the control to `Stop recitation` and invoked one Chinese utterance; second activation stopped and reset it. The feature uses browser SpeechSynthesis and is labelled as a reading aid, not a scholarly recording.

## 2026-07-14 — Poem-aligned handscroll v4 and technology-first presentation

### Reason

The first original SVG still read as small symbolic objects placed along a long background. Poem and image could drift apart because each 1,600px scene was wider than the visible painting field. The grammar map and secondary copy also lacked contrast. For the course presentation, browser speech added an unstable feature while taking attention away from explainable front-end fundamentals.

### Cultural and aesthetic co-design

- The cultural-curatorial Agent defined one continuous cognitive route: clearing rain → light descending through pines → spring descending over stone → bamboo movement before returning workers → lotus movement before the boat → an open path in which remaining becomes a choice.
- The aesthetic Agent converted this into six exact segments with foreground/midground/distance, changing density, a continuous mist/water/bank line, protected bilingual text areas and no visible scene frames.
- Each Agent cross-reviewed the other. Required boundaries were preserved: moonlight does not physically become the spring; bamboo does not morph into lotus; washerwomen remain workers rather than decorative court ladies; the boat is a low river craft; the final eave is tiny and secondary rather than evidence of a residence.

### Files and interaction changes

- `assets/handscroll/autumn-mountain-scroll.svg` was redrawn as a denser six-pause composition with varied rock, pine-needle, bamboo-leaf, worker, lotus and boat forms.
- The visible painting field now contains exactly six viewport-width scenes; the SVG is always 600% of that field. Direct stop navigation therefore places one complete poem/image pair in view.
- A six-button stop picker was added below the continuous range control in both languages. `data-stop`, calculated scene positions and `aria-current` connect Rain / Moon / Spring / Bamboo / Lotus / Remain to the correct scene.
- Left/right arrow keys now move by poem stop. Wheel, drag and the continuous range remain available for free viewing.
- The grammar map changed from a dark low-contrast panel to a light-silk river path with dark-ink copy. Body copy is weight 500; labels and evidence markers are 600–700.
- Browser speech and all related HTML, JavaScript and CSS were removed. The final site has no audio control or SpeechSynthesis code.
- `docs/网页辅助汇报说明.md` was rewritten around four representative student-level techniques only: semantic HTML; CSS layout and visual system; one CSS state animation; vanilla JavaScript state/navigation. The document explicitly explains image insertion, animation, styling, responsive layout and the decision not to stack frameworks.
- The product manual now documents the continuous range and six direct stop buttons.

### Review and Chrome verification

- Cultural review: PASS, 28/30. The evidence-first order of bamboo/worker and lotus/boat, labour framing, reception boundary and final open valley all passed.
- Aesthetic review: PASS, 27/30. Poem-image alignment, continuous-scroll character, bilingual hierarchy, density and responsive completeness all passed.
- Typography review: PASS after Chrome confirmed mobile `PROJECT TRANSLATION` at 11px and the prologue boundary note at 12px.
- Desktop direct navigation landed at scene offsets 0 / 1047 / 2094 / 3142 / 4190 / 5237 (within 2px after smooth scrolling). Every corresponding bilingual verse remained inside the painting viewport.
- Continuous range at 50% selected the nearest fourth stop; lens switching updated the research note; all six direct buttons updated `aria-current`.
- Computed grammar-map colours were light silk, title `rgb(24,53,47)` and body `rgb(52,74,67)`; body weight was 500 and label weight 700.
- At 390×844, the fifth stop landed exactly at its scene start, the bilingual verse remained inside the painting field, document overflow was 0, the mobile menu ARIA state matched, and no audio control existed.
