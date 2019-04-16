const express = require('express');
const router = express.Router();
const register_pro = require('../models/register_pro');
const bodyparser = require('body-parser');

router.use(bodyparser.urlencoded({ extended: true }));
router.use(bodyparser.json());

/* GET users listing. */
router.post('/register_pro', function (req, res, next) {
  register_pro.create(req.body, function (err, Register_pro) {
    if (err) return next(err);
    res.json(Register_pro)
  })
});

module.exports = router;
