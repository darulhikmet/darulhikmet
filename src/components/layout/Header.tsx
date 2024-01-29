'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import AuthButtons from '@/components/AuthButtons'

const menuItems = [
  { href: '/filistin', text: 'Filistin' },
  { href: '/boycott', text: 'Boykot' },
  { href: '/guestbook', text: 'Ziyaretci Defteri' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-10 flex min-h-24 cursor-pointer items-center border-b bg-background/90 px-6 text-muted-foreground backdrop-blur">
      <div className="space-x-4">
        {menuItems.map((link, index) => (
          <Link
            className={`hover:text-foreground ${link.href == pathname && 'text-foreground'}`}
            href={link.href}
            key={index}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="ml-auto hidden space-x-4 lg:block">
        <AuthButtons />
      </div>
    </div>
  )
}
