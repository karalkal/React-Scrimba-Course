import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid"

/*
    Hold Dice functionality explained:
1. Create a function `holdDice` that takes `id` as an argument. 
2. Pass the function and id as props to component
(key cannot be utilised in component, hence id=d.id)
3. In each Dice component we have onClick={() => props.holdDice(props.id)
4. When clicked holdDice function is invoked with props.id
    onClick={() => props.holdDice(props.id)}

OR 

just pass holdDice(d.id) like param 
holdDice={() => holdDice(d.id)}
 */


function App() {
    const [dices, setDices] = React.useState(throwDices())
    const diceElements = dices.map(d =>
        <Dice
            key={d.id}
            value={d.value}
            isHeld={d.isHeld}
            // Variant 1
            // id={d.id}
            // holdDice={holdDice}
            holdDice={() => holdDice(d.id)}
        />
    )

    return (
        <main>
            <h1>Tenzies</h1>
            <h4>Roll until all dice are the same. </h4>
            <h4>Click each die to freeze it </h4>
            <h4>at its current value between rolls.</h4>

            <div className="boxes--container">
                {diceElements}
            </div>

            <button onClick={handleRollClick}>Roll</button>
        </main>
    );

    function handleRollClick() {
        setDices(prevArr => prevArr.map(dice => {
            return dice.isHeld === false
                ? { // if not held, create new dice. 
                    //BTW it will not be bad to generate new dice in a separate function, as we have DRY violation at throwDices... nevermind
                    id: nanoid(),
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false
                }
                : dice
        }))
    }

    function holdDice(id) {
        // N.B. this function modifies the state and returns a whole new array, not only the item with selected id
        // if id matches - flip isHeld value of object, else - just push the object unchanged

        // console.log("ID is:", id)
        console.log("State before selection:", dices)
        setDices(prevArr => prevArr.map(dice => {
            return dice.id === id
                ? {
                    ...dice,
                    isHeld: !dice.isHeld  // flip value
                }
                : dice
        }))
    }


    function throwDices() {
        let arrOfDices = []

        for (let i = 0; i < 10; i++) {
            let newDice = {
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }
            arrOfDices.push(newDice)
        }
        return arrOfDices
    }
}


export default App;
