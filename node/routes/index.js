var express = require('express');
var router = express.Router();
const kitchens = require('../models/kitchen');
const { ensureAuthenticated } = require('../helpers/auth');
const mongoose = require('mongoose');
require('../models/kitchen');
const Kitchen = mongoose.model('kitchens');

/* GET home page. */
// router.get('/api/kitchen', function (req, res, next) {
//   Kitchen.find(function (err, kitchens) {
//     if (err)
//       res.send(err)

//     res.json(kitchens);
//   });
// });
//post new kitchen (should be update)
router.post('/api/kitchen', function (req, res, next) {
  kitchens.create(req.body, function (err, kitchen) {
    if (err) return next(err);
    res.json(kitchen)
  })
});

//delete
router.delete('/api/kitchen/:kitchen_id', function (req, res) {
  Kitchen.remove({
    _id: req.params.kitchen_id
  }, function (err, kitchen) {
    if (err)
      res.send(err);
    Kitchen.find(function (err, kitchens) {
      if (err)
        res.send(err)
      res.json(kitchens);
    });
  });
});

// edit
// router.put('/api/kitchen/:kitchen_id',(req,res){
//   const requestId = req.params.kitchen_id;

// })

// router.post('/kitchen', (req, res) => {
//   let errors = [];

// if (!req.body.workingdays) {
//   errors.push({ text: 'Please add a workingdays' });
// }
// if (!req.body.tarttime) {
//   errors.push({ text: 'Please add starttiem' });
// }
// if (!req.body.endtime) {
//   errors.push({ text: 'Please add endtime' });
// }
// if (!req.body.item) {
//   errors.push({ text: 'Please add some items' });
// }



//   if (errors.length > 0) {
//     res.json({
//       errors: errors,
//       workingdays: req.body.workingdays,
//       starttime: req.body.starttime,
//       endtime: req.body.endtime,
//       item: req.body.item
//     });
//   } else {
//     const newUser = {
//       workingdays: req.body.workingdays,
//       starttime: req.body.starttime,
//       endtime: req.body.endtime,
//       item: req.body.item,
//       user: req.user.id
//     }
//     new Kitchen(newUser)
//       .save()
//       .then(kitchen => {
//         res.redirect('/kitchens');
//       })
//   }
// });

//edit kitchen
router.put('/:id', (req, res) => {
  Kitchen.findOne({
    _id: req.params.id
  })
    .then(kitchen => {
      // new values
      kitchen.workingdays = req.body.workingdays;
      kitchen.starttime = req.body.starttime;
      kitchen.endtime = req.body.endtime;
      kitchen.item = req.body.item;
      idea.save()
        .then(kitchen => {
          res.redirect('/kitchens');
        })
    });
});

// Delete Idea
router.delete('/:id', (req, res) => {
  Kitchen.remove({ _id: req.params.id })
    .then(() => {
      res.redirect('/kitchens');
    });
});


module.exports = router;
