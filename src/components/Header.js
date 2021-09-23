import { useState } from "react";

function Header() {
    return (
        <div className="header">
            <div>
                <form>
                    <label><strong>Where do you want to go?</strong></label><br />
                    <input type="text" name="destination" placeholder="e.g. Paris" />
                    <button type="submit">Go!</button>
                </form>
            </div>
        </div>
    )
}

export default Header;
