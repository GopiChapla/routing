import React, { useState } from "react";

const Controlled = () => {

    const [name,setName]=useState("Guest")
    const submitHandler = (e) => {
        e.preventDefault()
        alert("welcome " + name)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                Enter Name :
                <input type="text" onChange={(e)=>setName(e.target.value)}></input><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Controlled