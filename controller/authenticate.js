const bcrypt        =   require('bcrypt');
const user          =   require("./../Model/authentication.js");
const randomString  =   require('../Helper/randomstring.js');
const jwt           =   require("../helper/token.js");

const saltRounds = 10;

module.exports.uzer    =   function(u, callback)
{
    let newUser =   new user();
    newUser.firstname   =   u.firstname;
    newUser.surname     =   u.surname;
    newUser.email       =   u.email;
    newUser.password    =   bcrypt.hashSync(u.password, saltRounds);
    newUser.category    =   u.category;

    newUser.save(function(err, result) 
    {
      if(err) 
      {
        // console.log("Error");
        if(err.code == 11000)
        {
            callback("Email already exist");
        } else {
            callback(err);
        }
      } else {
        // console.log("Result");
        callback(result);
      }
    });
}

module.exports.loginUser    =   function(u, callback)
{
    let password    =   bcrypt.hashSync(u.password, saltRounds);
    user.findOne( { email : u.email }, function(err, result)
    {
        if(err)
        { 
            callback(err);
        } else {
            let check = bcrypt.compare(password, result.password);
            // if(password === "$2b$10$Q79bz/6ilWloZyNjizHQlu1mdeBBfRWKg7ETGmf3wqARPgLLvXjg.")
            // if(u.email == result.email)
            if(check)
            {
                //update token field
                //before updating, try fetching from database using  the userToken returned
                callback(result);
            } else {
                callback({ msg : "Invalid username or password" });
            }
        }
    });     
}
