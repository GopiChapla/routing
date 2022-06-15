const fetchform = () => {
    const setdata = (e) => {
        e.preventDefault()
        const url = "https://jsonplaceholder.typicode.com/posts"
        let formData = new FormData(e.target);
        const plainFormData = Object.fromEntries(formData.entries());

        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plainFormData)
        }
        fetch(url, option)
            .then(response => response.json())
            .then(data => console.log(data))
    };
    return (
        <>

            <form onSubmit={setdata} id="formele">
                <input type="text" name="avatar" placeholder="Enter avatar" /><br />
                <input type="text" name="email" placeholder="Enter email" /><br />
                <input type="text" name="fname" placeholder="Enter First Name" id="fname" /><br />
                <input type="number" name="uid" placeholder="Enter id" /><br />
                <input type="text" name="lname" placeholder="Enter Last Name" /><br />
                <input type="submit" />
            </form>

        </>
    )
}

export default fetchform