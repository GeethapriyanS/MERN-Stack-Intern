import { useEffect,useState } from "react";
import Navbar from "../Navbar";

const UseEffect = ()=>{
    var [text,setText] = useState("")
    return(
        <div>
            <Navbar />
            <h1>This is useEffect Example</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h3>The number is {text}</h3>
        </div>
    )
}
export default UseEffect;