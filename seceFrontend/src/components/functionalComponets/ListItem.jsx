import { useEffect, useState } from "react";

const ListItem = ({func})=>{
    var [numbers,setNumbers]=useState([]);
    useEffect(()=>{
        setNumbers(func(4));
    },[func]);
    return (
        <div>
           <h3>This is List Item Component</h3>
           {numbers.map((number,index)=>{
             return <h4 key={index}>{number}</h4>;
           })}
        </div>
    )
}
export default ListItem;