const Joi = require('joi');

const createNewEventSchema = Joi.object({
    type: Joi.string().required(),
    storageId: Joi.string().required(),
});

const validateSchema = () => {
    createNewEventSchema.validate({ username: 'abc', birth_year: 1994 });
}

