const Fetchput = () => {
    const updatedata = () => {

        const data = {
            userId: 19,
            id: 1,
            title: "Fetch Put",
            body: "This is fetch api put method example."
        }
        const url = "https://jsonplaceholder.typicode.com/posts/1"
        const option = {
            method: 'PUT',
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

            <button onClick={updatedata}>Updatedata</button>
        </>
    )
}

export default Fetchput