import axios from "axios";

const Axiospost = () => {

    const setdata = () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const data = {
            userId: 1,
            id: 101,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.post(url, data).then((response) => {
            console.log(response)

        })

    }
    return (
        <div>
            <h1>Axios POST</h1>
            <button onClick={setdata}>Set Data</button>
        </div>
    )
}

export default Axiospost