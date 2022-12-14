/*
CHECK COMMENT IN COMPONENT
*/

import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {

    const [show, setShow] = React.useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="container">
            <button onClick={toggle}>
            WindowTracker is &nbsp;
            {show ? <span>ON</span> : <span>OFF</span> }
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
