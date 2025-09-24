// Vercel Serverless Function: /oauth/callback
export default async function handler(req, res) {
  const { code, state, error, error_description } = req.query;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(
`Callback OK
-----------------
code: ${code || ''}
state: ${state || ''}
error: ${error || ''}
error_description: ${error_description || ''}

Dica: se aparecer 'code', no próximo passo vamos trocá-lo por access_token.`
  );
}
