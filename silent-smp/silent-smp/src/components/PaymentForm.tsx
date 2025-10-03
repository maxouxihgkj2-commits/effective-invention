import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const stripe = await stripePromise;

        const response = await fetch('/api/stripe/create-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Add any necessary data for the payment session
            }),
        });

        const sessionId = await response.json();

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default PaymentForm;