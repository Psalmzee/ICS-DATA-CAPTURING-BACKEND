const jwt  =   require('jsonwebtoken');
const uzer =   require("./../Model/authentication.js");

const requireAuth = (req, res, next) => {
	const token = req.cookies.ics;
		
	if(token)
	{
		jwt.verify(token, "inthebegining", (err, recruit) => {
			if(err)
			{
				console.log(err.message);
				res.status(403).json({message : 'unauthorized', "redirectTo" : 'https://recruitment/login' });
			} else {
				console.log(recruit);
				next();
			}
		});
	} else {
		res.status(403).json({message : 'unauthorized', "redirectTo" : 'https://recruitment/login' });
	}				
}
module.exports.requireAuth = requireAuth;

const checkUser = (req, res, next) => {
	const token = req.cookies.ics;

	if(token)
	{
		jwt.verify(req.userToken, "inthebegining", (err, recruit) => {
			if(err)
			{
				console.log(err);
				res.status(403).json({ message : "Unauthorized", "redirectTo" : 'https://recruitment/login' });
			} else {
				console.log(recruit);
				if(recruit.id !== undefined){
					next();
				} else {
					res.status(403).json({ message : "Unauthorized", "redirectTo" : 'https://recruitment/login' });
				}
			}
		});
	} else {
		res.status(403).json({ message : "You are not allowed to view this page", "redirectTo" : 'https://recruitment/login' });
	}				
}
module.exports.checkUser = checkUser;

const verifyToken = (req, res, next) => {  

    const bearerHearder = req.headers['authorization'];  
	if(typeof bearerHearder != 'undefined')
	{  
        const bearer = bearerHearder.split(' '); 
        const bearerToken = bearer[1];  
        req.userToken = bearerToken;
        next();  
  
    }else{  
        //Forbidden  
        res.sendStatus(403);  
    }  
}  
module.exports.verifyToken = verifyToken;
