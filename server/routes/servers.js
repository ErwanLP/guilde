let express = require('express');
let ServerController = require('../controllers/ServerController');
let router = express.Router();

/* GET users listing. */
router.get('/', ServerController.read);

module.exports = router;
