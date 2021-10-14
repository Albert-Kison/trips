import { useState } from "react";

function Header() {
    const [destination, setDestination] = useState("")
    const [buttonPressed, setButtonPressed] = useState(false);

    return (
        <div className="header">
            <div>
                <form onSubmit={() => setButtonPressed(true)}>
                    <label><strong>Where do you want to go?</strong></label><br />
                    <input type="text" name="destination" onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Paris" />
                    <button type="submit">Go!</button>
                </form>
            </div>
        </div>
    )
}

export default Header;
