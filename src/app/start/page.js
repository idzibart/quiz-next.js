"use client"
import { useEffect, useState } from "react"
import questionsData from "../../../data/questions.json"
import FinalResult from "@/components/FinalResult"

const Questions = ({ question }) => (
  <div className="p-4 text-center text-2xl">
    <h2>{question.question}</h2>
  </div>
)

const Answers = ({ answers, onAnswerClick }) => (
  <div className="grid w-full cursor-pointer grid-cols-2 gap-3 py-4">
    {answers.map((answer, index) => (
      <p
        className="cursor-pointer rounded-md border border-green-400 p-2 text-center hover:bg-green-500"
        key={index}
        onClick={() => onAnswerClick(answer)}
      >
        {answer}
      </p>
    ))}
  </div>
)

const Start = () => {
  const totalQuestions = 15
  const [usedQuestionIndexes, setUsedQuestionIndexes] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [score, setScore] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)

  const getRandomQuestion = () => {
    if (questionCount < totalQuestions) {
      let randomIndex
      do {
        randomIndex = Math.floor(Math.random() * questionsData.questions.length)
      } while (usedQuestionIndexes.includes(randomIndex))

      setUsedQuestionIndexes([...usedQuestionIndexes, randomIndex])
      setCurrentQuestion(questionsData.questions[randomIndex])
      setQuestionCount(questionCount + 1)
    } else {
      setCurrentQuestion(null)
      saveScoreToLocalStorage(score)
    }
  }

  const handleAnswerClick = (selectedAnswer) => {
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1)
    }
    getRandomQuestion()
  }

  const saveScoreToLocalStorage = (score) => {
    const previousScores = JSON.parse(localStorage.getItem("quizScores")) || []
    const newScore = {
      score: score,
      timestamp: new Date().toLocaleString(),
    }
    const updatedScores = [...previousScores, newScore]
    localStorage.setItem("quizScores", JSON.stringify(updatedScores))
  }

  useEffect(() => {
    getRandomQuestion()
  }, [])

  return (
    <div className="mx-auto flex min-h-fit max-w-xl flex-col items-center justify-center  rounded-md border border-green-400 bg-sky-950 p-4 text-slate-100">
      {currentQuestion && (
        <>
          <Questions
            key={currentQuestion.question}
            question={currentQuestion}
            onAnswerClick={handleAnswerClick}
          />
          <Answers
            answers={currentQuestion.answers}
            onAnswerClick={handleAnswerClick}
          />
          <p>
            Question {questionCount} / {totalQuestions}
          </p>
        </>
      )}
      <FinalResult
        currentQuestion={currentQuestion}
        questionCount={questionCount}
        totalQuestions={totalQuestions}
        score={score}
      />
    </div>
  )
}

export default Start
