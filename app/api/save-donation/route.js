
import { sendEmailDonation } from '../../lib/sendemail';
import { db } from '../../lib/db';

export async function POST(request) {
    try {
        const body = await request.json();
        const { amount, donationType, name, email } = body;

        if (!amount || !donationType || !name || !email) {
            return Response.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const [result] = await db.execute(
            `INSERT INTO donations (amount, donation_type, name, email) VALUES (?, ?, ?, ?)`,
            [amount, donationType, name, email]
        );

        console.log('Donation saved successfully');


        await sendEmailDonation({ to: email, name, amount, donationType });


        return Response.json({ message: 'Donation saved successfully and email sent', id: result.insertId });
    } catch (error) {
        console.error('Error saving donation:', error);
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}
