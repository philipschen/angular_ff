var express = require('express');
var router = express.Router();
const kitchens = require('../models/kitchen');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//post new kitchen (should be update)
router.post('/kitchen', function (req, res, next) {
  kitchens.create(req.body, function (err, kitchen) {
    if (err) return next(err);
    res.json(kitchen)
  })
});
module.exports = router;
