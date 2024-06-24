require("dotenv").config();

async function start() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.from;
  const to = process.env.to;
  const url = process.env.url;
  const client = require("twilio")(accountSid, authToken);

  const call = await client.calls.create({
    from,
    to,
    url,
  });

  console.log(call);
}

start();