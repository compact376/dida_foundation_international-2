export const runtime = "nodejs";


import { db } from '../../lib/db';
import { sendEmailContact } from '../../lib/sendemail';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return Response.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // ✅ Check if contact with same name and email exists
        const [existing] = await db.execute(
            `SELECT id FROM contacts WHERE name = ? AND email = ?`,
            [name, email]
        );

        if (existing.length > 0) {
            return Response.json({ message: 'This contact already exists.' }, { status: 409 });
        }

        // ✅ Insert if not duplicate
        const [result] = await db.execute(
            `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`,
            [name, email, subject, message]
        );

        console.log('Contact message saved successfully');

        // ✅ Send confirmation email
        await sendEmailContact({ to: email, name, subject, message });

        return Response.json({ message: 'Message saved successfully', id: result.insertId });
    } catch (error) {
        console.error('Error saving contact message:', error);
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}
