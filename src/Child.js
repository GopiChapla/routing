import React, { useState } from "react";
import Superhild from "./Superchild";

const Child=(props)=>{
    const [data,setData]=useState("Child")
    const getdata=(val)=>{
       
        setData(val)
    }
    return (
        <div>
            <h1>Child Component</h1>
            <Superhild getitem={getdata}/>
            <button onClick={()=>props.setdata(data)}>Set</button>
        </div>
    )
}

export default Child