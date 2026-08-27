import stripe from 'stripe';
import evn from "./env.js";

if(!env.STRIPE_API_KEY || !env.STRIPE_PUBLISHABLE_KEY){
    console.warn("Stripe API key or publishable key is not defined in the environment variables.");
}

const stripeInstance = stripe(env.STRIPE_API_KEY);

export default stripeInstance; 