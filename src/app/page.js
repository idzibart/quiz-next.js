import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="grid gap-4 p-6 text-center text-3xl ">
        <Link className="hover:text-green-500" href="/start">
          Start
        </Link>
        <Link className="hover:text-green-500" href="/scoreboard">
          My scoreboard
        </Link>
      </main>
    </>
  )
}
