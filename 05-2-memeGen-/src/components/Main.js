import React from "react"
// Normally import and destructure useState hook straight away:
// import React, {useState} from "react"
// then use useState() directly. Here we are using React.useState insted

import memesData from "../memesData"
let allMemes = memesData.data.memes


export default function Main() {

    function getRandomObject() {
        let num = Math.floor(Math.random() * allMemes.length)
        setRandomMemeIndex(num)
        return num
    }


    const [randomMemeIndex, setRandomMemeIndex] = React.useState("Hello!")
    console.log(randomMemeIndex)
    return (
        <main>
            <div id="inputs">
                <input id="input--top" type="text" placeholder="Top Text"></input>
                <input id="input--bottom" type="text" placeholder="Bottom Text"></input>
            </div>
            <button id="generate--button" onClick={getRandomObject}>
                Get a new meme image  🖼
            </button>

            <section id="result">

                {randomMemeIndex}

            </section>
        </main>
    )
}

