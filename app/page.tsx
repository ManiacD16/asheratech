import { Hero } from '@/components/home/hero';
import { Portal } from '@/components/home/portal';
import { Featured } from '@/components/home/featured';
import { Deck } from '@/components/home/deck';
import { Ledger } from '@/components/home/ledger';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portal />
      <Featured />
      <Deck />
      <Ledger />
    </>
  );
}
