import { useState } from "react";
import Navbar from "./Navbar";
const Contact = () =>{
    var [num,setNum] = useState(0);
    return(
        <div>
            <Navbar />
            <h2>This is Contact Page</h2>
            <h3>This is state Example</h3>
            <h4>Number is {num}</h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
export default Contact;