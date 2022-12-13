/**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */

import React from "react"
import Count from "./Count"

/*  Increment / decrement numbers
export default function App() {
    const [num, setNum] = React.useState(0)
    // NEVER use count++ (which is count=count+1). The setter sets the new value, we don't overwrite it 
    
    function incerement() {
        setNum(prevNum => prevNum + 1)
        // setNum(num + 1) // same result as above but bad practice, 
        // use only when you don't need the previous value of state to determine the new value, here it is needed
    }
    function decerement() {
        setNum(prevNum => prevNum - 1)
    }

    return (
        <div>
            <button onClick={decerement}>–</button>
            <div>
                <h1>{num}</h1>
            </div>
            <button onClick={incerement}>+</button>
        </div>
    )
}
*/


export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
