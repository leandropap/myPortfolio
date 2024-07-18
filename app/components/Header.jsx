import Link from "next/link"

export default function Header() {
    return (
        <header className="flex-auto text-center">
            <p className="text-3xl">myPortfolio</p>
            <div className="text-xl">
                <Link href="/" className="hover:underline"> Home </Link>
                <Link href="/about" className="hover:underline">About </Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
            </div>
        </header >
    )
}