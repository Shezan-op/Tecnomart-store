"use client";
import React, { useRef } from 'react';
import styles from './Keyboard.module.css';

const LAYOUT = [
  // Row 0: Function row (16 keys = 16u total)
  { t:'acc',   x:0,     y:0,    w:1,    l:[{text:'ESC',          pos:'c'}] },
  { t:'alpha', x:2,     y:0,    w:1,    l:[{text:'F1',           pos:'c'}] },
  { t:'alpha', x:3,     y:0,    w:1,    l:[{text:'F2',           pos:'c'}] },
  { t:'alpha', x:4,     y:0,    w:1,    l:[{text:'F3',           pos:'c'}] },
  { t:'alpha', x:5,     y:0,    w:1,    l:[{text:'F4',           pos:'c'}] },
  { t:'alpha', x:6.5,   y:0,    w:1,    l:[{text:'F5',           pos:'c'}] },
  { t:'alpha', x:7.5,   y:0,    w:1,    l:[{text:'F6',           pos:'c'}] },
  { t:'alpha', x:8.5,   y:0,    w:1,    l:[{text:'F7',           pos:'c'}] },
  { t:'alpha', x:9.5,   y:0,    w:1,    l:[{text:'F8',           pos:'c'}] },
  { t:'alpha', x:11,    y:0,    w:1,    l:[{text:'F9',           pos:'c'}] },
  { t:'alpha', x:12,    y:0,    w:1,    l:[{text:'F10',          pos:'c'}] },
  { t:'alpha', x:13,    y:0,    w:1,    l:[{text:'F11',          pos:'c'}] },
  { t:'alpha', x:14,    y:0,    w:1,    l:[{text:'F12',          pos:'c'}] },
  { t:'knob',  x:15.25, y:0,    w:1,    l:[] },

  // Row 1: Number row (y=1.25, total = 16.25u)
  { t:'alpha', x:0,     y:1.25, w:1,    l:[{text:'~',pos:'tl'},{text:'`',pos:'bl'}] },
  { t:'alpha', x:1,     y:1.25, w:1,    l:[{text:'!',pos:'tl'},{text:'1',pos:'bl'}] },
  { t:'alpha', x:2,     y:1.25, w:1,    l:[{text:'@',pos:'tl'},{text:'2',pos:'bl'}] },
  { t:'alpha', x:3,     y:1.25, w:1,    l:[{text:'#',pos:'tl'},{text:'3',pos:'bl'}] },
  { t:'alpha', x:4,     y:1.25, w:1,    l:[{text:'$',pos:'tl'},{text:'4',pos:'bl'}] },
  { t:'alpha', x:5,     y:1.25, w:1,    l:[{text:'%',pos:'tl'},{text:'5',pos:'bl'}] },
  { t:'alpha', x:6,     y:1.25, w:1,    l:[{text:'^',pos:'tl'},{text:'6',pos:'bl'}] },
  { t:'alpha', x:7,     y:1.25, w:1,    l:[{text:'&',pos:'tl'},{text:'7',pos:'bl'}] },
  { t:'alpha', x:8,     y:1.25, w:1,    l:[{text:'*',pos:'tl'},{text:'8',pos:'bl'}] },
  { t:'alpha', x:9,     y:1.25, w:1,    l:[{text:'(',pos:'tl'},{text:'9',pos:'bl'}] },
  { t:'alpha', x:10,    y:1.25, w:1,    l:[{text:')',pos:'tl'},{text:'0',pos:'bl'}] },
  { t:'alpha', x:11,    y:1.25, w:1,    l:[{text:'_',pos:'tl'},{text:'-',pos:'bl'}] },
  { t:'alpha', x:12,    y:1.25, w:1,    l:[{text:'+',pos:'tl'},{text:'=',pos:'bl'}] },
  { t:'mod',   x:13,    y:1.25, w:2,    l:[{text:'Backspace',    pos:'ml'}] },
  { t:'mod',   x:15.25, y:1.25, w:1,    l:[{text:'PgUp',         pos:'c'}] },

  // Row 2: QWERTY (y=2.25, total = 16.25u)
  { t:'mod',   x:0,     y:2.25, w:1.5,  l:[{text:'Tab',          pos:'ml'}] },
  { t:'alpha', x:1.5,   y:2.25, w:1,    l:[{text:'Q',            pos:'c'}] },
  { t:'alpha', x:2.5,   y:2.25, w:1,    l:[{text:'W',            pos:'c'}] },
  { t:'alpha', x:3.5,   y:2.25, w:1,    l:[{text:'E',            pos:'c'}] },
  { t:'alpha', x:4.5,   y:2.25, w:1,    l:[{text:'R',            pos:'c'}] },
  { t:'alpha', x:5.5,   y:2.25, w:1,    l:[{text:'T',            pos:'c'}] },
  { t:'alpha', x:6.5,   y:2.25, w:1,    l:[{text:'Y',            pos:'c'}] },
  { t:'alpha', x:7.5,   y:2.25, w:1,    l:[{text:'U',            pos:'c'}] },
  { t:'alpha', x:8.5,   y:2.25, w:1,    l:[{text:'I',            pos:'c'}] },
  { t:'alpha', x:9.5,   y:2.25, w:1,    l:[{text:'O',            pos:'c'}] },
  { t:'alpha', x:10.5,  y:2.25, w:1,    l:[{text:'P',            pos:'c'}] },
  { t:'alpha', x:11.5,  y:2.25, w:1,    l:[{text:'{',pos:'tl'},{text:'[',pos:'bl'}] },
  { t:'alpha', x:12.5,  y:2.25, w:1,    l:[{text:'}',pos:'tl'},{text:']',pos:'bl'}] },
  { t:'mod',   x:13.5,  y:2.25, w:1.5,  l:[{text:'|',pos:'tl'},{text:'\\',pos:'bl'}] },
  { t:'mod',   x:15.25, y:2.25, w:1,    l:[{text:'Del',          pos:'c'}] },

  // Row 3: ASDF (y=3.25, total = 16.25u)
  { t:'mod',   x:0,     y:3.25, w:1.75, l:[{text:'Caps Lock',    pos:'ml'}] },
  { t:'alpha', x:1.75,  y:3.25, w:1,    l:[{text:'A',            pos:'tl'}] },
  { t:'alpha', x:2.75,  y:3.25, w:1,    l:[{text:'S',            pos:'tl'}] },
  { t:'alpha', x:3.75,  y:3.25, w:1,    l:[{text:'D',            pos:'tl'}] },
  { t:'alpha', x:4.75,  y:3.25, w:1,    l:[{text:'F',            pos:'tl'}] },
  { t:'alpha', x:5.75,  y:3.25, w:1,    l:[{text:'G',            pos:'tl'}] },
  { t:'alpha', x:6.75,  y:3.25, w:1,    l:[{text:'H',            pos:'tl'}] },
  { t:'alpha', x:7.75,  y:3.25, w:1,    l:[{text:'J',            pos:'tl'}] },
  { t:'alpha', x:8.75,  y:3.25, w:1,    l:[{text:'K',            pos:'tl'}] },
  { t:'alpha', x:9.75,  y:3.25, w:1,    l:[{text:'L',            pos:'tl'}] },
  { t:'alpha', x:10.75, y:3.25, w:1,    l:[{text:':',pos:'tr'},{text:';',pos:'bl'}] },
  { t:'alpha', x:11.75, y:3.25, w:1,    l:[{text:'"',pos:'tr'},{text:'\'',pos:'bl'}] },
  { t:'acc',   x:12.75, y:3.25, w:2.25, l:[{text:'Enter',        pos:'ml'}] },
  { t:'mod',   x:15.25, y:3.25, w:1,    l:[{text:'PgDn',         pos:'c'}] },

  // Row 4: ZXCV (y=4.25, total = 16.25u)
  { t:'mod',   x:0,     y:4.25, w:2.25, l:[{text:'Shift',        pos:'ml'}] },
  { t:'alpha', x:2.25,  y:4.25, w:1,    l:[{text:'Z',            pos:'tl'}] },
  { t:'alpha', x:3.25,  y:4.25, w:1,    l:[{text:'X',            pos:'tl'}] },
  { t:'alpha', x:4.25,  y:4.25, w:1,    l:[{text:'C',            pos:'tl'}] },
  { t:'alpha', x:5.25,  y:4.25, w:1,    l:[{text:'V',            pos:'tl'}] },
  { t:'alpha', x:6.25,  y:4.25, w:1,    l:[{text:'B',            pos:'tl'}] },
  { t:'alpha', x:7.25,  y:4.25, w:1,    l:[{text:'N',            pos:'tl'}] },
  { t:'alpha', x:8.25,  y:4.25, w:1,    l:[{text:'M',            pos:'tl'}] },
  { t:'alpha', x:9.25,  y:4.25, w:1,    l:[{text:'<',pos:'tr'},{text:',',pos:'bl'}] },
  { t:'alpha', x:10.25, y:4.25, w:1,    l:[{text:'>',pos:'tr'},{text:'.',pos:'bl'}] },
  { t:'alpha', x:11.25, y:4.25, w:1,    l:[{text:'?',pos:'tr'},{text:'/',pos:'bl'}] },
  { t:'mod',   x:12.25, y:4.25, w:1.75, l:[{text:'Shift',        pos:'mr'}] },
  { t:'acc',   x:14.125,y:4.25, w:1,    l:[{text:'↑',            pos:'c'}] },
  { t:'mod',   x:15.25, y:4.25, w:1,    l:[{text:'End',          pos:'c'}] },

  // Row 5: Bottom row (y=5.25, total = 16.25u)
  { t:'mod',   x:0,     y:5.25, w:1.25, l:[{text:'Ctrl',         pos:'ml'}] },
  { t:'mod',   x:1.25,  y:5.25, w:1.25, l:[{text:'Win',          pos:'ml'}] },
  { t:'mod',   x:2.5,   y:5.25, w:1.25, l:[{text:'Alt',          pos:'ml'}] },
  { t:'acc',   x:3.75,  y:5.25, w:6.25, l:[] }, // Spacebar
  { t:'mod',   x:10,    y:5.25, w:1,    l:[{text:'Alt',          pos:'ml'}] },
  { t:'mod',   x:11,    y:5.25, w:1,    l:[{text:'Fn',           pos:'ml'}] },
  { t:'mod',   x:12,    y:5.25, w:1,    l:[{text:'Ctrl',         pos:'ml'}] },
  { t:'acc',   x:13.125,y:5.25, w:1,    l:[{text:'←',            pos:'c'}] },
  { t:'acc',   x:14.125,y:5.25, w:1,    l:[{text:'↓',            pos:'c'}] },
  { t:'acc',   x:15.125,y:5.25, w:1,    l:[{text:'→',            pos:'c'}] },
];

export default function Keyboard({ isPowered }) {
  const plateRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!plateRef.current || !isPowered) return;
    const rect = plateRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    plateRef.current.style.setProperty('--mouse-x', `${x}px`);
    plateRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!plateRef.current) return;
    plateRef.current.style.setProperty('--mouse-x', `-200px`);
    plateRef.current.style.setProperty('--mouse-y', `-200px`);
  };

  const legendPos = (pos) => {
    if (pos === 'tl') return styles.legendTl;
    if (pos === 'tr') return styles.legendTr;
    if (pos === 'bl') return styles.legendBl;
    if (pos === 'ml') return styles.legendMl;
    if (pos === 'mr') return styles.legendTr;
    return styles.legendC;
  };

  return (
    <div className={`${styles.case} ${isPowered ? styles.powered : ''}`}>
      {/* USB port — top center of case */}
      <div className={styles.usbPort} />
      {/* Status LED */}
      <div className={styles.indicatorLed} style={{ background: isPowered ? '#FDE047' : '#111' }} />

      <div 
        className={styles.plate} 
        ref={plateRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.mouseGlow} />

        {/* Case blockers — precision machined separators */}
        <div className={styles.blockersLayer}>
          {/* Horizontal separator between fn row and number row */}
          <div className={styles.blocker} style={{left:0, top:'calc(1 * var(--u))', width:'calc(16.25 * var(--u))', height:'calc(0.25 * var(--u))'}} />
          {/* Gap between Esc and F1 */}
          <div className={styles.blocker} style={{left:'calc(1 * var(--u))', top:0, width:'calc(1 * var(--u))', height:'calc(1 * var(--u))'}}>
            <div className={styles.pillCutout} />
          </div>
          {/* Gap between F4 and F5 */}
          <div className={styles.blocker} style={{left:'calc(6 * var(--u))', top:0, width:'calc(0.5 * var(--u))', height:'calc(1 * var(--u))'}} />
          {/* Gap between F8 and F9 */}
          <div className={styles.blocker} style={{left:'calc(10.5 * var(--u))', top:0, width:'calc(0.5 * var(--u))', height:'calc(1 * var(--u))'}} />
          {/* Right edge gap */}
          <div className={styles.blocker} style={{left:'calc(16.25 * var(--u))', top:0, width:'calc(0.25 * var(--u))', height:'calc(6.25 * var(--u))'}} />
          {/* Knob cutout */}
          <div className={styles.knobFill} style={{position:'absolute', left:'calc(15.25 * var(--u))', top:0, width:'calc(1 * var(--u))', height:'calc(1 * var(--u))'}}>
            <div className={styles.knobInner} />
          </div>
        </div>

        {/* Keys rendering */}
        {LAYOUT.map((key, i) => {
          const style = {
            left:   `calc(${key.x} * var(--u))`,
            top:    `calc(${key.y} * var(--u))`,
            width:  `calc(${key.w} * var(--u))`,
            height: 'calc(1 * var(--u))',
            position: 'absolute',
            padding: '2px',
            boxSizing: 'border-box',
            zIndex: 2,
          };

          const typeClass = key.t === 'acc' ? styles.keyAcc
                          : key.t === 'mod' ? styles.keyMod
                          : styles.keyAlpha;

          if (key.t === 'knob') {
            return (
              <div key={i} style={{...style, padding:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div className={styles.knobBody}>
                  <div className={styles.knobInnerRing} />
                </div>
              </div>
            );
          }

          return (
            <div key={i} className={typeClass} style={style}>
              <div className={styles.keycap}>
                <div className={styles.keycapTop}>
                  {key.l.map((leg, li) => (
                    <span key={li} className={`${styles.legend} ${legendPos(leg.pos)}`}>
                      {leg.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
