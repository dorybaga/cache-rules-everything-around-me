/*jshint esversion: 6*/

const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log("Error", err);
});

client.on('connect', () =>{
  console.log('connected to redis server!');
});

client.set('food', 'sushi', redis.print);

client.get('food', (err, reply) => {
  console.log(reply);
});

client.quit();