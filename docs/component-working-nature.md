# Component Working Nature — Internal Behavior Reference

> **Purpose of this document:** Explains how each component works from the inside. Assumes you have just dragged an HTML file into a new project and need to understand every execution step, every dependency, and every way things can go wrong — before you touch a line of code.

---

## Table of Contents

1. [Product Showcase — Display + Keyboard](#1-product-showcase--display--keyboard)
2. [Minimal Display Component](#2-minimal-display-component)
3. [Static Mechanical Keyboard](#3-static-mechanical-keyboard)
4. [Mobile Mockup — 3D Phone](#4-mobile-mockup--3d-phone)
5. [Universal Framework Integration Guide](#5-universal-framework-integration-guide)
6. [Multi-Component Integration Patterns](#6-multi-component-integration-patterns)

---

---

# 1. Product Showcase — Display + Keyboard

## How Initialization Starts

The browser parses HTML top to bottom. As it reaches `<link rel="stylesheet" href="style.css">` in the `<head>`, it downloads and applies all CSS before rendering anything. This is critical — the 3D layout only works if CSS variables, the device transform, and the lid transform are applied before JavaScript calculates positions.

JavaScript runs at the end of `<body>`, after the entire DOM is rendered. This means when `script.js` executes, every element it queries (`getElementById`, `querySelector`) already exists.

## What Happens First (Execution Order)

When the browser finishes parsing the page and fires the `load` event equivalent for inline scripts at the bottom of body, the following executes synchronously in this exact order:

**Step 1 — GSAP registers ScrollTrigger plugin**
```javascript
gsap.registerPlugin(ScrollTrigger);
```
This must happen before any ScrollTrigger object is created. If this line is missing, all timeline configurations silently fail.

**Step 2 — Lenis is initialized**
```javascript
const lenis = new Lenis({ duration: 1.2, easing: ... });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0, 0);
```
Lenis hijacks native scroll. From this point forward, no native scroll events fire at their natural rhythm. Instead, Lenis runs in the GSAP ticker (RAF loop) and fires synthetic scroll events with easing applied. ScrollTrigger.update is called each time Lenis ticks, which re-evaluates all scroll-based animations at the current smoothed position.

**Step 3 — DOM references are captured**
All `getElementById` and `querySelector` calls execute. If any element does not exist in the DOM at this point, its reference is `null` and later code that uses it will throw.

**Step 4 — buildParticles() IIFE runs**
Creates 50 `.dot` divs and appends them to `#particles`. This is entirely visual — no animation logic depends on it.

**Step 5 — buildLaptopKeys() IIFE runs**
Creates 70 `.laptop-key` divs and appends them to `#laptopKeyboardWell`. These are decorative keys on the laptop base deck. None of them are interactive.

**Step 6 — buildMechKeyboard() IIFE runs**
Iterates the `layout` array (64 entries). For each entry, creates a `.key` div, sets its `left`, `top`, `width`, `height` via CSS `calc()` expressions using `--u`, creates its inner keycap/legend structure, and appends it to `#plate`. Keys with `data-route` get their attributes stored but no click handlers yet (those are added later by `attachKeyClickHandlers()`).

**Step 7 — GSAP timeline is created**
```javascript
const tl = gsap.timeline({ scrollTrigger: { ... } });
```
ScrollTrigger measures the DOM at this point: it checks where `#master-pin-wrapper` starts, calculates the offset, creates a pin spacer element (injected above the wrapper in the DOM), and registers the trigger. The animation has not started — it is waiting for scroll events.

**Step 8 — Timeline tweens are queued**
All `.to()` and `.fromTo()` calls attach tween definitions to the timeline. No actual animation occurs — these are specifications.

**Step 9 — Page is now idle, waiting for user scroll**

---

## What Happens When User Scrolls

**Scroll → Lenis → ScrollTrigger → GSAP**

1. User scrolls (mouse wheel, trackpad, touch)
2. Lenis intercepts the native scroll event
3. Lenis calculates a smoothed scroll position using its easing function
4. Lenis fires its own scroll event with the smoothed position
5. `lenis.on('scroll', ScrollTrigger.update)` fires ScrollTrigger.update
6. ScrollTrigger recalculates scroll progress for all registered triggers
7. For the master timeline, it maps scroll position to timeline progress
8. `scrub: 1.2` means the animation's current progress chases the calculated progress with a 1.2-second lag
9. GSAP interpolates all active tweens at the current progress value
10. `onUpdate` fires every frame, running the cable clip-path logic and power-on check

---

## The Pin Mechanism

When `pin: true` is set on a ScrollTrigger, GSAP does the following:

1. It measures the natural top position of `#master-pin-wrapper`
2. It injects a `div` (called the pin spacer) above the wrapper in the DOM, with the same height as the virtual scroll distance (`4000px`)
3. When scroll reaches the trigger point, GSAP sets `#master-pin-wrapper` to `position: fixed; top: 0` — this locks it to the viewport
4. The page continues scrolling (the pin spacer takes up the 4000px of scroll space)
5. When scroll position moves 4000px past the trigger point, GSAP releases the pin (removes the `position: fixed`)

`anticipatePin: 1` tells GSAP to start adjusting the pin spacer height 1 scroll unit before the trigger fires, preventing the jump that can occur if pin spacer insertion causes a scroll position recalculation.

---

## Animation Lifecycle

### Phase 1: Display Opens (0%–20%)

The device starts at `translateZ(-400px) rotateX(90deg)`. This means:
- Rotated 90 degrees on X: the laptop is flat on a virtual table pointing away
- Translated -400px in Z: it is deep behind the screen plane

GSAP animates Z to 0 simultaneously with rotateX to 0 — the laptop stands up and comes forward. At the same time, yPercent goes to 40 — the device moves downward in the viewport so that when the lid opens, it remains visually centered.

The lid starts at `rotateX(0deg)` with `transform-origin: top center`. As GSAP rotates it to `rotateX(110deg)`, it swings open like a real hinge. The lid-screen's pre-set `rotateX(180deg)` means that once the lid passes 90 degrees, the screen faces the user.

LidEdge (the front lip of the lid) fades to opacity 0 early in the opening animation. This is not a visual choice — it is a technical requirement. At high rotation angles, CSS `border-radius` on extruded 3D elements produces rendering artifacts where corners appear to clip or ghost. Fading the element removes the artifact.

### Phase 2: Hold (20%–30%)

An empty tween `tl.to({}, { duration: 0.1 })` creates a pause in the timeline. Nothing moves. This gives the user a moment to appreciate the fully open display before the next phase begins.

### Phase 3: Pan to Keyboard (30%–80%)

`#productShowcase` translates from `y: 0` to `y: -150vh`. The showcase is pinned — it does not actually move in the viewport — but its content moves upward inside it. Since the keyboard section is at `top: 150vh` within the showcase, a translation of `-150vh` brings it to `top: 0` visually — placing it in the center of the viewport.

While this pan is happening:

**Accessories text fade-in (35%–45%):** `#accessoriesText` fades in and rises from `y: 50` to `y: 0`. It sits at `top: 100vh` in the showcase, which after the pan begins to appear at the mid-viewport region.

**Cable draw (45%–80%):** The `onUpdate` callback fires every frame. It checks if progress is between 0.45 and 0.8, calculates a normalized value `(progress - 0.45) / 0.35`, and uses that to compute `clipPercent = 100 * (1 - normalized)`. This value is written to the SVG's inline `clip-path` style. At 45% the clip is 100% (fully hidden). At 80% the clip is 0% (fully visible). The cable draws from top to bottom, top-right corner (display USB port) to bottom-left (keyboard USB port).

### Phase 4: Keyboard Powers On (80%–100%)

When `self.progress >= 0.8` and `isPoweredOn` is false, `powerOn()` fires.

`powerOn()` is a one-time state change that:
1. Sets `isPoweredOn = true` (prevents double-firing)
2. Applies `theme-white` to the keyboard wrapper
3. Starts animating the cable core stroke from `#111` to `#e2e0d8`
4. Starts the 10-second theme cycle interval
5. After 1200ms, adds `keyboard-interactive` and calls `attachKeyClickHandlers()`

The 1200ms delay before interactivity is intentional — it makes the keyboard feel like it is "booting up" before responding to input.

If the user scrolls backward past 80%, `powerOff()` fires, reverting all theme state and clearing the interval.

---

## State Machine (isPoweredOn)

The component has one explicit boolean state:

```
isPoweredOn = false  →  powerOn() called (progress ≥ 0.8)  →  isPoweredOn = true
isPoweredOn = true   →  powerOff() called (progress < 0.8)  →  isPoweredOn = false
```

Supporting state:
- `themeInterval`: holds the interval ID. Must be cleared on powerOff to prevent memory leaks.
- `themeIndex`: tracks current theme (0 = white, 1 = blue). Reset to 0 on powerOff.
- `themes`: `['theme-white', 'theme-blue']` — the cycle array.

---

## Scroll Lifecycle (Complete)

```
Page load
  → GSAP registers ScrollTrigger
  → Lenis initializes
  → ScrollTrigger measures DOM, creates pin spacer
  → Timeline tweens queued

User scrolls down
  → Lenis smooths the scroll
  → ScrollTrigger.update fires
  → Timeline progress increases
  → Display opens (0-20%)
  → Hold (20-30%)
  → Showcase pans up (30-80%)
  → Accessories text appears (35-45%)
  → Cable draws (45-80%)
  → Keyboard powers on (80%)
  → Timeline at 100%: all animations complete

User scrolls down further
  → Pin releases at 4000px
  → Page scrolls normally past the component

User scrolls back up into pin range
  → Pin re-activates
  → Progress reverses
  → If progress drops below 80%: powerOff() fires
  → All animations reverse (GSAP scrub handles this automatically)
```

---

## Resize Handling

This component does **not** explicitly listen for `resize` events. Instead:

- CSS variables (`--u`, `--device-width`, `--device-depth`) use `min()` so they recalculate automatically on layout reflow
- The cable layer's `top`, `left`, `width`, `height` use these same CSS variables so they reflow too
- GSAP ScrollTrigger has a built-in `resize` observer that re-measures trigger positions when the window changes size
- The keyboard keys use `calc(x * var(--u))` so they scale with `--u` automatically

One caveat: if the user resizes mid-animation (while the pin is active), ScrollTrigger may briefly show incorrect positions before its observer fires. This is generally acceptable behavior.

---

## Cleanup Requirements

If embedding this component in a framework that mounts and unmounts components (React, Vue, Angular), you must clean up:

1. Kill the GSAP ScrollTrigger: `ScrollTrigger.getAll().forEach(t => t.kill())`
2. Kill all GSAP tweens: `gsap.killTweensOf('*')`
3. Destroy Lenis: `lenis.destroy()`
4. Clear the theme interval: `clearInterval(themeInterval)`
5. Remove the pin spacer element GSAP injects into the DOM (GSAP handles this automatically if you kill the trigger)

If you do not clean up on unmount, Lenis will continue running in the RAF loop, and ScrollTrigger will continue observing scroll on a destroyed DOM.

---

## Performance Considerations

- The `will-change: transform` declarations on `.device` and `.product-showcase` create GPU compositing layers at page load. This uses extra GPU memory but makes the animations compositor-threaded (no JS on the rendering path during scroll).
- `gsap.ticker.lagSmoothing(0, 0)` prevents GSAP from time-skipping frames. Without it, if the main thread is busy (e.g., during a layout reflow), GSAP skips frames and the animation jumps. With lagSmoothing disabled, GSAP always increments by the actual elapsed time, which can make animations appear to move faster briefly, but never jump.
- The particle system (50 `.dot` divs with CSS animations) adds GPU load but does not impact JS performance since all animation is pure CSS.
- The mechanical keyboard (64 key divs × 3 elements each = 192 DOM nodes injected on load) is significant DOM work but happens synchronously before any user interaction.

---

## Potential Conflicts

| Conflict Source | Symptom | Solution |
|---|---|---|
| Another scroll library on the page (e.g., SmoothScroll.js) | ScrollTrigger receives wrong scroll positions | Remove or disable the other library, use only Lenis |
| Another GSAP instance loaded separately | Plugin registrations conflict | Use one global GSAP instance |
| CSS `overflow: hidden` on a parent of `#master-pin-wrapper` | Pin does not work correctly | Never wrap the pin wrapper in an overflow-hidden container |
| CSS `transform` on the `<body>` or `<html>` element | Fixed positioning breaks inside transformed elements | Remove transforms from html/body |
| Next.js `<Link>` navigation | `window.location.href` works but is not a client-side route | Replace with `router.push(route)` in Next.js |

---

## How to Move This Component Into a New Project

### Plain HTML project
1. Copy `the-final-component/` folder
2. Link `style.css` in `<head>`
3. Add CDN scripts for GSAP, ScrollTrigger, Lenis at bottom of `<body>`
4. Add `<script src="script.js"></script>` last
5. Copy the HTML from `display-keyboard.html` body content into your page

### React / Next.js
1. Create a `ProductShowcase` component
2. Put the HTML structure in `return(...)` using JSX syntax (rename `class` to `className`, `for` to `htmlFor`)
3. In `useEffect` with empty dependency array: run all the JS from `script.js`
4. Return a cleanup function from `useEffect` that kills ScrollTrigger, destroys Lenis, clears the interval
5. Import `style.css` at the top of the component file or in `_app.js` / `layout.js`
6. Install GSAP via `npm install gsap` and import it: `import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'`
7. Install Lenis via `npm install @studio-freight/lenis`
8. In Next.js App Router: mark the component with `'use client'` since it uses browser APIs

### Vue 3
1. Create a `.vue` single-file component
2. Put HTML in `<template>`
3. Put JS in `<script setup>` — use `onMounted` for initialization, `onUnmounted` for cleanup
4. Put CSS in `<style scoped>` — but note that scoped CSS adds data attributes to elements, which may conflict with GSAP selectors. Use `:global(.class)` for any selector GSAP needs to target.

### Svelte
1. Create a `.svelte` file
2. HTML in the template, CSS in `<style>`, JS in `<script>`
3. Use `onMount` lifecycle for initialization, return a cleanup function from `onMount` for destruction
4. Import GSAP and Lenis as npm packages

### Astro
1. Create a `.astro` component
2. Add `client:load` or `client:visible` directive on the island if using a framework component
3. Or use a plain `<script>` tag in the Astro component (runs in the browser after hydration)
4. Import GSAP and Lenis in the script block

---

---

# 2. Minimal Display Component

## How Initialization Starts

All code is inline in the HTML file. The CSS in `<style>` applies before JavaScript runs. The keyboard well is built synchronously. GSAP registers ScrollTrigger. The timeline is created immediately.

## What Starts First

The browser applies the `transform: translateZ(-500px) rotateX(90deg)` initial state to `.device` as soon as CSS is parsed. The laptop is flat and deep before any JavaScript executes.

## What Happens Next

```
CSS applies initial transform to .device (flat, deep)
↓
JS builds 70 decorative keyboard keys in #keyboardWell
↓
GSAP registerPlugin(ScrollTrigger)
↓
GSAP creates timeline with sticky trigger on .reveal-section
  - ScrollTrigger measures .reveal-section height (300vh)
  - Maps full scroll distance to timeline
↓
Page is idle, waiting for scroll
```

## Scroll Lifecycle

Unlike the Product Showcase which uses a GSAP pin, this component uses `position: sticky` on `.scene`. This is a pure CSS mechanism — the browser handles it with no JavaScript.

```
User scrolls within .reveal-section (300vh total)
  → Browser keeps .scene glued to top: 0 (pure CSS sticky)
  → ScrollTrigger maps scroll progress (0 to 300vh) to timeline (0 to 100%)
  → Timeline drives: device z, device yPercent, lid rotateX, lidEdge opacity
  → At bottom of .reveal-section: animation complete
  → User scrolls past bottom: .scene unsticks, page scrolls normally
```

## Element Dependencies

- `.scene` depends on `.reveal-section` being its direct parent with `position: relative` (required for sticky context)
- `.lid` depends on `.device` for its 3D context (preserve-3d must be on the chain)
- `#lidEdge` depends on `.lid` for its rotational frame of reference
- `.screen-glass` is inside `.lid-screen` which is inside `.lid` — all three must have `transform-style: preserve-3d`

## Required CSS Behavior

For `position: sticky` to work on `.scene`:
- `.reveal-section` must have `overflow: visible` (the default). If you add `overflow: hidden` or `overflow: auto` anywhere in the parent chain, sticky stops working.
- `.reveal-section` must have a defined height (`300vh`)
- `.scene` must have `top: 0` specified

For the 3D effect to work:
- `perspective` must be on `.scene`, not on `.device`
- `transform-style: preserve-3d` must be on `.device` and every 3D child

## How to Move Into a New Project

This component has zero JavaScript state and zero cleanup requirements beyond removing the HTML. Drop it in, it works.

For React/Vue/Angular/Svelte: move the GSAP initialization into a lifecycle mount hook. The sticky CSS works automatically — no framework-specific handling needed. The only thing to manage in a framework context is that GSAP's ScrollTrigger must be killed on component unmount.

---

---

# 3. Static Mechanical Keyboard

## How Initialization Starts

CSS applies the case, plate, and key base styles immediately. JavaScript then injects all key elements. The resize function runs immediately to scale the keyboard correctly.

## What Starts First

```
CSS renders: case (warm cream box), plate (dark rectangle), blocker layer divs
↓
JS injects all 64 keys (sync, immediate)
↓
resize() called immediately — scale calculated and applied
↓
window resize event listener registered
↓
Component is idle, no scroll integration
```

## What Happens Next

The keyboard is fully rendered and interactive. Every `.keycap` has `:active` CSS that triggers on mousedown/touchstart without JavaScript. The keyboard has no JS event listeners by default (unless you add them).

## Element Dependencies

- `.blockers-layer` must be a child of `.plate` for z-index stacking to work correctly (blockers must render above keys)
- `.key` elements are appended to `.plate` by JS — if `#plate` doesn't exist when the script runs, the loop fails silently
- The scale wrapper CSS variable `--scale` must be set by the JS `resize()` function — if JS fails to run, the keyboard renders at its natural 44px-unit size (may be too large for small screens)

## Resize Handling

```javascript
function resize() {
  const scale = Math.min(window.innerWidth / 800, window.innerHeight / 400, 1.2);
  document.querySelector('.scale-wrapper').style.setProperty('--scale', scale);
}
window.addEventListener('resize', resize);
resize(); // Required: run on load
```

The keyboard's internal layout uses fixed pixel units (44px). The scale wrapper transforms the entire keyboard as one unit. This avoids any reflow when the window is resized — only one `transform: scale()` change occurs.

The `1.2` cap prevents the keyboard from becoming comically large on wide monitors.

## Required CSS Behavior

- `.plate` must be `position: relative` — all keys are `position: absolute` and are relative to this
- `.blockers-layer` must be `position: absolute; inset: 0; z-index: 1` — this puts blockers above the key layer
- `.key` must be `z-index: 2` — above the blockers, so key faces render on top of the case fill material
- `.keycap` must be `cursor: pointer` for interactive feedback (or change to `default` for non-interactive state)

## How to Integrate Click Navigation

The standalone keyboard has no click routing. To add it:

1. Add `data-route="/your/path"` to any key entry in the `layout` array
2. After building keys, query all `[data-route]` elements:
```javascript
document.querySelectorAll('.key[data-route]').forEach(key => {
  key.addEventListener('click', () => {
    window.location.href = key.dataset.route;
  });
});
```

For framework routing (React Router, Next.js router, Vue Router), replace `window.location.href` with the appropriate programmatic navigation call.

## Cleanup Requirements

None. The keyboard has no intervals, no RAF loops, no GSAP. The only registered listener is `window.addEventListener('resize', resize)`. Remove this listener on unmount if embedding in a framework component.

---

---

# 4. Mobile Mockup — 3D Phone

## How Initialization Starts

Tailwind CDN loads and processes all utility classes in the HTML. The inline `<style>` block overrides with component-specific rules. JavaScript then generates the rim layers and creates the GSAP timeline.

## What Starts First

```
Tailwind CDN applies utility classes (nav, hero, feature cards)
↓
Inline <style> block applies phone-3d dimensions and face transforms
↓
JS generates 44 rim div elements (sync, before GSAP)
↓
GSAP registerPlugin(ScrollTrigger)
↓
GSAP creates timeline with sticky trigger on .scroll-track
  - ScrollTrigger measures .scroll-track height (400vh)
↓
Component idle, waiting for scroll
```

## The Rim Layer Generation — Why Order Matters

The rims are inserted using `phone3d.insertBefore(rim, backFace)`. This means each rim goes before `.face-back` in the DOM. Since `transform-style: preserve-3d` establishes a flat 3D compositing context, the order of child elements in the DOM does not determine their visual stacking — their Z-transform value does.

However, inserting before `.face-back` ensures that rims are part of the 3D scene before the back face, which matters for browsers that have quirks with backface-visibility ordering.

The 44 slabs distribute Z positions from `-11px` to `+11px` (centered around 0), filling the 22px depth of the phone body. Each slab has `border-radius: 44px` matching the phone corners, which creates the rounded edge appearance.

## What Happens During Scroll

```
User scrolls into .scroll-track
  → CSS sticky keeps .sticky-scene at top: 0
  → ScrollTrigger maps 400vh to 4 timeline units (scrub: true = instant sync)
  → At unit 0.2: feature-text-1 fades in
  → At unit 1: phone begins rotating (0 to -180 degrees)
  → At unit 1: feature-text-1 fades out
  → At unit 1.5: right edge brightness peaks (edge facing viewer)
  → At unit 2.5: feature-text-2 fades in
  → At unit 3: phone holds at -180 degrees
  → At unit 3-4: hold
  → User scrolls past .scroll-track bottom: sticky releases
```

## The Face Flip Mechanism

`rotationY: -180` is the total rotation. Here is what each face does during that rotation:

- **Front face:** Visible from 0 to -90 degrees. At -90 degrees, it is edge-on (invisible). `backface-visibility: hidden` hides it beyond -90 degrees.
- **Back face:** Pre-rotated at `rotateY(180deg)`. It is facing away at 0 degrees. At -90 degrees (combined total of phone -90 + face 180 = face is now at -90 of its own orientation from viewer). At -180 degrees total phone rotation, back face is front-facing.
- **Edge faces:** Visible briefly when the phone is edge-on (around -90 degrees). The brightness animation on `.face-right` is timed to peak exactly when this edge faces the camera.

## The Glare Effect

The glare divs are 200% wide (wider than their parent), angled at 30 degrees, blurred, and translated from left to right. GSAP animates `x` from `-100%` to `100%`. Because the element is wider than its container and the container has `overflow: hidden`, the glare enters from the left and exits on the right in a sweeping motion.

The front glare uses `via-white/20` (20% opacity). The back glare uses `via-white/5` (5% opacity). The back is subtler because the dark matte back material reflects less light than the glass front.

## Required CSS Behavior

- `.sticky-scene` must be `display: flex; align-items: center; justify-content: center` — this centers the phone
- `perspective: 1800px` must be on `.sticky-scene`, not on `.phone-3d`
- `.phone-3d` must have `transform-style: preserve-3d` — without it, all faces collapse to flat
- `backface-visibility: hidden` must be on both `.face-front` and `.face-back` — without it on the back face, the back face is visible through the front while the phone faces forward
- Rim divs must have `pointer-events: none` — they are in the 3D space and intercept clicks on face content

## Cleanup Requirements

Kill the GSAP ScrollTrigger on unmount. The sticky CSS handles itself — no JS needed. No intervals or RAF loops to clean up.

## How to Move Into a New Project

### Plain HTML
Copy the entire `mobile-mockup.html` file. The Tailwind CDN link must remain in `<head>` or be replaced with a local Tailwind build.

### React / Next.js (without Tailwind)
1. Replace Tailwind utilities with equivalent CSS classes
2. Move GSAP logic to `useEffect`
3. Return cleanup from `useEffect`: `ScrollTrigger.getAll().forEach(t => t.kill())`
4. The rim generation logic must run after the component mounts (inside useEffect, after DOM is ready)

### React / Next.js (with Tailwind already installed)
1. Remove the CDN Tailwind script tag
2. Use Tailwind utility classes directly in JSX
3. Custom CSS properties (phone dimensions) go in a CSS module or global CSS
4. GSAP initialization in `useEffect`

### Vue 3
1. Template for HTML structure
2. `onMounted` for rim generation + GSAP init
3. `onUnmounted` for ScrollTrigger cleanup
4. `<style>` block for phone-specific CSS (scoped or unscoped)

---

---

# 5. Universal Framework Integration Guide

## The Core Problem

These components rely on three browser APIs that do not exist during server-side rendering:
- `window` (scroll position, dimensions)
- `document` (DOM queries, element creation)
- `requestAnimationFrame` (GSAP ticker, Lenis RAF)

Any framework that server-side renders (Next.js, Nuxt, SvelteKit, Astro, Remix) will error if these are called outside a browser context.

## The Universal Solution

Wrap all initialization in a "browser check" or "mount lifecycle hook":

**Vanilla JS:**
```javascript
// No issue — script tags at bottom of body only run in browser
```

**React:**
```javascript
useEffect(() => {
  // All GSAP, Lenis, DOM manipulation here
  // This ONLY runs in the browser, after mount
  return () => {
    // Cleanup: kill ScrollTrigger, destroy Lenis, clear intervals
  };
}, []);
```

**Vue 3:**
```javascript
onMounted(() => {
  // GSAP, Lenis, DOM manipulation here
});
onUnmounted(() => {
  // Cleanup here
});
```

**Svelte:**
```javascript
import { onMount } from 'svelte';
onMount(() => {
  // GSAP, Lenis here
  return () => { /* cleanup */ };
});
```

**Astro:**
```html
<script>
  // Code in Astro script tags runs in the browser after hydration
  // No SSR issue
</script>
```

**Next.js App Router:**
```javascript
'use client'; // Required — marks component as browser-only
```

---

## GSAP as NPM Package

When using GSAP from npm instead of CDN, the registration pattern changes:

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Must register BEFORE creating any ScrollTrigger instance
gsap.registerPlugin(ScrollTrigger);
```

In frameworks that tree-shake aggressively (Vite, webpack with side-effects: false), the plugin registration must happen in the same module that imports it, or in a shared initialization module that runs before any component creates a ScrollTrigger.

---

## Lenis as NPM Package

```javascript
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({ duration: 1.2, easing: ... });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0, 0);
```

In React, this initialization must happen inside `useEffect` (not at module level) because Lenis accesses `window` in its constructor.

---

## CSS Module Considerations

When CSS is scoped (React CSS Modules, Vue scoped styles, Svelte scoped styles), GSAP selectors like `gsap.to('.cable-svg', ...)` will fail because the actual class name in the DOM becomes `.cable-svg--abc123` (hashed).

Three solutions:

**1. Use :global() to un-scope classes GSAP targets:**
```css
:global(.cable-svg) { clip-path: inset(0 0 100% 0); }
```

**2. Use refs instead of string selectors:**
```javascript
// React
const cableSvgRef = useRef(null);
gsap.to(cableSvgRef.current, { ... });
```

**3. Keep animation CSS in a global stylesheet instead of a scoped module**

---

## SVG Stroke Animation in Frameworks

`gsap.to('.cable-core', { stroke: '#e2e0d8', duration: 1 })` works because GSAP directly writes to the SVG element's `stroke` attribute. In React, this is not a problem since GSAP operates on the real DOM, not the virtual DOM. However, if React tries to reconcile the element after GSAP mutates it, React may overwrite the stroke value.

Solution: Declare the `stroke` attribute as a React state variable and use GSAP to animate it only when the component is stable (no pending re-renders). Or use GSAP's `overwrite: 'auto'` to handle conflicts gracefully.

---

# 6. Multi-Component Integration Patterns

## Page Structure (Recommended DOM Order)

```html
<body>
  <!-- Fixed navigation (z-index: 100) -->
  <nav>...</nav>

  <!-- Hero / intro text -->
  <section id="hero">...</section>

  <!-- Mobile Front: 400vh scroll track + sticky scene -->
  <div class="scroll-track" id="mobileFront">
    <div class="sticky-scene">
      <!-- .phone-3d showing front face only (0 to 200vh) -->
    </div>
  </div>

  <!-- Text between sections -->
  <section id="mobileServices">...</section>

  <!-- Mobile Back: separate 400vh scroll track (or extend same) -->
  <div class="scroll-track" id="mobileBack">
    <div class="sticky-scene">
      <!-- .phone-3d starting at -180 rotation, showing back face only -->
    </div>
  </div>

  <!-- Text before display section -->
  <section id="laptopIntro">...</section>

  <!-- Display + Keyboard: GSAP pin (4000px virtual scroll) -->
  <div id="master-pin-wrapper">
    <div class="product-showcase" id="productShowcase">
      <!-- display, cable, accessories, keyboard -->
    </div>
  </div>

  <!-- Text after keyboard section -->
  <section id="afterKeyboard">...</section>
</body>
```

## Critical Rules for Side-by-Side ScrollTriggers

Each component must have a unique `trigger` element. ScrollTrigger computes start/end positions based on the trigger's bounding rect at the time of creation. Triggers do not share scroll budgets — they each measure their own position independently.

When GSAP pins `#master-pin-wrapper`, it inserts a 4000px spacer above it. This pushes everything below it down by 4000px. All other ScrollTriggers must account for this when they are created. If they are created before the pin spacer is inserted, their start/end positions will be wrong.

**Solution:** Create all ScrollTriggers after the page fully loads and after GSAP has measured all pins:

```javascript
// Use ScrollTrigger.refresh() after all triggers are created
// to re-measure positions with all pin spacers in place
ScrollTrigger.refresh();
```

Or create the pin trigger first, let it run `ScrollTrigger.refresh()` internally, then create the other triggers.

## Preventing the Display Animation From Colliding With Text

The display section is inside `#master-pin-wrapper`. Text sections (`#laptopIntro`, `#afterKeyboard`) are outside the pin wrapper. The pin wrapper, after GSAP inserts its spacer, effectively occupies `4000px + 100vh` of scroll space.

For the text above to not overlap: ensure `#laptopIntro` is a sibling before `#master-pin-wrapper` in the DOM. The pin spacer pushes `#master-pin-wrapper` down — the natural flow separates them.

For the text below: ensure `#afterKeyboard` comes after `#master-pin-wrapper`. After the pin releases, the page resumes normal flow — no extra margin needed.

If text visually overlaps the pinned section during scroll, add a bottom margin to the section before the pin equal to the overlap distance.

## One Lenis Instance, Multiple Scroll Sections

Use only one Lenis instance for the entire page. Lenis hijacks all native scroll — having multiple instances would produce conflicting easing calculations.

```javascript
const lenis = new Lenis({ duration: 1.2, easing: ... });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0, 0);
```

All ScrollTriggers on the page will automatically use this single smoothed scroll source.

## Shared GSAP Registration

Register all plugins once at the top of your main JavaScript file:

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

Then import `gsap` as a dependency in each component that needs it. GSAP is a singleton — the same instance is shared across all imports.

## Performance Strategy for Full Landing Page

1. **Lazy-init non-visible sections:** Use `ScrollTrigger.create` with `onEnter` callbacks to defer GSAP timeline creation until the user is near that section. This keeps the initial page load fast.

2. **Reduce particle count on mobile:** The 50-particle system is visual decoration. On mobile, `prefers-reduced-motion` media query can disable particles entirely.

3. **Single compositor layer per section:** The `will-change: transform` declarations promote elements to GPU layers. With three sections on the page, this could be 3+ compositor layers. Keep `will-change` only on elements that are actively animating.

4. **Stagger ScrollTrigger creation:** On very long pages with many ScrollTriggers, creating them all synchronously on page load can cause a layout-reflow cascade. Use `requestIdleCallback` to create triggers for below-the-fold sections.

## Common Integration Mistakes

| Mistake | Result |
|---|---|
| Creating multiple Lenis instances | Scroll events fire multiple times, animation stutters |
| Using `overflow: hidden` on a parent of a sticky element | Sticky stops working entirely |
| Using `overflow: hidden` on a parent of a GSAP pin | Pin does not work correctly |
| Not calling `ScrollTrigger.refresh()` after all pins are created | Out-of-viewport sections have wrong trigger positions |
| Loading GSAP twice (CDN + npm) | Two separate GSAP instances, plugins registered on one do not apply to the other |
| Animating an element with React re-renders happening simultaneously | React overwrites GSAP's inline style changes |
| Forgetting cleanup on unmount in React/Vue | ScrollTrigger persists after component removes, scroll events accumulate, memory leaks |
