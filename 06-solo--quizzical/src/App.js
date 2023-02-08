import React from "react";
import Welcome from "./Welcome";
import Quizz from "./Quizz";

function App() {
  const [welcomeDisplayed, setWelcomeDisplayed] = React.useState(true)
  function toggleScreen() {
    setWelcomeDisplayed(prevScreen => !prevScreen)
    console.log(welcomeDisplayed)
  }

  return (
    <div>
      {welcomeDisplayed
        ? <Welcome handleClick={toggleScreen} />
        : <Quizz handleClick={toggleScreen} />}
    </div>
  );
}


export default App;
