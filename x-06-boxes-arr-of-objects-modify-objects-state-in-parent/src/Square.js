import React from "react"

export default function Square(props) {
    let itemId = props.square.id
    let backgroundColor = props.square.on ? "#006700" : "#760000"
    let stateOnOff = props.square.on ? "on" : "off"

    const bgStyle = {
        backgroundColor
    }


    return (
        <div
            className="box"
            style={bgStyle}
            onClick={() => props.handleClick(itemId)}
        >

            <p>{itemId}</p>
            <p>{stateOnOff}</p>

        </div>
    )
}