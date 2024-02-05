import Link from "next/link"

export default function Header() {
  return (
    <header className="py-10 text-center text-6xl font-thin">
      <Link className="hover:text-green-500" href="/">
        <h1>nextQuiz</h1>
      </Link>
    </header>
  )
}
