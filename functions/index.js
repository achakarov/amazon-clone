const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Ia00RGaVsgg8OY9c5ZheBOXH2dFjbA3OL71AWHxpPeIOPq79t4C6udr8eiP0hnmlUCaSAvnhXhSNIqisEDoqSuh002xxMzpVx'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment request received', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-5621f/us-central1/api
