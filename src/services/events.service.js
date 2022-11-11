const {Event} = require('../schemas/event.schema');
const createEventService = async ({eventType, storageId}) => {
    try {
        console.log(`creating new event in service ${eventType}`);
        const eventPayload = {
            name:eventType,
            storage_id: storageId,
        };
        // Persist event in db
        const event = await Event.create(eventPayload);
        await event.save();
        console.log(`created`)
        return {
            event,
        }
    }catch (error) {
        console.log(`An error happened to create new Event ${eventType}: ${error}`);
    }

}

module.exports = {
    createEventService,
}