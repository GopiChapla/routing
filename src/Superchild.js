import React, { useState } from "react";

const Superhild=(props)=>{
    const data="SuperChild"
    return (
        <div>
            <h1>Super Child Component</h1>
            <button onClick={()=>props.getitem(data)}>Get</button>
        </div>
    )
}

export default Superhild