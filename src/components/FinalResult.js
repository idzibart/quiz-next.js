import Link from "next/link"

export default function FinalResult({
  currentQuestion,
  questionCount,
  totalQuestions,
  score,
}) {
  return (
    <>
      {!currentQuestion && questionCount === totalQuestions && (
        <div className="grid gap-y-4 text-center">
          <p className="text-2xl">Quiz completed! Your score: {score}/15</p>
          <div className="flex justify-center gap-8">
            <Link className="hover:text-green-500" href="/">
              Home
            </Link>
            <Link className="hover:text-green-500" href="/scoreboard">
              My scoreboard
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
