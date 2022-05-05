const express = require("express");
const router = express.Router();
const auth   =  require("../middlewares/checkAuth.js");

router.post('/signup', function(req, res)
{
    const auth = require("../controller/authenticate.js");
    const jwt = require("../helper/token.js");
    auth.uzer(req.body, function(result, err)
    {
        if(err)
        {    
            res.status(400).json({ error: err });  
        } else {
            res.status(201).json({ data : { msg : 'User sucessfully created' }});
        }
    }
  );
});

router.post('/login', function(req, res)
{
    const auth = require("../controller/authenticate.js");
    const jwt = require("../helper/token.js");
    auth.loginUser(req.body, function(result, err){
        if(err)
        {    
            res.status(400).json({ error: err });  
        } else {
            maxAge = 1 * 24 * 60 * 60;
            userToken = jwt.userSignature.token(result._id);
            res.cookie("ics", jwt, { httpOnly : true, maxAage : maxAge * 1000 });
            let userData = {
                "api_token" : result.api_token,
                "category" : result.category,
                "password" : result.password
            }
            res.status(201).json({ userToken : userToken, userData : userData });
        }
    });

});

router.get('/logout', function(req, res){
    res.cookie('ics', '', { maxAage : 1 });
    res.json({ message : 'You have sucessfully logged out', "redirectTo" : 'https://recruitment/login' });
});

module.exports = router;