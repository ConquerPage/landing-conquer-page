export default async function sendEmail(req, res) {
  const { nome, email, telefone, idade, profissao } = req.body;

  try {
    await fetch(
      'https://8oljthnp6k.execute-api.us-east-1.amazonaws.com/dev/api/sendMessageTelegram',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          profissao,
          idade,
        }),
      },
    );

    res.status(200).json({ success: 'Email enviado com sucesso !' });
  } catch (error) {
    res.status(400).json({ success: 'Falha ao enviar o email' });
  }
}
