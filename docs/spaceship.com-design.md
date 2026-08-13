---
version: alpha
name: Spaceship Dark Odyssey
description: A high-contrast, editorial dark system with electric blue emphasis and rounded utility controls.
colors:
  primary: "#475BFF"
  primary-60: "#6C7BFF"
  primary-70: "#8490FF"
  secondary: "#18191B"
  tertiary: "#374151"
  neutral: "#F9F9F9"
  surface: "#202124"
  on-surface: "#F9F9F9"
  background: "#18191B"
  error: "#EF4444"
  border: "#374151"
typography:
  headline-display:
    fontFamily: "GB Proxima Nova"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "60px"
    letterSpacing: "-0.208px"
  headline-lg:
    fontFamily: "Times New Roman"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: "53px"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Times New Roman"
    fontSize: "35px"
    fontWeight: 600
    lineHeight: "42px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Times New Roman"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: "34px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "GB Proxima Nova"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: "33px"
    letterSpacing: "0.208px"
  body-md:
    fontFamily: "GB Proxima Nova"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0.208px"
  body-sm:
    fontFamily: "GB Proxima Nova"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0.2px"
  label-lg:
    fontFamily: "GB Proxima Nova"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "20px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "GB Proxima Nova"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "18px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "GB Proxima Nova"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 2px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 186px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
    height: "56px"
  chip:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  navbar-link:
    backgroundColor: "transparent"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Spaceship Dark Odyssey

## Overview
Spaceship feels like a futuristic, high-contrast SaaS and consumer-tech brand with an editorial streak. The experience is dramatic but still highly usable, balancing bold utility controls with a cinematic hero presentation. It targets users who want fast navigation and confident conversion flows, while the tone stays premium, energetic, and slightly playful.

## Colors
- **Primary (#475BFF):** A vivid electric blue used for the main call to action, feature highlights, and the center glow of the hero. It should feel energetic and space-like, not playful or neon-heavy.
- **Primary-60 (#6C7BFF) and Primary-70 (#8490FF):** Softer blue steps for hover states, gradients, and layered accents where the brand needs depth without losing brightness.
- **Background / Secondary (#18191B):** The core midnight charcoal base for the page, nav, cards, and utility surfaces. This is the dominant field color and establishes the dark-mode character.
- **Surface (#202124):** A slightly lifted dark surface for inputs and floating controls when a subtle separation from the background is needed.
- **On-surface / Neutral (#F9F9F9):** Crisp white text and icon color used for primary legibility against the dark palette.
- **Tertiary / Border (#374151):** A muted slate used for hairline borders, dividers, and restrained component outlines.
- **Error (#EF4444):** Reserved for validation and destructive states; it should stay minimal and never compete with the blue accent.

## Typography
The system uses a dual-voice typographic setup: GB Proxima Nova for modern interface text and Times New Roman for editorial headlines and link-like treatments. Headline-display is large, heavy, and tightly tracked for the main hero message, while headline-lg through headline-sm preserve a classic serif authority for secondary marketing content. Body text is clean and compact, with label sizes set in strong sans-serif weights for navigation, pills, and buttons. Uppercase microcopy appears in small UI labels, often with expanded tracking to create a technical, premium feel.

## Layout
The layout is built on a centered hero composition with strong vertical stacking and generous breathing room between major clusters. Spacing follows a simple, deliberate rhythm: small 12px steps for micro spacing, 24px for standard grouping, 40px for section separation, and very large space reserved for the hero’s visual staging. Navigation stretches horizontally with tightly spaced links, while the central search module and promo cards stay locked to a compact fixed-width core. Sections should feel spacious, but individual controls remain dense and efficient.

## Elevation & Depth
The design is mostly flat in the traditional shadow sense; depth comes from contrast, layering, and tonal separation rather than heavy elevation. Dark cards and controls sit above the background through subtle border definition and slightly lighter surfaces instead of large drop shadows. The hero image treatment and bright blue glow create the strongest sense of depth, making the page feel cinematic without visual clutter. Use shadows sparingly, and prefer borders, translucency, and contrast to indicate hierarchy.

## Shapes
The shape language is soft and highly rounded for interactive controls, especially buttons, tabs, search fields, and chips. Full-pill radii dominate the interface, giving the system a friendly and modern utility feel. Cards and larger content containers use a modest 8px radius, which keeps the layout grounded while allowing the controls to remain expressive and approachable.

## Components
Buttons are the clearest expression of the brand. `button-primary` is the main CTA: electric blue, pill-shaped, bold, and compact at 40px height with 12px 20px padding. `button-secondary` is also pill-shaped but stays dark, using white text and only subtle contrast so it can support actions without pulling focus from the primary CTA. `button-tertiary` should remain minimal and text-only for lightweight navigation or editorial links.

Cards use `card` styling: dark background, 1px slate border, 8px radius, and 16px padding. They should feel like floating utility panels rather than elevated blocks. Inputs use the `input` treatment with a dark surface, full pill rounding, and generous horizontal padding so the search bar reads as the central action surface. Chips and pills should follow `chip` and `badge`: compact, rounded, high-contrast, and easy to scan. Navbar links use `navbar-link` with restrained spacing and no decorative framing, keeping the top-level navigation clean and efficient.

Lists, tooltips, checkboxes, and radio buttons are not prominent in the source, so keep them visually quiet if introduced: use the border color, soft radii, and neutral text without introducing new visual weight. Any auxiliary status element should feel integrated into the same dark, polished system rather than like a separate admin UI.

## Do's and Don'ts
- Do keep the primary CTA electric blue and pill-shaped.
- Do use high-contrast white text against deep charcoal surfaces.
- Do prefer borders and tonal shifts over heavy shadows.
- Do reserve serif typography for editorial headlines and link-like emphasis.
- Don't introduce bright warm colors that break the cool space-like mood.
- Don't use sharp corners on buttons, chips, or search fields.
- Don't over-stack elevation; the system should feel layered, not shadow-heavy.
- Don't make body copy overly large or loose; the interface should stay dense and efficient.