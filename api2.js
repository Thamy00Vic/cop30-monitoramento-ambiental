// api2.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Response from API 2');
});

module.exports = router;