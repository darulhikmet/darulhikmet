import AuthButtons from '@/components/AuthButtons'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex min-h-24 cursor-pointer items-center border-b bg-background/90 px-6 text-muted-foreground backdrop-blur">
      <div className="space-x-4">
        <Link className="hover:text-foreground" href="/filistin">
          Filistin
        </Link>
        <Link className="hover:text-foreground" href="/hastag-calismalari">
          Hastag Çalışmaları
        </Link>
        <Link className="hover:text-foreground" href="/boycott">
          Boykot
        </Link>
      </div>
      <div className="ml-auto space-x-4">
        <AuthButtons />
      </div>
    </div>
  )
}
