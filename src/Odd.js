import React from "react";

const Odd = () => {

    const checkNo = () => {
        let no = Number(document.getElementById("num").value)
        let bt = document.getElementById("btn")
        { (no % 2 !== 0) ? bt.disabled = true : bt.disabled = false }
    }

    const showNo = () => {
        alert(document.getElementById("num").value)
    }
    return (
        <div>
            <input type="number" id="num" placeholder="Enter Number" onChange={checkNo}></input>
            <button id="btn" onClick={showNo}>Click</button>
        </div>
    )
}

export default Odd;