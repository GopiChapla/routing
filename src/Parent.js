import React from "react";
import Child from "./Child";

const Parent=()=>{
    const setitem=(data)=>{
        console.log(data)
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <Child setdata={setitem}></Child>
        </div>
    )
}

export default Parent