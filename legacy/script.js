gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   SMOOTH SCROLL (LENIS)
   ============================================================ */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0, 0);

/* ============================================================
   1. HERO CANVAS ANIMATION
   ============================================================ */
const canvas = document.getElementById('heroCanvas');
const context = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;

const frameCount = 250;
const currentFrame = index => (
  `frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

const images = [];
const heroFrames = {
  frame: 0
};

// Preload frames
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[heroFrames.frame], 0, 0, canvas.width, canvas.height);
}

gsap.to(heroFrames, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: "#heroSection",
    start: "top top",
    end: "+=250%", // scroll duration
    scrub: 0.5
  },
  onUpdate: render
});

/* ============================================================
   2. MOBILE FRONT SCROLL TRACK
   ============================================================ */
// Simple pin for front phone text flow
ScrollTrigger.create({
  trigger: "#phoneFrontTrack",
  start: "top top",
  end: "bottom bottom",
  pin: ".sticky-scene"
});

/* ============================================================
   3. MOBILE BACK SCROLL TRACK
   ============================================================ */
// Simple pin for back phone text flow
ScrollTrigger.create({
  trigger: "#phoneBackTrack",
  start: "top top",
  end: "bottom bottom",
  pin: ".sticky-scene"
});


/* ============================================================
   4. DISPLAY TO KEYBOARD INTERACTION
   ============================================================ */
let isPoweredOn = false;
let themeInterval = null;
let themes = ['theme-white', 'theme-blue'];
let themeIndex = 0;
const keyboardWrap = document.getElementById('keyboardContainer');

// BUILD KEYBOARD
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
  { t:'alpha', x:1.5,   y:2.25, w:1,    h:1, l:[{text:'Q',pos:'tl'}] },
  { t:'alpha', x:2.5,   y:2.25, w:1,    h:1, l:[{text:'W',pos:'tl'}] },
  { t:'alpha', x:3.5,   y:2.25, w:1,    h:1, l:[{text:'E',pos:'tl'}] },
  { t:'alpha', x:4.5,   y:2.25, w:1,    h:1, l:[{text:'R',pos:'tl'}] },
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
  { t:'alpha', x:1.75,  y:3.25, w:1,    h:1, l:[{text:'A',pos:'tl'}] },
  { t:'alpha', x:2.75,  y:3.25, w:1,    h:1, l:[{text:'S',pos:'tl'}] },
  { t:'alpha', x:3.75,  y:3.25, w:1,    h:1, l:[{text:'D',pos:'tl'}] },
  { t:'alpha', x:4.75,  y:3.25, w:1,    h:1, l:[{text:'F',pos:'tl'}] },
  { t:'alpha', x:5.75,  y:3.25, w:1,    h:1, l:[{text:'G',pos:'tl'}] },
  { t:'alpha', x:6.75,  y:3.25, w:1,    h:1, l:[{text:'H',pos:'tl'}] },
  { t:'alpha', x:7.75,  y:3.25, w:1,    h:1, l:[{text:'J',pos:'tl'}] },
  { t:'alpha', x:8.75,  y:3.25, w:1,    h:1, l:[{text:'K',pos:'tl'}] },
  { t:'alpha', x:9.75,  y:3.25, w:1,    h:1, l:[{text:'L',pos:'tl'}] },
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
      key.innerHTML = `<div class="keycap"><div class="keycap-top">${legends}</div></div>`;
    }
    plate.appendChild(key);
  });
})();

// Build Laptop Keys
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

function powerOn() {
  if (isPoweredOn) return;
  isPoweredOn = true;
  if(keyboardWrap) {
    keyboardWrap.classList.add('theme-white');
    gsap.to('.cable-core', { stroke: '#e2e0d8', duration: 0.5 });
  }
}

function powerOff() {
  if (!isPoweredOn) return;
  isPoweredOn = false;
  if(keyboardWrap) {
    keyboardWrap.classList.remove(...themes, 'keyboard-interactive');
    gsap.to('.cable-core', { stroke: '#111', duration: 0.5 });
  }
}

// Display to Keyboard Timeline
const displayTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#master-pin-wrapper',
    start: 'top top',
    end: '+=4000',
    scrub: 1.2,
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      let progress = 0;
      if (self.progress > 0.45 && self.progress <= 0.8) {
        progress = (self.progress - 0.45) / 0.35;
      } else if (self.progress > 0.8) {
        progress = 1;
      }
      
      const clipPercent = 100 * (1 - progress);
      const cableSvg = document.querySelector('.cable-svg');
      if(cableSvg) cableSvg.style.clipPath = `inset(0 0 ${clipPercent.toFixed(2)}% 0)`;
      
      if (self.progress >= 0.8 && !isPoweredOn) powerOn();
      if (self.progress < 0.8 && isPoweredOn) powerOff();
    }
  }
});

// 0% - 20%: Display Opens
displayTl.to('#displayUnit', { z: 0, ease: 'power1.inOut', duration: 0.05 });
displayTl.to('#displayPanel', { rotateX: 110, ease: 'power2.inOut', duration: 0.15 }, 0.05);
displayTl.to('#displayUnit', { yPercent: 40, ease: 'power2.inOut', duration: 0.15 }, 0.05);
displayTl.to('#lidEdge', { opacity: 0, duration: 0.05, ease: 'power1.in' }, 0.05);

// 20% - 30%: Hold
displayTl.to({}, { duration: 0.1 });

// 30% - 80%: Pan container UP to reveal the keyboard
displayTl.to('#productShowcase', { 
  y: '-150vh', 
  ease: 'power2.inOut', 
  duration: 0.5 
}, 0.3);

// 35% - 45%: Accessories Text Fades In
displayTl.fromTo('#accessoriesText', 
  { opacity: 0, y: 50 }, 
  { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 
  0.35
);

// 80% - 100%: Keyboard rests on screen
displayTl.to({}, { duration: 0.2 });

/* ============================================================
   5. TESTIMONIAL CAROUSEL
   ============================================================ */
let currentTestimonial = 0;
const track = document.getElementById('testimonialTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

if (track && testimonialCards.length > 0) {
  const maxIndex = testimonialCards.length - 1;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    if (currentTestimonial < maxIndex) currentTestimonial++;
    updateCarousel();
  });

  btnPrev.addEventListener('click', () => {
    if (currentTestimonial > 0) currentTestimonial--;
    updateCarousel();
  });

  setInterval(() => {
    currentTestimonial = currentTestimonial < maxIndex ? currentTestimonial + 1 : 0;
    updateCarousel();
  }, 4000);
}

/* ============================================================
   6. FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all others
    document.querySelectorAll('.accordion-item').forEach(acc => {
      acc.classList.remove('active');
    });
    
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

/* ============================================================
   REFRESH ON LOAD
   ============================================================ */
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
