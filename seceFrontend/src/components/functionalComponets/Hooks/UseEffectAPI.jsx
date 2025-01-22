import { useEffect,useState } from "react";
import Navbar from "../Navbar";
import axios from "axios"

const UseEffectAPI = ()=>{
    var [posts,setPost] = useState([]);
    var [posts1,setPost1] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data);
            setPost1(res.data);
        })
        .catch((err)=> console.log(err))
    },[posts,posts1]);
    return(
        <div>
            <Navbar/>
             <h1>This is UseEffectAPI Example</h1>
             <ul>
                {
                    posts.map((post)=>(
                        <li key={post.id} style={{listStyleType:"number"}}>{post.title}</li>
                    ))
                }
             </ul>
             <ul>
                {
                    posts1.map((pos)=>(
                        <li key={pos.id} style={{listStyleType:"number"}}>{pos.title}</li>
                    ))
                }
             </ul>
        </div>
    )
}
export default UseEffectAPI;