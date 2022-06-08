import React,{useState} from "react";

const Conditional=()=>{

    const [data,setData]=useState(true);
    const [show,setShow]=useState("Hide");

   const changeState=()=>{
        if(data)
        {
            document.getElementById("txt").style.display="none"
            setData(false)
            setShow("Display")
        }
        else
        {
            document.getElementById("txt").style.display="block"
            setData(true)
            setShow("Hide")
        }
        
    }
    return (
        <>
        
        <div>
        
            <h1 id="txt">Good Morning</h1>
            <button onClick={changeState}>{show}</button>
        </div>
        </>
    )
}

export default Conditional;