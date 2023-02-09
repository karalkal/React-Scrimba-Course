import { useState, useEffect } from "react"
import { decode } from 'html-entities';
import { nanoid } from "nanoid"


export default function Question(props) {
    let question = decode(props.q.question)

    let correctAnswer = props.q.correct_answer
    let incorrectAnswers = props.q.incorrect_answers
    let initialAnswersArr = shuffle(correctAnswer, incorrectAnswers)
    let [answers, setAnswers] = useState(initialAnswersArr)
    //shuffle not only shuffles answers but attaches isSelected and isCorrect attributes


    return (
        <div>
            <h2 className="question">{question}</h2>
            <div className="answers--div">

                {answers.map(answer =>
                    <span
                        onClick={() => selectAnswer(answer.id)}
                        className={answer.isSelected
                            ? "answer--span selected"
                            : "answer--span not--selected"}
                    >
                        {decode(answer.text)}
                    </span>
                )}

            </div>
            <hr />
        </div>
    )

    function selectAnswer(selectedIndex) {
        setAnswers(prevArr => prevArr.map(answer => {
            return answer.id === selectedIndex
                ? {
                    ...answer,
                    isSelected: true
                }
                : {
                    ...answer,
                    isSelected: false
                }
        }))
    }
}


function shuffle(correctAnswerText, incorrectAnswersTexts) {

    let answersAsObjects = []

    let correctAnswer = {
        text: correctAnswerText,
        isSelected: false,
        isCorrect: true,
        id: nanoid()
    }
    answersAsObjects.push(correctAnswer)
    
    for (let a of incorrectAnswersTexts) {
        let answerObj = {
            text: a,
            isSelected: false,
            isCorrect: false,
            id: nanoid()
        }
        answersAsObjects.push(answerObj)
    }
    for (let i = answersAsObjects.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answersAsObjects[i], answersAsObjects[j]] = [answersAsObjects[j], answersAsObjects[i]];
    }

    return answersAsObjects
}