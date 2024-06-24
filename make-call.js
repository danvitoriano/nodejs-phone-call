require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.from;
const to = process.env.to;
const url = process.env.url;
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    from,
    to,     
    url
  })
  .then(call => console.log(call.sid));