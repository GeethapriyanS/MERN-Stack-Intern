import React from 'react'
import "../../css/SignUp.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';

const SignUp = ()=>{

  var [firstName, setFirstname] = useState("");
  var [lastName, setLastname] = useState("");
  var [username, setUsername] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var navigator = useNavigate();
  
  const handleSignup = async (event) => {
    event.preventDefault();
    console.log("Event Triggered");
    try {
      const req = await axios.post("http://localhost:1001/signup", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      });
      console.log(req);
      if (req.data.signupStatus) {
        navigator("/home");
      }
    } catch (err) {
      console.log(err);
    }
};

  return(
   <div className="body">
     <div className="center">
            <div className="text">
               Signup Form
            </div>
            <form onSubmit={handleSignup}>
            <div className="data">
                    <label htmlFor="name">firstName</label>
                    <input type="text" name="firstName" placeholder="enter your firstname"  onChange={(e) => setFirstname(e.target.value)} required/>
                </div>
                <div className="data">
                    <label htmlFor="name">lastName</label>
                    <input type="text" name="lastName" placeholder="enter your lastnamename"  onChange={(e) => setLastname(e.target.value)} required/>
                </div>
                <div className="data">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" placeholder="enter your username"  onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="data">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="data">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type='submit'>sumbit</button>
            </form>
            <Link to='/login'>Already hava an account</Link>
        </div>
        </div>
  )
}
export default SignUp;