import React, { useState } from "react";
import axios from "axios";

const Axiosget = () => {

    const [apidata,setApidata]=useState([])
    const getdata = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url).then(response => {
            setApidata(response.data)
            console.log(apidata)
        })
    }

    
     const data = apidata.map((item) => {
        return <>
            <div className="apishow" key={item.id}>
                Id : {item.id}<br /><hr /><br />
                Title : {item.title}<br /><br />
                Body : {item.body}
            </div>
        </>
    })
    return (
        <div>
            <h1>Axios Get</h1>
            <button onClick={getdata}>Get Data</button><br/>
            {data}
        </div>
    )
}

export default Axiosget