import React from 'react'
import "../../css/SignUp.css"
import {Link} from "react-router-dom"

const SignUp = ()=>{
  return(
    <div className="body">
    <div className="center">
            <div class="text">
               Login Form
            </div>
            <form action="#">
               <div className="data">
                  <label>Email or Phone</label>
                  <input type="text" required/>
               </div>
               <div className="data">
                  <label>Password</label>
                  <input type="password" required/>
               </div>
               <div className="forgot-pass">
                  <a href="#">Forgot Password?</a> 
               </div>
               <div className="btn">
                  <div className="inner"></div>
                  <Link to="/home"><button className="log-but" type="submit">login</button></Link>
               </div>
               <div className="signup-link">
                  Not a member? <a href="#">Signup now</a>
               </div>
            </form>
         </div>
         </div>
  )
}
export default SignUp;