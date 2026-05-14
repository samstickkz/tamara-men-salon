// Single endpoint that handles all three forms (contact, booking, careers).
// Each form posts here with a hidden `form-name` field; we email the payload
// (plus any CV attachment) via Resend, then redirect to /thank-you.
//
// Configuration via environment variables (set in Vercel → Settings → Env):
//   RESEND_API_KEY     — required; get one at https://resend.com (free)
//   NOTIFICATION_EMAIL — where to send applications (defaults to info@tamaracleaning.qa)
//   RESEND_FROM_EMAIL  — optional; defaults to Resend's shared onboarding@resend.dev
//                        (which only delivers to your verified Resend email).
//                        Once you verify your domain in Resend, set this to e.g.
//                        notifications@tamaracleaning.qa.
//
// If RESEND_API_KEY is missing, submissions are logged to the Vercel function
// logs (no data is lost) and the user still sees the thank-you page.

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isFileLike = (v: unknown): v is File =>
  typeof v === 'object' && v !== null && 'arrayBuffer' in (v as object) && 'size' in (v as object);

const buildHtml = (
  formName: string,
  fields: Record<string, string>,
  fileMeta: { name: string; size: number } | null
) => {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== '')
    .map(
      ([k, v]) =>
        `<tr>
           <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;text-transform:capitalize;vertical-align:top;">${escapeHtml(
           k
         )}</td>
           <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">${escapeHtml(
           v
         )}</td>
         </tr>`
    )
    .join('');

  const attachmentNote = fileMeta
    ? `<p style="margin:18px 0 0;padding:12px;background:#fff6c5;border-radius:8px;color:#7c430b;font-size:14px;">
         📎 CV attached: <strong>${escapeHtml(
           fileMeta.name
         )}</strong> (${Math.round(fileMeta.size / 1024)} KB)
       </p>`
    : '';

  return `<!DOCTYPE html><html><body style="font-family:-apple-system,Segoe UI,sans-serif;background:#f5efe6;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:#1E5BFB;color:#fff;padding:20px 24px;">
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:2px;opacity:0.85;">Tamara Cleaning Services</div>
        <h1 style="margin:6px 0 0;font-size:22px;">New ${escapeHtml(formName)} submission</h1>
      </div>
      <div style="padding:20px 24px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
        ${attachmentNote}
        <p style="margin:18px 0 0;color:#64748b;font-size:12px;">
          Reply to this email to follow up with the applicant if you have their email captured above.
        </p>
      </div>
    </div>
  </body></html>`;
};

export const POST: APIRoute = async ({ request, redirect }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch (err) {
    console.error('Failed to parse form data:', err);
    return new Response('Bad Request', { status: 400 });
  }

  const formName = String(formData.get('form-name') || 'unknown');

  // Honeypot — silently accept and redirect.
  if (formData.get('bot-field')) {
    return redirect(`/thank-you?form=${encodeURIComponent(formName)}`);
  }

  // Pull text fields + capture an optional CV file.
  const fields: Record<string, string> = {};
  let cvFile: File | null = null;
  for (const [key, value] of formData.entries()) {
    if (key === 'form-name' || key === 'bot-field') continue;
    if (isFileLike(value)) {
      if (key === 'cv' && value.size > 0) cvFile = value;
    } else if (typeof value === 'string') {
      fields[key] = value;
    }
  }

  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const notifyTo =
    import.meta.env.NOTIFICATION_EMAIL ??
    process.env.NOTIFICATION_EMAIL ??
    'info@tamaracleaning.qa';
  const fromEmail =
    import.meta.env.RESEND_FROM_EMAIL ??
    process.env.RESEND_FROM_EMAIL ??
    'Tamara Cleaning <onboarding@resend.dev>';

  // Fallback path: no Resend key yet — log to function logs so the data isn't
  // lost while you set up Resend post-deploy.
  if (!apiKey) {
    console.log('[form-submission]', JSON.stringify({ formName, fields, cv: cvFile?.name }));
    return redirect(`/thank-you?form=${encodeURIComponent(formName)}`);
  }

  try {
    const resend = new Resend(apiKey);

    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvFile) {
      const buf = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({ filename: cvFile.name, content: buf });
    }

    const subjectName = fields.name || fields.email || 'unknown';
    await resend.emails.send({
      from: fromEmail,
      to: notifyTo,
      replyTo: fields.email || undefined,
      subject: `[${formName}] ${subjectName}`,
      html: buildHtml(formName, fields, cvFile ? { name: cvFile.name, size: cvFile.size } : null),
      attachments: attachments.length ? attachments : undefined,
    });
  } catch (err) {
    // We never want to lose the submission — log on failure and still redirect.
    console.error('[form-submission] Resend send failed:', err);
    console.log('[form-submission-fallback]', JSON.stringify({ formName, fields, cv: cvFile?.name }));
  }

  return redirect(`/thank-you?form=${encodeURIComponent(formName)}`);
};

// Reject anything other than POST.
export const ALL: APIRoute = async () =>
  new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
