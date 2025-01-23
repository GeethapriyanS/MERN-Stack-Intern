import { useMemo, useState } from "react"
import Navbar from "../Navbar";
var slowfunction=(num)=>{
    for(var slow=0;slow<100000;slow++){}
    return num*2;
}
const UseMemo = ()=>{
    var [num,setNum] = useState(0);
    var [dark,setDark] =useState(false);
    var styling = {
        backgroundColor:dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    var doublingNum = useMemo(()=>{
        return slowfunction(num)
    },[num])
    return(
        <div>
            <Navbar />
            <h2>This is UseMemo Example</h2>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setDark(curTheme=> !curTheme)}>Toggle</button>
            <h4 style={styling}>The number is {doublingNum}</h4>
        </div>
    )
}
export default UseMemo;