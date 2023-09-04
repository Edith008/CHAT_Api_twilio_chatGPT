const TWILIO_ID =''
const TWILIO_SK =''

const client = require('twilio')(TWILIO_ID,TWILIO_SK);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello, prueba1!',
         to: 'whatsapp:+59161541915'
       })
      .then(message => console.log(message.sid));