"use client"
import { useEffect, useState } from "react"

export default function Scoreboard() {
  const [score, setScore] = useState([])
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores"))
    setScore(storedScores)
  }, [])

  return (
    <div>
      {score?.map((score, index) => (
        <li key={index}>score: {score.score}</li>
      ))}
    </div>
  )
}
