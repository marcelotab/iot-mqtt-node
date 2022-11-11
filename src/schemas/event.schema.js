const EVENT_TYPES = require("../constants/events");
const {Schema, model} = require("mongoose");

const eventSchema = new Schema({
    storage_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        enum: EVENT_TYPES,
        required: true,
    },
}, { timestamps: true });

const Event = model('event', eventSchema);

module.exports = { Event };

