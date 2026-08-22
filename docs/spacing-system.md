# TecnoMart Spacing System & Layout Tokens Specification

## 1. Overview & Core Philosophy
The TecnoMart design system adheres strictly to the **8pt Baseline Grid** (with a 4pt micro-step for fine alignment) to ensure optical balance, scannability, and predictable responsiveness across mobile, tablet, and ultra-wide viewports.

---

## 2. Base Scale Tokens

| Token | CSS Variable | Rem Value | Pixel Value | Typical Application |
|---|---|---|---|---|
| `--space-1` | `var(--space-1)` | `0.25rem` | `4px` | Micro gap between icon & inline text |
| `--space-2` | `var(--space-2)` | `0.5rem` | `8px` | Gap between label and heading; small badge padding |
| `--space-3` | `var(--space-3)` | `0.75rem` | `12px` | Inset padding on buttons; tight metadata gaps |
| `--space-4` | `var(--space-4)` | `1rem` | `16px` | Gap between heading and body copy; standard input padding |
| `--space-5` | `var(--space-5)` | `1.25rem` | `20px` | Card internal inset padding (compact) |
| `--space-6` | `var(--space-6)` | `1.5rem` | `24px` | Standard card internal padding; column grid gap |
| `--space-8` | `var(--space-8)` | `2rem` | `32px` | Spacious card padding; major grid gaps |
| `--space-10` | `var(--space-10)` | `2.5rem` | `40px` | Distance between section heading and content block |
| `--space-12` | `var(--space-12)` | `3rem` | `48px` | Compact section vertical rhythm |
| `--space-16` | `var(--space-16)` | `4rem` | `64px` | Standard block separation |
| `--space-20` | `var(--space-20)` | `5rem` | `80px` | Section padding on mobile / compact views |
| `--space-24` | `var(--space-24)` | `6rem` | `96px` | Standard desktop section padding |
| `--space-32` | `var(--space-32)` | `8rem` | `128px` | Hero and closing conversion section padding |

---

## 3. Semantic Fluid Section Tokens

```css
:root {
  /* Narrative pacing curves via CSS clamp() */
  --section-hero: clamp(5rem, 10vw, 8rem);     /* 80px → 128px */
  --section-primary: clamp(4rem, 8vw, 7rem);   /* 64px → 112px */
  --section-standard: clamp(3.5rem, 6vw, 6rem);/* 56px → 96px */
  --section-compact: clamp(2rem, 4vw, 3.5rem); /* 32px → 56px */
}
```

---

## 4. Component Application Rules

### 4.1 Card Anatomy & Padding Hierarchy
- **Compact Cards (Tags / Small Spec Blocks):** Inset `padding: 10px 14px` (`--space-2` / `--space-3`).
- **Standard Product & Feature Cards:** Inset `padding: 24px` (`--space-6`) on desktop, `20px` on mobile.
- **Hero Banners & Feature Highlights:** Inset `padding: clamp(24px, 4vw, 48px)`.

### 4.2 Proximity & Vertical Flow
- **Eyebrow to Title:** `8px` (`--space-2`).
- **Title to Body Paragraph:** `12px – 16px` (`--space-3` to `--space-4`).
- **Body to CTA Button:** `20px – 24px` (`--space-5` to `--space-6`).
- **Section Heading Group to Content Grid:** `48px – 64px` (`--space-12` to `--space-16`).

---

## 5. Density Modes
- **Compact:** Used in dense technical data tables, hardware configurator pickers, and mobile navigation drawers.
- **Comfortable:** Default landing page experience (Popular Models, Where To Find Us, FAQs).
- **Spacious:** Applied exclusively to Hero sequences, 3D Canvas showcases, and interactive 3D setup showcases.
