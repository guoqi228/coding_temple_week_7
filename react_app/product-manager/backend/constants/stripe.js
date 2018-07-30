const configureStripe = require('stripe');

const STRIPE_SECRECT_KEY = process.env.NODE_ENV === 'production'
? 'sk_live_l0b4jNKemmnzhgTl6SlFn2y6' : 'sk_test_K5d8AoaWrdkkgRmrTUlNCGFp';

const stripe = configureStripe(STRIPE_SECRECT_KEY);

module.exports = stripe;
