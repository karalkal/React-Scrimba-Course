
/*
In this scenario if toggled off, component is not rendered at all but we still have eventListener on the component which is not rendered, 
an error occures, so called MEMORY LEAK. Therefore a cleanup function is required when the component is no longer required.
The useEffect callback function needs to return another function which will perform cleanup, in this case remove the event listener. 
The process is as follow - Once the component is rendered it will listen to changes in size, apply it to state and re-render it.
Once the component is no longer rendered (we toggle ot off), React will run the returned clean-up function and it will remove the event listener.
*/

import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
            console.log("State updated, re-rendering...")
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
