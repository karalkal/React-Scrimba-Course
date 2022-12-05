import React from "react"
import boxes from "./boxes"
import Square from "./Square"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)

    return (
        <main>
            {
                squares.map(sq => (<Square key={sq.id} square={sq} />))
            }
        </main>
    )
}
