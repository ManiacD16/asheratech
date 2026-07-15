import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/container';
import { PageIntro } from '@/components/ui/page-intro';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How Asheratech handles information submitted through this website.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="A straightforward approach to website information."
        description="This page explains the basic information collected through the Asheratech portfolio and project inquiry form."
      />
      <section data-chapter="Policy" className="py-20 md:py-28">
        <Container>
          <div className="prose-ashera max-w-3xl">
            <h2>Information you provide</h2>
            <p>
              When you submit a project inquiry, we may receive your name, work
              email, company, project details, timing and budget preferences. We
              use this information only to assess and respond to your inquiry
              and to continue a business conversation you initiate.
            </p>
            <h2>Technical information</h2>
            <p>
              The deployed website may collect limited technical information
              through hosting, security or analytics services, such as device
              type, browser, approximate region, referring page and page
              interactions. Analytics should be configured to collect only what
              is necessary to understand performance and improve the experience.
            </p>
            <h2>Sharing and retention</h2>
            <p>
              We do not sell inquiry information. Information may be processed
              by service providers required to host the website, deliver form
              submissions or protect the service. Inquiry details should be
              retained only as long as needed for the business conversation and
              applicable legal obligations.
            </p>
            <h2>Your choices</h2>
            <p>
              You may contact contact@asheratech.com to ask about information
              you submitted, request a correction or request deletion where
              applicable. This starter policy should be reviewed by qualified
              legal counsel before production launch and adapted to the
              company’s actual hosting, analytics and communications setup.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
