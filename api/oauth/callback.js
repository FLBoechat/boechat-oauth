// /api/oauth/callback -> valida state e troca code por access_token
export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const { code, state, error, error_description } = req.query;

  // Lê o state do cookie
  const cookieHeader = req.headers.cookie || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => {
      const [k, ...v] = c.trim().split("=");
      return [k, decodeURIComponent(v.join("=") || "")];
    }).filter(([k]) => k)
  );
  const savedState = cookies["oauth_state"];

  if (error) {
    return res.status(400).json({ ok:false, step:"authorize", error, error_description });
  }
  if (!code) {
    return res.status(400).json({ ok:false, error:"missing_code", message:"TikTok não retornou ?code" });
  }
  if (!state || !savedState || state !== savedState) {
    return res.status(400).json({ ok:false, error:"invalid_state", message:"STATE inválido (CSRF check)" });
  }

  // Troca o code por access_token
  const tokenUrl = "https://open.tiktokapis.com/v2/oauth/token/";
  const body = {
    client_key: process.env.TIKTOK_CLIENT_KEY,
    client_secret: process.env.TIKTOK_CLIENT_SECRET,
    code,
    grant_type: "authorization_code",
    redirect_uri: process.env.TIKTOK_REDIRECT_URI
  };

  try {
    const r = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body)
    });
    const data = await r.json();

    // Apaga o cookie de state (já usado)
    res.setHeader("Set-Cookie", [
      "oauth_state=; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=0"
    ]);

    // Mostra o resultado (tokens / erro)
    return res.status(r.ok ? 200 : 400).json({ ok:r.ok, step:"token_exchange", response:data });
  } catch (e) {
    return res.status(500).json({ ok:false, error:"token_request_failed", details:String(e) });
  }
}
