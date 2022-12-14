// Create object with 2 text props (empty strings initially) and randomImage (default value initially), display it
// When text is entered in inputs, state is updated, text appears on screen
// When submit button is clicked, get new randomImage, display text inputs on top of image

import React, { useState, useEffect } from "react"


export default function Main() {
    const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1ur9b0.jpg" })

    const [allMemes, setAllMemes] = useState()

    /**
    If we fetch data directly, it will change the state of allMemes, therefore React will re-render the component.
    Then it will reach/call fetch again, update state, then rerender component, reach fetch... - infinite loop.
    useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function. 
    Otherwise it should return nothing. 
    Dependancy array will check if state of variable has changed, if not it will not run the function(first param).
    If the array is left empty, function will run only once
    */

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(result => result.json())
            .then(res => setAllMemes(res.data.memes))
    }, [])


    /**
    If we make it an async function, it  automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect, 
    you need to define the function separately inside of the callback function, as seen below:
    */


    // useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])


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




