const express = require("express");
const router = express.Router();
const auth   =  require("../middlewares/checkAuth.js");

router.get('/profile', auth.verifyToken, auth.checkUser, function(req, res)
{
    //
});

module.exports = router;
