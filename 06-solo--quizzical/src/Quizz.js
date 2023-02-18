import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { decode } from 'html-entities'; // replaces html entities chars

import Question from "./Question"
import Result from "./Result"


export default function Quizz(props) {

    const [questions, setQuestions] = useState()
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [score, setScore] = useState(0)

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
                    isAnswered: false
                }
            )
        }
        // N.B. Set questions state with the newly created array, not the data from API! 
        setQuestions(questionsArr)
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


    function selectAnswer(questionID, answerID) {

        setQuestions(prevArr => prevArr.map(question => {
            if (question.id !== questionID) { // if not the selected question
                return question
            } else {
                let newAnswersArr = question.answersArr.map(answer =>
                    answer.id === answerID
                        ? {
                            ...answer,
                            isSelected: true
                        }
                        : {
                            ...answer,
                            isSelected: false
                        }
                )

                return {
                    ...question,
                    answersArr: newAnswersArr,
                    isAnswered: true
                }
            }
        }))
    }

    // ... AND finally - render page
    if (questions) {

        // If rendering QUIZ
        if (!hasSubmitted) {
            const questionElements = questions.map(q =>
                <Question
                    question={q}
                    key={q.id}
                    selectAnswer={selectAnswer} />) // will get back question and answer IDs

            return (
                <div className="flex-container--q-and-a">
                    {questionElements}
                    <div className="btn--and--result">
                        <button onClick={checkAnswers}>Check answers</button>
                        <button onClick={props.handleClick}>Restart app</button>
                    </div>
                </div>
            )
        }

        // If rendering RESULTS
        else {
            const questionElements = questions.map(q =>
                <Result
                    score={score}
                    question={q}
                    key={q.id} />)

            return (
                <div className="flex-container--q-and-a">
                    {questionElements}
                    <div className="btn--and--result">
                        <div id="result">Correct: <b>{score} / {questions.length}</b></div>
                        <button onClick={props.handleClick}>Restart app</button>
                    </div>
                </div>
            )
        }
    }

    // This function will change state of hasSubmitted, therefore will cause rerendering, 
    // then if hasSubmitted == true will go to results page, not very elegant
    function checkAnswers() {
        setHasSubmitted(true)
        for (let q of questions) {
            let correctAnswerIndex = q.answersArr.indexOf(q.answersArr.find(a => a.isCorrect))
            let givenAnswerIndex = q.answersArr.indexOf(q.answersArr.find(a => a.isSelected))
            if (correctAnswerIndex === givenAnswerIndex) {
                setScore(prevValue => prevValue + 1)
            }
        }
        return score
    }
}
