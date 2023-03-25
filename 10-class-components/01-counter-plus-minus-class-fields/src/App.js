import React from "react"


export default class App extends React.Component {
  /**
   * A class component with state will ALWAYS save state in a class
   * instance variable called `state`, which will always be an object.
   * The individual values you save in state will be properties on
   * the `state` object. 
   * The simplest (and more modern) way to delcare new state in a
   * class component is to just use a "class field" declaring state
   * as an object, like you see below. 
   * Then, throughout the rest of the component (e.g. inside the render
   * method) you can access that state with `this.state.<yourPropertyHere>`
   */

  // Class field declaration, i.e. properties - do not depend on the constructor*/
  state = {
    count: 0
  }

  /*** Any class methods you create that need to call the `this.setState`
   * method (which is available to our component because we're extending
   * React.Component) should be declared as an arrow function, for 
   * reasons we will discuss soon. (Note: other class methods you
   * want to make that DON'T use `this.setState` don't necessarily
   * need to be declared as arrow function to work correctly)
   */

  add = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
    // Shorthand
    // this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  subtract = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
    // Shorthand
    // this.setState(prevState => ({ count: prevState.count - 1 }))
  }


  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>-</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}
