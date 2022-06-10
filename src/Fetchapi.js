import { useEffect, useState } from "react";

const Fetchapi = () => {


    const [apidata,setApidata]=useState([])
    const url = "https://jsonplaceholder.typicode.com/posts";
    const getdata=async ()=>{
        const response=await fetch(url);
        setApidata(await response.json())
        console.log(apidata)
    }
    const data=apidata.map((item)=>{
        return <>
        <div className="apishow" key={item.id}>
        Id : {item.id}<br/><hr/><br/>
         Title : {item.title}<br/><br/>
         Body : {item.body}
        </div>
        </>
     })
useEffect(()=>{
    getdata();
},[])
return (
    <div>
        <h1>Fetch API</h1>
        {data}
    </div>
)
}
export default Fetchapi