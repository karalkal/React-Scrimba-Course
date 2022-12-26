import React from "react";
import Dice from "./Dice";

function App() {
    const [dices, setDices] = React.useState(shuffleNums())
    const diceElements = dices.map(d =>
        <Dice value={d} className="dice--white" />
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

            <button onClick={handleClick}>Roll</button>
        </main>
    );

    function handleClick() {
        // console.log(shuffleNums())
        // To implement later - if num is already saved, push to new arr, else get new random
        setDices(prevState => shuffleNums())
    }


    function shuffleNums() {
        let arrOfNumbers = []

        for (let i = 0; i < 10; i++) {
            arrOfNumbers.push(Math.ceil(Math.random() * 6))
        }
        return arrOfNumbers
    }

}


export default App;
