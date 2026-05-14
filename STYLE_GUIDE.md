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
