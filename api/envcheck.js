// /api/envcheck
export default function handler(req, res) {
  const key = process.env.TIKTOK_CLIENT_KEY || "";
  const shown = key ? `${key.slice(0,4)}...${key.slice(-4)}` : "(vazio)";
  res.status(200).json({
    has_client_key: Boolean(key),
    client_key_preview: shown,
    redirect_uri: process.env.TIKTOK_REDIRECT_URI || "(vazio)"
  });
}
