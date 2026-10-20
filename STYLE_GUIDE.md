# Design Style Guide — Nebin Biju Portfolio

## Colours

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#141413` | Page background |
| Surface | `#1a1a18` | Topbar, modals |
| Surface dark | `#0e0e0d` | Card background |
| Surface mid | `#111211` | Input fields |
| Border | `#2a2a28` | Dividers, card borders, input borders |
| Border dark | `#1e1e1c` | Table row dividers |
| Accent | `#f1629c` | Links, tags, active nav, hover titles, buttons |
| Accent hover | `#e0508a` | Button hover state |
| Accent subtle | `rgba(241,98,156,0.12)` | Tag background |
| Accent border | `rgba(241,98,156,0.3)` | Tag border, blockquote border |
| Text white | `#ffffff` | Headings, card titles |
| Text primary | `#888884` | Descriptions, body copy, meta |
| Text secondary | `#666662` | Nav links, back buttons, body default |
| Text muted | `#555552` | Content body, table cells |
| Text faint | `#444440` | Proj meta, captions |
| Error | `#e05050` | Form validation |

---t

## Typography

### Fonts
- **UI / Headings:** `Fira Code` — weights `600`, `700`
- **Body / Descriptions (blogs & projects):** `Fira Code` — all weights (`400`, `600`, `700`)
- **Blog content & captions:** `Georgia, 'Times New Roman', serif`

### Scale

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| Page title (h1) | Fira Code | `42px` | 700 | `#ffffff` |
| Blog title (listing) | Fira Code | `32px` | 700 | `#ffffff` |
| Card title | Fira Code | `28px` | 700 | `#ffffff` |
| Section h2 | Fira Code | `16px` | 700 | `#ffffff` |
| Section h3 | Fira Code | `13px` | 700 | `#888884` |
| Description (cards & project page) | Fira Code | `18px` | 600 | `#888884` |
| Blog listing description | Georgia | `18px` | 400 | `#888884` |
| Blog listing meta | Georgia | `18px` | 400 | `#888884` |
| Blog content body | Georgia | `18px` | 400 | `#888884` |
| Blog content blockquote | Georgia | `18px` | 400 | `#888884` |
| Blog content captions | Georgia | `14px` | 300 | `#888884` |
| Blog content h2 | Fira Code | `16px` | 700 | `#ffffff` |
| Blog content h3 | Fira Code | `13px` | 700 | `#888884` |
| Tags | Fira Code | `12px` | 700 | `#f1629c` |
| Nav links | Fira Code | `14px` | 600 | `#666662` |
| Back / nav buttons | Fira Code | `13px` | 700 | `#666662` |

---

## Layout

### Max widths
| Section | Max width |
|---------|-----------|
| Projects (card list) | `900px` |
| Project detail page | `900px` |
| Blogs (listing) | `700px` |
| Blog detail page | `700px` |

### Body padding
| Breakpoint | Projects | Project / Blog pages |
|------------|----------|----------------------|
| Default | `90px 16px 80px` | `80–96px 24px 120px` |
| ≤900px | — | `20px` sides |
| ≤600px | `90px 24px 80px` | `24px` sides |
| ≤380px | — | `20px` sides |

---

## Components

### Topbar
- Height: `52px`
- Background: `#1a1a18`
- Border-bottom: `1px solid #2a2a28`
- Active link: `#f1629c`
- Hover: `#ffffff`

### Project Cards
- Height: `520px` (desktop) → `420px` (≤900px) → `280px` (≤600px) → `220px` (≤380px)
- Border-radius: `18px`
- Panel peek height: `76px` (desktop) → `56px` (≤900px) → `48px` (≤600px) → `44px` (≤380px)
- Panel animation: `transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Tags
```css
font-size: 12px; font-weight: 700; color: #f1629c;
background: rgba(241,98,156,0.12); border: 1px solid rgba(241,98,156,0.3);
border-radius: 6px; padding: 4px 10px;
```

### Divider
```css
height: 1px; background: #2a2a28; margin: 36px 0;
```

### Proactive home opening story
- Before the first numbered heading, a project overview uses a semantic description list for Duration, Role, and Status (no introductory paragraph or users field). It sits directly on the page background without a box, border, or inset padding. Facts share a single desktop row with `1fr 1fr 2fr` columns and stack at `≤600px`; the status "Shipped" uses white, matching the other fact values.
- Overview labels match the project tags: lowercase Roboto Mono, `14px`, weight `600`, in `#888884`.
- Overview values are white (`#ffffff`), while "Soon to be live" retains the pink accent.
- Project `id=7` uses `.proactive-story` in place of the placeholder hero.
- Narrative copy reuses `.blog-content`, matching the NTU museum app's Noto Serif typography, `18px` text, muted colour, paragraph spacing, and list styling on the page's dark background.
- The opening story is text-only and uses the full content width; narrative copy and task bullets remain selectable HTML.
- The closing italic question is white (`#ffffff`).
- Beneath "So, the brief became...", the brief is selectable text rather than an image: bold Noto Serif at a responsive `40–64px`, larger than the L1 content headings, with `1.25` line height in grey `#888884`; "We hand it to you." uses the pink accent `#f1629c`.
- The gap before the brief heading (after the announcement quote) is `160px`. The gap after the large brief statement (before "... and the users would want to") is `80px`.
- "... and the users would want to" follows with three vertically stacked live-text jobs: Understand, Prioritise, and Act. Each row places a decorative `64px` outline icon (a question-mark book, inward arrows, or an open striped clapperboard) on the left, with a `24px` subheading and description on the right across a `24px` column gap. Rows are separated by `40px`, reduced to `32px` at `≤600px`.
- A native, initially collapsed `details` disclosure titled "Who is Mona?" follows the story, reusing the NTU museum app's disclosure styling. Bold phrases preserve the persona reference's emphasis.
- "Today, Copilot waits" follows as a secondary (`h3`) heading. The full dark-themed phone screenshot is centered at up to `230px` wide, without a border and with a soft shadow for depth. The figure has `60px` of spacing above and below; the description sits below the image.
- An initially collapsed "What are the users saying?" disclosure follows the current-home section, presenting the four supplied user quotes with the shared blockquote styling.
- Beneath "Courtesy: WorkIQ", an inline SVG recreates the supplied calendar/chat/email-to-Copilot diagram on dark surfaces. Each source gets an independent 1.8–2.6-second cycle and randomized starting phase on page load, allowing simultaneous pulses without waiting for other sources. Travel occupies 60% of the cycle, keeping a smooth speed with short gaps between pulses. Twelve progressively tapered stroke layers soften the scrim trail, with a 12% fade-in and an eased fade-out from 60–80% of the cycle. The monochrome Copilot paths reuse the prototype's `CopilotLogo.svg` artwork.
- The diagram has no visible playback control and pauses offscreen or in hidden tabs. Reduced motion hides the pulses, leaving the static connections and accessible diagram description intact.
- "WorkIQ" in the courtesy line uses the pink accent. An initially collapsed "What is WorkIQ?" disclosure follows the diagram with a short definition and a link to Microsoft's overview.
- Copilot's ring glows pink on each pulse's arrival (50% of that source's cycle), peaks at 55%, and eases back to its neutral border by 85%. Each glow shares its source's timing, allowing overlapping arrivals; reduced motion hides the glow as well.
- A native, initially collapsed "Engagement loop" disclosure sits immediately before "3. Whiteboard and vibecode". Inside, live-text Trigger, Understand, Action, and Reward stages surround a responsive inline SVG with a sunrise icon. The pink pulse follows the entry line rightward and the loop clockwise, using the existing tapered pulse layers on a `5s` cycle. Only the final upward arrowhead is shown, in grey to match the route. This arrow and an accessible SVG description preserve direction without animation; reduced motion hides the pulse, and visibility handling pauses it offscreen or in hidden tabs.
- Engagement-stage descriptions and bullets use compact `14px` text with `1.5` line height on desktop and mobile; stage headings retain their existing size.

### Proactive home card preview
- The announcement date below "Why Microsoft can win" has a `48px` top gap, a 200% increase from the standard `16px` list-to-paragraph spacing.
- The final recording retains its `2184:1554` content ratio with equal `96px` page-background (`#141413`) gutters above and below it, keeping native playback controls clear of the phone screen.
- Host the final recording as `proactive-home-final.mov` on the existing `slides-v1` GitHub release; the ignored local video folder is not deployed to Pages.
- The IA SVG uses an alpha-aware `drop-shadow(0 16px 20px rgba(0, 0, 0, 0.4))` to lift the phone silhouettes, matching the opening phone's soft elevation without adding a rectangular frame.
- The information architecture figure uses a corrected vector SVG based on Figma frame `155:46422`. Preserve its native dimensions (`1137 × 1057`), outlined text/icons, dark phone headers, and menu surface. CSS `backdrop-filter` inside exported `foreignObject` layers does not work reliably in an image; the asset instead blurs references to preceding vector layers using native SVG filters. Filtered glass blending belongs on the outer group, and additive filter effects use standard arithmetic `feComposite` rather than CSS-only blend modes.
- The opening carousel is repeated after the home-card detailing image, before "Action cards", with the same cards, synchronized supporting summaries, and motion. Both instances use a shared renderer with unique accessibility IDs and independent visibility handling. Keep them outside `.blog-content` so prose styles do not alter the card typography or spacing.
- The "Home cards" L3 uses the content font (`Noto Serif`, `18px`, weight `400`) in white, retaining its semantic `h4` heading.
- All three motion studies use the same supplied phone screenshot as their base, preserving the exact status bar, header, composer, navigation icons, and colours. A phone-coloured live overlay covers the original greeting and ZQ pills, replacing them with a greeting and animated blank cards.
- The swipe study uses Tinder-like left/right exits: cards rotate around a low pivot, remain opaque until near the screen edge, then clear the viewport at `175%` of card width and `26deg` of rotation while the next card settles forward. Each dismissed card resets smaller and fully concealed beneath the new front card, then slides and grows into the rear stack position without fading or popping into view.
- The swipe stage allows overflow so tilted cards and their shadows retain their rounded edges; clipping is applied only at the phone's live-content boundary to protect the screenshot header and footer.
- In the third motion study, card width is `57.6cqw` (10% narrower than the original `64cqw`), centered with a `21.2%` left inset. Travel spacing is `63cqw`, bringing neighboring cards closer; height and timing stay unchanged.
- The motion exploration section shows three dark phone studies with empty cards: a vertical carousel, a swiping three-card stack, and the opening carousel. Vertical and opening carousel studies share the `2.6s` cadence and `0.85s` glide; the opening carousel reuses `proactive-card-loop` directly. Vertical cards move upward, with smaller, dimmer neighbors above and below and a soft vertical edge mask. The swipe study cycles three cards over `9s`. Three columns stack into centered phones at `≤600px`. Live content scales with container units; screenshot chrome is decorative with no misleading interactive controls. All three play continuously while visible, including on hover or focus; offscreen/hidden-tab handling and reduced-motion static states are shared with the other previews.
- Project `id=7` opens with six task cards adapted from `Prototype-explore/App/Tabs/Today/TodayView.swift`, before the opening story.
- Card copy, source-mark combinations, 2.6-second cadence, 0.85-second glide, 0.86 side scale, 0.5 side opacity, and 3/5-degree side tilts follow that prototype. A full loop lasts 15.6 seconds.
- The preview uses system sans-serif typography, `#262625` card surfaces, soft shadows, and a horizontal mask fading both edges into the page background.
- A centred, two-line task summary beneath the cards follows the focused card, using the prototype's headline and detail copy without a heading icon. Summaries fade out for 140ms and in for 200ms around each focus change, sharing the cards' loop phase and pause state.
- `images/cowork-regular.svg` is reused from the prototype's existing Cowork asset; the other decorative source marks are inline outline SVGs.
- The preview has no visible playback control. Animation pauses offscreen and in hidden tabs.
- Reduced motion replaces the loop with a static, responsive grid of all six cards, each with its own task summary. Cards reference their descriptions for assistive technology without live announcements.

### Modal
- Background: `#1a1a18`, border `1px solid #2a2a28`, border-radius `18px`
- Width: `min(420px, calc(100vw - 48px))`
- Input focus border: `#f1629c`; error border: `#e05050`

---

## Responsive Breakpoints

| Breakpoint | Intent |
|------------|--------|
| `≤900px` | Tablet — reduce card height, tighten type |
| `≤600px` | Mobile — compact layout, smaller type |
| `≤380px` | Small phone — minimum sizes |

---

## Conventions

- First letter of meta dates capitalised via `::first-letter { text-transform: uppercase; }`
- Blog listing descriptions clamped to 2 lines via `-webkit-line-clamp: 2`
- Card hover reveals description + tags via `translateY` on `.card-panel`
- All transitions: `0.2s` for colour; `0.4s cubic-bezier` for panel slide
- Password-protected projects use a modal overlay before navigating
