import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

// state needs to be maintained here and passed to components to render accoringly
// the toggle function needs to be passed to Navbar component, so it can change state - onClick={props.toggleDarkMode}
// REMEMBER: Hooks can only be called in body of function component, in this case in App(), frm there it will pass
// 1. current state, 2. toggle function

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false) // start in light mode
    console.log(darkMode)

    function toggleDarkMode() {
        setDarkMode(prevState => !prevState)
    }


    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}