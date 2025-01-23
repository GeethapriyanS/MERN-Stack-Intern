import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";

const UseRef = () =>{
    var [text,setText] =useState("");
    var prevRender = useRef();
    useEffect(()=>{
        prevRender.current=text;
    },[text]);

    return(
         <div>
            <Navbar />
            <h1>This is UseRef Example</h1>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The previous Render {prevRender.current}</h4>
         </div>
    )
}
export default UseRef;