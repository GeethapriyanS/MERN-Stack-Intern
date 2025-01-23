import { useState } from "react";
const UseCallback= ()=>{
      var [num,setNum]=useState(0);
      return(
        <div>
            <Navbar />
            <h1>This is useCallback Example</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
        </div>
      )
}
export default UseCallback;