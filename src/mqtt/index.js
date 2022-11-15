require('dotenv').config({path: '../../.env'});
const mqtt = require('mqtt');
const {SUBSCRIBE_TOPICS} = require("../constants/mqttTopics");
const {createEventService} = require("../services/events.service");
const {eventTypes} = require("../constants/events");

// Initialize configs
const startMqttClient = () => {
    const brokerURI = process.env.MQTT_BROKER_URI;
    const mqttOptions = {
        port: process.env.MQTT_PORT,
        username: process.env.MQTT_USER,
        password: process.env.MQTT_PASSWORD,
        reconnectPeriod: 5000
    };

// create client and connect
    const client  = mqtt.connect(brokerURI, mqttOptions);
// attach event listener for 'connect' event and subscribe to the topics:
    client.on('connect',  () => {
        // client has connected to the broker
        console.log(`${mqttOptions.username} connected successful`);
        client.subscribe(SUBSCRIBE_TOPICS, { qos:0 }, () => {
            console.log(`Client subscribed to topics ${SUBSCRIBE_TOPICS} successfully`);
        });
    });

    client.on("message", async(topic, payload) => {
        console.log(`New message received in topic ${topic}`);
        console.log(payload.toString(), payload.toJSON(), payload);
        console.log(`Payload ${payload.toString()}`);
        await createEventService({eventType:eventTypes.NEW_CIGARETTE_BUTT_STORED, storageId:'1'})
    })
}

startMqttClient();
module.exports = {
    startMqttClient,
};