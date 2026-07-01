# Page Topology — soundcore Liberty 5 Pro Series

**URL:** https://www.soundcore.com/liberty-5-pro-series  
**Page Height:** 23,644px  
**Viewport:** 1440px desktop

## Layout Architecture
- **Scroll container:** `<body>` — standard block scroll
- **Z-index layers:** Global nav (z-50) → Product sub-nav (z-40, sticky) → Page content
- **No smooth scroll library detected** (standard browser scroll)

## Section Map (top to bottom)

| # | Name | Doc Y | Height approx | Interaction |
|---|------|--------|---------------|-------------|
| 1 | GlobalNav | 0 | 126px | Click (dropdowns) |
| 2 | ProductSubNav | 126px | 46px | Click (anchor links), **sticky** |
| 3 | Hero | 172px | ~800px | Static (video background) |
| 4 | AwardsStrip | ~970px | ~120px | Static (logo row) |
| 5 | TrialOffer | ~1090px | ~700px | Static |
| 6 | OfferCards | ~1750px | ~200px | Static (3-col grid) |
| 7 | PowerGrid | ~1950px | ~700px | Static (2x2 + center chip) |
| 8 | GuinnessRecord | ~2650px | ~800px | Static |
| 9 | ProductExplorer | ~3200px | ~800px | Click (color swatches) |
| 10 | ANKERThusHero | ~4000px | ~700px | Video bg, "Watch Video" CTA |
| 11 | ArchitectureTriple | ~4700px | ~600px | Static (3-col icons) |
| 12 | SpeakFreely | ~5200px | ~1100px | Scroll-driven (video reveals) |
| 13 | WhisperClearCalls | ~6300px | ~500px | Static heading |
| 14 | NoisyPlaces | ~6800px | ~1100px | Click (before/after) |
| 15 | QuietPlaces | ~7900px | ~1100px | Click (carousel/before-after) |
| 16 | AudioComparison | ~8700px | ~1000px | Click (toggle audio) |
| 17 | AbsoluteClarityChip | ~9200px | ~1200px | Static (cutaway image) |
| 18 | BeyondSilence | ~10000px | ~700px | Video bg |
| 19 | InstantPureSilence | ~10500px | ~1000px | Static |
| 20 | FadeTheNoise | ~11500px | ~800px | Interactive (ANC slider) |
| 21 | SignatureSound | ~12000px | ~900px | Video/animation bg |
| 22 | EQPersonalization | ~12600px | ~800px | Interactive (EQ visual) |
| 23 | EnhanceAudio | ~13000px | ~1100px | Static |
| 24 | VoiceControl | ~13500px | ~1000px | Static, split layout |
| 25 | NoWakeWords | ~14200px | ~700px | Static |
| 26 | SpeakAndItsDone | ~14700px | ~1300px | Click (command tabs) |
| 27 | TouchControl | ~15500px | ~1000px | Static (case display) |
| 28 | ElegantControl | ~16500px | ~1000px | Static |
| 29 | AIMeetingMemory | ~17500px | ~1000px | Static |
| 30 | NeverMissDetail | ~18000px | ~700px | Static |
| 31 | DataPrivacy | ~18500px | ~800px | Static |
| 32 | MoreFeatures | ~19200px | ~800px | Scroll carousel |
| 33 | ColorOptions | ~20000px | ~1000px | Click (color swatches) |
| 34 | FinalCTA | ~20800px | ~600px | Static, "Get Yours Now" |
| 35 | Footnotes | ~21400px | ~400px | Static |
| 36 | Footer | ~21800px | ~1800px | Click |

## Key Sticky Elements
- **ProductSubNav** — sticks to top after scrolling past GlobalNav (top: 0, z-index: 40)
  - bg: `#1e2024`, height: 46px, white text
  - Active tab indicator: `2px solid #17bbef` bottom border
  - Tabs: "Overview" | "ANKER Thus™" | "Specs" + "Shop Now" button

## Color Zones
- **Sections 1–34:** Black backgrounds (`#000`, `#080a0f`)
- **Footer:** Black (`#000`) with white text

## Notes
- The page has 9 `<video>` elements, most auto-playing and looping
- Section backgrounds are a mix of pure black, dark gradients, and full-bleed images/videos
- "Your Signature Sound" section has a large close-up earbud photo with typography overlaid
