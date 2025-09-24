// /api/oauth/start -> redireciona para o consent da TikTok API v2
export default async function handler(req, res) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;
  const scopes = process.env.TIKTOK_SCOPES || "user.info.basic";

  if (!clientKey || !redirectUri) {
    res.status(500).send("Faltam variáveis: TIKTOK_CLIENT_KEY e/ou TIKTOK_REDIRECT_URI");
    return;
  }

  // Gera um STATE aleatório para evitar CSRF
  const state = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

  // Guarda o state num cookie HttpOnly
  res.setHeader("Set-Cookie", [
    `oauth_state=${state}; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=600`
  ]);

  const authorizeUrl = new URL("https://www.tiktok.com/v2/auth/authorize/");
  authorizeUrl.searchParams.set("client_key", clientKey);
  authorizeUrl.searchParams.set("scope", scopes);                 // ex: "user.info.basic"
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);

  res.writeHead(302, { Location: authorizeUrl.toString() });
  res.end();
}
