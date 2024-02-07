import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto grid  max-w-md justify-center rounded-md border border-green-400 bg-sky-950 p-4 md:p-6 text-slate-100">
      <main className="text-md grid p-1 gap-2 md:gap-4 text-center font-bold md:p-6 md:text-2xl">
        <div className="border-b border-slate-600 py-2">
          <Link className=" hover:text-green-500" href="/start">
            Start 🔜
          </Link>
        </div>
        <div className="border-b border-slate-600 py-2">
          <Link className=" hover:text-green-500" href="/scoreboard">
            My scoreboard 🔥
          </Link>
        </div>
      </main>
    </div>
  )
}
