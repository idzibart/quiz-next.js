"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Scoreboard() {
  const [score, setScore] = useState([])
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores"))
    setScore(storedScores)
  }, [])

  const handleDeleteScore = (index) => {
    const updatedScores = [...score]
    updatedScores.splice(index, 1)
    setScore(updatedScores)
    localStorage.setItem("quizScores", JSON.stringify(updatedScores))
  }

  let sortedByScore = [] // Deklaracja zmiennej sortedByScore poza return

  if (Array.isArray(score)) {
    // Sprawdzenie, czy score jest tablicą przed próbą sortowania
    sortedByScore = [...score].sort(
      (a, b) => b.score - a.score // Od najwyższego do najniższego
    )
  }

  return (
    <div className="mx-auto max-w-md rounded-md border border-green-400 bg-sky-950 p-6 text-slate-100">
      <table className="w-full text-left ">
        <thead>
          <tr>
            <th className="text-sm md:px-4 md:py-2 md:text-lg">Score</th>
            <th className="text-sm md:px-4 md:py-2 md:text-lg">Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedByScore?.map((score, index) => (
            <tr key={index} className=" border-b border-slate-600 text-sm">
              <td className="px-2 py-1 md:px-4 md:py-2 ">
                <span className="text-md text-green-400 sm:text-lg">
                  {score.score}
                </span>
                /15
              </td>
              <td className="text-md px-2 py-1 text-green-400 sm:text-base md:px-4 md:py-2">
                {score.date}
                <span className="text-xs text-slate-50"> {score.time}</span>
              </td>
              <td className="text-xs px-2 py-1 text-green-400 sm:text-sm md:px-4 md:py-2">
                <button onClick={() => handleDeleteScore(index)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-center text-xs uppercase text-slate-300">
        ← <a href="/">Home</a>
      </p>
    </div>
  )
}
