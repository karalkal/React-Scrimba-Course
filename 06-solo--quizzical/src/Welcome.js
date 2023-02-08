import React from "react"

export default function Welcome(props) {
    return (
        <div className="flex-container">
            <h1 >Quizzical</h1>
            <h2> Test your knowledge</h2>
            <button onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}