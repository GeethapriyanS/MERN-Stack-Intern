import React from 'react'
import "../../css/SignUp.css"
import {Link} from "react-router-dom"

const SignUp = ()=>{
  return(
   <div className="body">
     <div className="center">
            <div className="text">
               Signup Form
            </div>
            <form method="post" action="https://mern-2025-du77.onrender.com/signup">
            <div className="data">
                    <label htmlFor="name">firstName</label>
                    <input type="text" name="firstName" placeholder="enter your firstname" required/>
                </div>
                <div className="data">
                    <label htmlFor="name">lastName</label>
                    <input type="text" name="lastName" placeholder="enter your lastnamename" required/>
                </div>
                <div className="data">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="enter your email" required/>
                </div>
                <div className="data">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password" required/>
                </div>
                <button>sumbit</button>
                <Link to='/home' className="btn" >Submit</Link>
            </form>
        </div>
        </div>
  )
}
export default SignUp;