# Group Workflow

## How to continue this project

1. Read `planning/redesign_log.md` before changing scope or aesthetics.
2. Keep content changes in `index.html`; keep visual decisions in `style.css`; keep interaction changes in `app.js`.
3. For every material change, append a dated note to `redesign_log.md` with: reason, files changed, and how it was checked.
4. Test the page at a narrow phone width and a wide desktop width before presenting.
5. Credit every added image, recording, font, or dataset. The current soundscape is generated in-browser and needs no external asset credit.

## Presentation narrative (about 90 seconds)

1. Introduce the site as a digital reading room for Tang poetry.
2. Explain that semantic HTML carries the texts and research notes.
3. Show how CSS creates the archive atmosphere: typography, moonlight gradients, responsive grid and motion.
4. Demonstrate the poem switcher and optional soundscape; explain that JavaScript only enhances the reading experience.
5. Relate the visual meter and imagery map to Digital Humanities: close reading is paired with a light form of structured/distant reading.


## Current handoff — 2026-07-13

The v1 nocturne rebuild is complete. Continue to keep `data.js` as the content/data source and avoid duplicating poem claims in HTML. Before presentation, open `index.html` directly and use the stored Chrome screenshots in `planning/screenshots/` as the visual baseline. Any later content claim should preserve the method boundaries recorded in `redesign_log.md`.

## Selected direction — 2026-07-13

The group selected **青绿江山手卷**. Future implementation should treat the page as a slow, horizontally unfolding cultural handscroll. Do not continue developing the other theme studies. Before rebuilding the production entry page, lock one poem or a tightly related text group and assemble cited sources for geography, painting technique, mineral pigments and textual variants.

## Production status — handscroll rebuild

The production `index.html` now implements the selected 《山居秋暝》 mineral-landscape handscroll direction and has passed aesthetic, product, desktop and mobile review. Preserve the continuous picture-field architecture and evidence labels. Future additions should complete one sourced cultural object at a time; do not promote the currently labelled future research directions to exhibits without verifiable metadata and rights.

## Final delivery workflow — 2026-07-14

The final content argument, evidence system and production interactions have passed poetry, content, visual and product review. Deploy using `.github/workflows/pages.yml`; see `DEPLOYMENT.md`. For classroom presentation use `docs/网页辅助汇报说明.pdf`; for operation and handoff use `docs/产品功能使用说明.pdf`. Do not reintroduce unverified cultural objects or the 15MB source handscroll into the deployment artifact.

## English-first bilingual delivery — 2026-07-14

Use `index.html` as the GitHub Pages and classroom entry. It provides an English interface with Chinese primary text and the projects original English translation. Use `zh.html` only as the Chinese-language alternative. Preserve the original `assets/handscroll/autumn-mountain-scroll.svg`; do not reintroduce *A Thousand Li of Rivers and Mountains* as the production picture field. Future content edits must keep translation choices, evidence labels, and curatorial-image boundaries explicit in both languages.

## v4 presentation and interaction guardrails — 2026-07-14

Preserve the six viewport-width poem stops and the direct stop picker; each button must continue to place the complete bilingual verse and its corresponding scene in one painting viewport. Keep the light-silk grammar map and the audited body/label weights. Do not restore browser speech. For the course presentation, explain only four representative techniques: semantic HTML, CSS layout/visual system, CSS state animation, and vanilla JavaScript state/navigation. Additional modules should be described as reuse of these fundamentals rather than as new technology.
