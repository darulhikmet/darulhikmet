import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky top-0 flex min-h-24 cursor-pointer items-center space-x-4 border-b bg-background/90 px-8 text-muted-foreground backdrop-blur">
      <Link className="hover:text-white" href="/filistin">
        Filistin
      </Link>
      <Link className="hover:text-white" href="/hastag-calismalari">
        Hastag Çalışmaları
      </Link>
      <Link className="hover:text-white" href="/boykot">
        Boykot
      </Link>
    </div>
  )
}
