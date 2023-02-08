import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Question from "./Question"


export default function Quizz(props) {

    const [questions, setQuestions] = useState()

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(response => response.json())
            .then(data => setQuestions(data.results))
    }, [])


    if (questions) {
        const questionElements = questions.map(q =>
            <Question
                q={q}
                key={nanoid()}
                id={nanoid()}
            />
        )

        return (
            <div className="flex-container--q-and-a">
                {questionElements}
                <button onClick={props.handleClick}>Restart app</button>
            </div>
        )

    }
}