import { Hero } from '@/components/sections/hero';
import { ProofStrip } from '@/components/sections/proof-strip';
import { SelectedWork } from '@/components/sections/selected-work';
import { BlockchainExpertise } from '@/components/sections/blockchain-expertise';
import { Capabilities } from '@/components/sections/capabilities';
import { Principles } from '@/components/sections/principles';
import { Process } from '@/components/sections/process';
import { Industries } from '@/components/sections/industries';
import { Technology } from '@/components/sections/technology';
import { StudioNote } from '@/components/sections/studio-note';
import { InsightsPreview } from '@/components/sections/insights-preview';
import { FinalCta } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <BlockchainExpertise />
      <Capabilities />
      <Principles />
      <Process />
      <Industries />
      <Technology />
      <StudioNote />
      <InsightsPreview />
      <FinalCta />
    </>
  );
}