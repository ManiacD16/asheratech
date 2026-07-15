import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().default(''),
  projectType: z.string().trim().min(2).max(120),
  timeline: z.string().trim().max(100).optional().default(''),
  budget: z.string().trim().max(100).optional().default(''),
  message: z.string().trim().min(20).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message:
            'Please complete the required fields with valid information.',
        },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        {
          message:
            'The contact delivery service is not configured yet. Please email us directly.',
        },
        { status: 503 },
      );
    }

    const forwarded = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...result.data,
        submittedAt: new Date().toISOString(),
        source: 'asheratech-portfolio',
        recipient: process.env.CONTACT_TO_EMAIL || 'contact@asheratech.com',
      }),
      cache: 'no-store',
    });

    if (!forwarded.ok) {
      return NextResponse.json(
        {
          message:
            'The inquiry could not be delivered. Please email us directly.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        message:
          'Unable to process this inquiry. Please try again or email us directly.',
      },
      { status: 500 },
    );
  }
}
