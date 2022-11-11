const mongoose = require('mongoose')

const connection = async () => {
    try {
        const cluster = process.env.DB_CLUSTER;
        const dbname = process.env.DB_NAME;
        const username = process.env.DB_USER;
        const password = process.env.DB_PASSWORD;

        const url = `mongodb+srv://${username}:${password}@${cluster}.ryjqhrh.mongodb.net/${dbname}?retryWrites=true&w=majority`;

        const dbParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
         await mongoose.connect(url, dbParams);
        console.info(`Connection successful`);
    } catch (error) {
        console.info(`Error to conect to database ${JSON.stringify(error)}`);
    }
}

module.exports = {
    connection,
};
