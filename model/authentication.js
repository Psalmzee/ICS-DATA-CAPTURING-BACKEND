const mongoose    =   require('mongoose');
mongoose.Promise  =   global.Promise;
const User        =   mongoose.Schema;
const isEmail     =   require('validator');

const url = "mongodb+srv://samsonokeji:Password1968@cluster0.nhcyr.mongodb.net/recruitment?retryWrites=true&w=majority";
const connectionParams  =   {   useNewUrlParser: true,  useUnifiedTopology: true }
mongoose.connect(url,   connectionParams)
        .then( () => {    
                        console.log('Connected to database')
                     }
        )
        .catch( (err) => {
                        console.error(`Error connecting to the database. \n${err}`);
        }
    )

const userSchema = new User(
    { 
        firstname : {   type : String, maxlength : 15, required : [true, 'Firstname is required'] },
        surname   : {   type : String, maxlength : 15, required : [true, 'Surname is required'] },
        email     : {   type : String, maxlength : 30, required : [true, 'Email is required'], unique : true },
        password  : {   type : String, minlength : [60, 'Minimum password length'], required : [true, 'Password is required'] },
        category  : {   type : String, max : 10 },
        api_token : {   type : String, default : null },
        entry     : {   type : Date, default : Date.now }
    }
);

module.exports = mongoose.model('User', userSchema);