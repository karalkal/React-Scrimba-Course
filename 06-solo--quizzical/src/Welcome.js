import React from "react"


export default function Welcome(props) {
    return (
        <div className="flex-container--welcome">
            <h1 id="h1--welcome" >Quizzical</h1>
            <h2 id="h2--welcome"> Test your knowledge</h2>
            <button onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}