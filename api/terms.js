export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html>
<html lang="pt-PT"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Termos de Serviço | Boechat</title>
<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:860px;margin:40px auto;padding:0 16px;line-height:1.6}
h1{font-size:28px;margin-bottom:0} small{color:#666} h2{margin-top:28px}</style>
</head><body>
<h1>Termos de Serviço</h1><small>Última atualização: 24/09/2025</small>
<p>Estes Termos regem o uso de <strong>api.boechat.pt</strong> e do fluxo de login com o TikTok disponibilizado pela <strong>Boechat</strong>.</p>
<h2>Descrição do serviço</h2><p>Fornecemos autenticação via TikTok (OAuth) para aceder a funcionalidades que exigem sessão.</p>
<h2>Elegibilidade</h2><p>Deve ter idade legal e cumprir as políticas do TikTok e destes Termos.</p>
<h2>Uso aceitável</h2><ul><li>Não realizar engenharia reversa ou scraping abusivo.</li><li>Não interferir na segurança ou disponibilidade do serviço.</li></ul>
<h2>Conteúdos e APIs de terceiros</h2><p>O login e dados básicos de perfil são fornecidos pelo TikTok, sujeitos aos termos e políticas do TikTok.</p>
<h2>Isenção e limitação</h2><p>Serviço “tal como está”, sem garantias; responsabilidade limitada nos termos legais aplicáveis.</p>
<h2>Rescisão</h2><p>Podemos suspender/terminar acesso em caso de violação.</p>
<h2>Lei e foro</h2><p>Lei portuguesa; foro de Lisboa.</p>
<h2>Contacto</h2><p>E-mail: <a href="mailto:contacto@boechat.pt">contacto@boechat.pt</a></p>
</body></html>`);
}
