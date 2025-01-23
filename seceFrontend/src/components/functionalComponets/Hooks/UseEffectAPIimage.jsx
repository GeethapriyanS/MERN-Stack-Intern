import { useEffect,useState } from "react";
import Navbar from "../Navbar";
import axios from "axios"

const UseEffectAPIimage = ()=>{
    var [posts,setPost] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data);
        })
        .catch((err)=> console.log(err))
    },[]);
    return(
        <div>
            <Navbar/>
             <h1>This is UseEffectAPI Example using Grid</h1>
             <div id="grid-container">  
                {
                    posts.map((post)=>(
                        <div className="grid-items"><li key={post.id} style={{listStyleType:"none"}}><img src={post.image} alt="images" /></li></div>
                    ))
                }
             </div>
        </div>
    )
}
export default UseEffectAPIimage;