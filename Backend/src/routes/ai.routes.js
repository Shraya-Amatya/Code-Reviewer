const express = require ('express');
const router = express.Router();
const aiController = require('./ai.controller')

router.get('/get-review',aiController.getResponse)

module.exports = router;