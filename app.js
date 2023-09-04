const TWILIO_ID ='AC7033ef1130d55ed9e1010abe9b9d248f'
const TWILIO_SK ='fd8b6d74b8c070a006c730c03aec5d40'

const client = require('twilio')(TWILIO_ID,TWILIO_SK);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello, prueba1!',
         to: 'whatsapp:+59161541915'
       })
      .then(message => console.log(message.sid));