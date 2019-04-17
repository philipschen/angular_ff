const express = require('express');
const router = express.Router();
const register_pro = require('../models/register_pro');
const register_cons = require('../models/register_cons');

const bodyparser = require('body-parser');

router.use(bodyparser.urlencoded({ extended: true }));
router.use(bodyparser.json());

//post new providers
router.post('/register_pro', function (req, res, next) {
  register_pro.create(req.body, function (err, Register_pro) {
    if (err) return next(err);
    res.json(Register_pro)
  })
});

//post new consumers
router.post('/register_cons', function (req, res, next) {
  register_cons.create(req.body, function (err, Register_cons) {
    if (err) return next(err);
    res.json(Register_cons)
  })
});

//get 
router.get('/register_pro', function (req, res, next) {
  res.json('good sh1t');
});

router.get('/register_cons', function (req, res, next) {
  res.json('good sh1t too');
});



module.exports = router;
