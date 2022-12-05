import React from "react"
import boxes from "./boxes"
import Square from "./Square"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)

    function toggle(itemId) {

        setSquares(() => {
            let foundObj = squares.find(sq => sq.id === itemId)
            let newObj = { ...foundObj, on: !foundObj.on }
            let updatedSquares = []

            for (let obj of squares) {
                if (obj.id === itemId){         // if ID matches, push newObj
                    updatedSquares.push(newObj)
                }else{
                    updatedSquares.push(obj)    // otherwise just push original 
                }
            }

            return updatedSquares
        })


    }

    return (
        <main>
            {
                squares.map(sq => (
                    <Square
                        key={sq.id}
                        square={sq}
                        handleClick={toggle}
                    />))
            }
        </main>
    )
}
