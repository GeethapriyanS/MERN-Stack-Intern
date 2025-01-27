const mdb= require('mongoose');
let Schema=mdb.Schema;
const signupSchema = new Schema({
    firstName:String,
    lastName:String,
    username:String,
    email:String,
    password:String,
});
const Signup = mdb.model("Signup",signupSchema);
module.exports = Signup;