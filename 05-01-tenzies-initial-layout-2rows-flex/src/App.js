function App() {
  return (
    <main>
      <h1>
        Tenzies
      </h1>
      <h4>Roll until all dice are the same. </h4>
      <h4>Click each die to freeze it </h4>
      <h4>at its current value between rolls.</h4>

      <div className="boxes--container">
        <div className="row">
          <div className="square--green"><p>0</p></div>
          <div className="square--white"><p>1</p></div>
          <div className="square--green"><p>2</p></div>
          <div className="square--white"><p>3</p></div>
          <div className="square--green"><p>4</p></div>
        </div>
        <div className="row">
          <div className="square--white"><p>5</p></div>
          <div className="square--green"><p>6</p></div>
          <div className="square--white"><p>7</p></div>
          <div className="square--green"><p>8</p></div>
          <div className="square--white"><p>9</p></div>
        </div>
      </div>

      <button>Roll</button>
    </main>
  );
}

export default App;
