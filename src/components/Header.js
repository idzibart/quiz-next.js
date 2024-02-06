import Link from "next/link"

export default function Header() {
  return (
    <header className="py-10 text-center text-6xl font-thin">
      <h1>
        <Link className="hover:text-green-500" href="/">
          nextQuiz
        </Link>
      </h1>
    </header>
  )
}
