var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Demo', applications: req.app.get('applications') });
});

module.exports = router;
