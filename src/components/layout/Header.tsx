'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import AuthButtons from '@/components/AuthButtons'

import { useSidebarStore } from '@/stores/useSidebarStore'

import { cn } from '@/lib/utils'

const menuItems = [
  { href: '/filistin', text: 'Filistin' },
  { href: '/boycott', text: 'Boykot' },
  { href: '/guestbook', text: 'Ziyaretci Defteri' }
]

export default function Header() {
  const { isOpen, toggle } = useSidebarStore()

  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-10 flex min-h-20 cursor-pointer items-center border-b bg-background/90 px-4 text-muted-foreground backdrop-blur md:min-h-24 md:px-6">
      <div className="space-x-4">
        {menuItems.map((link, index) => (
          <Link
            className={cn(
              'hover:text-foreground',
              link.href === pathname && 'text-foreground'
            )}
            href={link.href}
            key={index}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div
        className="ml-auto block space-x-4 text-foreground md:hidden"
        onClick={() => toggle()}
      >
        {isOpen ? <X /> : <Menu />}
      </div>
      <div className="ml-auto hidden space-x-4 lg:block">
        <AuthButtons />
      </div>
    </div>
  )
}
