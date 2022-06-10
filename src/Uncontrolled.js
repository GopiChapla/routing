import React, { useRef } from "react";

const Uncontrolled = () => {

    const nameref = useRef(null)
    const submitHandler = (e) => {
        e.preventDefault()
        alert("welcome " + nameref.current.value)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                Enter Name :
                <input type="text" ref={nameref}></input><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Uncontrolled