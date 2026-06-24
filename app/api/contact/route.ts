// Contact form → email via Resend.
// App Router Route Handler (the Next.js equivalent of a Vercel serverless function).
// Zero dependencies — plain fetch to the Resend HTTP API.
//
// NOTE: with the Resend test sender (onboarding@resend.dev), emails can only be
// delivered to the Resend account's own signup email, so TO_EMAIL must be that
// address. Set RESEND_API_KEY in the Vercel project environment.

const TO_EMAIL = "keremcanseker1@gmail.com"; // the Resend account's signup email
const FROM_EMAIL = "Creative Compass <onboarding@resend.dev>";

export async function POST(req: Request) {
  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    // malformed / empty body — fall through to the validation below
  }

  const { name, email, company, budget, description, website } = body || {};

  if (website) return Response.json({ ok: true }); // honeypot — pretend success
  if (!name || !email || !description) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nBudget: ${budget || "-"}\n\nMessage:\n${description}`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New inquiry: ${name}${company ? " (" + company + ")" : ""}`,
        text,
      }),
    });

    if (!r.ok) {
      console.error(await r.text());
      return Response.json({ error: "send failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "server error" }, { status: 500 });
  }
}

export function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
