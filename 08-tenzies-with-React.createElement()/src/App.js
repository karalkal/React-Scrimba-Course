import React from "react";
import "./App.css"
import Dice from "./Dice";
import Confetti from "react-confetti";
import { nanoid } from "nanoid"


function App() {
    const [dices, setDices] = React.useState(throwDices())
    const [count, setCount] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)  // tenzies = true means game is won


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
            // Variant 1 - pass both separately
            // id={d.id}
            // holdDice={holdDice}
            holdDice={() => holdDice(d.id)}
        />
    )

    // USING React.createElement
    // type: Type of the html element or component (example : h1,h2,p,button, etc).
    // props: The properties object (example: {style: { color: “red” }} or className or event handlers etc).    
    // children: anything you need to pass between the dom elements.

    if (tenzies) {
        return React.createElement(
            'main',
            {},
            React.createElement('h1', {}, "Tenzies"),
            React.createElement('h4', {}, "Roll until all dice are the same."),
            React.createElement('h4', {}, "Click each die to freeze it"),
            React.createElement('h4', {}, "at its current value between rolls."),

            React.createElement('div', { className: "boxes--container" }, diceElements),
            React.createElement('div', { id: "counter--and--button" },
                React.createElement('div', { id: "counter" },
                    React.createElement('p', {}, `Attempt: ${count}`)
                )),
            React.createElement('div', {},
                React.createElement(Confetti, {},),
                React.createElement('button', { onClick: startNewGame, className: "btn--new" }, "New Game")
            )
        );
    }

    else {
        return React.createElement(
            'main',
            {},
            React.createElement('h1', {}, "Tenzies"),
            React.createElement('h4', {}, "Roll until all dice are the same."),
            React.createElement('h4', {}, "Click each die to freeze it"),
            React.createElement('h4', {}, "at its current value between rolls."),

            React.createElement('div', { className: "boxes--container" }, diceElements),
            React.createElement('div', { id: "counter--and--button" },
                React.createElement('div', { id: "counter" },
                    React.createElement('p', {}, `Attempt: ${count}`)
                )),

            React.createElement('div', {},
                React.createElement('button', { onClick: handleRollClick, className: "btn--roll" }, 'Roll')
            )
        );
    }


    //        USING JSX
    /*
    return (
        < main >
            <h1></h1>
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
        </main >
    );
    */

    function handleRollClick() {
        console.log("here")
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
