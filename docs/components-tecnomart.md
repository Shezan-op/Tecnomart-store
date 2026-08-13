# Tecnomart Components — Engineering Documentation

> **Purpose of this document:** Complete technical reference for all four interactive HTML components. Written to a standard where another engineer or AI can rebuild any component accurately without ever opening the source files.

---

## Table of Contents

1. [Product Showcase — Display + Keyboard (the-final-component)](#1-product-showcase--display--keyboard)
2. [Minimal Display Component](#2-minimal-display-component)
3. [Static Mechanical Keyboard](#3-static-mechanical-keyboard)
4. [Mobile Mockup — 3D Phone](#4-mobile-mockup--3d-phone)

---

---

# 1. Product Showcase — Display + Keyboard

## Component Name
`Product Showcase` — the full scroll-driven product story scene combining a 3D laptop display, an animated cable, an accessories text overlay, and a powered-on mechanical keyboard.

## Purpose
This component is the centerpiece of the page. It tells one continuous story through scroll-driven animation: a closed laptop appears, the user scrolls to open it, the viewport pans down to reveal a mechanical keyboard below, a cable draws itself from the laptop USB port to the keyboard, and the keyboard powers on with theme-cycling RGB. Individual keys are clickable and redirect to product pages.

---

## Overall Architecture

The component uses a single master pin architecture. There is one tall `div` (`#master-pin-wrapper`) that GSAP pins to the viewport for 4000px of virtual scroll distance. Inside lives a 250vh rigid scene (`#productShowcase`) that GSAP translates upward by `150vh` during the pinned phase. This translation reveals the keyboard section (which sits at `top: 150vh` in the rigid scene) as if it were scrolling into view, while the display section (at `top: 0`) pans out of frame.

The cable is a static SVG already in the DOM. It is never dynamically generated. The animation is purely a CSS `clip-path: inset()` mask that GSAP drives via `onUpdate`, revealing the cable from top to bottom as scroll progress increases.

```
Window (the browser viewport)
└── #particles (fixed background, z-index: -1)
└── #master-pin-wrapper (GSAP pins this for 4000px)
    └── .product-showcase (250vh tall, translates -150vh during scroll)
        ├── .display-section (absolute, top: 0, height: 100vh)
        │   └── .device#displayUnit (3D CSS transform object)
        │       ├── .base-top (keyboard deck surface)
        │       │   ├── .keyboard-well (decorative laptop keys, JS-generated)
        │       │   ├── .trackpad
        │       │   └── .display-connector (USB port visual anchor)
        │       ├── .base-edge (front lip of laptop)
        │       │   └── .thumb-groove
        │       └── .lid#displayPanel (the screen lid, rotates on scroll)
        │           ├── .lid-back (silver exterior)
        │           ├── .lid-edge#lidEdge (front lip of lid, fades out)
        │           └── .lid-screen (contains the glass and screen content)
        │               └── .screen-glass
        │                   └── .screen-content#screenContent
        ├── .cable-layer#cableLayer (absolute, CSS-positioned, z-index: 10)
        │   └── svg.cable-svg (clip-path animated by GSAP)
        │       ├── path.cable-outline (blue glow layer, renders behind)
        │       └── path.cable-core#hardwareCable (solid black/white core)
        ├── .accessories-text#accessoriesText (absolute, top: 100vh, fades in)
        │   ├── h2.accessories-heading
        │   └── p
        └── .keyboard-section#keyboardSection (absolute, top: 150vh, height: 100vh)
            └── .keyboard-wrap#keyboardContainer (theme classes applied here)
                └── .case
                    ├── .usb-port (visual cable target, top-center of case)
                    ├── .indicator-led
                    └── .plate#plate (JS-generated keys go here)
                        └── .blockers-layer (precision gaps above keys)
```

---

## Folder Structure

```
the-final-component/
├── display-keyboard.html   (Main entry point)
├── style.css               (All CSS: tokens, 3D device, cable, keyboard)
└── script.js               (All JS: particles, keyboard build, GSAP timeline)
```

No images. No external assets beyond CDN libraries.

---

## Required Libraries

| Library | Version | URL | Purpose |
|---|---|---|---|
| GSAP | 3.12.2 | cdnjs.cloudflare.com | Master scroll timeline |
| ScrollTrigger | 3.12.2 | cdnjs.cloudflare.com | Pin + scrub behavior |
| Lenis | 1.0.39 | unpkg.com/@studio-freight/lenis | Smooth momentum scrolling |
| Inter (Google Fonts) | any | fonts.googleapis.com | Typography |

**Critical loading order:** GSAP core, then ScrollTrigger, then Lenis, then script.js. All four must load before the script runs. Place them at the bottom of `<body>`, just before `</body>`.

---

## Required CSS — Key Rules and Tokens

### CSS Custom Properties

```css
:root {
  --device-width:  min(72vw, 1100px);
  --device-depth:  min(46vw, 700px);
  --panel-thickness: 8px;
  --lid-thickness:   5px;
  --corner-radius:  22px;
  --screen-radius:  16px;
  --bezel-width:    10px;
  --perspective:  2500px;
  --u: min(5.5vw, 60px);          /* Keyboard unit — ALL key sizing derives from this */
  --keyboard-height: calc(6.25 * var(--u) + 32px);
  --bg: #18191B;
  --blue: #475BFF;
}
```

### Theme Variables (applied via class on `#keyboardContainer`)

Three states:
1. **Default (no class):** Dark/off. All key colors near-black, text nearly invisible.
2. `.theme-white`: Vintage cream. Case is `#E8E6E1`, alpha keys are `#DFDED9` / `#F0EFEA`.
3. `.theme-blue`: Charcoal blue. All text becomes `var(--blue)`, key shadow glows.

### The preserve-3d Class

```css
.preserve-3d { transform-style: preserve-3d; }
```

This is a standalone utility class. Every single element that participates in the 3D scene must have this class. If you forget it on one element, the entire 3D composition collapses into flat 2D for that subtree.

### Device Initial State

```css
.device {
  transform: translateZ(-400px) rotateX(90deg);
}
```

The laptop starts 400px deep into the scene and rotated 90 degrees on X — meaning it is flat on the table, pointing away from the camera. GSAP animates both values to bring it upright and forward.

### Lid Initial State

```css
.lid {
  transform: translateZ(var(--panel-thickness)) rotateX(0deg);
  transform-origin: top center;
}
```

`rotateX(0deg)` means the lid is closed flat against the base. `transform-origin: top center` is critical — this is the hinge point. Changing it breaks the opening animation entirely.

### Lid Screen Orientation

```css
.lid-screen {
  transform: translateZ(0px) rotateX(180deg);
}
```

The screen face is rotated 180 degrees so that when the lid opens (rotating positively on X), the screen faces outward toward the user. This is not intuitive but is required for the 3D trick to work.

### Cable Layer Positioning

```css
.cable-layer {
  position: absolute;
  top: calc(50vh + 0.25 * var(--device-depth));
  left: 50%;
  width: calc(var(--device-width) / 2 * 0.95 + 6px);
  height: calc(150vh - (var(--keyboard-height) / 2) - 0.25 * var(--device-depth));
  z-index: 10;
  pointer-events: none;
}
```

This positions the cable div so its top-left corner aligns with the display USB port in 3D projected space. The 0.95 factor compensates for perspective scale foreshortening at the port's Z-depth. The height spans exactly from the port to the top of the keyboard USB receptacle. Do not change these values without recalculating the 3D projection math.

### SVG Cable Animation Method

```css
.cable-svg {
  clip-path: inset(0 0 100% 0); /* hidden at start */
}
```

The `clip-path` starts with `100%` bottom inset (fully hidden). GSAP's `onUpdate` calculates a value from `100` down to `0` based on scroll progress, writing it as an inline style. This creates the "cable drawing itself" effect from top to bottom.

Why clip-path instead of stroke-dasharray: `stroke-dasharray` breaks when combined with `vector-effect: non-scaling-stroke`. Browsers evaluate the dash pattern in raw screen pixels rather than SVG coordinate space, producing incorrect results. `clip-path` is immune to this bug.

```css
.cable-outline {
  stroke: #4d7cff;
  stroke-width: 8;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  fill: none;
  opacity: 1;
  filter: drop-shadow(0 0 6px rgba(77, 124, 255, 0.8));
}
.cable-core {
  stroke: #111;
  stroke-width: 4;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  fill: none;
  opacity: 1;
}
```

Both paths share the same `d` attribute (same curve). The outline renders beneath the core. The core stroke color changes via `gsap.to('.cable-core', { stroke: '...' })` when the keyboard theme changes.

### Keyboard Section Placement

```css
.keyboard-section {
  position: absolute;
  top: 150vh;
}
```

This is why the product-showcase must be exactly `height: 250vh`. The keyboard sits at 150vh. The showcase pans by exactly 150vh during scroll. These numbers are coupled — change one, change both.

---

## Required JavaScript — Full Logic Breakdown

### 1. Lenis Initialization

```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0, 0);
```

Lenis replaces native scroll events with a smoothed RAF loop. `ScrollTrigger.update` is called on every Lenis tick so that GSAP scrub values stay in sync with the smoothed scroll position. `lagSmoothing(0, 0)` prevents GSAP from skipping frames during slow periods.

### 2. Particle System

An IIFE creates 50 `div.dot` elements with random sizes (2-6px), positions, and animation delays. They float upward indefinitely via a CSS `@keyframes float` animation. The container is `position: fixed; z-index: -1` so it stays behind everything.

### 3. Laptop Keyboard Well (Decorative)

Another IIFE creates 70 small `.laptop-key` divs inside `#laptopKeyboardWell`. These are purely decorative — they represent the keys visible on the laptop base deck. They are not interactive. Keys at index 57 get `.spacebar`, keys at indices `[13, 27, 40, 54, 68]` get `.mod`.

### 4. Mechanical Keyboard Build

The `layout` array defines every key on the 75% mechanical keyboard. Each object has:
- `t`: type — `'alpha'`, `'mod'`, `'acc'`, or `'knob'`
- `x`, `y`: position in `--u` units from the plate's top-left
- `w`, `h`: size in `--u` units
- `l`: array of legend objects `{ text, pos }` — pos is one of `tl`, `tr`, `bl`, `ml`, `c`
- `route`, `brand`: optional — if present, the key becomes a navigable product link

Key positions use CSS `calc(x * var(--u))` so the entire keyboard scales uniformly with a single CSS variable change.

The knob is a special case — it renders as a `div.knob-body` with a conic-gradient, no keycap/legend structure.

### 5. GSAP Timeline — Scroll Budget

```
Progress 0%   - 20%: Display opens
Progress 20%  - 30%: Hold (nothing moves)
Progress 30%  - 80%: Pan showcase UP by 150vh
Progress 35%  - 45%: Accessories text fades in
Progress 45%  - 80%: Cable draws (via onUpdate)
Progress 80%  - 100%: Keyboard powered on, themes cycle
```

The ScrollTrigger configuration:

```javascript
scrollTrigger: {
  trigger: '#master-pin-wrapper',
  start: 'top top',
  end: '+=4000',
  scrub: 1.2,
  pin: true,
  anticipatePin: 1,
}
```

GSAP timeline tweens in order:

| Duration | Position | What |
|---|---|---|
| 0.05 | 0 | displayUnit z to 0 |
| 0.15 | 0.05 | displayPanel rotateX to 110 (opens lid) |
| 0.15 | 0.05 | displayUnit yPercent to 40 (pan device down to center) |
| 0.05 | 0.05 | lidEdge opacity to 0 (hide front lip at angle) |
| 0.1 | after | Hold (empty tween) |
| 0.5 | 0.3 | productShowcase y to -150vh (pan scene up) |
| 0.1 | 0.35 | accessoriesText opacity 0 to 1, y 50 to 0 |
| 0.2 | end | Hold |

The onUpdate cable logic:

```javascript
onUpdate: (self) => {
  let progress = 0;
  if (self.progress > 0.45 && self.progress <= 0.8) {
    progress = (self.progress - 0.45) / 0.35;
  } else if (self.progress > 0.8) {
    progress = 1;
  }
  const clipPercent = 100 * (1 - progress);
  document.querySelector('.cable-svg').style.clipPath = `inset(0 0 ${clipPercent.toFixed(2)}% 0)`;
  
  if (self.progress >= 0.8 && !isPoweredOn) powerOn();
  if (self.progress < 0.8 && isPoweredOn) powerOff();
}
```

### 6. Power On / Power Off

`powerOn()` does five things:
1. Adds `theme-white` to `#keyboardContainer`
2. Animates `.cable-core` stroke to `#e2e0d8` (warm white, matches keyboard theme)
3. Starts a `setInterval` every 10,000ms that alternates between `theme-white` and `theme-blue`
4. On each interval tick, also updates `.cable-core` stroke color (black for blue theme, cream for white theme)
5. After 1200ms delay, adds `keyboard-interactive` class and attaches click handlers

`powerOff()` does three things:
1. Clears the interval
2. Removes all theme classes and `keyboard-interactive`
3. Animates `.cable-core` stroke back to `#111`

### 7. Key Click Handlers

Applied only to keys with `data-route` attribute. On click: physical press animation (`translateY(2px)`) for 150ms, then after 180ms, `window.location.href = route`.

---

## External Dependencies

- **GSAP + ScrollTrigger (CDN):** Required. Cannot be substituted without rewriting the entire animation layer.
- **Lenis (CDN):** Required for smooth scrolling. ScrollTrigger built-in smoothScroll is not a drop-in replacement.
- **Google Fonts (Inter):** Optional aesthetic dependency. Falls back to system `-apple-system` stack.

---

## Internal Dependencies

- `style.css` must load before `display-keyboard.html` renders. Missing CSS causes the 3D scene to collapse.
- `script.js` must load after the HTML body is fully rendered (bottom of body). All DOM queries run synchronously on load.
- The `#plate` element must exist before `buildMechKeyboard()` runs.
- `#laptopKeyboardWell` must exist before `buildLaptopKeys()` runs.

---

## Important Implementation Notes

1. The `250vh` height is sacred. `product-showcase` must be exactly `height: 250vh`. If you change it, update `keyboard-section top` and `y: '-150vh'` in the GSAP tween proportionally.

2. The `4000px` end value controls pacing. Larger values give users more scroll travel per animation step. Smaller values feel rushed. Adjust this number only and do not touch the timeline duration values.

3. `scrub: 1.2` means there is a 1.2-second lag between where the user scroll position is and where the animation catches up. This makes the animation feel weighty and physical. Setting it to `true` makes it feel cheap.

4. `anticipatePin: 1` must stay. Without it, the page jumps when the pin activates because GSAP needs to compensate for pin spacer height.

5. CSS `vector-effect: non-scaling-stroke` must pair with `fill: none`. If `fill` is not explicitly `none`, the SVG browser default fills the path with solid black, creating a large opaque blob.

6. The cable SVG `preserveAspectRatio="none"` is intentional. The SVG stretches to fill its container div. Combined with `vector-effect: non-scaling-stroke`, the curve shape stretches but the line thickness remains constant.

7. GSAP animates SVG stroke color via `gsap.to('.cable-core', { stroke: '#...' })`. This works because GSAP reads and writes SVG presentation attributes directly. CSS `color` property has no effect on SVG stroke.

8. Lenis and ScrollTrigger must be synchronized. The `lenis.on('scroll', ScrollTrigger.update)` line is what keeps them in sync. Without it, the GSAP animations lag behind the Lenis smooth scroll position.

---

## Common Mistakes

| Mistake | Symptom | Fix |
|---|---|---|
| Missing `fill: none` on SVG paths | Massive black blob renders | Add `fill: none` to both `.cable-outline` and `.cable-core` |
| Forgetting `preserve-3d` on a parent | 3D scene collapses to flat | Add `.preserve-3d` class to every element in the 3D subtree |
| Loading `script.js` in `<head>` | `getElementById` returns null | Move script to bottom of `<body>` |
| Wrong `transform-origin` on `.lid` | Lid rotates from wrong point | Keep `transform-origin: top center` on `.lid` |
| Using `stroke-dasharray` with `non-scaling-stroke` | Cable appears as disconnected dashes | Use `clip-path` animation instead |
| Forgetting `lenis.on('scroll', ScrollTrigger.update)` | Animations skip or jump | Add the event binding right after Lenis init |
| Changing `.product-showcase` height without updating GSAP | Keyboard section not fully revealed | Keep `height: 250vh`, `top: 150vh`, and `y: '-150vh'` in sync |

---

## Things That Must Never Be Changed

- `transform-origin: top center` on `.lid`
- `transform: translateZ(-400px) rotateX(90deg)` as the device initial state
- `height: 250vh` on `.product-showcase`
- `top: 150vh` on `.keyboard-section`
- `y: '-150vh'` in the GSAP showcase pan tween
- `fill: none` on both cable SVG paths
- `vector-effect: non-scaling-stroke` on both cable SVG paths
- `preserveAspectRatio="none"` on the cable SVG element
- `clip-path: inset(0 0 100% 0)` as the cable SVG initial CSS state

---

## Animation Sequence (Detailed)

```
User lands on page
  Device: translateZ(-400px) rotateX(90deg) — flat on table, deep in z-space
  Cable SVG: clip-path inset 100% — fully hidden
  Accessories text: opacity 0

User scrolls (0-800px of 4000px virtual):
  Device rises: z 0, rotateX 90 to 0 degrees (coming upright)
  yPercent: 0 to 40 (device moves down to visually center on screen)
  Lid opens: rotateX 0 to 110 degrees (screen faces user)
  Lid edge fades: opacity 1 to 0 (prevent CSS corner artifacts)

User scrolls (800-1200px): Hold — nothing moves

User scrolls (1200-3200px):
  Showcase pans: y 0 to -150vh (keyboard comes into view)
  At 1400px: Accessories text fades in (opacity 0 to 1, y 50 to 0)
  At 1800px (45%): Cable begins drawing (clip-path 100% decreasing)
  Cable draws downward continuously...

User scrolls (3200-4000px):
  Cable fully drawn (clip-path reaches 0% — fully visible)
  Keyboard powers on (powerOn() called)
  Cable core stroke: #111 to #e2e0d8 (warm white, 0.5s transition)
  Keyboard theme: dark to theme-white

After 10 seconds of keyboard being powered on:
  Theme: theme-white to theme-blue
  Cable core: #e2e0d8 to #111
  After 10 more seconds: cycles back
```

---

## Scroll Behavior

- GSAP pins `#master-pin-wrapper` at `start: 'top top'`
- The pin creates a spacer element (injected by GSAP) that holds the page height while the pinned element stays fixed
- Total virtual scroll: 4000px after pin starts
- After 4000px, pin releases and the page scrolls normally past the component
- Lenis applies exponential easing to scroll momentum before it reaches ScrollTrigger

---

## Responsive Considerations

| Breakpoint | `--u` | `--device-width` | `--perspective` |
|---|---|---|---|
| Default (>1024px) | `min(5.5vw, 60px)` | `min(72vw, 1100px)` | `2500px` |
| 1024px and below | `min(5vw, 36px)` | `min(85vw, 800px)` | `2000px` |
| 768px and below | `min(6vw, 24px)` | `min(92vw, 460px)` | `1500px` |

The keyboard and all measurements scale automatically because everything derives from `--u` and `--device-width`.

---

## Performance Considerations

- `will-change: transform` on `.device` and `.product-showcase` promotes them to GPU compositing layers
- Particles use CSS animations (GPU) rather than JS
- `scrub` instead of regular GSAP tweens avoids JS computation per frame
- `gsap.ticker.lagSmoothing(0, 0)` disables GSAP frame-skipping, ensuring animations always sync with actual position
- All DOM manipulation (key building, particle building) happens synchronously before any scroll event fires

---

## Required DOM Hierarchy

```html
<body>
  <div id="particles"></div>
  <div id="master-pin-wrapper">
    <div class="product-showcase" id="productShowcase">
      <div class="display-section" id="displaySection">
        <div class="device preserve-3d" id="displayUnit">
          <div class="base-top preserve-3d">
            <div class="keyboard-well" id="laptopKeyboardWell"></div>
            <div class="trackpad"></div>
            <div class="display-connector" id="displayConnector"></div>
          </div>
          <div class="base-edge preserve-3d">
            <div class="thumb-groove"></div>
          </div>
          <div class="lid preserve-3d" id="displayPanel">
            <div class="lid-back preserve-3d"></div>
            <div class="lid-edge preserve-3d" id="lidEdge"></div>
            <div class="lid-screen preserve-3d">
              <div class="screen-glass">
                <div class="screen-content" id="screenContent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cable-layer" id="cableLayer">
        <svg class="cable-svg" viewBox="0 0 100 100"
             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path class="cable-outline"
                d="M 100,0 C 140,0 140,50 100,50 C 60,50 60,100 0,100"/>
          <path class="cable-core" id="hardwareCable"
                d="M 100,0 C 140,0 140,50 100,50 C 60,50 60,100 0,100"/>
        </svg>
      </div>
      <div class="accessories-text" id="accessoriesText">
        <h2 class="accessories-heading">Accessories</h2>
        <p>Get the best and finest tech accessories at an affordable price.</p>
      </div>
      <div class="keyboard-section" id="keyboardSection">
        <div class="keyboard-wrap" id="keyboardContainer">
          <div class="case">
            <div class="usb-port" id="keyboardConnector"></div>
            <div class="indicator-led"></div>
            <div class="plate" id="plate">
              <div class="blockers-layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="gsap.min.js"></script>
  <script src="ScrollTrigger.min.js"></script>
  <script src="lenis.min.js"></script>
  <script src="script.js"></script>
</body>
```

---

## Ready-to-Copy Engineering Prompt

```
Build a scroll-driven product showcase component in vanilla HTML, CSS, and JavaScript.
The component must render a 3D laptop display that opens on scroll, then pan the viewport
down to reveal a powered-on mechanical keyboard, connected by an animated cable.

## Stack
- HTML5 (no framework)
- Vanilla CSS (no Tailwind, no preprocessors)
- Vanilla JavaScript
- GSAP 3.12.2 with ScrollTrigger plugin (CDN)
- Lenis 1.0.39 smooth scroll (CDN, @studio-freight/lenis)
- Inter font from Google Fonts

## Architecture

### Master Pin System
Create one wrapper div with id="master-pin-wrapper". Inside it, one child div
with class="product-showcase" id="productShowcase" that is exactly height: 250vh
and position: relative. GSAP will pin the wrapper for 4000px of virtual scroll and
translate the showcase by -150vh during the scroll.

### Rigid Scene Layout (all positions inside .product-showcase)
- Display section: position absolute, top 0, height 100vh, width 100%
- Cable layer: position absolute (CSS-calculated position, see cable section)
- Accessories text: position absolute, top 100vh, height 50vh, opacity 0 initially
- Keyboard section: position absolute, top 150vh, height 100vh, width 100%

## 3D Laptop Display

Use CSS 3D transforms with transform-style: preserve-3d.
Create a utility class .preserve-3d { transform-style: preserve-3d; } and apply it
to every element that participates in the 3D scene.

### CSS Variables
:root {
  --device-width:  min(72vw, 1100px);
  --device-depth:  min(46vw, 700px);
  --panel-thickness: 8px;
  --lid-thickness:   5px;
  --corner-radius:  22px;
  --screen-radius:  16px;
  --bezel-width:    10px;
  --perspective:  2500px;
  --u: min(5.5vw, 60px);
  --keyboard-height: calc(6.25 * var(--u) + 32px);
}

### Device (.device)
Initial transform: translateZ(-400px) rotateX(90deg)
Set perspective on .display-section: perspective: var(--perspective); perspective-origin: 50% 50%;

### Base Top (.base-top)
Silver gradient background. transform: translateZ(var(--panel-thickness)).
Contains keyboard-well, trackpad, and display-connector.

### Base Edge (.base-edge)
transform-origin: bottom center;
transform: rotateX(-90deg) translateY(var(--panel-thickness));

### Lid (.lid)
transform-origin: top center  (THIS IS THE HINGE — DO NOT CHANGE)
Initial: transform: translateZ(var(--panel-thickness)) rotateX(0deg)
GSAP opens it to: rotateX(110deg)

### Lid Screen
.lid-screen: transform: translateZ(0px) rotateX(180deg)
(180 degree rotation makes the screen face outward once the lid opens)

## Cable System

### HTML
Two SVG paths inside .cable-svg with identical d attributes:
1. class="cable-outline" (blue glow border, renders first)
2. class="cable-core" id="hardwareCable" (solid core, renders on top)

SVG path:
d="M 100,0 C 140,0 140,50 100,50 C 60,50 60,100 0,100"

### Critical CSS for paths
- fill: none (REQUIRED on both paths — without it, browser fills the entire enclosed area solid black)
- vector-effect: non-scaling-stroke (REQUIRED — keeps stroke-width constant regardless of SVG scaling)
- clip-path: inset(0 0 100% 0) on .cable-svg (hides it initially)

### Cable Layer CSS
.cable-layer {
  position: absolute;
  top: calc(50vh + 0.25 * var(--device-depth));
  left: 50%;
  width: calc(var(--device-width) / 2 * 0.95 + 6px);
  height: calc(150vh - (var(--keyboard-height) / 2) - 0.25 * var(--device-depth));
  z-index: 10;
  pointer-events: none;
}

### Cable Animation (in GSAP onUpdate, between progress 0.45 and 0.8)
progress = (self.progress - 0.45) / 0.35
clipPercent = 100 * (1 - progress)
document.querySelector('.cable-svg').style.clipPath = inset(0 0 ${clipPercent}% 0)

## Mechanical Keyboard

### Unit System
--u: min(5.5vw, 60px)
Plate: width calc(16.5 * var(--u)), height calc(6.25 * var(--u))

### Key HTML Structure
<div class="key alpha" style="left: calc(X*var(--u)); top: calc(Y*var(--u)); ...">
  <div class="keycap">
    <div class="keycap-top">
      <span class="legend legend-tl">A</span>
    </div>
  </div>
</div>

### Theme System (class on .keyboard-wrap)
.theme-white: cream case, blue-tinted mods, navy accents, green LED
.theme-blue: dark case, blue-glowing text, blue LED

## GSAP Timeline

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#master-pin-wrapper',
    start: 'top top',
    end: '+=4000',
    scrub: 1.2,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => { /* cable reveal + powerOn/powerOff logic */ }
  }
});

tl.to('#displayUnit', { z: 0, ease: 'power1.inOut', duration: 0.05 });
tl.to('#displayPanel', { rotateX: 110, ease: 'power2.inOut', duration: 0.15 }, 0.05);
tl.to('#displayUnit', { yPercent: 40, ease: 'power2.inOut', duration: 0.15 }, 0.05);
tl.to('#lidEdge', { opacity: 0, duration: 0.05 }, 0.05);
tl.to({}, { duration: 0.1 });
tl.to('#productShowcase', { y: '-150vh', ease: 'power2.inOut', duration: 0.5 }, 0.3);
tl.fromTo('#accessoriesText', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.35);
tl.to({}, { duration: 0.2 });

## Lenis Integration
const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10*t)) });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0, 0);

## Power On
1. Add theme-white to keyboardContainer
2. gsap.to('.cable-core', { stroke: '#e2e0d8', duration: 0.5 })
3. setInterval 10000ms: toggle theme-white / theme-blue, update cable core stroke
4. After 1200ms: add keyboard-interactive, attach click handlers on [data-route] keys

## Script Loading Order (bottom of body)
<script src="gsap.min.js"></script>
<script src="ScrollTrigger.min.js"></script>
<script src="lenis.min.js"></script>
<script src="script.js"></script>
```

---
---

# 2. Minimal Display Component

## Component Name
`Premium Display Reveal` — a standalone, self-contained 3D laptop opening animation.

## Purpose
This is the reference implementation for the CSS 3D laptop display. It works independently as a single HTML file with inline CSS and inline JavaScript. It is the source from which the display section of the Product Showcase was adapted. Use this when you need only the display opening animation without the keyboard, cable, or accessories systems.

---

## Overall Architecture

A `300vh` scroll container (`.reveal-section`) wraps a sticky `100vh` scene (`.scene`). As the user scrolls through the 300vh, the GSAP timeline animates the laptop from flat-on-table to fully open. The sticky position on `.scene` keeps the 3D object in the viewport for the entire scroll duration.

```
.reveal-section (height: 300vh, regular scroll flow)
└── .scene (sticky, top: 0, height: 100vh)
    └── .device#device (3D CSS object)
        ├── .base-top (keyboard deck)
        │   ├── .keyboard-well#keyboardWell (70 decorative keys, JS-generated)
        │   └── .trackpad
        ├── .base-edge (front lip)
        │   └── .thumb-groove
        └── .lid#lid (opens via GSAP)
            ├── .lid-back
            ├── .lid-edge#lidEdge
            └── .lid-screen
                └── .screen-glass
                    └── .screen-content#screenContent
```

---

## Folder Structure

Single self-contained file. No external CSS or JS files.

```
minimal-display.html   (all CSS inline in style, all JS inline in script)
```

---

## Required Libraries

| Library | Version | Purpose |
|---|---|---|
| GSAP | 3.12.2 | Timeline + ScrollTrigger |
| ScrollTrigger | 3.12.2 | Scrub scrolling |

No Lenis. No Google Fonts. No external CSS.

---

## Required CSS — Key Rules

### Scroll Container Strategy

```css
.reveal-section {
  height: 300vh;
  position: relative;
  width: 100%;
}
.scene {
  position: sticky;
  top: 0;
  height: 100vh;
  perspective: var(--perspective);
  perspective-origin: 50% 50%;
  overflow: hidden;
}
```

`position: sticky` is the core mechanism. The browser naturally keeps `.scene` glued to the top of the viewport until the scroll position passes the bottom of its parent (`.reveal-section`). No JavaScript needed for the pin.

### Device Initial State

```css
.device {
  transform: translateZ(-500px) rotateX(90deg);
}
```

Note: This is `-500px` depth (vs `-400px` in the Product Showcase). Slightly deeper perspective.

### Lid Transform (identical to Product Showcase)

```css
.lid {
  transform-origin: top center;
  transform: translateZ(var(--panel-thickness)) rotateX(0deg);
}
.lid-screen {
  transform: translateZ(0px) rotateX(180deg);
}
```

---

## Required JavaScript

### GSAP Timeline

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".reveal-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
  }
});

tl.addLabel("closed");
tl.to("#device", { z: 0, ease: "power1.inOut", duration: 1 });
tl.addLabel("approach");
tl.to({}, { duration: 0.3 });
tl.addLabel("hold");
tl.to("#lid", { rotateX: 110, ease: "power2.inOut", duration: 2 }, "open");
tl.to("#device", { yPercent: 45, ease: "power2.inOut", duration: 2 }, "open");
tl.to("#lidEdge", { opacity: 0, ease: "power2.in", duration: 1 }, "open");
tl.addLabel("open");
tl.to({}, { duration: 0.2 });
tl.addLabel("complete");
```

The GSAP labels are documentation-only — they do not affect timing. The `"open"` position string used as the third argument to `.to()` starts those three tweens simultaneously.

---

## Key Differences From the Product Showcase Display

| Property | Minimal Display | Product Showcase |
|---|---|---|
| Scroll mechanism | CSS position sticky | GSAP pin true |
| Scroll height | 300vh | 4000px virtual (pinned) |
| Scrub value | 1.5 | 1.2 |
| Device initial depth | translateZ(-500px) | translateZ(-400px) |
| yPercent on open | 45 | 40 |
| Has cable | No | Yes |
| Has keyboard | No | Yes |
| Has Lenis | No | Yes |
| Inline vs external | Fully inline | Separate css and js |

---

## Important Implementation Notes

1. `end: "bottom bottom"` means the animation completes when the bottom of `.reveal-section` reaches the bottom of the viewport. This maps the full 300vh to the full timeline duration.

2. The sticky scene approach is simpler than GSAP pin for single-component use. Use sticky when you want CSS to manage the pin and GSAP only handles animation values.

3. `scrub: 1.5` vs `1.2` in Product Showcase — slightly more lag, slightly more dramatic weight.

4. `lidEdge` must fade to opacity 0 before the lid reaches its maximum angle. At angles above ~90 degrees, the CSS `border-radius` on `.lid-edge` creates visible seam artifacts at the corners.

---

## Common Mistakes

| Mistake | Result |
|---|---|
| Setting `overflow: hidden` on `.device` | Clips the lid during opening |
| Not using `position: sticky` with parent 300vh height | No scroll-locked animation |
| Using `perspective` on `.device` instead of `.scene` | Scene looks flat |
| Setting `transform-origin: bottom center` on `.lid` | Lid rotates from bottom |

---

## Ready-to-Copy Engineering Prompt

```
Build a standalone 3D laptop display opening animation in a single HTML file
with all CSS and JS inline. No framework, no build step, no external files
except GSAP CDN.

## Libraries
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

## CSS Variables
:root {
  --device-width: min(72vw, 1100px);
  --device-depth: min(46vw, 700px);
  --panel-thickness: 8px;
  --lid-thickness: 5px;
  --corner-radius: 22px;
  --screen-radius: 16px;
  --bezel-width: 10px;
  --perspective: 2500px;
}

## Scroll Setup
.reveal-section: height 300vh, position relative
.scene: position sticky, top 0, height 100vh, perspective var(--perspective),
        perspective-origin 50% 50%, overflow hidden, display flex + center

## 3D Device
.preserve-3d { transform-style: preserve-3d; }
.device: width var(--device-width), height var(--device-depth),
         initial transform: translateZ(-500px) rotateX(90deg)

## Base Structure
.base-top: position absolute, inset 0,
  background linear-gradient(180deg, #8B9098 0%, #BFC3C9 18%, #D7DBE0 50%, #BFC3C9 100%),
  border-radius var(--corner-radius), transform translateZ(var(--panel-thickness))

.base-edge: position absolute, bottom 0, left 0, width 100%, height var(--panel-thickness),
  transform-origin bottom center,
  transform rotateX(-90deg) translateY(var(--panel-thickness))

## Lid Structure
.lid: position absolute, inset 0,
  transform-origin: top center  (THE HINGE — NEVER CHANGE)
  transform: translateZ(var(--panel-thickness)) rotateX(0deg)

.lid-back: transform translateZ(var(--lid-thickness))

.lid-screen: transform translateZ(0px) rotateX(180deg)

.screen-glass: position absolute, inset var(--bezel-width), background #050505,
  border-radius var(--screen-radius)

## GSAP Timeline
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: { trigger: ".reveal-section", start: "top top", end: "bottom bottom", scrub: 1.5 }
});
tl.to("#device", { z: 0, ease: "power1.inOut", duration: 1 });
tl.to({}, { duration: 0.3 });
tl.to("#lid", { rotateX: 110, ease: "power2.inOut", duration: 2 }, "open");
tl.to("#device", { yPercent: 45, ease: "power2.inOut", duration: 2 }, "open");
tl.to("#lidEdge", { opacity: 0, ease: "power2.in", duration: 1 }, "open");
tl.to({}, { duration: 0.2 });
```

---
---

# 3. Static Mechanical Keyboard

## Component Name
`Photorealistic 2D Mechanical Keyboard` — a purely visual, static, fully interactive mechanical keyboard component.

## Purpose
A standalone keyboard that renders as a photorealistic top-down 2D mechanical keyboard. It has no scroll animations. It auto-scales to the viewport. Keys have hover and press animations. This is the source that the keyboard section in the Product Showcase was derived from.

---

## Overall Architecture

A single `.scale-wrapper` div inside `<body>` wraps `.case > .plate`. The keyboard layout is injected entirely by JavaScript from a `layout` array.

```
.scale-wrapper (CSS transform scale, JS-calculated)
└── .case (the physical outer case)
    ├── .usb-port (visual connector at top)
    ├── .indicator-led (power LED dot)
    └── .plate#plate (the metal switch plate)
        ├── .blockers-layer (structural gap divs — fixed in HTML)
        │   ├── .blocker (x6 gap divs)
        │   └── .knob-fill (circular cutout)
        └── [JS-injected .key elements]
            └── .key.alpha / .key.mod / .key.acc / .key.knob
                └── .keycap
                    └── .keycap-top
                        └── .legend spans
```

---

## Folder Structure

Single self-contained file.

```
keyboard.html   (all CSS and JS inline)
```

---

## Required Libraries

- **Inter font** (Google Fonts) — for legend text rendering

No GSAP. No scroll library. Pure CSS and vanilla JS.

---

## CSS Architecture

### Unit System (Fixed Pixels)

```css
:root {
  --unit: 44px;
}
```

Unlike the Product Showcase which uses `min(5.5vw, 60px)`, this standalone keyboard uses a fixed 44px unit. Viewport scaling is handled by JavaScript applying `transform: scale()` to `.scale-wrapper`.

### Color System (Three Key Types)

```css
:root {
  --alpha-base: #DFDED9;  --alpha-top:  #F0EFEA;  --alpha-text: #1B202E;
  --mod-base:   #96A9B9;  --mod-top:    #AEC0CE;  --mod-text:   #1B202E;
  --acc-base:   #121621;  --acc-top:    #1B202E;  --acc-text:   #F0EFEA;
}
```

These represent the Vintage White colorway. No dark mode in the standalone version.

### Keycap Visual Depth — Three Layers

**Layer 1: .keycap** — the physical cap body
- border-radius: 6px
- box-shadow: top shine, bottom shadow, vertical lift shadow
- padding: 3px 6px 7px 6px (more bottom = visible keycap wall)

**Layer 2: .keycap-top** — the beveled top face
- border-radius: 4px
- background: var(--top-color) which is lighter than base
- box-shadow: inset highlights

**Layer 3: .legend spans** — text labels
- Absolutely positioned: tl (top-left, 13px), tr (top-right, 11px), bl (bottom-left, 11px), ml (center-left, 10px), c (center, 14px)

### Responsive Scaling (JavaScript-driven)

```javascript
function resize() {
  const scale = Math.min(window.innerWidth / 800, window.innerHeight / 400, 1.2);
  document.querySelector('.scale-wrapper').style.setProperty('--scale', scale);
}
window.addEventListener('resize', resize);
resize();
```

---

## Key Layout Data Structure

```javascript
{
  t: 'alpha' | 'mod' | 'acc' | 'knob',  // type to CSS class
  x: Number,     // Column position in units
  y: Number,     // Row position in units
  w: Number,     // Width in units
  h: Number,     // Height in units
  l: [{ text: 'A', pos: 'tl' | 'tr' | 'bl' | 'ml' | 'c' }]
}
```

Key positions use raw pixel math in this standalone version:
```javascript
key.style.left = `${k.x * U}px`;  // U = 44
key.style.top  = `${k.y * U}px`;
```

### Keyboard Layout Description (75% TKL Form Factor)

- Row 0 (y=0): Esc, gap, F1-F4, gap, F5-F8, gap, F9-F12, knob
- Row 1 (y=1.25): tilde, 1-0 symbols, -= , Backspace 2u, Delete
- Row 2 (y=2.25): Tab 1.5u, Q-P, brackets + pipe, PgUp
- Row 3 (y=3.25): Caps Lock 1.75u, A-L, quotes, Enter 2.25u, PgDn
- Row 4 (y=4.25): Shift 2.25u, Z-slash, Shift 1.75u, Up arrow, End
- Row 5 (y=5.25): Ctrl 1.25u, Win 1.25u, Alt 1.25u, Space 6.25u, Alt, Fn, Ctrl, Left, Down, Right

The y-gaps of 0.25u between rows represent the physical inter-row spacing of a real 75% layout.

### Blocker Divs (Critical for Layout Realism)

Six structural divs in `.blockers-layer`:
1. Horizontal gap below Fn row: separates F-row from number row
2. Indicator pill above Esc: contains inner `.pill-cutout`
3. Gap between F4 and F5
4. Gap between F8 and F9
5. Main-to-Nav separator: full height vertical stripe
6. Right edge gap: full height vertical stripe
7. Knob fill: circular cutout

These are physical case material fills, not decorative. Without them the keyboard reads as a flat uniform grid.

---

## Common Mistakes

| Mistake | Result |
|---|---|
| Using CSS variable for key positions without declaring it | Keys render at wrong coordinates |
| Omitting blocker layer divs | Keyboard looks like a flat grid |
| Setting cursor pointer on all keys | All keys appear clickable |
| Forgetting `position: relative` on `.plate` | Absolutely-positioned keys render wrong |
| Not calling `resize()` on load | Keyboard at wrong scale until window resize |

---

## Ready-to-Copy Engineering Prompt

```
Build a photorealistic standalone mechanical keyboard component in a single HTML file.
No GSAP, no scroll, no framework. Pure CSS and vanilla JS.

## Font
Inter 600, 700 from Google Fonts.

## CSS Variables
:root {
  --unit: 44px;
  --alpha-base: #DFDED9; --alpha-top: #F0EFEA; --alpha-text: #1B202E;
  --mod-base:   #96A9B9; --mod-top:   #AEC0CE; --mod-text:   #1B202E;
  --acc-base:   #121621; --acc-top:   #1B202E; --acc-text:   #F0EFEA;
}

## HTML Structure
<div class="scale-wrapper">
  <div class="case">
    <div class="usb-port"></div>
    <div class="indicator-led"></div>
    <div class="plate" id="plate">
      <div class="blockers-layer">
        <!-- 6 blocker divs + knob-fill exactly as described in blocker section -->
      </div>
    </div>
  </div>
</div>

## Key CSS
.key: position absolute, padding 2px, z-index 2
.keycap: background var(--base-color), padding 3px 6px 7px, box-shadow top shine + bottom shadow + lift
.keycap-top: background var(--top-color), position relative, overflow hidden
.legend: position absolute, color var(--text-color), font-weight 700
.keycap:active: translateY(2px)

## JavaScript
const U = 44;
layout.forEach(k => {
  const key = document.createElement('div');
  key.className = `key ${k.t}`;
  key.style.left = `${k.x * U}px`;
  key.style.top = `${k.y * U}px`;
  key.style.width = `${k.w * U}px`;
  key.style.height = `${k.h * U}px`;
  // knobs: innerHTML = '<div class="knob-body"></div>'
  // others: keycap > keycap-top > legend spans
  plate.appendChild(key);
});

## Responsive Scaling
function resize() {
  const scale = Math.min(window.innerWidth / 800, window.innerHeight / 400, 1.2);
  document.querySelector('.scale-wrapper').style.setProperty('--scale', scale);
}
window.addEventListener('resize', resize);
resize();
```

---
---

# 4. Mobile Mockup — 3D Phone

## Component Name
`Premium 3D Scroll iPhone Landing` — a scroll-driven 3D phone model that rotates 180 degrees to reveal its back face, with animated text panels and dynamic glare effects.

## Purpose
Acts as a product showcase for a mobile phone — displaying the front screen, rotating to the back to show camera and logo, then holding. Text panels fade in and out in sync with the rotation. The component includes a hero section, the 3D scroll track, and a features grid section below.

---

## Overall Architecture

Three main sections:
1. **Hero section:** Full-height intro text
2. **3D Scroll Track:** 400vh tall, contains a sticky scene with the rotating phone
3. **Features section:** Static marketing grid below

The phone is built from 6 CSS faces plus 44 JS-generated rim slices that fill the corners with proper depth, creating a realistic rounded-edge device appearance.

```
body
├── nav (fixed, top, z-index 100)
├── section.hero (100vh, intro text)
├── div.scroll-track (height 400vh)
│   └── div.sticky-scene (sticky, top 0, height 100vh, perspective 1800px)
│       ├── .feature-text-1 (left panel, opacity 0 initially)
│       ├── .feature-text-2 (right panel, opacity 0 initially)
│       └── .phone-3d (3D object)
│           ├── .face.face-front (front screen + glare)
│           ├── .face.face-back (camera bump + logo + glare)
│           ├── .face-edge.face-left
│           ├── .face-edge.face-right
│           ├── .face-edge.face-top
│           ├── .face-edge.face-bottom
│           └── [44 rim divs, JS-generated]
└── section.features (static grid)
```

---

## Folder Structure

Single self-contained file.

```
mobile-mockup.html   (Tailwind via CDN, inline style override, inline script)
```

---

## Required Libraries

| Library | Version | Purpose |
|---|---|---|
| Tailwind CSS | CDN (latest) | Utility-first layout and typography |
| GSAP | 3.12.2 | Scroll timeline |
| ScrollTrigger | 3.12.2 | Scrub + trigger |
| Inter (inline @import) | any | Typography |

This is the only component in this collection that uses Tailwind.

---

## CSS Architecture

### Phone Dimensions (CSS Variables on .phone-3d)

```css
.phone-3d {
  --phone-h: min(725px, 80vh);
  --phone-w: calc(var(--phone-h) * 360 / 740);  /* 360:740 aspect ratio */
  --phone-d: 22px;    /* Physical depth */
  --phone-r: 44px;    /* Corner radius — must match face border-radius */
  transform-style: preserve-3d;
}
```

### Six Physical Faces

Front face — what the user sees first:
- backface-visibility: hidden (hidden when rotated past 90 degrees)
- transform: translateZ(calc(var(--phone-d) / 2))

Back face — camera, logo:
- backface-visibility: hidden
- transform: rotateY(180deg) translateZ(calc(var(--phone-d) / 2))

Side edges span from `top: phone-r` to `bottom: phone-r` leaving corners for rim layers.

### The Corner Rim System (JS-generated)

44 rim layers solve a fundamental CSS 3D limitation: you cannot bend a face to follow a rounded corner. 44 thin slabs at different Z-depths each with `border-radius: 44px` create the illusion of rounded edges.

```javascript
for (let i = 1; i < 44; i++) {
  const z = (i / 44) * 22 - 11;
  const rim = document.createElement('div');
  rim.style.cssText = `
    position: absolute; inset: 0; border-radius: 44px; pointer-events: none;
    transform: translateZ(${z}px); background: #1c1c1e; border: 1px solid #28282b;
  `;
  phone3d.insertBefore(rim, backFace);  // insert before .face-back
}
```

Rim slices are inserted before `.face-back` in the DOM. This ensures they sit between front and back in the 3D stacking order.

---

## JavaScript / GSAP Animation

### Timeline (0 to 4 arbitrary units, maps to 400vh)

```javascript
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-track",
    start: "top top",
    end: "bottom bottom",
    scrub: true,  // instant sync, no lag
  }
});

tl.to('.feature-text-1', { opacity: 1, y: 0, duration: 0.5 }, 0.2);
tl.to('.phone-3d', { rotationY: -180, ease: 'power1.inOut', duration: 2 }, 1);
tl.to('.feature-text-1', { opacity: 0, y: -20, duration: 0.5 }, 1);
tl.to('.feature-text-2', { opacity: 1, y: 0, duration: 0.5 }, 2.5);
tl.to('.phone-3d', { rotationY: -180, duration: 1 }, 3);  // hold
tl.fromTo('.glare-front', { x: '-100%' }, { x: '100%', duration: 1.5 }, 0.5);
tl.fromTo('.glare-back',  { x: '-100%' }, { x: '100%', duration: 1.5 }, 2);
tl.fromTo('.face-right', { filter: 'brightness(0.8)' },
  { filter: 'brightness(1.5)', duration: 0.5, yoyo: true, repeat: 1 }, 1.5);
```

---

## Important Implementation Notes

1. `backface-visibility: hidden` on both faces is what makes the flip work. Without it, both faces are visible simultaneously.

2. The phone rotates to `-180` (negative), not `+180`. This determines which direction the phone appears to spin.

3. Feature text elements use `transform: translateY(40px)` as initial CSS, not opacity 0. GSAP drives both opacity and y simultaneously.

4. Rim layers must use `pointer-events: none`. They sit in the middle of the 3D space.

5. `perspective: 1800px` is on `.sticky-scene`, not on `.phone-3d`. The phone uses `transform-style: preserve-3d`.

6. `scrub: true` here means instant sync. This is different from the other components which use `scrub: 1.2` or `scrub: 1.5`.

---

## Common Mistakes

| Mistake | Result |
|---|---|
| Missing `backface-visibility: hidden` | Both faces visible simultaneously |
| Wrong rim insertion point | Rims appear on wrong side of faces |
| Perspective on `.phone-3d` instead of parent | No depth effect |
| Forgetting `transform-style: preserve-3d` on `.phone-3d` | All faces collapse to 2D |

---

## Responsive Considerations

- `--phone-h: min(725px, 80vh)` — phone scales down on short viewports
- All dimensions derive from `--phone-h` via calc
- Text panels use Tailwind `md:left-[10%]` — hidden at small screens

---

## Ready-to-Copy Engineering Prompt

```
Build a 3D scroll-driven phone showcase in a single HTML file.
The phone rotates 180 degrees on scroll to reveal its back face.
Use GSAP ScrollTrigger for scroll-scrub animation.
Use Tailwind CSS CDN for layout utilities.

## Libraries
<script src="https://cdn.tailwindcss.com"></script>
<script src="gsap.min.js"></script>
<script src="ScrollTrigger.min.js"></script>

## Phone Dimensions (CSS variables on .phone-3d)
--phone-h: min(725px, 80vh)
--phone-w: calc(var(--phone-h) * 360 / 740)
--phone-d: 22px
--phone-r: 44px

## HTML Structure
<div class="scroll-track" style="height: 400vh">
  <div class="sticky-scene" style="position: sticky; top: 0; height: 100vh;
               perspective: 1800px; display: flex; align-items: center; justify-content: center;">
    <div class="feature-text-1" style="position: absolute; left: 10%; opacity: 0; transform: translateY(40px)">...</div>
    <div class="feature-text-2" style="position: absolute; right: 10%; opacity: 0; transform: translateY(40px)">...</div>
    <div class="phone-3d" style="transform-style: preserve-3d; position: relative; width: var(--phone-w); height: var(--phone-h)">
      <div class="face-front" style="backface-visibility: hidden; transform: translateZ(calc(var(--phone-d)/2)); border-radius: var(--phone-r)">
        <div class="inner-screen"><!-- screen content --></div>
        <div class="glare-front"><!-- glare overlay --></div>
      </div>
      <div class="face-back" style="backface-visibility: hidden; transform: rotateY(180deg) translateZ(calc(var(--phone-d)/2)); border-radius: var(--phone-r)">
        <!-- camera bump, logo, glare-back -->
      </div>
      <!-- face-left, face-right, face-top, face-bottom -->
      <!-- 44 rim layers injected by JS -->
    </div>
  </div>
</div>

## JS Rim Generation
const phone3d = document.querySelector('.phone-3d');
const backFace = document.querySelector('.face-back');
for (let i = 1; i < 44; i++) {
  const z = (i / 44) * 22 - 11;
  const rim = document.createElement('div');
  Object.assign(rim.style, {
    position: 'absolute', inset: '0', borderRadius: '44px',
    pointerEvents: 'none', transform: `translateZ(${z}px)`,
    backgroundColor: '#1c1c1e', border: '1px solid #28282b'
  });
  phone3d.insertBefore(rim, backFace);
}

## GSAP Timeline (400vh maps to 4 units)
const tl = gsap.timeline({
  scrollTrigger: { trigger: ".scroll-track", start: "top top", end: "bottom bottom", scrub: true }
});
tl.to('.feature-text-1', { opacity: 1, y: 0, duration: 0.5 }, 0.2);
tl.to('.phone-3d', { rotationY: -180, ease: 'power1.inOut', duration: 2 }, 1);
tl.to('.feature-text-1', { opacity: 0, y: -20, duration: 0.5 }, 1);
tl.to('.feature-text-2', { opacity: 1, y: 0, duration: 0.5 }, 2.5);
tl.to('.phone-3d', { rotationY: -180, duration: 1 }, 3);
tl.fromTo('.glare-front', { x: '-100%' }, { x: '100%', duration: 1.5 }, 0.5);
tl.fromTo('.glare-back',  { x: '-100%' }, { x: '100%', duration: 1.5 }, 2);
tl.fromTo('.face-right', { filter: 'brightness(0.8)' }, { filter: 'brightness(1.5)', duration: 0.5, yoyo: true, repeat: 1 }, 1.5);
```

---
---

# Future Integration Notes for Tecnomart Landing Page

When combining all four components into a single landing page, keep these rules in mind.

## Scroll Budget Allocation

- **Mobile Front section:** Use the same 400vh scroll-track + sticky pattern from mobile-mockup.html
- **Mobile Back section:** Can be a second scroll-track, or extend the existing 400vh timeline to 600vh with an extra hold
- **Display + Keyboard section:** Use the 4000px GSAP pin from the-final-component. This component must be isolated in its own #master-pin-wrapper
- **Each component needs its own ScrollTrigger trigger element** so they do not interfere with each other

## Collision Prevention (Display Animation + Surrounding Text)

- The display component uses `pin: true`, which means GSAP injects a pin spacer above it during pinning
- Place heading and body text before `#master-pin-wrapper` in the DOM
- Place heading and body text after `#master-pin-wrapper` for text that appears after the keyboard section
- Do not rely on margin or padding between the pinned element and surrounding text

## Shared Library Optimization

Instead of loading GSAP three times per component:
- Load GSAP + ScrollTrigger once in the `<head>`
- Load Lenis once (only needed for the display+keyboard component)
- Remove the per-component CDN script tags
- Each component's JS logic runs as separate script blocks or modules

## CSS Namespace Caution

The display component CSS uses generic class names like `.key` and `.keycap`. The standalone keyboard uses the same names. When combining into one page, scope the display component laptop keys:

```css
.display-section .laptop-key { /* display-specific key styles */ }
```

And keep the standalone keyboard classes unscoped since it owns the interaction.

## Z-Index Stack (All Components Combined)

| Z-index | Element |
|---|---|
| -1 | particles (fixed background) |
| 0 | default content flow |
| 5 | sticky phone scene |
| 10 | cable layer, keyboard section, accessories text |
| 20 | feature text panels |
| 100 | fixed navigation bar |
