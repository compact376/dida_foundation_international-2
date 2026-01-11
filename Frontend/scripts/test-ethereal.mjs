import nodemailer from 'nodemailer';

async function run() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    const info = await transporter.sendMail({
      from: 'test@example.com',
      to: 'recipient@example.com',
      subject: 'Ethereal test',
      text: 'This is a test email from nodemailer ethereal.'
    });

    console.log('Message sent:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error('Ethereal send failed:', err);
    process.exit(2);
  }
}

run();