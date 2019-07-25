let express = require('express');
let UserController = require('../controllers/UserController');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET sign up. */
router.post('/sign-up', UserController.signUp);

module.exports = router;
