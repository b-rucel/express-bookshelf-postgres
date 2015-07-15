var express = require('express'),
    router = express.Router();

var users = require('./users/controller.js');

router.get('/users', users.getAll);
router.post('/users', users.create);
router.get('/users/:id', users.getOne);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.delete);


// testing image serving
// router.get('/images/:id', images.getOne);

module.exports = router;