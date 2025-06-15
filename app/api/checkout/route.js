


import Stripe from 'stripe';
import { NextResponse } from 'next/server';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
});

export async function POST(req) {
    try {
        const { amount } = await req.json();

        if (!amount || isNaN(amount)) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Donation',
                        },
                        unit_amount: Math.round(Number(amount) * 100), // ensure it's a number
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/thankyou`,
            cancel_url: `${process.env.BASE_URL}/donate`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error('Stripe error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
