let express = require('express');
let ServerController = require('../controllers/ServerController');
let LocationController = require('../controllers/LocationController');
let WorkerController = require('../controllers/WorkerController');
let router = express.Router();

/* GET users listing. */
router.get('/', ServerController.read);

router.get('/:id', ServerController.readById);

router.get('/:id/locations', LocationController.readByServerId);

router.get('/:id/workers', WorkerController.readByServerId);

module.exports = router;
