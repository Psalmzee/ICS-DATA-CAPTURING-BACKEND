const express = require("express");
const cookieParser  =   require('cookie-parser');

const bodyParser = require('body-parser');
const routes = require('./routes/auth.js');
const dataEntry = require('./routes/data_entry.js');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);
app.use('/api/data', dataEntry);


port = process.env.port || 7846;
app.listen(port, function(){
    console.log("Listening to requests on port " + port);
});