import { useReducer } from "react"
import Navbar from "../Navbar";
const UseReducer=()=>{
    function Reducer(state,action){
        switch(action.type){
            case 'inc':
                return {val:state.val++};
            case 'dec':
                return {val:state.val--};
            default:
                return state;
        }
    }
    var [state,setaction] =useReducer(Reducer,{val:0})
    return(
        <div>
            <Navbar />
            <h1>This is UseReducer Example</h1>
            <button onClick={()=>{setaction({type:'inc'})}}>+</button>
            <span>{state.val}</span>
            <button onClick={()=>{setaction({type:'dec'})}}>-</button>
        </div>
    )
}
export default UseReducer;