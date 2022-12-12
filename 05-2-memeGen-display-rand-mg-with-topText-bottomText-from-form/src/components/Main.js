import React from "react"
// Normally import and destructure useState hook straight away:
// import React, {useState} from "react"
// then use useState() directly. Here we are using React.useState insted

import memesData from "../memesData"

// Create object with prop randomImage (default value initially), display it. 
// when button is clicked, reassign new, random value to it, display it

export default function Main() {

    const [meme, setMeme] = React.useState(
        {
            topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1ur9b0.jpg"
        }
    )
    const [allMemes, setAllMemeImages] = React.useState(memesData.data.memes)

    function getRandomObject() {
        let randomNumber = Math.floor(Math.random() * allMemes.length)
        let randomMeme = allMemes[randomNumber]
        setMeme(prevMeme => ({ ...prevMeme, randomImage: randomMeme.url }))
    }



    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }





    return (
        <main>
            <div id="inputs">
                <input
                    id="input--top"
                    type="text"
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />

                <input
                    id="input--bottom"
                    type="text"
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
            </div>
            <button id="generate--button" onClick={getRandomObject}>
                Get a new meme image  🖼
            </button>


            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

/*  Clean, clearer example

export default function App() {
    const [toBe, setToBe] = React.useState("Yes")

    function handleClick() {
        if (toBe === "Yes") setToBe("No")
        else setToBe("Yes")
    }

    return (
        <>
            <button onClick={handleClick}>To be or not to be</button>
            <h1>{toBe}</h1>
        </>
    )
}
*/

/*  Increment / decrement numbers

export default function App() {
    const [num, setNum] = React.useState(0)
    // NEVER use count++ (which is count=count+1). The setter sets the new value, we don't overwrite it 
    
    function incerement() {
        setNum(prevNum => prevNum + 1)
        // setNum(num + 1) // same result as above but bad practice, use when you don't need the previous value of state
        // to determine the new value
    }
    function decerement() {
        setNum(prevNum => prevNum - 1)
    }

    return (
        <div>
            <button onClick={decerement}>–</button>
            <div>
                <h1>{num}</h1>
            </div>
            <button onClick={incerement}>+</button>
        </div>
    )
}
*/

/* Flip Values example with ternary operator

export default function App() {    
     const [isGoingOut, setisGoingOut] = React.useState(true)
    
     function flipValue(){
         setisGoingOut(isGoingOut => !isGoingOut)        
     }
     
     return (
         <div>
             <h1>Do I feel like going out tonight?</h1>
             <div onClick={flipValue}>
                <h1> {isGoingOut === true ? "Yes": "No"} </h1>
             </div>
         </div>
     )
 } 
*/

