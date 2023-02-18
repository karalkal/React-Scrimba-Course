import React from "react";
import Welcome from "./Welcome";
import Quizz from "./Quizz";

// Toggle screen selection between welcome and actual app,
// Func must be passed to results component as well
function App() {
  const [startScreen, setStartScreen] = React.useState(true)

  function toggleScreen() {
    setStartScreen(prevScreen => !prevScreen)
  }

  return (
    <div>
      {startScreen
        ? <Welcome handleClick={toggleScreen} />
        : <Quizz handleClick={toggleScreen} />}
    </div>
  );
}


export default App;
