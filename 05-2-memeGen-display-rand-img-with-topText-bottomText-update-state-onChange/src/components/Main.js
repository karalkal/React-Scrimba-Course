import React from "react"
// Normally import and destructure useState hook straight away:
// import React, {useState} from "react"
// then use useState() directly. Here we are using React.useState insted

import memesData from "../memesData"

// Create object with 2 text props (empty strings initially) and randomImage (default value initially), display it
// When text is entered in inputs, state is updated, text appears on screen
// When submit button is clicked, get new randomImage, display text inputs on top of image

export default function Main() {

    const [meme, setMeme] = React.useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1ur9b0.jpg" })
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




