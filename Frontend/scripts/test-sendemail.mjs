import 'dotenv/config';
import { sendEmailContact } from '../app/lib/sendemail.js';

async function run() {
  try {
    const to = process.env.EMAIL_USER;
    if (!to) {
      console.error('EMAIL_USER is not set in .env.local');
      process.exit(1);
    }

    console.log('Sending test contact email to', to);
    const res = await sendEmailContact({ to, name: 'Test User', subject: 'Test Email from Local', message: 'This is a test email sent from the local test script.' });
    console.log('Send result:', res);
  } catch (err) {
    console.error('Send failed:', err);
    process.exit(2);
  }
}

run();