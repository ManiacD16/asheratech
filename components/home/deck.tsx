'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';
import { FitText } from '@/components/motion/fit-text';
import { cn } from '@/lib/utils';
import styles from '@/components/home/deck.module.css';

type DeckCard = {
  label: string;
  value: string;
  note: string;
  /** Resting centre, as a percentage of the stage (desktop / mobile). */
  at: [number, number];
  atMobile: [number, number];
  tilt: number;
  from: [number, number, number];
  accent?: boolean;
  lead?: boolean;
};

const cards: DeckCard[] = [
  {
    label: 'Practice',
    value: 'Strategy',
    note: 'Discovery to roadmap',
    at: [11, 24],
    atMobile: [19, 17],
    tilt: -3,
    from: [-40, 90, -22],
  },
  {
    label: 'Practice',
    value: 'Blockchain',
    note: 'Contracts, wallets, tokens',
    at: [34, 21],
    atMobile: [50, 15],
    tilt: 2.5,
    from: [-10, 110, 18],
    accent: true,
  },
  {
    label: 'Practice',
    value: 'Design',
    note: 'Research, interface, systems',
    at: [66, 22],
    atMobile: [81, 17],
    tilt: -1.5,
    from: [20, 100, -14],
  },
  {
    label: 'Practice',
    value: 'Engineering',
    note: 'Web, mobile, cloud',
    at: [89, 25],
    atMobile: [19, 50],
    tilt: 3,
    from: [50, 90, 24],
  },
  {
    label: 'Industry',
    value: 'Fintech',
    note: 'Payments, banking, identity',
    at: [11, 77],
    atMobile: [81, 50],
    tilt: 2,
    from: [-50, 80, 16],
  },
  {
    label: 'Industry',
    value: 'Digital assets',
    note: 'Tokenization and custody',
    at: [34, 79],
    atMobile: [19, 83],
    tilt: -2.5,
    from: [-20, 120, -20],
  },
  {
    label: 'Industry',
    value: 'Enterprise',
    note: 'Connected workflows',
    at: [66, 78],
    atMobile: [50, 85],
    tilt: 1.5,
    from: [10, 110, 12],
  },
  {
    label: 'Industry',
    value: 'Mobile',
    note: 'Cross-platform products',
    at: [89, 76],
    atMobile: [81, 83],
    tilt: -3,
    from: [40, 90, -18],
  },
  {
    label: 'How we work',
    value: 'Senior talent',
    note: 'Close to the work, through launch',
    at: [50, 50],
    atMobile: [50, 50],
    tilt: -1,
    from: [0, 130, 10],
    accent: true,
    lead: true,
  },
];

/**
 * A pinned table: an outlined word sits behind while cards are dealt onto it
 * as the visitor scrolls. Every card can be picked up and moved.
 */
export function Deck() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));

  useIsomorphicLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const context = gsap.context(() => {
      const slots = gsap.utils.toArray<HTMLElement>('[data-deck-slot]');
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      slots.forEach((slot, index) => {
        const card = cards[index];
        timeline.fromTo(
          slot,
          {
            x: () => (card.from[0] / 100) * window.innerWidth,
            y: () => (card.from[1] / 100) * window.innerHeight,
            rotate: card.from[2],
          },
          { x: 0, y: 0, rotate: card.tilt, duration: 0.3 },
          0.08 + index * 0.075,
        );
      });
      timeline.to({}, { duration: 0.05 });

      gsap.fromTo(
        '[data-deck-word]',
        { yPercent: 18 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  const raise = (index: number) =>
    setOrder((current) => [...current.filter((i) => i !== index), index]);

  return (
    <section ref={root} className={styles.wrapper} aria-labelledby="deck-title">
      <div ref={stage} className={styles.sticky}>
        <div className={styles.word} aria-hidden="true">
          <FitText className={styles.wordText}>
            <span data-deck-word className="block">
              Build
            </span>
          </FitText>
        </div>

        <h2 id="deck-title" className="sr-only">
          What we build and who we build it for
        </h2>

        <ul className={styles.cardsLayer}>
          {cards.map((card, index) => (
            <li
              key={card.value}
              data-deck-slot
              className={cn(styles.slot, card.lead && styles.slotLead)}
              style={
                {
                  '--x': `${card.at[0]}%`,
                  '--y': `${card.at[1]}%`,
                  '--mx': `${card.atMobile[0]}%`,
                  '--my': `${card.atMobile[1]}%`,
                  '--tilt': `${card.tilt}deg`,
                  zIndex: order.indexOf(index) + 1,
                } as React.CSSProperties
              }
            >
              <motion.div
                drag={!reduceMotion}
                dragConstraints={stage}
                dragElastic={0.18}
                dragTransition={{ power: 0.18, timeConstant: 220 }}
                whileDrag={{ scale: 1.06, rotate: 2, cursor: 'grabbing' }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                onPointerDown={() => raise(index)}
                className={cn(
                  styles.card,
                  'notched',
                  card.accent && styles.cardAccent,
                )}
                data-cursor="Drag"
              >
                <span className={cn(styles.cardInner, 'notched')}>
                  <span className={styles.label}>{card.label}</span>
                  <span className="diamond" aria-hidden="true" />
                  <span className={styles.value}>{card.value}</span>
                  <span className={styles.note}>{card.note}</span>
                </span>
              </motion.div>
            </li>
          ))}
        </ul>

        <p className={styles.hint}>Pick up a card and move it around the table.</p>
      </div>
    </section>
  );
}
