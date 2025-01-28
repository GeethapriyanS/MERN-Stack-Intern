const express=require("express");
const path=require("path");
const mdb=require('mongoose');
const dotenv=require("dotenv");
const  Signup = require('./models/signupSchema');
const app=express();
dotenv.config();
app.use(express.urlencoded());
app.use(express.json())

mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connection Sucessful")
}).catch((e)=>{
    console.log("MongoDB Connection Not Sucessful",e);
})
app.get('/',(req,res)=>{
    res.send("Hello Everyone !! \n I am Geethapriyan S");
});
app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.get('/json',(req,res)=>{
    res.json({"Name":"Geethapriyan"});
});

app.post('/signup',(req,res)=>{
    var {firstName,lastName,username,email,password}=req.body;
    console.log(req.body)
    try{ 
    var newCustomer = new Signup({
        firstName:firstName,
        lastName:lastName,
        username:username,
        email:email,
        password:password,
    });
    newCustomer.save();
    res.status(201).send("Signup Sucessful");
    console.log("value recived")
 }catch(err){
    res.status(401).send("yooo!")
    console.log("unSuccessful")
 }
});

app.post('/login',async (req,res)=>{
    var {email,password}= req.body;
    console.log(req.body)
    try{ 
    var user=await Signup.findOne({email});
    if(!user || user.password!=password){
       return res.status(400).send("LoginUnSucessful");
    }
    if(user.password!=password){
       return res.status(400).send("Login Sucessful");
    }
   return res.status(201).send("Login Sucessful");
 }catch(err){
    res.status(401).send("yooo!")
    console.log("unSuccessful")
 }
});
app.listen(1001,()=>{
    console.log("Server Started");
});
