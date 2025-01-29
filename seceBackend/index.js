const express=require("express");
const path=require("path");
const mdb=require('mongoose');
const dotenv=require("dotenv");
const  Signup = require('./models/signupSchema');
const bcrypt=require('bcrypt');
const cors=require('cors');
const app=express();
dotenv.config();
app.use(express.urlencoded());
app.use(express.json())
app.use(cors());

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

app.post('/signup',async (req,res)=>{
    var {firstName,lastName,username,email,password}=req.body;
    console.log(req.body);
    var hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);
    try{ 
    var newCustomer = new Signup({
        firstName:firstName,
        lastName:lastName,
        username:username,
        email:email,
        password:hashedPassword,
    });
    newCustomer.save();
    res.status(201).json({response:"Signup Successful",signupStatus:false});
    console.log("value recived")
 }catch(err){
    res.status(401).send("yooo!")
    console.log("unSuccessful")
 }
});

app.post('/login',async (req,res)=>{
    var {email,password}= req.body;
    console.log(req.body);
    try{ 
    var user=await Signup.findOne({email});
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }
    console.log("insiide try");
    res.status(201).json({ message: "Login successful", user });
    } catch (error) {
    console.error(error);
    console.log("insiide catch");
    res.status(500).json({ message: "Internal server error" });
}});

app.get("/getsignupdet", async (req, res) => {
    var signUpdet = await Signup.find();
    res.status(200).json(signUpdet);
});

app.post("/updatedet", async(req, res) => {
    var updateRec = await Signup.findOneAndUpdate(
      { username: "Geethu" },
      { $set: { username: "bala" } }
    );
    console.log(updateRec);
    updateRec.save()
    res.json("Record Updated")
});

app.listen(1001,()=>{
    console.log("Server Started");
});
