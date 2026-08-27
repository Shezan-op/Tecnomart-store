# Archive: Main Branch Components (`old-components`)

This directory contains the original dark cybernetic 3D & interactive components from the initial `main` branch. 
They have been preserved here so you can safely merge or override the `main` branch with the light-theme `redesign` while retaining full access to all previous 3D models, particle canvasses, and interactive components.

---

## 📁 Component Directory

| Component | Description | Style / Asset Dependencies |
| :--- | :--- | :--- |
| **`ParticleText.jsx`** | Interactive HTML5 Canvas particle typography engine with mouse repulsion physics. | Standalone Canvas |
| **`Footer.jsx`** | Original dark cybernetic footer with particle text integration & link groups. | `Footer.module.css` |
| **`Keyboard.jsx` / `ProKeyboard.jsx`** | Interactive mechanical keyboard 3D showcase with custom switches, keycap lighting, and sound toggles. | `Keyboard.module.css` / `ProKeyboard.module.css` |
| **`ProDisplay.jsx`** | 3D Laptop display viewport with interactive hinges and OLED screen simulation. | `ProDisplay.module.css` |
| **`MobileFront.jsx` / `MobileBack.jsx`** | 3D multi-angle smartphone rendering with dual camera lens glass & finish reflections. | `*.module.css` |
| **`MobileShowcaseWrapper.jsx`** | GSAP ScrollTrigger wrapper for synchronized mobile rotation. | `MobileShowcaseWrapper.module.css` |
| **`SharedPhoneModel.jsx`** | Reusable 3D phone model mesh and geometry calculations. | `SharedPhoneModel.module.css` |
| **`HeroSequence.jsx`** | Cybernetic cinematic hero sequence with canvas particle mesh and 3D device stage. | `HeroSequence.module.css` |
| **`ScrollStackSection.jsx`** | Sticky stacking cards offering preview with smooth scroll pinning. | Framer Motion |
| **`PopularModels.jsx`** | Accordion-based popular model comparison view with specs matrix. | Framer Motion |
| **`BrandLoop.jsx`** | Infinite marquee of authorized OEM brand logos (Apple, Intel, NVIDIA, ASUS, Samsung, etc.). | Tailwind CSS |
| **`Testimonials.jsx`** | Live Google Reviews and Instagram Reel embed widgets powered by Jotform. | Jotform Widget Embeds |
| **`WhereToFindUs.jsx`** | Dark theme store location and interactive directions view. | Lucide Icons |
| **`OurJourney.jsx`** | 17-year operational timeline with horizontal Lenis scroll pinning. | Framer Motion & Lenis |
| **`CustomSetupPromo.jsx`** | Dark cyber custom PC call-to-action with burn-in certification trust badges. | Framer Motion |
| **`CardNav.jsx`** | Floating card-based mobile navigation bar. | `CardNav.css` |
| **`Navigation.jsx`** | Dark cyber top navigation header with active glow indicators. | Tailwind CSS |
| **`BackgroundArc.jsx`** | Glowing ambient vector arc for background lighting. | SVG |
| **`InfoBelt.jsx`** | Dual-direction animated ticker marquee belt. | `InfoBelt.module.css` |

---

## 🛠️ Usage Example

If you ever wish to re-introduce any of these components into a page:
```jsx
import ProKeyboard from '@/old-components/ProKeyboard';
import ParticleText from '@/old-components/ParticleText';
import Testimonials from '@/old-components/Testimonials';
```
