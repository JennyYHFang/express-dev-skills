var express = require('express');
var router = express.Router();

// require the controller with functionality
var skillsCtrl = require('../controllers/skills');

// for all skillsCtrl
// get
router.get('/', skillsCtrl.index);

// get .show
router.get('/:id', skillsCtrl.show);

// get /skills/new
router.get('/new', skillsCtrl.new);

// post /skills
router.post('/', skillsCtrl.create);

// delete /skills/:id
router.delete('/:id', skillsCtrl.delete);


module.exports = router;