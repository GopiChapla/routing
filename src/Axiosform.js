import axios from "axios"
import { useState } from "react"

const Axiosform = () => {

    const [fname,setFname]=useState()
    const [lname,setLname]=useState()
    const [uid,setId]=useState()

    const getFname=(e)=>{
        setFname(e.target.value)
    }
    const getLname=(e)=>{
        setLname(e.target.value)
    }
    const getid=(e)=>
    {
        setId(e.target.value)
    }
    const postdata = (e) => {
        e.preventDefault()
        const url = "https://reqres.in/api/users";

        // const url = "/t/gzprv-1655203709/post"
        const data = {
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            email: fname+"@reqres.in",
            first_name: fname,
            id: uid,
            last_name: lname
        }
        
        axios.post(url,data).then(response=>{
            console.log(response)
        })
    }
    return (
        <div>
            <h1>Axios Form</h1>

            <form onSubmit={postdata}>
                <input type="text" name="fname" placeholder="Enter First Name" onChange={getFname}/><br />
                <input type="text" name="lname" placeholder="Enter Last Name" onChange={getLname}/><br />
                <input type="number" name="uid" placeholder="Enter id" onChange={getid}/><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Axiosform