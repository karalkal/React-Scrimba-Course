import React from "react"


export default function Welcome(props) {

    const [categorySelected, setCategorySelected] = React.useState([])

    const categories = [
        ["General", "fa-solid fa-shuffle", 9],
        ["Books", "fa-solid fa-book", 10],
        ["Film", "fa-solid fa-film", 11],
        ["Music", "fa-solid fa-music", 12],
        ["Nature", "fa-solid fa-tree", 17],
        ["Computers", "fa-solid fa-laptop", 18],
        ["Maths", "fa-solid fa-plus-minus", 19],
        ["Gadgets", "fa-solid fa-headphones", 30],
        ["Mythology", "fa-solid fa-mars-and-venus", 20],
        ["Sports", "fa-brands fa-dribbble", 21],
        ["Geography", "fa-solid fa-globe", 22],
        ["History", "fa-solid fa-clock-rotate-left", 23],
        ["Politics", "fa-solid fa-landmark", 24],
        ["Art", "fa-solid fa-palette", 25],
        ["Animals", "fa-solid fa-hippo", 27],
        ["Vehicles", "fa-solid fa-car-side", 28],
    ]

    function selectCategory(cat) {
        console.log(cat)
    }

    return (
        <div className="welcome--container--flex">
            <h1 id="h1--welcome" >Quick Quiz</h1>
            <h2 id="h2--welcome">Test your knowledge</h2>

            <div id="categories--container">
                {categories.map(cat => {
                    const [catName, catIcon, catID] = cat
                    return (<button
                        className="category--buttons"
                        key={cat[1]}
                        onClick={() => setCategorySelected(cat)}>
                        <i className={catIcon}></i>
                        {catName}
                    </button>)
                }
                )}


                <div id="quiz--difficulty">
                    <p>select Difficulty Level:</p>
                    <div id="difficulty--spans">
                        <button id="dificulty--easy">Easy</button>
                        <button id="dificulty--medium">Medium</button>
                        <button id="dificulty--hard">Hard</button>
                    </div>
                </div>

                <div id="quiz--type">
                <p>select Questions Type:</p>
                    <div id="quiz--type--spans">
                        <button id="type--true--false">True / False</button>
                        <button id="type--multichoice">Multi-Choice</button>
                    </div>
                </div>
            </div>

            <button id="goBtn"onClick={() => props.handleClick(categorySelected)}>
                GO!
            </button>
        </div>
    )
}