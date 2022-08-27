// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_EMAIL_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
    First Name: ${body.firstName}\r\n
    Last Name: ${body.lastName} \r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

    const data = {
        to: ['andrew.ladd1993@gmail.com', 'andrew.laddstudio@gmail.com'],
        from: 'andrew.laddstudio@gmail',
        subject: 'Contact Form',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    };

    await mail.send(data);
    res.status(200).json({ status: 'OK' })
}
