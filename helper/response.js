exports.empty_message   =   function(req, res, report)
{
    res.end("Enter Value for " + report);
    return;
}

exports.handleErrors = () => {
    console.log(err.message, err.code);
    let errors = { email : '', password : '' };
    if(err.code === 11000)
    {
        errors.email = "Email already exist";
        return errors;
    }

    if(err.message.includes('user validation failed'))
    {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    };
    return errors;
}

exports.send_failure  =   function(res, http, err)
{
    var code =    err.code ? err.code : err.name;
    res.writeHead(http, {contentType : "application/json"});
    res.end(JSON.stringify({error : code, status : 503, message : err.message}));
}

exports.send_success  =   function(res, http,  data)
{
    res.writeHead(http, {contentType : "application/json"});
    res.end(JSON.stringify({error : null, status : http, message : data}));
}
