const Fetchpost = () => {
    const setdata = () => {

        const data = {
            userId: 1,
            id: 111,
            title: "Fetch Post",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        const url = "https://jsonplaceholder.typicode.com/posts"
        const option = {
            method: 'POST',
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

            <button onClick={setdata}>Setdata</button>
        </>
    )
}

export default Fetchpost