import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>
                {isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div >
    )
}

/* Double ternary
export default function App() {
    const [messages, setMessages] = React.useState(["b"])

    return (
        <div>
            {!messages
                ? "You're all caught up!"
                : messages.length === 1
                    ? `You have 1 unread message`
                    : `You have ${messages.length} unread messages`}
        </div>
    )
}
// this might be more readable: 
// <h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>
*/
