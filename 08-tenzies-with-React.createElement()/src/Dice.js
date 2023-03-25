import "./Dice.css"

export default function Dice(props) {
    let colorBG = props.isHeld === true
        ? "dice--green"
        : "dice--white"

    return (
        //Variant 1

        // <div
        //     className={colorBG}
        //     onClick={() => props.holdDice(props.id)}>
        //     <p>{props.value}</p>
        // </div>
        
        <div
            className={colorBG}
            onClick={props.holdDice}>
            <p>{props.value}</p>
        </div>
    )
}
