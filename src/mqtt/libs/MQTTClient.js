// const mqtt = require('mqtt'); // https://github.com/mqttjs/MQTT.js
//
// const brokerURI = 'mqtt://nd199c1c.us-east-1.emqx.cloud:15354';
//
// // use the values shown after logging into https://cloud.arduino.cc
// const username  = 'username';
// const password  = 'password';
// const baseTopic = '/' + username;
// const topic     = baseTopic + '/001';
//
// // default message
// const message   = '0';
//
// if (process.argv.length > 2) {
//     // use command line argument as message
//     message = process.argv[2]
// }
//
// // create client and connect
// const client  = mqtt.connect(brokerURI, {
//     username: "nodejs_pop_os",
//     password: "nodejs_pop_os",
// });
//
// // attach event listener for 'connect' event
// client.on('connect', function () {
//     // client has connected to the broker
//     console.log('connected');
//
//     // publish the message to the topic
//     client.publish("handledLed", "0", {}, function() {
//         // mesage has been published
//         console.log('message published: ' + message);
//
//         // all done, exit
//         // process.exit(0);
//     });
// });


const mqtt = require('mqtt');
const brokerURI = process.env.MQTT_BROKER_URI;

const mqttOptions = {
    port: process.env.MQTT_PORT,
     username: process.env.MQTT_USER,
     password: process.env.MQTT_PASSWORD,
};

const baseTopic = '/' + username;
const topic     = baseTopic + '/001';

// default message
const message   = '0';

// create client and connect
const client  = mqtt.connect(brokerURI, mqttOptions);

// attach event listener for 'connect' event
client.on('connect',  () => {

    // client has connected to the broker
    console.log('client connected to the broker successful');

    client.subscribe()
    // publish the message to the topic
    // client.publish("handledLed", "0", {}, function() {
    //     // mesage has been published
    //     console.log('message published: ' + message);
    //
    //     // all done, exit
    //     // process.exit(0);
    // });
});