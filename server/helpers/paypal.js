const paypal = require("paypal-rest-sdk");

const PAYPAL_MODE = process.env.PAYPAL_MODE?.trim();
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID?.trim();
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET?.trim();

if (!PAYPAL_MODE || !PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
  throw new Error(
    "Missing PayPal environment variables. Please set PAYPAL_MODE, PAYPAL_CLIENT_ID, and PAYPAL_CLIENT_SECRET in server/.env"
  );
}

paypal.configure({
  mode: PAYPAL_MODE,
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;