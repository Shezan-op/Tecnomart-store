/* ============================================================
   SCRIPT.JS — Product Showcase
   One master GSAP timeline. Eight scenes.
   Zero dynamic cable geometry. Zero resize recalculation.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

/* ── Smooth Scroll (Lenis) ── */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0, 0);

/* ── DOM refs ── */
const showcase       = document.getElementById('productShowcase');
const displaySection = document.getElementById('displaySection');
const displayUnit    = document.getElementById('displayUnit');
const displayPanel   = document.getElementById('displayPanel');
const lidEdge        = document.getElementById('lidEdge');
const accessoriesText= document.getElementById('accessoriesText');
const keyboardSection= document.getElementById('keyboardSection');
const keyboardWrap   = document.getElementById('keyboardContainer');
const cableBase      = document.querySelector('.cable-base');
const cableReveal    = document.getElementById('hardwareCable');

/* ── State ── */
let isPoweredOn = false;
let themeInterval = null;
let themes = ['theme-white', 'theme-blue'];
let themeIndex = 0;

/* ============================================================
   BUILD PARTICLES
   ============================================================ */
(function buildParticles() {
  const c = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    const s = Math.random() * 4 + 2;
    d.style.cssText = `
      width:${s}px; height:${s}px;
      left:${Math.random()*100}vw;
      animation-delay:${Math.random()*20}s;
      animation-duration:${Math.random()*10+15}s;
    `;
    c.appendChild(d);
  }
})();

/* ============================================================
   BUILD LAPTOP KEYBOARD WELL
   ============================================================ */
(function buildLaptopKeys() {
  const well = document.getElementById('laptopKeyboardWell');
  if (!well) return;
  for (let i = 0; i < 70; i++) {
    const k = document.createElement('div');
    k.className = 'laptop-key';
    if (i === 57) k.classList.add('spacebar');
    if ([13, 27, 40, 54, 68].includes(i)) k.classList.add('mod');
    well.appendChild(k);
  }
})();

/* ============================================================
   BUILD MECHANICAL KEYBOARD
   ============================================================ */
const layout = [
  { t:'acc',   x:0,     y:0,    w:1,    h:1, l:[{text:'Esc',         pos:'tl'}] },
  { t:'alpha', x:2,     y:0,    w:1,    h:1, l:[{text:'F1',          pos:'tl'}] },
  { t:'alpha', x:3,     y:0,    w:1,    h:1, l:[{text:'F2',          pos:'tl'}] },
  { t:'alpha', x:4,     y:0,    w:1,    h:1, l:[{text:'F3',          pos:'tl'}] },
  { t:'alpha', x:5,     y:0,    w:1,    h:1, l:[{text:'F4',          pos:'tl'}] },
  { t:'mod',   x:6.5,   y:0,    w:1,    h:1, l:[{text:'F5',          pos:'tl'}] },
  { t:'mod',   x:7.5,   y:0,    w:1,    h:1, l:[{text:'F6',          pos:'tl'}] },
  { t:'mod',   x:8.5,   y:0,    w:1,    h:1, l:[{text:'F7',          pos:'tl'}] },
  { t:'mod',   x:9.5,   y:0,    w:1,    h:1, l:[{text:'F8',          pos:'tl'}] },
  { t:'alpha', x:11,    y:0,    w:1,    h:1, l:[{text:'F9',          pos:'tl'}] },
  { t:'alpha', x:12,    y:0,    w:1,    h:1, l:[{text:'F10',         pos:'tl'}] },
  { t:'alpha', x:13,    y:0,    w:1,    h:1, l:[{text:'F11',         pos:'tl'}] },
  { t:'alpha', x:14,    y:0,    w:1,    h:1, l:[{text:'F12',         pos:'tl'}] },
  { t:'knob',  x:15.25, y:0,    w:1,    h:1 },

  { t:'mod',   x:0,     y:1.25, w:1,    h:1, l:[{text:'~',pos:'tr'},{text:'`',pos:'bl'}] },
  { t:'alpha', x:1,     y:1.25, w:1,    h:1, l:[{text:'!',pos:'tr'},{text:'1',pos:'bl'}] },
  { t:'alpha', x:2,     y:1.25, w:1,    h:1, l:[{text:'@',pos:'tr'},{text:'2',pos:'bl'}] },
  { t:'alpha', x:3,     y:1.25, w:1,    h:1, l:[{text:'#',pos:'tr'},{text:'3',pos:'bl'}] },
  { t:'alpha', x:4,     y:1.25, w:1,    h:1, l:[{text:'$',pos:'tr'},{text:'4',pos:'bl'}] },
  { t:'alpha', x:5,     y:1.25, w:1,    h:1, l:[{text:'%',pos:'tr'},{text:'5',pos:'bl'}] },
  { t:'alpha', x:6,     y:1.25, w:1,    h:1, l:[{text:'^',pos:'tr'},{text:'6',pos:'bl'}] },
  { t:'alpha', x:7,     y:1.25, w:1,    h:1, l:[{text:'&',pos:'tr'},{text:'7',pos:'bl'}] },
  { t:'alpha', x:8,     y:1.25, w:1,    h:1, l:[{text:'*',pos:'tr'},{text:'8',pos:'bl'}] },
  { t:'alpha', x:9,     y:1.25, w:1,    h:1, l:[{text:'(',pos:'tr'},{text:'9',pos:'bl'}] },
  { t:'alpha', x:10,    y:1.25, w:1,    h:1, l:[{text:')',pos:'tr'},{text:'0',pos:'bl'}] },
  { t:'alpha', x:11,    y:1.25, w:1,    h:1, l:[{text:'_',pos:'tr'},{text:'-',pos:'bl'}] },
  { t:'alpha', x:12,    y:1.25, w:1,    h:1, l:[{text:'+',pos:'tr'},{text:'=',pos:'bl'}] },
  { t:'mod',   x:13,    y:1.25, w:2,    h:1, l:[{text:'← Backspace', pos:'ml'}] },
  { t:'mod',   x:15.25, y:1.25, w:1,    h:1, l:[{text:'Delete',pos:'ml'}] },

  { t:'mod',   x:0,     y:2.25, w:1.5,  h:1, l:[{text:'↹ Tab',pos:'ml'}] },
  { t:'alpha', x:1.5,   y:2.25, w:1,    h:1, l:[{text:'Q',pos:'tl'}], brand:'Qualcomm',   route:'/products/qualcomm' },
  { t:'alpha', x:2.5,   y:2.25, w:1,    h:1, l:[{text:'W',pos:'tl'}] },
  { t:'alpha', x:3.5,   y:2.25, w:1,    h:1, l:[{text:'E',pos:'tl'}] },
  { t:'alpha', x:4.5,   y:2.25, w:1,    h:1, l:[{text:'R',pos:'tl'}], brand:'Razer',      route:'/products/razer' },
  { t:'alpha', x:5.5,   y:2.25, w:1,    h:1, l:[{text:'T',pos:'tl'}] },
  { t:'alpha', x:6.5,   y:2.25, w:1,    h:1, l:[{text:'Y',pos:'tl'}] },
  { t:'alpha', x:7.5,   y:2.25, w:1,    h:1, l:[{text:'U',pos:'tl'}] },
  { t:'alpha', x:8.5,   y:2.25, w:1,    h:1, l:[{text:'I',pos:'tl'}] },
  { t:'alpha', x:9.5,   y:2.25, w:1,    h:1, l:[{text:'O',pos:'tl'}] },
  { t:'alpha', x:10.5,  y:2.25, w:1,    h:1, l:[{text:'P',pos:'tl'}] },
  { t:'alpha', x:11.5,  y:2.25, w:1,    h:1, l:[{text:'{',pos:'tr'},{text:'[',pos:'bl'}] },
  { t:'alpha', x:12.5,  y:2.25, w:1,    h:1, l:[{text:'}',pos:'tr'},{text:']',pos:'bl'}] },
  { t:'alpha', x:13.5,  y:2.25, w:1.5,  h:1, l:[{text:'|',pos:'tr'},{text:'\\',pos:'bl'}] },
  { t:'mod',   x:15.25, y:2.25, w:1,    h:1, l:[{text:'PgUp',pos:'ml'}] },

  { t:'mod',   x:0,     y:3.25, w:1.75, h:1, l:[{text:'Caps Lock',pos:'ml'}] },
  { t:'alpha', x:1.75,  y:3.25, w:1,    h:1, l:[{text:'A',pos:'tl'}], brand:'Asus',     route:'/products/asus' },
  { t:'alpha', x:2.75,  y:3.25, w:1,    h:1, l:[{text:'S',pos:'tl'}], brand:'Samsung',  route:'/products/samsung' },
  { t:'alpha', x:3.75,  y:3.25, w:1,    h:1, l:[{text:'D',pos:'tl'}], brand:'Dell',     route:'/products/dell' },
  { t:'alpha', x:4.75,  y:3.25, w:1,    h:1, l:[{text:'F',pos:'tl'}] },
  { t:'alpha', x:5.75,  y:3.25, w:1,    h:1, l:[{text:'G',pos:'tl'}] },
  { t:'alpha', x:6.75,  y:3.25, w:1,    h:1, l:[{text:'H',pos:'tl'}] },
  { t:'alpha', x:7.75,  y:3.25, w:1,    h:1, l:[{text:'J',pos:'tl'}] },
  { t:'alpha', x:8.75,  y:3.25, w:1,    h:1, l:[{text:'K',pos:'tl'}] },
  { t:'alpha', x:9.75,  y:3.25, w:1,    h:1, l:[{text:'L',pos:'tl'}], brand:'Lenovo',   route:'/products/lenovo' },
  { t:'alpha', x:10.75, y:3.25, w:1,    h:1, l:[{text:':',pos:'tr'},{text:';',pos:'bl'}] },
  { t:'alpha', x:11.75, y:3.25, w:1,    h:1, l:[{text:'"',pos:'tr'},{text:"'",pos:'bl'}] },
  { t:'acc',   x:12.75, y:3.25, w:2.25, h:1, l:[{text:'← Enter',pos:'ml'}] },
  { t:'mod',   x:15.25, y:3.25, w:1,    h:1, l:[{text:'PgDn',pos:'ml'}] },

  { t:'mod',   x:0,     y:4.25, w:2.25, h:1, l:[{text:'⇧ Shift',pos:'ml'}] },
  { t:'alpha', x:2.25,  y:4.25, w:1,    h:1, l:[{text:'Z',pos:'tl'}] },
  { t:'alpha', x:3.25,  y:4.25, w:1,    h:1, l:[{text:'X',pos:'tl'}] },
  { t:'alpha', x:4.25,  y:4.25, w:1,    h:1, l:[{text:'C',pos:'tl'}] },
  { t:'alpha', x:5.25,  y:4.25, w:1,    h:1, l:[{text:'V',pos:'tl'}] },
  { t:'alpha', x:6.25,  y:4.25, w:1,    h:1, l:[{text:'B',pos:'tl'}] },
  { t:'alpha', x:7.25,  y:4.25, w:1,    h:1, l:[{text:'N',pos:'tl'}] },
  { t:'alpha', x:8.25,  y:4.25, w:1,    h:1, l:[{text:'M',pos:'tl'}] },
  { t:'alpha', x:9.25,  y:4.25, w:1,    h:1, l:[{text:'<',pos:'tr'},{text:',',pos:'bl'}] },
  { t:'alpha', x:10.25, y:4.25, w:1,    h:1, l:[{text:'>',pos:'tr'},{text:'.',pos:'bl'}] },
  { t:'alpha', x:11.25, y:4.25, w:1,    h:1, l:[{text:'?',pos:'tr'},{text:'/',pos:'bl'}] },
  { t:'mod',   x:12.25, y:4.25, w:1.75, h:1, l:[{text:'⇧ Shift',pos:'ml'}] },
  { t:'acc',   x:14,    y:4.25, w:1,    h:1, l:[{text:'↑',pos:'c'}] },
  { t:'mod',   x:15.25, y:4.25, w:1,    h:1, l:[{text:'End',pos:'ml'}] },

  { t:'mod',   x:0,     y:5.25, w:1.25, h:1, l:[{text:'Ctrl',pos:'ml'}] },
  { t:'mod',   x:1.25,  y:5.25, w:1.25, h:1, l:[{text:'Win',pos:'ml'}] },
  { t:'mod',   x:2.5,   y:5.25, w:1.25, h:1, l:[{text:'Alt',pos:'ml'}] },
  { t:'acc',   x:3.75,  y:5.25, w:6.25, h:1, l:[] },
  { t:'acc',   x:10,    y:5.25, w:1,    h:1, l:[{text:'Alt',pos:'ml'}] },
  { t:'mod',   x:11,    y:5.25, w:1,    h:1, l:[{text:'Fn',pos:'ml'}] },
  { t:'mod',   x:12,    y:5.25, w:1,    h:1, l:[{text:'Ctrl',pos:'ml'}] },
  { t:'acc',   x:13,    y:5.25, w:1,    h:1, l:[{text:'←',pos:'c'}] },
  { t:'acc',   x:14,    y:5.25, w:1,    h:1, l:[{text:'↓',pos:'c'}] },
  { t:'acc',   x:15.25, y:5.25, w:1,    h:1, l:[{text:'→',pos:'c'}] },
];

(function buildMechKeyboard() {
  const plate = document.getElementById('plate');
  if (!plate) return;

  layout.forEach(k => {
    const key = document.createElement('div');
    key.className = `key ${k.t}`;
    key.style.left   = `calc(${k.x} * var(--u))`;
    key.style.top    = `calc(${k.y} * var(--u))`;
    key.style.width  = `calc(${k.w} * var(--u))`;
    key.style.height = `calc(${k.h} * var(--u))`;

    if (k.t === 'knob') {
      key.innerHTML = `<div class="knob-body"></div>`;
    } else {
      const legends = (k.l || []).map(leg =>
        `<span class="legend legend-${leg.pos}">${leg.text}</span>`
      ).join('');
      key.innerHTML = `
        <div class="keycap">
          <div class="keycap-top">${legends}</div>
        </div>
      `;
    }

    // Store brand / route
    if (k.route) {
      key.dataset.route = k.route;
      key.dataset.brand = k.brand;
    }

    plate.appendChild(key);
  });
})();

/* ============================================================
   KEYBOARD POWER & THEME CYCLE
   ============================================================ */
function powerOn() {
  if (isPoweredOn) return;
  isPoweredOn = true;

  keyboardWrap.classList.add('theme-white');
  gsap.to('.cable-core', { stroke: '#e2e0d8', duration: 0.5 });

  // Start 10-second crossfade loop
  themeInterval = setInterval(() => {
    themeIndex = (themeIndex + 1) % 2;
    keyboardWrap.classList.remove(...themes);
    keyboardWrap.classList.add(themes[themeIndex]);

    // Update cable core color to match theme
    if (themes[themeIndex] === 'theme-blue') {
      gsap.to('.cable-core', { stroke: '#111', duration: 1 });
    } else {
      gsap.to('.cable-core', { stroke: '#e2e0d8', duration: 1 });
    }
  }, 10000);

  // Allow interaction after a short delay (feels intentional)
  setTimeout(() => {
    keyboardWrap.classList.add('keyboard-interactive');
    attachKeyClickHandlers();
  }, 1200);
}

function powerOff() {
  if (!isPoweredOn) return;
  isPoweredOn = false;
  themeIndex = 0;
  clearInterval(themeInterval);
  keyboardWrap.classList.remove(...themes, 'keyboard-interactive');
  
  // Reset cable core to black when powering off
  gsap.to('.cable-core', { stroke: '#111', duration: 0.5 });
}

/* ── Key click → redirect ── */
function attachKeyClickHandlers() {
  document.querySelectorAll('.key[data-route]').forEach(key => {
    key.addEventListener('click', () => {
      const route = key.dataset.route;
      const brand = key.dataset.brand;
      // Visual feedback
      const keycap = key.querySelector('.keycap');
      if (keycap) {
        keycap.style.transform = 'translateY(2px)';
        setTimeout(() => keycap.style.transform = '', 150);
      }
      // Navigate
      setTimeout(() => {
        window.location.href = route;
      }, 180);
    });
  });
}

/* ============================================================
   GSAP — MASTER SCROLL TIMELINE
   ============================================================

   Scroll budget  (relative to showcase top):
     0%  - 20%  : Display opens
     20% - 30%  : Hold (nothing moves)
     30% - 80%  : Pan the showcase UP by 150vh to reveal bottom
                  (While panning: Accessories fade in, Cable draws)
     80% - 100% : Cable fully reaches keyboard, Keyboard powers on

   ============================================================ */

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#master-pin-wrapper',
    start: 'top top',
    end: '+=4000', // 4000px of scrolling for full control
    scrub: 1.2,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      // Hardware Cable manual update for clipPath
      // Cable reveal starts after 45% of the total scroll and finishes at 80%
      let progress = 0;
      if (self.progress > 0.45 && self.progress <= 0.8) {
        progress = (self.progress - 0.45) / 0.35;
      } else if (self.progress > 0.8) {
        progress = 1;
      }
      
      const clipPercent = 100 * (1 - progress);
      document.querySelector('.cable-svg').style.clipPath = `inset(0 0 ${clipPercent.toFixed(2)}% 0)`;
      
      // Keyboard power on at 80%
      if (self.progress >= 0.8 && !isPoweredOn) powerOn();
      if (self.progress < 0.8 && isPoweredOn) powerOff();
    }
  }
});

// 0% - 20%: Display Opens
tl.to('#displayUnit', { z: 0, ease: 'power1.inOut', duration: 0.05 });
tl.to('#displayPanel', { rotateX: 110, ease: 'power2.inOut', duration: 0.15 }, 0.05);
tl.to('#displayUnit', { yPercent: 40, ease: 'power2.inOut', duration: 0.15 }, 0.05);
tl.to('#lidEdge', { opacity: 0, duration: 0.05, ease: 'power1.in' }, 0.05);

// 20% - 30%: Hold
tl.to({}, { duration: 0.1 });

// 30% - 80%: Pan container UP to reveal the keyboard
tl.to('#productShowcase', { 
  y: '-150vh', 
  ease: 'power2.inOut', 
  duration: 0.5 
}, 0.3);

// 35% - 45%: Accessories Text Fades In
tl.fromTo('#accessoriesText', 
  { opacity: 0, y: 50 }, 
  { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 
  0.35
);

// 45% - 55%: Accessories Text Fades Out (optional, but let's keep it visible, so no fade out)
// (Cable drawing is handled via onUpdate to map exactly to the pan)

// 80% - 100%: Keyboard rests on screen, theme loops
tl.to({}, { duration: 0.2 });

