import { useState } from "react";

function Header() {
    const [destination, setDestination] = useState("")
    const API_END_POINT = 'https://tequila-api.kiwi.com/v2/search'
    const API_KEY = '2NiGrkLwod9HsPQi-CndW6zS8soBRNOI'

    function handleSubmit(e) {
        e.preventDefault();

        console.log(destination);

        const params = {
            "fly_from": "DUB",
            "fly_to": "IEV",
            "date_from": "01/11/2021",
            "date_to": "02/01/2022"
        };
        const url = API_END_POINT + '?' + ( new URLSearchParams( params ) ).toString();
        console.log(url);

        fetch(url, {
            headers: {
                "apikey": API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="header">
            <div>
                <form onSubmit={handleSubmit}>
                    <label><strong>Where do you want to go?</strong></label><br />
                    <input type="text" name="destination" onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Paris" />
                    <button type="submit">Go!</button>
                </form>
            </div>
        </div>
    )
}

export default Header;
