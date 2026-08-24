"use client";

import React, { useEffect, useRef } from "react";

const vec = (x, y) => ({ x, y });
const vecAdd = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
const vecSub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
const vecMult = (a, s) => ({ x: a.x * s, y: a.y * s });
const vecLerp = (a, b, t) => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
});
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, mn, mx) => Math.max(mn, Math.min(mx, v));
const map = (v, a, b, c, d) => ((v - a) / (b - a)) * (d - c) + c;

function toRGB(str) {
  if (str) {
    const m = str.match(/rgba?\(([^)]+)\)/);
    if (m) {
      const p = m[1].split(",").map((s) => parseFloat(s));
      return { r: p[0] || 0, g: p[1] || 0, b: p[2] || 0 };
    }
    const hex = str.replace("#", "");
    if (hex.length >= 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    }
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16),
      };
    }
  }
  return { r: 10, g: 10, b: 10 };
}

function useCanvasAnimation({
  deferStart = false,
  onSetup,
  onDraw,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({
    width: 0,
    height: 0,
    dpr: 1,
    isVisible: true,
    isPageVisible: true,
    animationId: 0,
  });

  const onDrawRef = useRef(onDraw);
  onDrawRef.current = onDraw;
  const onSetupRef = useRef(onSetup);
  onSetupRef.current = onSetup;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const st = stateRef.current;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      st.width = rect.width;
      st.height = rect.height;
      st.dpr = dpr;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const loop = () => {
      onDrawRef.current(ctx, st);
      st.animationId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!st.animationId && st.isVisible && st.isPageVisible) {
        st.animationId = requestAnimationFrame(loop);
      }
    };

    const stop = () => {
      if (st.animationId) {
        cancelAnimationFrame(st.animationId);
        st.animationId = 0;
      }
    };

    setup();
    onSetupRef.current?.(ctx, st);

    if (!deferStart) start();

    let debTimer;
    const onResize = () => {
      clearTimeout(debTimer);
      debTimer = setTimeout(() => {
        stop();
        setup();
        start();
      }, 100);
    };

    const onPageVis = () => {
      st.isPageVisible = document.visibilityState === "visible";
      if (st.isPageVisible) {
        start();
      } else {
        stop();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        st.isVisible = entries[0]?.isIntersecting ?? true;
        if (st.isVisible && st.isPageVisible) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 }
    );

    io.observe(container);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onPageVis);

    canvas.__canvasStart = start;

    return () => {
      stop();
      clearTimeout(debTimer);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onPageVis);
    };
  }, [deferStart]);

  return { containerRef, canvasRef, stateRef };
}

export default function InteractiveLines({
  style,
  backgroundColor = "rgb(10, 10, 10)",
  lineColor = "rgba(255, 255, 255, 1)",
  lineWidth = 1,
  minLines = 2,
  maxLines = 45,
  fade = false,
  fadeIntensity = 15,
}) {
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const cfgRef = useRef({ linesNum: 40, bias: 0.5 });

  const { containerRef, canvasRef, stateRef } = useCanvasAnimation({
    deferStart: true,

    onSetup: (e, t) => {
      mouseRef.current.targetX = t.width / 2;
      mouseRef.current.targetY = t.height / 2;
      mouseRef.current.x = t.width / 2;
      mouseRef.current.y = t.height / 2;
    },

    onDraw: (e, t) => {
      let { width: r, height: n } = t;
      let a = mouseRef.current;
      let o = cfgRef.current;

      a.x = a.x + (a.targetX - a.x) * 0.05;
      a.y = a.y + (a.targetY - a.y) * 0.1;

      e.fillStyle = backgroundColor;
      e.fillRect(0, 0, r, n);

      e.save();
      e.translate(r / 2, n / 2);

      let s = r < 500;
      let u = s ? 0.8 * n : 0;
      let d = s ? 1.5 : 0.7;

      let c = vec(r, -(1.1 * n) + u);
      let f = vec(0, 2 * n);
      let g = vec(-r, -n + u);

      let lo = Math.min(minLines, maxLines);
      let hi = Math.max(minLines, maxLines);
      let h = clamp(map(a.y, 0, n, lo, hi), lo, hi);
      o.linesNum = lerp(o.linesNum, h, 0.1);

      let b = clamp(map(a.x, 0, r, 0.6, 0.4), 0.4, 0.6);
      o.bias = lerp(o.bias, b, 0.05);

      e.strokeStyle = lineColor;
      e.lineWidth = lineWidth;

      for (let t = 0; t < o.linesNum; t++) {
        let r = t / (o.linesNum - 1);

        let lineEnd = vec(
          lerp(f.x, g.x, 1 - r * r),
          lerp(f.y, g.y, 1 - r * r)
        );

        let l = vecAdd(vecMult(c, 0.5), vecMult(lineEnd, 0.5));
        let dispTarget = vecMult(vecAdd(f, l), 0.5);

        (function (
          e,
          t,
          r,
          n,
          l,
          a
        ) {
          let o = vecLerp(t, r, 0.5);
          let s = vecSub(n, o);

          e.beginPath();
          for (let n = 0; n <= 50; n++) {
            let o = n / 50;
            let u = vecLerp(t, r, o);
            let d =
              2 *
              Math.pow(o, a * (1 - l) * 2) *
              Math.pow(1 - o, a * l * 2);
            let cv = vecAdd(u, vecMult(s, d));
            if (n === 0) {
              e.moveTo(cv.x, cv.y);
            } else {
              e.lineTo(cv.x, cv.y);
            }
          }
          e.stroke();
        })(e, c, lineEnd, dispTarget, o.bias, d);
      }

      e.restore();

      if (fade) {
        const bg = toRGB(backgroundColor);
        const rgba = (alpha) =>
          `rgba(${bg.r}, ${bg.g}, ${bg.b}, ${alpha})`;
        const inner = clamp(
          map(fadeIntensity, 1, 50, 0.82, 0.25),
          0.25,
          0.82
        );
        const maxA = clamp(
          map(fadeIntensity, 1, 50, 0.35, 0.9),
          0.35,
          0.9
        );
        e.save();
        let y = r / 2;
        let v = n / 2;
        let x = Math.max(r, n) / 2;
        e.translate(y, v);
        e.scale(r / (2 * x), n / (2 * x));
        let _ = e.createRadialGradient(0, 0, 0, 0, 0, x);
        _.addColorStop(0, rgba(0));
        _.addColorStop(inner, rgba(0));
        _.addColorStop(lerp(inner, 1, 0.5), rgba(maxA * 0.3));
        _.addColorStop(lerp(inner, 1, 0.8), rgba(maxA * 0.7));
        _.addColorStop(1, rgba(maxA));
        e.fillStyle = _;
        e.fillRect(-x, -x, 2 * x, 2 * x);
        e.restore();
      }
    },
  });

  useEffect(() => {
    let e = containerRef.current;
    if (!e) return;

    let t = e.getBoundingClientRect();

    let started = false;
    let r = (ev) => {
      if (!stateRef.current.isVisible) return;
      mouseRef.current.targetX = ev.clientX - t.left;
      mouseRef.current.targetY = ev.clientY - t.top;
      if (!started) {
        started = true;
        canvasRef.current?.__canvasStart?.();
      }
    };

    let n = 0;
    let i = () => {
      if (!n) {
        n = requestAnimationFrame(() => {
          if (e) t = e.getBoundingClientRect();
          n = 0;
        });
      }
    };

    const handleTouch = (ev) => {
      if (ev.touches && ev.touches[0]) {
        r(ev.touches[0]);
      }
    };

    document.addEventListener("mousemove", r, { passive: true });
    document.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("scroll", i, { passive: true });

    return () => {
      document.removeEventListener("mousemove", r);
      document.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("scroll", i);
      if (n) cancelAnimationFrame(n);
    };
  }, [containerRef, stateRef, canvasRef]);

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
