"use client"
import { useEffect, useState } from "react"

export default function Scoreboard() {
  const [score, setScore] = useState([])
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores"))
    setScore(storedScores)
  }, [])

  // by score sorting
  // const sortedByScore = [...score].sort((a, b) => b.score - a.score);

  const sortedByDate = [...score].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  )

  return (
    <div className="mx-auto grid max-w-xl justify-center rounded-md border border-green-400 bg-sky-950 p-4 text-slate-100">
      <ol className="grid list-none justify-center ">
        {sortedByDate?.map((score, index) => (
          <li key={index}>
            score: {score.score}/15 date: {score.timestamp}
          </li>
        ))}
      </ol>
    </div>
  )
}
