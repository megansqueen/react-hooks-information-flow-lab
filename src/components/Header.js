import React from "react";

//new mode send up to app

function Header({onDarkModeClick, mode}) {

    return (
        <header>
            <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {mode ? "Dark" : "Light"} Mode
                </button>
        </header>
    )

}

export default Header