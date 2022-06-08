import React from "react";

const Arraydestructure=()=>{

    const arr=["Ram",28,"Male",["Music","Reading"]]

    const [name,age,gender,[hobby1,hobby2]]=arr

    return (
        <div>
            <h1>Array DeStructuring</h1>
            <li>Name : {name}</li>
            <li>Age : {age}</li>
            <li>Gender : {gender}</li>
            <li>Hobbies :{hobby1}, {hobby2}</li>
        </div>
    )
}

export default Arraydestructure