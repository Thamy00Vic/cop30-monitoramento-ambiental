// api1.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Response from API 1');
});

module.exports = router;