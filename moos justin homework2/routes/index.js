var express = require('express');
var Supporter = require('../models/Supporter')
var router = express.Router();
// call function that will handle the post method
/* GET home page. */
router.get('/', async function(req, res, next) {
  const table_data = await Supporter.findAll({})
  res.render('index', {table_data});
});

// have the ability to take info input by user and then subit to database along with updating the index.ejs file
router.post("/submit", async function(req, res, next){
  let user = await Supporter.findUser(req.body.email)
  if (!req.body.email || !req.body.name || !req.body.city || !req.body.state) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  if (user === null){
    user = await Supporter.create({
      email: req.body.email,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
    })
    res.redirect("/?success=true")
  } else {
    res.redirect("/?success=false")
  }
})

module.exports = router;
