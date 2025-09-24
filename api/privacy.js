export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`<!doctype html>
<html lang="pt-PT"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Política de Privacidade | Boechat</title>
<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:860px;margin:40px auto;padding:0 16px;line-height:1.6}
h1{font-size:28px;margin-bottom:0} small{color:#666} h2{margin-top:28px} code{background:#f6f6f6;padding:2px 6px;border-radius:4px}</style>
</head><body>
<h1>Política de Privacidade</h1><small>Última atualização: 24/09/2025</small>
<p>Esta política descreve como a <strong>Boechat</strong> (“nós”) trata dados quando utiliza o nosso fluxo de login com o TikTok em <strong>api.boechat.pt</strong>.</p>
<h2>Dados que recebemos</h2>
<ul>
<li><strong>Do TikTok (via OAuth, com o seu consentimento):</strong> identificador <em>open_id</em>, nome público, foto de perfil e outros dados limitados conforme o <em>scope</em> autorizado (ex.: <code>user.info.basic</code>).</li>
<li><strong>Cookies técnicos:</strong> usamos um cookie temporário <code>oauth_state</code> para prevenir CSRF durante o login.</li>
</ul>
<h2>Para que usamos</h2><ul><li>Autenticação e sessão.</li><li>Operação do serviço e segurança.</li></ul>
<h2>Base legal</h2><p>Consentimento do utilizador e interesse legítimo (segurança de autenticação).</p>
<h2>Conservação</h2><p>Tokens são mantidos apenas pelo tempo necessário ou até revogação; o cookie de estado expira (~10 min).</p>
<h2>Partilha</h2><p>Não vendemos dados. Partilhamos apenas com fornecedores de infraestrutura estritamente necessários (ex.: Vercel). O login é fornecido pelo TikTok.</p>
<h2>Transferências internacionais</h2><p>Poderá ocorrer tratamento fora do EEE; procuramos salvaguardas adequadas.</p>
<h2>Direitos</h2><p>Direitos RGPD: acesso, retificação, eliminação, limitação, oposição. Contacte-nos.</p>
<h2>Contacto</h2><p>E-mail: <a href="mailto:contacto@boechat.pt">contacto@boechat.pt</a></p>
<h2>Alterações</h2><p>Podemos atualizar esta política. A versão vigente fica nesta página.</p>
</body></html>`);
}
