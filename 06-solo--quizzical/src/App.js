import React from "react";
import Welcome from "./Welcome";
import Quizz from "./Quizz";

// Toggle screen selection between Welcome and App,
function App() {
  const [startScreen, setStartScreen] = React.useState(true)
  const [categorySelected, setCategorySelected] = React.useState()

  function toggleScreen(category) {
    setCategorySelected(category)
    setStartScreen(prevScreen => !prevScreen)
  }

  return (
    <div>
      {startScreen
        ? <Welcome handleClick={toggleScreen}/>
        : <Quizz handleClick={toggleScreen} categorySelected={categorySelected}/>}
    </div>
  );
}


export default App;
