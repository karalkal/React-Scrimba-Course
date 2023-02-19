import React from "react"


export default function Welcome(props) {

    const categories = [
        ["General", 9],
        ["Books", 10],
        ["Film", 11],
        ["Music", 12],
        ["Science/Nature", 17],
        ["Science/Computers", 18],
        ["Science/Maths", 19],
        ["Science/Gadgets", 30],
        ["Mythology", 20],
        ["Sports", 21],
        ["Geography", 22],
        ["History", 23],
        ["Politics", 24],
        ["Art", 25],
        ["Animals", 27],
        ["Vehicles", 28],

    ]

    return (
        <div className="welcome--container--flex">
            <h1 id="h1--welcome" >Quizzical</h1>
            <h2 id="h2--welcome"> Test your knowledge</h2>

            <div id="categories--container">
                {categories.map(cat =>
                    <button key={cat[1]} onClick={() => props.handleClick(cat[1])}>{cat[0]}</button>
                )}
            </div>

        </div>
    )
}