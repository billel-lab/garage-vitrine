import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  projectType: z.string().min(1),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.string().optional(),
  mileage: z.string().optional(),
  details: z.string().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 },
      );
    }
    const data = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO ?? "contact@garage.example.be";
    const from = process.env.CONTACT_EMAIL_FROM ?? "noreply@garage.example.be";

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY missing — logging request instead:");
      console.warn(data);
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `Nouveau devis — ${data.projectType} · ${data.make} ${data.model}`,
      html: `
        <div style="font-family: system-ui, sans-serif; color: #111; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#ff4d0d; margin:0 0 16px;">Nouvelle demande de devis</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; color:#555;">Type</td><td style="font-weight:600">${escape(data.projectType)}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">Véhicule</td><td style="font-weight:600">${escape(data.make)} ${escape(data.model)} (${escape(data.year ?? "?")})</td></tr>
            <tr><td style="padding:8px 0; color:#555;">Kilométrage</td><td>${escape(data.mileage ?? "—")}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">Nom</td><td>${escape(data.name)}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">Email</td><td><a href="mailto:${escape(data.email)}">${escape(data.email)}</a></td></tr>
            <tr><td style="padding:8px 0; color:#555;">Téléphone</td><td>${escape(data.phone)}</td></tr>
          </table>
          <h3 style="margin-top:24px;">Détails</h3>
          <p style="white-space:pre-wrap; background:#f5f5f5; padding:16px; border-radius:8px;">${escape(data.details ?? "—")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
