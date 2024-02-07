import Link from "next/link"

export default function FinalResult({
  currentQuestion,
  questionCount,
  totalQuestions,
  score,
}) {
  let emoji
  if (score === 15) emoji = "🥇"
  if (score >= 9 && score < 12) emoji = "🎉"
  if (score >= 6 && score < 9) emoji = "🤩"
  if (score >= 1 && score < 6) emoji = "🤨"
  if (score === 0) emoji = "🤦‍♂️"

  return (
    <div>
      {!currentQuestion && questionCount === totalQuestions && (
        <div className="grid gap-4 text-center ">
          <div className="rounded-lg">
            <p className="py-2 text-2xl font-bold">Quiz completed!</p>
            <p className="text-xl">
              Your score: {score}/15 {emoji}
            </p>
          </div>

          <div className="flex w-full justify-between pt-6  text-xs uppercase text-slate-300">
            <Link className="hover:text-green-500" href="/">
              ← Home
            </Link>
            <Link className="hover:text-green-500" href="/scoreboard">
              💯 My scoreboard
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
