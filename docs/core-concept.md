# core-concept.md — TecnoMart Landing Page
# Single Source of Truth — Do Not Deviate

> Last updated: 2026-08-07
> Status: APPROVED — Implementation may begin

---

## Overview

TecnoMart is a Hyderabad-based technology company that sells laptops, mobiles, and accessories, and provides repair services. This landing page is a scroll-driven interactive product story. It is built in vanilla HTML, CSS, and JavaScript — fully portable to any framework without architectural changes.

---

## 1. Desktop Flow (13 Sections, Exact Order)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Title | H1 tag | No nav bar. Centered. Page top only. |
| 2 | Hero | Scroll-driven video frames | 300vh sticky container |
| 3 | Info Belt 1 | Marquee ticker | Infinite loop |
| 4 | Front Mobile | 3D Phone (front face, 0 deg) | scroll-track 400vh, sticky scene |
| 5 | Back Mobile | 3D Phone (back face, -180 deg) | Separate scroll-track 400vh |
| 6 | Display Opening | Laptop 3D display (the-final-component) | GSAP pin, #master-pin-wrapper |
| 7 | Display to Keyboard | Cable draw + keyboard power-on | Continuation of #master-pin-wrapper |
| 8 | Info Belt 2 | Marquee ticker | Contact details |
| 9 | Testimonials | 9:16 portrait carousel | Horizontal, auto-slide 4s |
| 10 | Where to Find Us | Left: address/contact, Right: map | Two-column grid |
| 11 | Our Journey | Vertical timeline | Below "Where to Find Us" |
| 12 | FAQ | Accordion | Max 5 questions |
| 13 | Footer | Clean temporary footer | Simple, redesign later |

---

## 2. Mobile Flow (Same Sections, Responsive Behaviour)

| # | Section | Mobile Behaviour |
|---|---------|-----------------|
| 1 | Title | Centered H1, same |
| 2 | Hero | Video frames stack vertically, 100vw |
| 3 | Info Belt 1 | Same marquee, smaller text |
| 4 | Front Mobile | 2 feature cards stacked above phone, 2 stacked below phone |
| 5 | Back Mobile | Phone first, then 4 cards below it |
| 6 | Display Opening | 2 cards above laptop, laptop, 2 cards below |
| 7 | Display to Keyboard | Heading + body text below keyboard |
| 8 | Info Belt 2 | Same marquee |
| 9 | Testimonials | Single card view, swipe/tap nav |
| 10 | Where to Find Us | Address top, map below |
| 11 | Our Journey | Vertical timeline (already vertical) |
| 12 | FAQ | Accordion, full width |
| 13 | Footer | Single column |

---

## 3. Section Copy

### Section 1 — Title

TecnoMart

- Tag: h1
- Style: centered, large, no background, pure text
- No subtitle beneath it
- No navigation menu

---

### Section 2 — Hero

- No copy (scroll-controlled video/canvas animation)
- Subtext (appears on first frame): "Technology That Works As Hard As You Do."
- Body: "Engineered for precision. Designed for performance. Your ultimate tech destination in Hyderabad."

---

### Section 3 — Info Belt 1

Ticker copy (loops):
Best Laptops in Hyderabad * Best Mobiles in Hyderabad * Trusted Repairs * Premium Accessories * HITEC City *

---

### Section 4 — Front Mobile

Heading: "Discover the Future"

Body: "Premium smartphones engineered for your lifestyle. Every model tested, every deal verified."

Four Feature Cards (two above, two below — desktop):
1. Affordable Pricing — Unbeatable deals on top models.
2. Latest Smartphones — Cutting-edge tech arrivals, daily.
3. Refurbished Mobiles — Certified pre-owned perfection.
4. Up To 2 Years Warranty — Peace of mind, guaranteed.

---

### Section 5 — Back Mobile

Heading: "Precision Repair"

Body: "Expert technicians restoring your device to factory perfection. Fast turnaround. Real warranties."

Four Feature Cards (all below component — desktop):
1. Display Replacement — Flawless OLED and LCD fixes.
2. Battery Replacement — Restore full-day power.
3. Camera Repairs — Crystal-clear lens restoration.
4. Software Solutions — Data recovery and OS updates.

---

### Section 6 — Display Opening (Laptop Display)

Heading: "Power Meets Productivity"

Body: "Whether you're a student, creator, gamer, or business professional — TecnoMart helps you choose the right laptop and keeps it performing at its best."

Four Feature Cards:
1. Latest Laptop Collection — Explore new arrivals.
2. Hardware Repairs — Expert component fixes.
3. Student and Business Deals — Special pricing available.
4. Performance Upgrades — Boost speed and storage.

---

### Section 7 — Display to Keyboard Connection

Heading: "Complete Your Setup"

Body: "Every great device deserves the right accessories. Discover premium mechanical keyboards, gaming mice, headphones, chargers, adapters, and cables that enhance your everyday experience."

Copy appears only AFTER cable fully draws and keyboard powers on.

---

### Section 8 — Info Belt 2

Ticker copy (loops):
Want better personalised deals? Contact us: +91 98765 43210 * Visit us at HITEC City, Hyderabad * Mon-Sun: 10AM - 9PM *

---

### Section 9 — Testimonials

Heading: "Trusted By Thousands Across Hyderabad"
Subheading: "Real customers. Real experiences. Real reasons to choose TecnoMart."

Cards (5 total, portrait 9:16):
1. Rahul S. — "Exceptional service! Fixed my laptop screen in under an hour. Will never go anywhere else."
2. Priya M. — "Best deals on smartphones in the city. Got my new phone at an incredible price. Highly recommend."
3. Vikram K. — "Great selection of premium accessories. Found exactly what I needed for my workstation setup."
4. Meena R. — "The repair team is brilliant. My phone was back to new in two days. Transparent pricing too."
5. Arjun T. — "Bought a refurbished laptop — it runs like brand new. Amazing value. TecnoMart is the best."

---

### Section 10 — Where to Find Us

Heading: "Visit Our Store"

Address:
123 Tech Park Road, HITEC City,
Hyderabad, Telangana 500081

Phone: +91 98765 43210
Hours: Mon - Sun: 10:00 AM - 9:00 PM
Map: Embedded Google Maps iframe or placeholder with map pin animation

---

### Section 11 — Our Journey

Heading: "Our Journey"
Subheading: "Every milestone reflects our commitment to delivering trusted technology solutions."

Timeline Events (vertical):
1. 2015 — Founded in HITEC City. First store opens with mobile sales and repairs.
2. 2017 — Expanded to full laptop service centre. Added certified technician team.
3. 2019 — Launched premium accessories department. Crossed 10,000 happy customers.
4. 2022 — Expanded showroom. Now one of Hyderabad's most trusted tech destinations.
5. 2024 — Launched online presence. Serving customers across Telangana.

---

### Section 12 — FAQ

Heading: "Frequently Asked Questions"

5 Questions (accordion):

1. Do you offer warranty on repairs?
   Yes. All repairs come with a 90-day warranty on parts and labour. Screen replacements include a 30-day physical damage guarantee.

2. Can I trade in my old smartphone?
   Yes. We offer trade-in assessments for any working smartphone. Bring your device in-store for an instant valuation.

3. How long does a screen replacement take?
   Most screen replacements are completed within 1-2 hours while you wait. Complex repairs may take up to 24 hours.

4. Are your accessories genuine?
   Absolutely. We stock only brand-authorised or certified accessories. Every product comes with a manufacturer warranty.

5. Do you provide bulk discounts for corporate orders?
   Yes. We have dedicated corporate pricing for bulk laptop and accessory purchases. Contact us for a customised quote.

---

### Section 13 — Footer

Brand name: TecnoMart
Tagline: "Engineered for Precision."
Links column: Privacy Policy, Terms of Service, Shipping, Returns, Contact
Copyright: 2024 TecnoMart. Engineered for Precision.

---

## 4. Animation Flow

### Section 2 — Hero Video Frames

- Trigger: page scroll begins
- Start state: frame 0 of video or canvas
- End state: frame N (last frame)
- Scroll timing: maps 300vh of scroll to frame sequence
- Mechanism: CSS sticky on .reveal-section, GSAP maps scroll to currentTime or frame index
- Dependency: video asset or canvas animation

---

### Section 4 — Front Mobile (3D Phone)

- Trigger: .scroll-track (front) enters viewport top
- Scroll height: 400vh
- Start state: phone at rotationY 0 (front face facing user), feature-text-1 opacity 0
- Animation sequence:
  - Progress 0.2: feature-text-1 fades in (opacity 0 to 1, y 40 to 0)
  - Progress 1.0: phone begins rotating rotationY -180 (over 2 timeline units), feature-text-1 fades out
  - Progress 1.5: edge brightness peaks (face-right brightness 0.8 to 1.5 to 0.8)
  - Progress 2.0: phone holds at front face (rotationY 0, NO rotation to back here in this section)
  - Glare-front sweeps at progress 0.5 (x: -100% to 100%)
- End state: Phone at rotationY 0 still showing front, ready to release sticky
- NOTE: Front mobile section shows front face ONLY. The phone does NOT rotate to back here.

---

### Section 5 — Back Mobile (3D Phone)

- Trigger: second .scroll-track (back) enters viewport top
- Scroll height: 400vh
- Start state: phone already at rotationY -180 (back face showing from the start of this section)
- Animation sequence:
  - Progress 0: phone is already showing back face
  - Progress 0.2: feature-text-2 fades in (opacity 0 to 1, y 40 to 0)
  - Progress 1.0: glare-back sweeps
  - Progress 2.5 to 3.0: hold
- Heading + body + feature cards appear AFTER phone is fully visible (static section below the scroll-track)
- Overlap prevention: Heading and cards are in a separate static section below the .scroll-track div

---

### Section 6 — Display Opening

- Component: the-final-component extracted and inlined
- Trigger: #master-pin-wrapper top hits viewport top
- Pin distance: 4000px virtual scroll
- Start state: Device at translateZ(-400px) rotateX(90deg), Cable SVG clip-path 100% hidden, Accessories text opacity 0
- Animation sequence:
  - 0% to 20%: Device rises (z -400 to 0, rotateX 90 to 0), lid opens (rotateX 0 to 110 deg), yPercent 0 to 40, lidEdge opacity 1 to 0
  - 20% to 30%: Hold — display fully open, nothing moves
  - 30% to 80%: Showcase pans up (y 0 to -150vh)
  - 35% to 45%: Accessories text fades in (opacity 0 to 1, y 50 to 0)
  - 45% to 80%: Cable draws (clip-path 100% to 0%)
  - 80% to 100%: Keyboard powers on (powerOn() to theme-white to 10s cycle to theme-blue)
- Heading + body + cards: Appear on static section BEFORE #master-pin-wrapper in the DOM
- End state: Pin releases, page resumes normal scroll

---

### Section 7 — Cable and Keyboard Connection

- Continues from Section 6 — same GSAP pin, same timeline, same #master-pin-wrapper
- Accessories text fades in at 35% progress
- Cable draws from laptop USB port to keyboard USB port between 45% and 80%
- Keyboard powers on at 80% — theme-white, then 10s cycle theme-white/theme-blue
- Heading and body copy appears in #accessoriesText div at top 100vh inside the showcase

---

### Section 9 — Testimonials Carousel

- Trigger: scroll into view (IntersectionObserver or GSAP ScrollTrigger toggleActions)
- Auto-slide: every 4000ms setInterval
- Transition: CSS transition transform 0.5s ease
- Navigation: prev/next buttons + auto-advance
- Cards: portrait 9:16 ratio, glassmorphism style

---

## 5. Layout Rules

### Spacing System

- Section padding desktop: 140px 0
- Section padding mobile: 72px 0
- Container max-width: 1240px
- Container padding desktop: 0 32px
- Container padding mobile: 0 20px
- Component gutter: 64px (gap between feature cards and phone/laptop)

### Section DOM Order

```
body
  h1.site-title (TecnoMart)
  div.hero-scroll-track (300vh)
    div.hero-sticky-scene (100vh sticky)
  div.info-belt.belt-1
  section.mobile-front-intro (heading, body, 2 cards above)
  div.scroll-track#phoneFrontTrack (400vh)
    div.sticky-scene (100vh sticky)
      div.phone-3d (front face only)
  section.mobile-front-cards-below (2 cards below)
  div.scroll-track#phoneBackTrack (400vh)
    div.sticky-scene (100vh sticky)
      div.phone-3d (back face, pre-rotated -180deg)
  section.mobile-back-text (heading, body, 4 cards)
  section.display-intro (heading, body, 2 cards above)
  div#master-pin-wrapper (GSAP pin 4000px)
    div.product-showcase#productShowcase (250vh)
      div.display-section
      div.cable-layer
      div.accessories-text#accessoriesText
      div.keyboard-section
  section.display-cards-below (2 cards below)
  div.info-belt.belt-2
  section.testimonials
  section.location
  section.journey
  section.faq
  footer
  script (gsap CDN)
  script (ScrollTrigger CDN)
  script (lenis CDN)
  script (script.js)
```

### Reveal Order Rules

- Section headings and body text always appear BEFORE or AFTER the interactive component in the DOM
- Text NEVER sits inside a sticky or pinned container (except #accessoriesText which is part of the display component internal architecture)
- Feature cards above the component: desktop only, hidden on mobile via CSS
- Feature cards below the component: visible on all breakpoints

### Overlap Prevention Rules

1. GSAP pin creates a pin spacer — never wrap #master-pin-wrapper in overflow hidden
2. CSS sticky requires overflow visible on all ancestors of .sticky-scene
3. Never use overflow hidden on body or html — breaks both sticky and GSAP pin
4. ScrollTrigger.refresh() must be called after ALL ScrollTriggers are created
5. One Lenis instance only — global, shared across all sections
6. All GSAP plugin registrations happen once at the top of the main script
7. Feature cards use z-index 0 in normal flow; they do not overlap sticky elements

---

## 6. Component Mapping

### Section 2: Hero
- Component: Custom video or canvas scroll-controlled animation
- Mechanism: CSS sticky parent .hero-scroll-track (300vh), .hero-sticky-scene (100vh sticky)
- GSAP: ScrollTrigger maps scroll progress to video currentTime
- Connection to next section: hero-scroll-track ends, info-belt begins (normal flow)

### Section 4: Front Mobile
- Component: mobile-mockup.html (extracted, Tailwind removed, pure CSS)
- HTML: .scroll-track (400vh) > .sticky-scene (100vh sticky) > .phone-3d
- GSAP ScrollTrigger: trigger #phoneFrontTrack, start top top, end bottom bottom, scrub true
- Timeline: Show front face at rotationY 0, animate feature-text-1, glare, edge brightness
- DO NOT rotate to -180 in this section — that belongs to Section 5

### Section 5: Back Mobile
- Component: Same .phone-3d HTML but in a separate .scroll-track div
- Start state of phone: rotationY -180 set as CSS initial style, so back face is visible immediately
- GSAP ScrollTrigger: trigger #phoneBackTrack, separate timeline
- Text section: After the scroll-track in normal DOM flow

### Section 6 and 7: Display and Keyboard
- Component: Extracted directly from the-final-component/
- HTML structure from the-final-component/display-keyboard.html
- CSS from the-final-component/style.css (inline or linked)
- JS from the-final-component/script.js (inline or linked, do NOT re-run keyboard build if already in page)
- GSAP ScrollTrigger: trigger #master-pin-wrapper, pin true, end +=4000, scrub 1.2, anticipatePin 1
- Accessories text: internal to component at top 100vh inside .product-showcase
- Cable: internal SVG driven by onUpdate clip-path logic
- Keyboard: internal, powered on at 80% progress

---

## 7. Responsive Rules

### Desktop (above 1024px)
- Feature cards: 2 above the component, 2 below the component
- Cards placed left and right of component is FORBIDDEN
- CORRECT LAYOUT: flex-direction column, align-items center, cards stacked vertically, component in center
- Testimonials: show 3 cards at once (prev/active/next)
- Location: two-column grid (left text, right map)
- Timeline: vertical
- Footer: 5-column grid

### Tablet (768px to 1024px)
- Feature cards: same as desktop (2 above, component, 2 below)
- CSS variables: --u min(5vw, 36px), --device-width min(85vw, 800px)
- Testimonials: show 1 active + partial prev/next
- Location: two-column grid (maintained)
- Footer: 2-column grid

### Mobile (below 768px)
- Feature cards: all 4 below the component
- CSS variables: --u min(6vw, 24px), --device-width min(92vw, 460px)
- Testimonials: single card view, full width
- Location: single column (address top, map bottom)
- Footer: single column
- Info belt: same behavior, smaller font
- section padding: 72px 0

---

## 8. Integration Notes

### Critical Constraints (Never Violate)

1. One Lenis instance. Initialize once at the top of script.js. All ScrollTriggers use this.

2. One gsap.registerPlugin(ScrollTrigger) call. At the very top before any timeline.

3. Script loading order (bottom of body):
   - gsap CDN
   - ScrollTrigger CDN
   - lenis CDN
   - script.js

4. buildMechKeyboard() runs ONCE. Guard: if (document.getElementById('plate').children.length > 1) return;

5. ScrollTrigger.refresh() after ALL triggers are created. Call at end of script.js.

6. #master-pin-wrapper must NEVER have a parent with overflow hidden. GSAP pin does not work inside overflow-hidden containers.

7. .sticky-scene must NEVER have an ancestor with overflow hidden or overflow auto. CSS sticky fails inside overflow-hidden containers.

8. CSS class namespacing: scope laptop decorative keys as .display-section .laptop-key to avoid collision with mechanical keyboard .key class.

9. isPoweredOn state variable is used by the display+keyboard component. Do not declare another isPoweredOn in any other script block.

10. The 250vh height is sacred. .product-showcase must be exactly height 250vh. If changed, update keyboard-section top 150vh and y -150vh GSAP tween proportionally.

11. transform-origin top center on .lid must never change. This is the hinge point.

12. fill none on both cable SVG paths must never be removed. Without it, browsers fill the path with solid black.

13. vector-effect non-scaling-stroke must pair with fill none on cable paths.

14. clip-path: inset(0 0 100% 0) is the cable initial hidden state. Do not use stroke-dasharray — it breaks with non-scaling-stroke.

15. Feature cards are NEVER placed left and right of the component. Cards go above and below only.

16. The back mobile section heading and cards appear ONLY AFTER the sticky releases. Text must be in the static section after .scroll-track, never inside .sticky-scene.

17. The display opening heading/cards appear BEFORE #master-pin-wrapper in the DOM (for text above) and AFTER it (for text below). Never inside it.

18. The accessoriesText div (#accessoriesText at top 100vh in .product-showcase) is part of the component internal architecture. Its copy: "Accessories — Get the best and finest tech accessories at an affordable price."

### Framework Portability Notes

- All GSAP, Lenis, DOM manipulation: wrap in DOMContentLoaded or framework mount lifecycle
- For React: useEffect with empty dependency array, return cleanup function
- For Vue 3: onMounted / onUnmounted
- For Next.js App Router: 'use client' directive required
- No server-side assumptions: all code uses window, document, requestAnimationFrame
- No module bundler required for vanilla implementation — CDN scripts only

---

## 9. Z-Index Stack (Full Page)

| Z-index | Element |
|---------|---------|
| -1 | #particles (fixed, floating dots background) |
| 0 | Normal content flow |
| 5 | Sticky phone scene (.sticky-scene) |
| 10 | Cable layer, keyboard section, accessories text (inside product-showcase) |
| 20 | Feature text panels (.feature-text-1, .feature-text-2) |
| 30 | Info belts (must appear above sticky during overlap) |
| 50 | Testimonial cards active state |
| 100 | Reserved for future nav if added |

---

## 10. What Is Currently Broken in tecnomart-landing-page.html

After reading all files, the following issues exist in the current implementation:

1. Has a nav element — Must be removed. No nav bar. Title is H1 only.
2. Feature cards are placed LEFT and RIGHT of the mobile component — Must be changed to ABOVE and BELOW.
3. Mobile back section text overlaps the phone — Text must be placed in a static section AFTER the sticky scroll-track.
4. Display + Keyboard component not faithfully extracted — JavaScript scope issues (buildMechKeyboard called in wrong context, duplicate GSAP instances, keyboard re-appearing on scroll).
5. Missing ScrollTrigger.refresh() after all triggers are created.
6. Testimonial section is landscape cards, not 9:16 portrait format — Needs to be rebuilt.
7. "Our Journey" section is in wrong position — Must move below "Where to Find Us".
8. Hero section uses static text layout — Needs to be converted to scroll-driven video frames.
9. Info Belt 2 is missing — Must be added after the keyboard section.
10. #master-pin-wrapper CSS has overflow hidden in the-final-component/style.css — Must be overflow visible or removed.
11. Keyboard built twice — Old script.js had global + DOMContentLoaded duplicate execution. Must be unified.
12. Phone back section shows the same forward-facing phone — The back track phone must start at rotationY -180.

---

## 11. Implementation Order

1. Create index.html — clean HTML skeleton following the DOM order above
2. Create styles.css — design tokens, layout, components, responsive rules
3. Extract and inline the-final-component CSS and JS
4. Write unified script.js — one Lenis, one registerPlugin, all ScrollTriggers, ScrollTrigger.refresh() at end
5. Test each section in isolation (no scroll conflicts)
6. Integration test: slow manual scroll from top to bottom, verify no overlaps

---

This document is the single source of truth. Any implementation decision not covered here must be resolved by asking the user, not by making assumptions.

