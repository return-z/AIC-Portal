const express = require('express');
const router = express.Router();

router.get('/appointments', async (req, res) => {
    const appointment = await Patient.findOne({})
});

module.exports = router;