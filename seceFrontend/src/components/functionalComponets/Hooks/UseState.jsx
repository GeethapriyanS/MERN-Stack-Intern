import { useState } from "react";
import Navbar from "../Navbar";
var UseState = () =>{
    const [num,setNum] = useState(0);
    return (
        <div>
            <Navbar />
            <h1>This is useState Example</h1>
            <button onMouseEnter={() => setNum(num-1)}>-</button>
            <h4>The Number is {num}</h4>
            <button onMouseEnter={() => setNum(num+1)}>+</button>
            <button onDoubleClick={()=>setNum(0)}>Reset</button>
        </div>
    )
}

export default UseState;