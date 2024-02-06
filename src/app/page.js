import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto grid max-w-xl justify-center rounded-md border border-green-400 bg-sky-950 p-4 text-slate-100">
      <main className="grid  gap-4  p-6 text-center text-3xl ">
        <Link className="hover:text-green-500" href="/start">
          Start
        </Link>
        <Link className="hover:text-green-500" href="/scoreboard">
          My scoreboard
        </Link>
      </main>
    </div>
  )
}
