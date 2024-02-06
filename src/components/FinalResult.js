import Link from "next/link"

export default function FinalResult({
  currentQuestion,
  questionCount,
  totalQuestions,
  score,
}) {
  return (
    <div>
      {!currentQuestion && questionCount === totalQuestions && (
        <div className="grid gap-y-10 text-center">
          <p className="text-2xl">
            Quiz completed! <br />
            Your score: {score}/15
          </p>
          <div>
            <div className="flex justify-center gap-8">
              <Link className="hover:text-green-500" href="/">
                Home
              </Link>
              <Link className="hover:text-green-500" href="/scoreboard">
                My scoreboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
