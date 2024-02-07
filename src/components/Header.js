import Link from "next/link"

export default function Header() {
  return (
    <header className="p-4 text-center text-4xl font-thin md:py-10 md:text-6xl">
      <h1>
        <Link className="hover:text-green-500" href="/">
          nextQuiz
        </Link>
      </h1>
    </header>
  )
}
