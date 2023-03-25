import React from "react"


export default class App extends React.Component {
  /**
   * If you can't use class fields in your class components
   * use `constructor` method to initialize your state object.
   * The first line should be a call to the constructor of its parent class 
   * with `super()` keyword to access the parent's properties and methods
   * Then you can add your state variable as a property attached to `this`
   */
  constructor() {
    super()
    this.state = {
      count: 0
    }

    /**
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the 
     * constructor above, so that in our case increment and decrement have acces to `this`
     * When a function is used as a callback, this is lost. The bind() method solves this problem.
     * With the bind() method, an object can borrow a method from another object.
     */
    this.decrement = this.decrement.bind(this)
    this.increment = this.increment.bind(this)
  }

  decrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  increment() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.decrement}>-</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.increment}>+</button>
      </div>
    )
  }
}
