import React from "react"

export default function Square(props) {
    const [singleItem, setSingleItem] = React.useState(props.square)
    console.log(singleItem)

    let itemId = singleItem.id
    let backgroundColor = singleItem.on ? "#006700" : "#760000"
    let stateOnOff = singleItem.on ? "on" : "off"

    // can use style={{backgroundColor}} directly below but it does not bring me alot of joy
    // here our object essentially has key backgroundColor: value backgroundColor
    const bgStyle = {
        backgroundColor
    }


    function toggleState() {
        setSingleItem(prevState => {
            return {
                // can use spread like ...prevState, but we only have two props here, 
                // ID remains the same, ON flips value
                id: prevState.id,
                on: !prevState.on
            }
        })
    }


    return (
        <div
            className="box"
            style={bgStyle}
            onClick={toggleState}
        >

            <p>{itemId}</p>
            <p>{stateOnOff}</p>

        </div>
    )
}