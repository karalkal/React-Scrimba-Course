import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { decode } from 'html-entities'; // replaces html entities chars

import Question from "./Question"


export default function Quizz(props) {

    const [questions, setQuestions] = useState()

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(response => response.json())
            .then(data => generateQuestionsArr(data.results))
    }, [])


    function generateQuestionsArr(data) {
        let questionsArr = []

        for (let q of data) {
            /** create answers Array for each question. 
                Shuffle func creates answer objects with decoded text,
                attaches isSelected and isCorrect properties, returns arr of answers */
            // const [answersArr, setAnswersArr] = useState(shuffleAnswers(q.correct_answer, q.incorrect_answers))
            const answersArr = shuffleAnswers(q.correct_answer, q.incorrect_answers)

            questionsArr.push(
                {
                    id: nanoid(),
                    text: decode(q.question),
                    answersArr: answersArr,
                }
            )
        }
        // N.B. Set questions state with the newly created array, not the data from API! 
        setQuestions(questionsArr)
    }
    /*
        function selectAnswer(answerID) {
            console.log("State before selection:", questions)
            setDices(prevArr => prevArr.map(q => {
                return q.id === id
                    ? {
                        ...dice,
                        isHeld: !dice.isHeld  // flip value
                    }
                    : qu
            }))
        }
            onClick = {() => selectAnswer(answer.id)
        }
    }
    */


    function shuffleAnswers(correctAnswerText, incorrectAnswersTexts) {
        let answersAsObjects = []

        let correctAnswer = {
            id: nanoid(),
            text: decode(correctAnswerText),        // decode removes html entities chars
            isSelected: false,
            isCorrect: true,
        }
        answersAsObjects.push(correctAnswer)

        for (let a of incorrectAnswersTexts) {
            let answerObj = {
                id: nanoid(),
                text: decode(a),
                isSelected: false,
                isCorrect: false,
            }
            answersAsObjects.push(answerObj)
        }
        for (let i = answersAsObjects.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [answersAsObjects[i], answersAsObjects[j]] = [answersAsObjects[j], answersAsObjects[i]];
        }

        return answersAsObjects
    }

    /*
        function selectAnswer(selectedIndex) {
            setAnswers(prevArr => prevArr.map(answer => {
                return answer.id === selectedIndex
                    ? {
                        ...answer,
                        isSelected: true,
                    }
                    : {
                        ...answer,
                        isSelected: false
                    }
            }))
        }
    */


    if (questions) {
        console.log(questions[0])


        const questionElements = questions.map(q => <Question question={q} key={q.id} />)

        return (
            <div className="flex-container--q-and-a">
                {questionElements}
                <button onClick={checkAnswers}>Check answers</button>
                <button onClick={props.handleClick}>Restart app</button>
            </div>
        )

        function checkAnswers() {
            let score = 0
            console.log(questions)
        }


    }
}