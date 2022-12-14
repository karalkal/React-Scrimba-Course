export default function Header() {
  return (
    <header>
      <div id="header--left">

        {/* Import assets in JavaScript files instead of using static - here I am just testing. */}
        <img src="logo192.png" alt="react logo" id="header-logo-img" />
        <h2 id="header-logo-text">ReactFacts</h2>
      </div>

      <div id="header--right">
        <h3>React Course - Project 1</h3>
      </div>
    </header>

  )
}