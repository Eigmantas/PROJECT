const express = require('express');
const router = express.Router();

const GullfossController = require('../controllers/Gullfoss.controller');

router.get('/', GullfossController.index);
router.get('/matsedill', pagesController.matsedill);
router.get('/gullfoss', pagesController.gullfoss);


module.exports = router;
