var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Das Fitness Tracker', style: "index" });
});

module.exports = router;
