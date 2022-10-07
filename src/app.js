const express = require('express')
const app = express();
const router = require('./routes');
const API_VERSION = 'v1';
const PORT = 3000;

app.use(`/api/${API_VERSION}`, router);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
