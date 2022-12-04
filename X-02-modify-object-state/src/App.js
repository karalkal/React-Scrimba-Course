import React from "react"

function App() {
  
  // initialize state
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    let newThingie = `New Thing ${thingsArray.length + 1}`

    // Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. 
    // Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), 
    // and then set state to use the new array.
    // adding ----	concat, [...arr] spread syntax (example)
    // removing ----	filter, slice (example)
    // replacing	----	map (example)
    // sorting	 ----	copy the array first (example)
    
    setThingsArray(prevArr =>
      // [...prevArr, newThingie]
      // OR
      prevArr.concat([newThingie]) // concat() returns a new array, so acceptable
    )
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

export default App;
