const express=require("express");
const path=require("path");
const mdb=require('mongoose');
const dotenv=require("dotenv");
let  Signup = require('./models/signupSchema');
const app=express();
app.use(express.json())
dotenv.config();

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

app.post('/signup', async (req,res)=>{
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
    console.log(newCustomer);
    await newCustomer.save()
    .then((res)=>{console.log(res)});
    res.status(201).send("Signup Sucessful");
 }catch(err){
    res.status(400).send("Signup Not Sucessful",err);
 }
});

app.listen(1001,()=>{
    console.log("Server Started");
});
