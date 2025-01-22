import { useEffect,useState } from "react";
import Navbar from "../Navbar";

const UseEffect = ()=>{
    var [text,setText] = useState("")
    var [text1,setText1] = useState("")
    return(
        <div>
            <Navbar />
            <h1>This is useEffect Example</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h3>The number is {text}</h3>
            <input type="text" value={text1} onChange={(e1)=>setText1(e1.target.value)}/>
            <h3>The number is {text1}</h3>
        </div>
    )
}
export default UseEffect;