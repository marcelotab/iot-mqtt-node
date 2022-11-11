const { createEventService } = require('../services/events.service');
const createEvent = async (req, res) => {
    try {
        const { type, storageId } = req.body;
        const result = await createEventService({ eventType:type, storageId});
        res.send({
            status: 201,
            message: `Event ${type} was created successful`
        });
    }catch (error) {
        console.info(`Error on create new Event ${JSON.stringify(error)}`);
    }
}

module.exports = {
    createEvent,
};