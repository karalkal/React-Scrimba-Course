import React from "react"

export default function Quizz(props) {    
    return (
        <div>
            <h1> This is the quizz component</h1>
            <button onClick={props.handleClick}>Restart app</button>

        </div >
    )
}