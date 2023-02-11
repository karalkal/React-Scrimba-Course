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

OR

<h1>You have {messages.length} unread message{messages.length > 1 && "s"}</h1>

OR

            <div>
                {messages.length === 0
                    ?
                    <h1>You're all caught up!</h1>
                    :
                    <h1>You have {messages.length} unread
                {messages.length > 1 ? " messages" : " message"}</h1>
                }
            </div>
            
OR 

            <div>
                <h2>
                    {messages.length === 0
                        ? "You're all caught up!"
                        : `You have ${messages.length} unread message${messages.length === 1 ? "" : "s"}`}
                </h2>
            </div>
*/
