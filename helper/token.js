const jwt  =   require('jsonwebtoken');

userSignature = {

    token : function(id)
    {
        return jwt.sign( 
                         { id }, "inthebegining", { expiresIn : "1h" }
                       );
    }
}

module.exports.userSignature  =  userSignature;

