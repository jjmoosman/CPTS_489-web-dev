var express = require('express');
var Supporter = require('../models/Supporter');
var router = express.Router();
// call function that will handle the post method
/* GET home page. */
router.get('/', async function(req, res, next) {
  const table_data = await Supporter.findAll({})
  res.render('index', {table_data});
});

// have the ability to take info input by user and then subit to database along with updating the index.ejs file
router.post("/submit", async function(req, res, next){
  let user = await Supporter.findUser(req.body.first_n)
  if (!req.body.first_n || !req.body.last_n || !req.body.age || !req.body.fpl) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  if (user === null){
    user = await Supporter.create({
      first_n: req.body.first_n,
      last_n: req.body.last_n,
      gender: req.body.gender,
      age: req.body.age,
      fpl: req.body.fpl,
      ides: req.body.ides,
      muf: req.body.muf,
      vc: req.body.vc,
    })
    res.redirect("/?success=true")
  } else {
    res.redirect("/?success=false")
  }
})


module.exports = router;
