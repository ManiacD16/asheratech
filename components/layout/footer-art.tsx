'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { prefersReducedMotion } from '@/lib/gsap';
import styles from '@/components/layout/footer.module.css';

const ASPECT = 1199 / 1312;

/**
 * The emblem rests as a tone-on-tone engraving. Moving the pointer across it
 * paints the full-colour ribbon back in; a single sweep plays on first view
 * so touch visitors see the effect too.
 */
export function FooterArt() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = wrap.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!host || !canvas || !context) return;

    const brush = document.createElement('canvas');
    const brushContext = brush.getContext('2d');
    const artwork = document.createElement('canvas');
    const artworkContext = artwork.getContext('2d');
    if (!brushContext || !artworkContext) return;

    const source = new window.Image();
    source.decoding = 'async';
    source.src = '/brand/asheraatech-mark.svg';

    let width = 0;
    let height = 0;
    let ratio = 1;
    let ready = false;
    let dirty = false;
    let frame = 0;
    let last: { x: number; y: number } | null = null;
    let sweep = 0;
    let swept = false;

    const rasterise = () => {
      if (!ready || !width) return;
      artwork.width = canvas.width;
      artwork.height = canvas.height;
      artworkContext.clearRect(0, 0, artwork.width, artwork.height);
      artworkContext.drawImage(source, 0, 0, artwork.width, artwork.height);
      dirty = true;
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      if (!rect.width) return;
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.width * ASPECT;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      brush.width = canvas.width;
      brush.height = canvas.height;
      last = null;
      rasterise();
    };

    const stamp = (x: number, y: number, radius: number) => {
      const gradient = brushContext.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, 'rgba(0,0,0,0.9)');
      gradient.addColorStop(0.55, 'rgba(0,0,0,0.5)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      brushContext.fillStyle = gradient;
      brushContext.beginPath();
      brushContext.arc(x, y, radius, 0, Math.PI * 2);
      brushContext.fill();
    };

    const stroke = (x: number, y: number) => {
      const radius = Math.max(46, width * 0.085) * ratio;
      const px = x * ratio;
      const py = y * ratio;
      if (last) {
        const distance = Math.hypot(px - last.x, py - last.y);
        const steps = Math.max(1, Math.ceil(distance / (radius * 0.3)));
        for (let step = 1; step <= steps; step += 1) {
          const t = step / steps;
          stamp(
            last.x + (px - last.x) * t,
            last.y + (py - last.y) * t,
            radius,
          );
        }
      } else {
        stamp(px, py, radius);
      }
      last = { x: px, y: py };
      dirty = true;
    };

    const draw = () => {
      frame = window.requestAnimationFrame(draw);
      if (!dirty || !ready) return;
      dirty = false;
      context.globalCompositeOperation = 'source-over';
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(brush, 0, 0);
      context.globalCompositeOperation = 'source-in';
      context.drawImage(artwork, 0, 0);
      context.globalCompositeOperation = 'source-over';
    };

    const handleMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < -80 || y < -80 || x > rect.width + 80 || y > rect.height + 80) {
        last = null;
        return;
      }
      stroke(x, y);
    };

    const playSweep = () => {
      if (swept || !ready) return;
      swept = true;
      if (prefersReducedMotion()) {
        // Show the finished colour mark instead of animating a stroke.
        brushContext.fillStyle = '#000';
        brushContext.fillRect(0, 0, brush.width, brush.height);
        dirty = true;
        return;
      }
      const started = performance.now();
      const duration = 1500;
      last = null;
      const step = (now: number) => {
        const t = Math.min(1, (now - started) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const x = width * (0.14 + 0.72 * eased);
        const y =
          height * (0.82 - 0.36 * eased) +
          Math.sin(eased * Math.PI * 1.6) * height * 0.09;
        stroke(x, y);
        if (t < 1) sweep = window.requestAnimationFrame(step);
        else last = null;
      };
      sweep = window.requestAnimationFrame(step);
    };

    const visibility = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) playSweep();
      },
      { threshold: 0.45 },
    );

    source.onload = () => {
      ready = true;
      rasterise();
      visibility.observe(host);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    frame = window.requestAnimationFrame(draw);

    const region = host.closest('footer') ?? host;
    region.addEventListener('pointermove', handleMove as EventListener, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(sweep);
      observer.disconnect();
      visibility.disconnect();
      region.removeEventListener('pointermove', handleMove as EventListener);
    };
  }, []);

  return (
    <div ref={wrap} className={styles.art} aria-hidden="true">
      <Image
        src="/brand/asheraatech-mark-line.svg"
        alt=""
        width={1312}
        height={1199}
        unoptimized
        className={styles.illustration}
      />
      <canvas ref={canvasRef} className={styles.reveal} />
    </div>
  );
}
