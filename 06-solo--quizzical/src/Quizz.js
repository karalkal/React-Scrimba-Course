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
        // .then(data => setQuestions(data.results))
    }, [])



    function generateQuestionsArr(data) {
        let questionsArr = []

        for (let q of data) {
            console.log("Question is:", q.question, "\nCorrect answer is:", q.correct_answer, "\nIncorrect answer are:", q.incorrect_answers)

            /** create answers Array for each question. 
                Shuffle func creates answer objects with decoded text,
                attaches isSelected and isCorrect properties, returns arr of answers */
            let answersArr = shuffleAnswers(q.correct_answer, q.incorrect_answers)
            console.log(answersArr)

            questionsArr.push(
                {
                    id: nanoid(),
                    text: decode(q.question)

                }
            )
        }

        setQuestions(data)
    }

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