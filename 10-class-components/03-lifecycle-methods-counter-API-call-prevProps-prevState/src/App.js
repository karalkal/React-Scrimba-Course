import React from "react"

export default class App extends React.Component {
  state = {
    count: 1,
    character: {}
  }

  add = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  subtract = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  getStarWarsCharacter = (id) => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ character: data }))
  }

  componentDidMount() {
    this.getStarWarsCharacter(this.state.count)
  }

  componentDidUpdate(prevProps, prevState) {
    // need to check as otherwise we end up with an infinite loop
    // page re-renders when button is clicked => componentDidUpdate => getStarWarsCharacter(fetch) => 
    // setState (with same value) => re-renders => componentDidUpdate ...
    if (prevState.count !== this.state.count) {
      this.getStarWarsCharacter(this.state.count)
    }
  }

  render() {
    return (
      <>
        <div className="counter">
          {/* Ensure count cannot be set to < 1 */}
          {this.state.count >= 1
            ? <button className="counter--minus" onClick={this.subtract}>-</button>
            : this.setState({
              count: 1,
              character: {}
            })}

          <div className="counter--count">
            <h1>{this.state.count}</h1>
          </div>
          <button className="counter--plus" onClick={this.add}>+</button>
        </div>
        <h1>{this.state.character.name || "Loading..."}</h1>
      </>
    )
  }
}
