import Hoc from "./Hoc";
import React,{useState} from "react";

const Hocred =()=>{

    const [count,setCount]=useState(0)
    return (
        <div style={{backgroundColor:'red',padding:'50px'}}>
            <h1 onMouseEnter={()=>setCount(count+1)}>{count}</h1>
        </div>
    )
}

export default Hoc(Hocred)