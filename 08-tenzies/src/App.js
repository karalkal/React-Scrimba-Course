import React from "react";
import Dice from "./Dice";
import Confetti from "react-confetti";
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


/*
    End game functionality
 * 1. Add new state called `tenzies`, default to false, i.e. game not won.
 * 2. Add an effect that runs every time the `dice` state array changes. If changed tenzies state changes, and button too.
 */


function App() {
    const [dices, setDices] = React.useState(throwDices())
    const [count, setCount] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)
    

    // Check if game is won
    React.useEffect(() => {
        let allEqualValues = dices.every(d => d.value === dices[0].value)
        let allHeld = dices.every(d => d.isHeld === true)
        if (allEqualValues && allHeld) {
            setTenzies(true)
            // console.log("Game won!", tenzies)        // Firstly it shows tenzies as false!!! WTF?! It seems like useState hook is asynchronous. 
        }
    }, [dices])

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
            <div id="counter--and--button">
                <div id="counter">
                    <p> Attempt: <b>{count}</b></p>
                </div>

                {/* {tenzies ? "New Game" : "Roll"} */}

                {tenzies
                    ?
                    <div><Confetti />
                        <button onClick={startNewGame} className="btn--new">
                            New Game
                        </button>
                    </div>
                    : <button onClick={handleRollClick} className="btn--roll">
                        Roll
                    </button>
                }
            </div>
        </main>
    );

    function handleRollClick() {
        setCount(oldCount => oldCount + 1)

        setDices(prevArr => prevArr.map(dice => {
            return dice.isHeld === false
                ? { // if not held, create new dice. 
                    // BTW it will not be bad to generate new dice in a separate function, as we have DRY violation at throwDices... nevermind
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


    function startNewGame() {
        setTenzies(false)
        setDices(throwDices)
        setCount(0)
    }
}


export default App;
