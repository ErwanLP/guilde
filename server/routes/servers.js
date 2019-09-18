let express = require('express');
let ServerController = require('../controllers/ServerController');
let LocationController = require('../controllers/LocationController');
let router = express.Router();

/* GET users listing. */
router.get('/', ServerController.read);

router.get('/:id', ServerController.readById);

router.get('/:id/locations', LocationController.readByServerId);

module.exports = router;
