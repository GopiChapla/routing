import axios from "axios";

const Axiosdelete=()=>{

    const deletedata=()=>{
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        const data= {
            userId: 1,
            id: 101,
            title: "Axios Put",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.delete(url,data).then(response=>{
            console.log(response)
        })
    }
    return (
        <div>
            <h1>Axios DELETE</h1>
            <button onClick={deletedata}>DELETE</button>
        </div>
    )
}

export default Axiosdelete