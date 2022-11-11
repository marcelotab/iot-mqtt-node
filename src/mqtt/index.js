require('dotenv').config();
const mqtt = require('mqtt');
const brokerURI = process.env.MQTT_BROKER_URI;
const mqttOptions = {
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD,
}

// const baseTopic = '/' + username;
// const topic     = baseTopic + '/001';

// default message
// const message   = '0';

if (process.argv.length > 2) {
    // use command line argument as message
    message = process.argv[2]
}
console.log(mqttOptions)
// create client and connect
const client  = mqtt.connect(brokerURI, mqttOptions);
// attach event listener for 'connect' event
client.on('connect', function () {
    // client has connected to the broker
    console.log(`${mqttOptions.username} connected successful`);
    // publish the message to the topic
    // client.publish("handledLed", "0", {}, function() {
    //     // mesage has been published
    //     console.log('message published: ' + message);
    //
    //     // all done, exit
    //     // process.exit(0);
    // });
    client.subscribe("example", "0", {}, function() {
        console.log('message received: ' + message);
    });
});