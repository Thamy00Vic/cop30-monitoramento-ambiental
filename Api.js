// api.js
const express = require('express');
const app = express();
const api1 = require('./endpoints/api1');
const api2 = require('./endpoints/api2');

app.use('/api1', api1);
app.use('/api2', api2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});