import React,{useState} from "react";

const Getinput = () => {

    const [num,setNum]=useState()
    const showNo = (e) => {
        setNum(e.target.value)
    }
    return (
        <div>
            <p>{num}</p>
            <input type="number" id="num" placeholder="Enter Number" onChange={(e)=>showNo(e)}></input>
        </div>
    )
}

export default Getinput;