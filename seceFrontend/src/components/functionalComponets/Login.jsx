import React from 'react'
import "../../css/SignUp.css"
import {Link} from "react-router-dom"

const Login = ()=>{
  return(
   <div className="body">
     <div className="center">
            <div className="text">
               Login Form
            </div>
            <form method="post" action="http://localhost:1001/login">
                <div className="data">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="enter your email" required/>
                </div>
                <div className="data">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password" required/>
                </div>
                <button>sumbit</button>
            </form>
        </div>
        </div>
  )
}
export default Login;