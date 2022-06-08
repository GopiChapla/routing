import React from "react";

const Arraymap = () => {

    const arr = ["Ram", 28, "Male", "Music"]
    const show=[]
    arr.map((item) => {
        show.push(<li>{item}</li>)
    })
    return (
        <>
            <h1>Array Map</h1>
            <ul className="objlist">
            {show}
            </ul>
        </>
    )
}

export default Arraymap