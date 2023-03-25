import React from "react"

export default class WindowTracker extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }
    
    componentWillUnmount() {
      // Clean side effects, e.g remove eventListener, as otherwise memory leak occurs
      // Used frequently to disconnect any subscriptions - close web sockets, etc
        window.removeEventListener("resize", this.watchWidth)
    }
    
    render() {
        return (
            <h1>Window width: {this.state.windowWidth}px</h1>
        )
    }
}
