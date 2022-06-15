const Fetchdelete = () => {
    const deletedata = () => {

        const data = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        const url = "https://jsonplaceholder.typicode.com/posts/1"
        const option = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(url, option)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    };
    return (
        <>

            <button onClick={deletedata}>Deletedata</button>
        </>
    )
}

export default Fetchdelete