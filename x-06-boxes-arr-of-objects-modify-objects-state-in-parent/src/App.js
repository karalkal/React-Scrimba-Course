import React from "react"
import boxes from "./boxes"
import Square from "./Square"

export default function App(props) {

    const [squares, setSquares] = React.useState(boxes)

    function toggle(itemId) {
        /*   THE UGLY BUT UNDERSTANDABLE ONE
                setSquares(prevSquares => {
                    let foundObj = prevSquares.find(sq => sq.id === itemId)
                    let newObj = { ...foundObj, on: !foundObj.on }
                    let updatedSquares = []
        
                    for (let obj of prevSquares) {
                        if (obj.id === itemId){         // if ID matches, push newObj
                            updatedSquares.push(newObj)
                        }else{
                            updatedSquares.push(obj)    // otherwise just push original 
                        }
                    }
        
                    return updatedSquares
                })
                
                OR 
                
        function toggle(id) {
            setSquares(prevSqArr => {
                let clickedItemIndex = squares.indexOf(squares.find(sq => sq.id === id))
                let itemToUpdate = squares[clickedItemIndex]
                let updatedItem = {
                    ...itemToUpdate,
                    on: !itemToUpdate.on
                }

                return [
                    ...prevSqArr.slice(0, clickedItemIndex),
                    updatedItem,
                    ...prevSqArr.slice(clickedItemIndex + 1)
                ]
            })
        }
                
                
        */

        // THE REAL ONE
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === itemId ? { ...square, on: !square.on } : square
            })
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
