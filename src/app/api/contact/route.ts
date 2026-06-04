import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || '';
const contactEmail = process.env.CONTACT_EMAIL || '';

function clean(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const company = clean(body.company);
    const industry = clean(body.industry);
    const serviceInterestedIn = clean(body.serviceInterestedIn);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:system-ui, sans-serif; color:#0f172a; line-height:1.6;">
        <h1 style="font-size:1.5rem; margin-bottom:1rem;">New SentriQ AI Website Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p><strong>Industry:</strong> ${industry || '—'}</p>
        <p><strong>Service Interested In:</strong> ${serviceInterestedIn || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap; margin-top:0.5rem;">${message}</p>
      </div>
    `;

    if (!resendApiKey || !contactEmail) {
      return NextResponse.json(
        { error: 'Email service configuration is missing.' },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: `SentriQ AI <${contactEmail}>`,
      to: contactEmail,
      subject: 'New SentriQ AI Website Inquiry',
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Unable to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
