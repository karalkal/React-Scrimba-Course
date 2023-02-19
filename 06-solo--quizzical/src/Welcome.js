import React from "react"


export default function Welcome(props) {

    const categories = [
        ["General", "fa-solid fa-shuffle", 9],
        ["Books", "fa-solid fa-book", 10],
        ["Film", "fa-solid fa-film", 11],
        ["Music", "fa-solid fa-music", 12],
        ["Science/Nature", "fa-solid fa-tree", 17],
        ["Science/Computers", "fa-solid fa-laptop", 18],
        ["Science/Maths", "fa-solid fa-plus-minus", 19],
        ["Science/Gadgets", "fa-solid fa-headphones", 30],
        ["Mythology", "fa-solid fa-mars-and-venus", 20],
        ["Sports", "fa-solid fa-futbol", 21],
        ["Geography", "fa-solid fa-globe", 22],
        ["History", "fa-solid fa-ankh", 23],
        ["Politics", "fa-solid fa-landmark", 24],
        ["Art", "fa-solid fa-palette", 25],
        ["Animals", "fa-solid fa-hippo", 27],
        ["Vehicles", "fa-solid fa-car-side", 28],

    ]

    return (
        <div className="welcome--container--flex">
            <h1 id="h1--welcome" >Quizzical</h1>
            <h2 id="h2--welcome"> Test your knowledge</h2>

            <div id="categories--container">
                {categories.map(cat =>
                    <button
                        class="category--buttons"
                        key={cat[1]}
                        onClick={() => props.handleClick(cat[2])}>
                        <i class={cat[1]}></i>
                        {cat[0]}
                    </button>
                )}
            </div>

        </div>
    )
}