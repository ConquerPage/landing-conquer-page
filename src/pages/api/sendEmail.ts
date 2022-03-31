import nodemailer from 'nodemailer';

export default function sendEmail(req, res) {
  const { nome, email, telefone, idade, profissao } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `conquerpage@gmail.com`,
    subject: `New mail from ${email}`,
    text: `
    Nome: ${nome},
    Email: ${email},
    Telefone: ${telefone}
    Idade: ${idade}
    Profissão: ${profissao}
    `,
  };

  transporter.sendMail(mailOption, (err) => {
    if (err) {
      res.send('error' + JSON.stringify(err));
    } else {
      res.send('success');
    }
  });
}
