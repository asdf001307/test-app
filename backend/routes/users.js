var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign', function (req, res) {
  const user = {
    'name': req.body.user.name,
    'password': req.body.user.pw,
  };

      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.pw, salt);
      connection.query('INSERT INTO auto_test VALUES ("' + user.name + '","' + encryptedPassword + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sing Up Success!'
      })
})
module.exports = router;
